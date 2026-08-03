(function () {
  'use strict';

  var VIDEO_URL =
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260729_102822_0e6c87e8-c141-4744-bf32-ad30db296371.mp4';

  /* ============== Reveal on scroll ============== */
  function initReveal() {
    var targets = document.querySelectorAll('.reveal');
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    targets.forEach(function (el) {
      var delay = el.getAttribute('data-delay') || '0';
      el.style.transitionDelay = delay + 'ms';
    });

    if (!('IntersectionObserver' in window) || reducedMotion) {
      targets.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ============== Scroll-scrubbed video background ==============
     progress = scrollY / (scrollHeight - innerHeight), clamped 0-1
     smoothed += (target - smoothed) * 0.12 per rAF
     Frame cache (up to 90 frames, max width 960px) is the preferred
     smooth path; falls back to direct <video> seeking when unavailable. */
  function ScrollVideo() {
    this.poster = document.querySelector('.scroll-video-poster');
    this.video = document.getElementById('hero-video');
    this.canvas = document.getElementById('hero-canvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;

    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.smoothed = 0;
    this.raw = 0;
    this.rafId = null;

    this.frames = [];
    this.framesReady = false;
    this.lastDrawnIndex = -1;
    this.lastVideoSeekTarget = -1;

    this._onResize = this._debounce(this._resizeCanvas.bind(this), 150);
  }

  ScrollVideo.prototype.init = function () {
    if (this.reducedMotion || !this.video || !this.canvas) {
      if (this.poster) this.poster.classList.add('is-visible');
      return;
    }

    this._resizeCanvas();
    window.addEventListener('resize', this._onResize);

    this._loadVisibleVideo();
    this._loop = this._loop.bind(this);
    this.rafId = requestAnimationFrame(this._loop);
  };

  ScrollVideo.prototype._loadVisibleVideo = function () {
    var self = this;
    var video = this.video;
    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.src = VIDEO_URL;

    video.addEventListener(
      'loadeddata',
      function () {
        video.classList.add('is-visible');
        if (self.poster) self.poster.classList.add('is-hidden');
        window.setTimeout(function () {
          self._extractFrames();
        }, 300);
      },
      { once: true }
    );

    video.addEventListener('error', function () {
      video.classList.remove('is-visible');
    });

    video.play().catch(function () {});
    video.pause();
  };

  ScrollVideo.prototype._extractFrames = function () {
    var self = this;
    var offscreen = document.createElement('video');
    offscreen.muted = true;
    offscreen.playsInline = true;
    offscreen.preload = 'auto';
    offscreen.style.position = 'fixed';
    offscreen.style.opacity = '0';
    offscreen.style.pointerEvents = 'none';
    offscreen.style.width = '1px';
    offscreen.style.height = '1px';
    offscreen.src = VIDEO_URL;
    document.body.appendChild(offscreen);

    new Promise(function (resolve, reject) {
      offscreen.addEventListener('loadedmetadata', resolve, { once: true });
      offscreen.addEventListener('error', function () {
        reject(new Error('offscreen video failed'));
      }, { once: true });
    })
      .then(function () {
        var duration = offscreen.duration;
        if (!duration || !isFinite(duration)) throw new Error('invalid duration');

        var frameCount = Math.min(90, Math.max(24, Math.round(duration * 12)));
        var maxWidth = 960;
        var scale = Math.min(1, maxWidth / (offscreen.videoWidth || maxWidth));
        var scratch = document.createElement('canvas');
        scratch.width = Math.round((offscreen.videoWidth || maxWidth) * scale);
        scratch.height = Math.round((offscreen.videoHeight || maxWidth * 0.5625) * scale);
        var sctx = scratch.getContext('2d');

        var frames = [];
        var i = 0;

        function nextFrame() {
          if (i >= frameCount) return Promise.resolve();
          var t = (i / (frameCount - 1)) * Math.max(duration - 0.05, 0);
          return self._seekTo(offscreen, t).then(function () {
            sctx.drawImage(offscreen, 0, 0, scratch.width, scratch.height);
            return createImageBitmap(scratch).then(function (bitmap) {
              frames.push(bitmap);
              i += 1;
              return nextFrame();
            });
          });
        }

        return nextFrame().then(function () {
          return frames;
        });
      })
      .then(function (frames) {
        self.frames = frames;
        self.framesReady = true;
        self.canvas.classList.add('is-visible');
        window.setTimeout(function () {
          self.video.classList.remove('is-visible');
        }, 650);
        document.body.removeChild(offscreen);
      })
      .catch(function () {
        self.framesReady = false;
        if (offscreen.parentNode) document.body.removeChild(offscreen);
      });
  };

  ScrollVideo.prototype._seekTo = function (videoEl, time) {
    if (Math.abs(videoEl.currentTime - time) < 0.01) return Promise.resolve();

    var seek = new Promise(function (resolve) {
      function onSeeked() {
        videoEl.removeEventListener('seeked', onSeeked);
        resolve();
      }
      videoEl.addEventListener('seeked', onSeeked);
      videoEl.currentTime = time;
    });

    var timeout = new Promise(function (resolve) {
      window.setTimeout(resolve, 2000);
    });

    return Promise.race([seek, timeout]);
  };

  ScrollVideo.prototype._resizeCanvas = function () {
    if (!this.canvas) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var rect = this.canvas.getBoundingClientRect();
    this.canvas.width = Math.round(rect.width * dpr);
    this.canvas.height = Math.round(rect.height * dpr);
    if (this.ctx) this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this._viewW = rect.width;
    this._viewH = rect.height;
  };

  ScrollVideo.prototype._drawCover = function (source, sw, sh) {
    if (!this.ctx || !sw || !sh) return;
    var cw = this._viewW;
    var ch = this._viewH;
    var scale = Math.max(cw / sw, ch / sh);
    var dw = sw * scale;
    var dh = sh * scale;
    var dx = (cw - dw) / 2;
    var dy = (ch - dh) / 2;
    this.ctx.clearRect(0, 0, cw, ch);
    this.ctx.drawImage(source, dx, dy, dw, dh);
  };

  ScrollVideo.prototype._computeProgress = function () {
    var scrollHeight = document.documentElement.scrollHeight;
    var innerHeight = window.innerHeight;
    var denom = scrollHeight - innerHeight;
    if (denom <= 0) return 0;
    var p = window.scrollY / denom;
    return Math.min(1, Math.max(0, p));
  };

  ScrollVideo.prototype._loop = function () {
    this.raw = this._computeProgress();
    this.smoothed += (this.raw - this.smoothed) * 0.12;

    if (this.framesReady && this.frames.length) {
      var idx = Math.round(this.smoothed * (this.frames.length - 1));
      if (idx !== this.lastDrawnIndex) {
        var bitmap = this.frames[idx];
        this._drawCover(bitmap, bitmap.width, bitmap.height);
        this.lastDrawnIndex = idx;
      }
    } else if (this.video.readyState >= 2 && this.video.duration) {
      var target = this.smoothed * Math.max(this.video.duration - 0.05, 0);
      if (Math.abs(target - this.lastVideoSeekTarget) > 0.04) {
        this.video.currentTime = target;
        this.lastVideoSeekTarget = target;
      }
    }

    this.rafId = requestAnimationFrame(this._loop);
  };

  ScrollVideo.prototype._debounce = function (fn, wait) {
    var t;
    return function () {
      var args = arguments;
      clearTimeout(t);
      t = setTimeout(function () {
        fn.apply(null, args);
      }, wait);
    };
  };

  document.addEventListener('DOMContentLoaded', function () {
    initReveal();
    var scrollVideo = new ScrollVideo();
    scrollVideo.init();
  });
})();
