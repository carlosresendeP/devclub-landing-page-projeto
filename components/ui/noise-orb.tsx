"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

// Matches --color-brand-green / --color-brand-purple in app/globals.css.
// Canvas 2D can't read CSS custom properties, so the hex is duplicated here.
const BRAND_GREEN = "#39D353";
const BRAND_PURPLE = "#721AE7";
const FOREGROUND = "#FFFFFF";

function hexToRgba(hex: string, alpha: number) {
  const value = hex.replace("#", "");
  const r = parseInt(value.substring(0, 2), 16);
  const g = parseInt(value.substring(2, 4), 16);
  const b = parseInt(value.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  driftX: number;
  driftY: number;
  phase: number;
  color: string;
}

interface NoiseOrbProps {
  className?: string;
}

const PARTICLE_DENSITY = 1 / 16000;
const MAX_PARTICLES = 90;

function createParticles(width: number, height: number): Particle[] {
  const count = Math.min(width < 640 ? 40 : MAX_PARTICLES, Math.round(width * height * PARTICLE_DENSITY));
  const palette = [hexToRgba(FOREGROUND, 1), hexToRgba(BRAND_GREEN, 1), hexToRgba(BRAND_PURPLE, 1), hexToRgba(BRAND_PURPLE, 1)];

  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.4 + 0.3,
    baseAlpha: Math.random() * 0.4 + 0.08,
    driftX: (Math.random() - 0.5) * 0.05,
    driftY: (Math.random() - 0.5) * 0.05,
    phase: Math.random() * Math.PI * 2,
    color: palette[Math.floor(Math.random() * palette.length)],
  }));
}

export function NoiseOrb({ className }: NoiseOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };

    const resize = () => {
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = createParticles(width, height);
    };
    resize();
    window.addEventListener("resize", resize);

    const onPointer = (event: PointerEvent) => {
      pointer.tx = event.clientX / window.innerWidth;
      pointer.ty = event.clientY / window.innerHeight;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    const haze = (cx: number, cy: number, r: number, color: string, alpha: number) => {
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      gradient.addColorStop(0, hexToRgba(color, alpha));
      gradient.addColorStop(0.55, hexToRgba(color, alpha * 0.35));
      gradient.addColorStop(1, hexToRgba(color, 0));
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      pointer.x += (pointer.tx - pointer.x) * 0.04;
      pointer.y += (pointer.ty - pointer.y) * 0.04;

      const breathe = reducedMotion ? 1 : 0.85 + 0.15 * Math.sin(time * 0.0004);
      const driftX = reducedMotion ? 0 : Math.sin(time * 0.00016) * width * 0.06;
      const driftY = reducedMotion ? 0 : Math.cos(time * 0.00013) * height * 0.05;
      const px = (pointer.x - 0.5) * width * 0.14;
      const py = (pointer.y - 0.5) * height * 0.14;
      const base = Math.min(width, height);

      haze(width * 0.5 + driftX + px, height * 0.42 + driftY + py, base * 0.72 * breathe, BRAND_PURPLE, 0.32);
      haze(width * 0.34 - driftX * 0.6 + px * 0.5, height * 0.62 - driftY, base * 0.4 * breathe, BRAND_GREEN, 0.12);

      ctx.globalCompositeOperation = "source-over";
      for (const particle of particles) {
        if (!reducedMotion) {
          particle.x = (particle.x + particle.driftX + width) % width;
          particle.y = (particle.y + particle.driftY + height) % height;
        }
        const twinkle = reducedMotion ? particle.baseAlpha : particle.baseAlpha * (0.55 + 0.45 * Math.sin(time * 0.0012 + particle.phase));
        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = Math.max(0, twinkle);
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    if (reducedMotion) {
      draw(0);
    } else {
      const loop = (time: number) => {
        if (visible) draw(time);
        frame = window.requestAnimationFrame(loop);
      };
      frame = window.requestAnimationFrame(loop);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={cn("pointer-events-none", className)} />;
}
