"use client";

import { useEffect, useRef } from "react";
import { VIDEO_SRC } from "./constants";
import { computeScrollProgress, debounce, smoothstep } from "./scroll-progress";


export function useHeroScrollVideo() {
  const wrapperRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroActsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const heroContent = heroContentRef.current;
    const heroActs = heroActsRef.current;
    const ctx = canvas?.getContext("2d");
    if (!wrapper || !video || !canvas || !heroContent || !heroActs || !ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const actEls = Array.from(heroActs.querySelectorAll<HTMLParagraphElement>("[data-hero-act]"));

    if (reducedMotion) {
      heroContent.style.opacity = "1";
      heroActs.style.opacity = "0";
      return;
    }

    let frames: ImageBitmap[] = [];
    let framesReady = false;
    let lastDrawnIndex = -1;
    let lastVideoSeekTarget = -1;
    let viewW = 0;
    let viewH = 0;
    let rafId = 0;
    let smoothed = 0;

    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas!.getBoundingClientRect();
      canvas!.width = Math.round(rect.width * dpr);
      canvas!.height = Math.round(rect.height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      viewW = rect.width;
      viewH = rect.height;
    }

    function drawCover(source: CanvasImageSource, sw: number, sh: number) {
      if (!sw || !sh) return;
      const scale = Math.max(viewW / sw, viewH / sh);
      const dw = sw * scale;
      const dh = sh * scale;
      const dx = (viewW - dw) / 2;
      const dy = (viewH - dh) / 2;
      ctx!.clearRect(0, 0, viewW, viewH);
      ctx!.drawImage(source, dx, dy, dw, dh);
    }

    function seekTo(videoEl: HTMLVideoElement, time: number) {
      if (Math.abs(videoEl.currentTime - time) < 0.01) return Promise.resolve();
      const seek = new Promise<void>((resolve) => {
        const onSeeked = () => {
          videoEl.removeEventListener("seeked", onSeeked);
          resolve();
        };
        videoEl.addEventListener("seeked", onSeeked);
        videoEl.currentTime = time;
      });
      const timeout = new Promise<void>((resolve) => window.setTimeout(() => resolve(), 2000));
      return Promise.race([seek, timeout]);
    }

    async function extractFrames() {
      const offscreen = document.createElement("video");
      try {
        offscreen.muted = true;
        offscreen.playsInline = true;
        offscreen.preload = "auto";
        offscreen.style.position = "fixed";
        offscreen.style.opacity = "0";
        offscreen.style.pointerEvents = "none";
        offscreen.style.width = "1px";
        offscreen.style.height = "1px";
        offscreen.src = VIDEO_SRC;
        document.body.appendChild(offscreen);

        await new Promise<void>((resolve, reject) => {
          offscreen.addEventListener("loadedmetadata", () => resolve(), { once: true });
          offscreen.addEventListener("error", () => reject(new Error("offscreen video failed")), { once: true });
        });

        const duration = offscreen.duration;
        if (!duration || !isFinite(duration)) throw new Error("invalid duration");

        const frameCount = Math.min(90, Math.max(24, Math.round(duration * 12)));
        const maxWidth = 960;
        const scale = Math.min(1, maxWidth / (offscreen.videoWidth || maxWidth));
        const scratch = document.createElement("canvas");
        scratch.width = Math.round((offscreen.videoWidth || maxWidth) * scale);
        scratch.height = Math.round((offscreen.videoHeight || maxWidth * 0.5625) * scale);
        const sctx = scratch.getContext("2d")!;

        const collected: ImageBitmap[] = [];
        for (let i = 0; i < frameCount; i += 1) {
          const t = (i / (frameCount - 1)) * Math.max(duration - 0.05, 0);
          // eslint-disable-next-line no-await-in-loop
          await seekTo(offscreen, t);
          sctx.drawImage(offscreen, 0, 0, scratch.width, scratch.height);
          // eslint-disable-next-line no-await-in-loop
          const bitmap = await createImageBitmap(scratch);
          collected.push(bitmap);
        }

        frames = collected;
        framesReady = true;
        canvas!.style.opacity = "1";
        window.setTimeout(() => {
          video!.style.opacity = "0";
        }, 650);
      } catch {
        framesReady = false;
      } finally {
        offscreen.remove();
      }
    }

    function loadVisibleVideo() {
      video!.muted = true;
      video!.playsInline = true;
      video!.preload = "auto";
      video!.src = VIDEO_SRC;

      video!.addEventListener(
        "loadeddata",
        () => {
          video!.style.opacity = "1";
          window.setTimeout(() => extractFrames(), 300);
        },
        { once: true }
      );

      video!.addEventListener("error", () => {
        video!.style.opacity = "0";
      });

      video!.play().catch(() => {});
      video!.pause();
    }

    function updateActs(p: number) {
      const mainOutStart = 0.16;
      const mainOutEnd = 0.26;
      const actsInStart = 0.3;
      const actsInEnd = 0.38;
      const actsRiseStart = 0.86;
      const actsRiseEnd = 1.0;
      const riseDistance = 56;

      let mainOpacity: number;
      if (p <= mainOutStart) mainOpacity = 1;
      else if (p < mainOutEnd) mainOpacity = 1 - smoothstep((p - mainOutStart) / (mainOutEnd - mainOutStart));
      else mainOpacity = 0;

      let actsOpacity: number;
      let riseAmount = 0;
      if (p <= actsInStart) actsOpacity = 0;
      else if (p < actsInEnd) actsOpacity = smoothstep((p - actsInStart) / (actsInEnd - actsInStart));
      else if (p < actsRiseStart) actsOpacity = 1;
      else {
        const riseT = smoothstep((p - actsRiseStart) / (actsRiseEnd - actsRiseStart));
        actsOpacity = 1 - riseT;
        riseAmount = riseT * riseDistance;
      }

      heroContent!.style.opacity = String(mainOpacity);
      heroActs!.style.opacity = String(actsOpacity);
      heroActs!.style.transform = `translateY(${-riseAmount}px)`;

      if (actEls.length && p > actsInStart && p < actsRiseStart) {
        const span = actsRiseStart - actsInStart;
        const local = Math.min(0.999, Math.max(0, (p - actsInStart) / span));
        const idx = Math.floor(local * actEls.length);
        actEls.forEach((el, i) => el.classList.toggle("hero-act-active", i === idx));
      } else if (p >= actsRiseStart) {
        actEls.forEach((el, i) => el.classList.toggle("hero-act-active", i === actEls.length - 1));
      } else {
        actEls.forEach((el) => el.classList.remove("hero-act-active"));
      }
    }

    function loop() {
      const raw = computeScrollProgress(wrapper!);
      smoothed += (raw - smoothed) * 0.055;

      if (framesReady && frames.length) {
        const idx = Math.round(smoothed * (frames.length - 1));
        if (idx !== lastDrawnIndex) {
          const bitmap = frames[idx];
          drawCover(bitmap, bitmap.width, bitmap.height);
          lastDrawnIndex = idx;
        }
      } else if (video!.readyState >= 2 && video!.duration) {
        const target = smoothed * Math.max(video!.duration - 0.05, 0);
        if (Math.abs(target - lastVideoSeekTarget) > 0.04) {
          video!.currentTime = target;
          lastVideoSeekTarget = target;
        }
      }

      updateActs(smoothed);

      rafId = window.requestAnimationFrame(loop);
    }

    resizeCanvas();
    const onResize = debounce(resizeCanvas, 150);
    window.addEventListener("resize", onResize);

    loadVisibleVideo();
    rafId = window.requestAnimationFrame(loop);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return { wrapperRef, videoRef, canvasRef, heroContentRef, heroActsRef };
}
