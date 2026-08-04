"use client";

import { useEffect, useRef, type RefObject } from "react";
import { debounce, smoothstep } from "./scroll-progress";

type Star = {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  driftX: number;
  driftY: number;
  color: string;
};

function createStars(w: number, h: number): Star[] {
  const density = 1 / 9000;
  const max = w < 640 ? 60 : 140;
  const count = Math.min(max, Math.round(w * h * density));
  const palette = ["rgb(255, 255, 255)", "rgb(114, 26, 231)", "rgb(57, 211, 83)"];
  return Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    radius: Math.random() * 1.2 + 0.3,
    baseAlpha: Math.random() * 0.5 + 0.15,
    twinkleSpeed: Math.random() * 0.015 + 0.004,
    twinklePhase: Math.random() * Math.PI * 2,
    driftX: (Math.random() - 0.5) * 0.04,
    driftY: (Math.random() - 0.5) * 0.02,
    color: palette[Math.floor(Math.random() * palette.length)],
  }));
}

/** Twinkling star canvas that fades out early in the hero's scroll-pin. */
export function StarField({ wrapperRef }: { wrapperRef: RefObject<HTMLElement | null> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !wrapper || !ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let rafId = 0;
    let visible = true;
    let scrollStart = 0;
    let scrollEnd = 0;

    function resize() {
      width = wrapper!.offsetWidth;
      height = window.innerHeight;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = createStars(width, height);
      scrollStart = wrapper!.offsetTop;
      scrollEnd = scrollStart + wrapper!.offsetHeight - window.innerHeight;
    }

    function draw(time: number) {
      ctx!.clearRect(0, 0, width, height);
      for (const star of stars) {
        const twinkle = reducedMotion
          ? star.baseAlpha
          : star.baseAlpha * (0.6 + 0.4 * Math.sin(time * star.twinkleSpeed + star.twinklePhase));
        if (!reducedMotion) {
          star.x = (star.x + star.driftX + width) % width;
          star.y = (star.y + star.driftY + height) % height;
        }
        ctx!.beginPath();
        ctx!.fillStyle = star.color;
        ctx!.globalAlpha = twinkle;
        ctx!.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
    }

    function updateFade() {
      const p = scrollEnd <= scrollStart ? 0 : Math.min(1, Math.max(0, (window.scrollY - scrollStart) / (scrollEnd - scrollStart)));
      const fadeEnd = 0.22;
      const opacity = p >= fadeEnd ? 0 : 1 - smoothstep(p / fadeEnd);
      canvas!.style.opacity = String(opacity);
    }

    resize();
    updateFade();
    const onResize = debounce(resize, 150);
    const onScroll = () => updateFade();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !reducedMotion && !rafId) rafId = window.requestAnimationFrame(tick);
      },
      { threshold: 0 }
    );
    observer.observe(wrapper);

    function tick(time: number) {
      if (!visible) {
        rafId = 0;
        return;
      }
      draw(time);
      rafId = window.requestAnimationFrame(tick);
    }

    if (reducedMotion) {
      draw(0);
    } else {
      rafId = window.requestAnimationFrame(tick);
    }

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [wrapperRef]);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-10" />;
}
