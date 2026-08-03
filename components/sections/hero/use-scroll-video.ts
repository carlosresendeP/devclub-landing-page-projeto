"use client";

import { useEffect, useRef } from "react";
import { FRAME_COUNT, FRAME_SRC } from "./constants";
import { computeScrollProgress, debounce, smoothstep } from "./scroll-progress";

export function useHeroScrollVideo() {
  const wrapperRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroActsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    const heroContent = heroContentRef.current;
    const heroActs = heroActsRef.current;
    const ctx = canvas?.getContext("2d");
    if (!wrapper || !canvas || !heroContent || !heroActs || !ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const actEls = Array.from(heroActs.querySelectorAll<HTMLParagraphElement>("[data-hero-act]"));

    if (reducedMotion) {
      heroContent.style.opacity = "1";
      heroActs.style.opacity = "0";
      return;
    }

    const frames: (ImageBitmap | null)[] = new Array(FRAME_COUNT).fill(null);
    let lastDrawnIndex = -1;
    let viewW = 0;
    let viewH = 0;
    let rafId = 0;
    let smoothed = 0;
    let cancelled = false;

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

    async function loadFrame(index: number) {
      const res = await fetch(FRAME_SRC(index + 1));
      const blob = await res.blob();
      return createImageBitmap(blob);
    }

    async function loadFrames() {
      try {
        frames[0] = await loadFrame(0);
        if (cancelled) return;
        canvas!.style.opacity = "1";
        drawCover(frames[0]!, frames[0]!.width, frames[0]!.height);
        lastDrawnIndex = 0;

        for (let i = 1; i < FRAME_COUNT; i += 1) {
          // eslint-disable-next-line no-await-in-loop
          frames[i] = await loadFrame(i);
          if (cancelled) return;
        }
      } catch {
        // frames unavailable; canvas stays hidden
      }
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

      const idx = Math.round(smoothed * (FRAME_COUNT - 1));
      if (idx !== lastDrawnIndex) {
        const bitmap = frames[idx];
        if (bitmap) {
          drawCover(bitmap, bitmap.width, bitmap.height);
          lastDrawnIndex = idx;
        }
      }

      updateActs(smoothed);

      rafId = window.requestAnimationFrame(loop);
    }

    resizeCanvas();
    const onResize = debounce(resizeCanvas, 150);
    window.addEventListener("resize", onResize);

    loadFrames();
    rafId = window.requestAnimationFrame(loop);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      frames.forEach((bitmap) => bitmap?.close());
    };
  }, []);

  return { wrapperRef, canvasRef, heroContentRef, heroActsRef };
}
