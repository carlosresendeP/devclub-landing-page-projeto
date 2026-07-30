window.DevClub = window.DevClub || {};

/**
 * Engine de vídeo controlado por scroll do Hero.
 *
 * Técnica de camadas (poster sólido -> video -> canvas com cache de frames) e o
 * lerp de suavização vêm de components/inteligenci-scroll.md (projeto NovaAI).
 * O cálculo de progresso é DELIBERADAMENTE escopado apenas ao próprio
 * hero-scroll-wrapper (não ao scroll total da página), conforme a fórmula exigida
 * em .agent/prompts/devclub-prompt-completo-design-system-v2.md:
 *
 *   start = hero.offsetTop
 *   end   = start + hero.offsetHeight - window.innerHeight
 *   progress = clamp((scrollY - start) / (end - start), 0, 1)
 *   smoothed += (progress - smoothed) * 0.12
 */
window.DevClub.HeroScrollVideo = class HeroScrollVideo {
  constructor(wrapperEl, options = {}) {
    this.wrapper = wrapperEl;
    this.videoSrc =
      options.videoSrc ||
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260729_102822_0e6c87e8-c141-4744-bf32-ad30db296371.mp4';

    this.stage = wrapperEl.querySelector('.hero-stage');
    this.video = wrapperEl.querySelector('#hero-video');
    this.canvas = wrapperEl.querySelector('#hero-canvas');
    this.particles = wrapperEl.querySelector('.hero-particles');
    this.heroCopy = wrapperEl.querySelector('[data-hero-copy]');
    this.heroActs = wrapperEl.querySelector('[data-hero-acts]');
    this.actEls = Array.from(wrapperEl.querySelectorAll('.hero-act'));

    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;

    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.smoothed = 0;
    this.raw = 0;
    this.running = false;
    this.rafId = null;

    this.frames = [];
    this.framesReady = false;
    this.lastDrawnIndex = -1;
    this.lastVideoSeekTarget = -1;

    this._onResize = this._debounce(() => this._resizeCanvas(), 150);
  }

  init() {
    if (this.reducedMotion || !this.video || !this.canvas) {
      this._applyStaticState();
      return;
    }

    this._resizeCanvas();
    window.addEventListener('resize', this._onResize);

    this._setupIntersectionGate();
    this._loadVisibleVideo();
    this._loop = this._loop.bind(this);
    this._start();
  }

  _applyStaticState() {
    // Sem scrub: conteúdo principal sempre visível, sem vídeo/canvas/partículas.
    if (this.heroCopy) this.heroCopy.style.opacity = '1';
    if (this.heroActs) this.heroActs.style.opacity = '0';
  }

  _setupIntersectionGate() {
    if (!('IntersectionObserver' in window)) return;
    this.io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) this._start();
          else this._stop();
        });
      },
      { threshold: 0 }
    );
    this.io.observe(this.wrapper);
  }

  _start() {
    if (this.running) return;
    this.running = true;
    this.rafId = requestAnimationFrame(this._loop);
  }

  _stop() {
    this.running = false;
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  _loadVisibleVideo() {
    const video = this.video;
    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.src = this.videoSrc;

    video.addEventListener(
      'loadeddata',
      () => {
        video.classList.add('is-visible');
        window.setTimeout(() => this._extractFrames(), 300);
      },
      { once: true }
    );

    video.addEventListener('error', () => {
      // Falha total ao carregar: mantém overlays + fundo sólido, sem travar a página.
      video.classList.remove('is-visible');
    });

    // Alguns navegadores exigem play() (mesmo pausado/mutado) para popular o primeiro frame.
    video.play().catch(() => {});
    video.pause();
  }

  async _extractFrames() {
    try {
      const offscreen = document.createElement('video');
      offscreen.muted = true;
      offscreen.playsInline = true;
      offscreen.preload = 'auto';
      offscreen.style.position = 'fixed';
      offscreen.style.opacity = '0';
      offscreen.style.pointerEvents = 'none';
      offscreen.style.width = '1px';
      offscreen.style.height = '1px';
      offscreen.src = this.videoSrc;
      document.body.appendChild(offscreen);

      await new Promise((resolve, reject) => {
        offscreen.addEventListener('loadedmetadata', resolve, { once: true });
        offscreen.addEventListener('error', () => reject(new Error('offscreen video failed')), {
          once: true,
        });
      });

      const duration = offscreen.duration;
      if (!duration || !isFinite(duration)) throw new Error('invalid duration');

      const frameCount = Math.min(72, Math.max(24, Math.round(duration * 12)));
      const maxWidth = 960;
      const scale = Math.min(1, maxWidth / (offscreen.videoWidth || maxWidth));
      const scratch = document.createElement('canvas');
      scratch.width = Math.round((offscreen.videoWidth || maxWidth) * scale);
      scratch.height = Math.round((offscreen.videoHeight || maxWidth * 0.5625) * scale);
      const sctx = scratch.getContext('2d');

      const frames = [];
      for (let i = 0; i < frameCount; i += 1) {
        const t = (i / (frameCount - 1)) * Math.max(duration - 0.05, 0);
        await this._seekTo(offscreen, t);
        sctx.drawImage(offscreen, 0, 0, scratch.width, scratch.height);
        // eslint-disable-next-line no-await-in-loop
        const bitmap = await createImageBitmap(scratch);
        frames.push(bitmap);
      }

      this.frames = frames;
      this.framesReady = true;
      this.canvas.classList.add('is-visible');
      window.setTimeout(() => this.video.classList.remove('is-visible'), 650);

      document.body.removeChild(offscreen);
    } catch (err) {
      // Cache de frames falhou (ex.: CORS do CDN, rede lenta): segue no fallback
      // de seek direto no <video> visível, sem quebrar a experiência.
      this.framesReady = false;
    }
  }

  _seekTo(videoEl, time) {
    // Se o currentTime já está (quase) no alvo, setar o mesmo valor não dispara
    // 'seeked' em vários navegadores — resolve direto pra não travar a extração.
    if (Math.abs(videoEl.currentTime - time) < 0.01) return Promise.resolve();

    const seek = new Promise((resolve) => {
      const onSeeked = () => {
        videoEl.removeEventListener('seeked', onSeeked);
        resolve();
      };
      videoEl.addEventListener('seeked', onSeeked);
      videoEl.currentTime = time;
    });

    // Rede lenta / CDN instável não pode travar a extração indefinidamente:
    // depois de 2s desiste desse frame e segue (o fallback de seek direto cobre o resto).
    const timeout = new Promise((resolve) => window.setTimeout(resolve, 2000));

    return Promise.race([seek, timeout]);
  }

  _resizeCanvas() {
    if (!this.canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = this.stage.getBoundingClientRect();
    this.canvas.width = Math.round(rect.width * dpr);
    this.canvas.height = Math.round(rect.height * dpr);
    this.canvas.style.width = `${rect.width}px`;
    this.canvas.style.height = `${rect.height}px`;
    if (this.ctx) this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this._stageW = rect.width;
    this._stageH = rect.height;
  }

  _drawCover(source, sw, sh) {
    if (!this.ctx || !sw || !sh) return;
    const cw = this._stageW;
    const ch = this._stageH;
    const scale = Math.max(cw / sw, ch / sh);
    const dw = sw * scale;
    const dh = sh * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;
    this.ctx.clearRect(0, 0, cw, ch);
    this.ctx.drawImage(source, dx, dy, dw, dh);
  }

  _computeProgress() {
    const start = this.wrapper.offsetTop;
    const end = start + this.wrapper.offsetHeight - window.innerHeight;
    if (end <= start) return 0;
    const p = (window.scrollY - start) / (end - start);
    return Math.min(1, Math.max(0, p));
  }

  _smoothstep(p) {
    return p * p * (3 - 2 * p);
  }

  _updateActs(p) {
    // Sequencial, sem crossfade: a copy principal esmaece até sumir de vez,
    // só então as frases dos atos (centralizadas) aparecem uma a uma, e só
    // depois delas terem sumido de vez a copy principal volta.
    const mainOutStart = 0.2;
    const mainOutEnd = 0.28;
    const actsInStart = 0.3;
    const actsInEnd = 0.36;
    const actsOutStart = 0.62;
    const actsOutEnd = 0.68;
    const mainInStart = 0.7;
    const mainInEnd = 0.78;

    let mainOpacity;
    if (p <= mainOutStart) mainOpacity = 1;
    else if (p < mainOutEnd) {
      mainOpacity = 1 - this._smoothstep((p - mainOutStart) / (mainOutEnd - mainOutStart));
    } else if (p < mainInStart) mainOpacity = 0;
    else if (p < mainInEnd) {
      mainOpacity = this._smoothstep((p - mainInStart) / (mainInEnd - mainInStart));
    } else mainOpacity = 1;

    let actsOpacity;
    if (p <= actsInStart || p >= actsOutEnd) actsOpacity = 0;
    else if (p < actsInEnd) {
      actsOpacity = this._smoothstep((p - actsInStart) / (actsInEnd - actsInStart));
    } else if (p < actsOutStart) actsOpacity = 1;
    else {
      actsOpacity = 1 - this._smoothstep((p - actsOutStart) / (actsOutEnd - actsOutStart));
    }

    if (this.heroCopy) this.heroCopy.style.opacity = String(mainOpacity);
    if (this.heroActs) this.heroActs.style.opacity = String(actsOpacity);

    if (this.actEls.length && p > actsInStart && p < actsOutEnd) {
      const span = actsOutEnd - actsInStart;
      const local = Math.min(0.999, Math.max(0, (p - actsInStart) / span));
      const idx = Math.floor(local * this.actEls.length);
      this.actEls.forEach((el, i) => el.classList.toggle('is-active', i === idx));
    } else {
      this.actEls.forEach((el) => el.classList.remove('is-active'));
    }

    if (this.particles) {
      const particlesOpacity = Math.max(0.15, 1 - this._smoothstep(Math.min(1, p / 0.6)) * 0.85);
      this.particles.style.opacity = String(particlesOpacity);
    }
  }

  _loop() {
    if (!this.running) return;

    this.raw = this._computeProgress();
    this.smoothed += (this.raw - this.smoothed) * 0.055;

    if (this.framesReady && this.frames.length) {
      const idx = Math.round(this.smoothed * (this.frames.length - 1));
      if (idx !== this.lastDrawnIndex) {
        const bitmap = this.frames[idx];
        this._drawCover(bitmap, bitmap.width, bitmap.height);
        this.lastDrawnIndex = idx;
      }
    } else if (this.video.readyState >= 2 && this.video.duration) {
      const target = this.smoothed * Math.max(this.video.duration - 0.05, 0);
      if (Math.abs(target - this.lastVideoSeekTarget) > 0.04) {
        this.video.currentTime = target;
        this.lastVideoSeekTarget = target;
      }
    }

    this._updateActs(this.smoothed);

    this.rafId = requestAnimationFrame(this._loop);
  }

  _debounce(fn, wait) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  }
};
