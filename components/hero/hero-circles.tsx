"use client";

import { useEffect, useRef } from "react";
import { AVATARS, type Avatar } from "./constants";
import Image from "next/image";

function sizeClasses(size: Avatar["size"]) {
  if (size === 58) return "h-avatar-58 w-avatar-58";
  if (size === 78) return "h-avatar-78 w-avatar-78";
  return "h-avatar-88 w-avatar-88";
}

function shapeClass(shape: Avatar["shape"]) {
  if (shape === "round") return "rounded-full";
  if (shape === "square-24") return "rounded-3xl";
  return "rounded-card";
}

function glowClass(glow: Avatar["glow"]) {
  return `glow-${glow}` as const;
}

function orbitSizeClass(orbit: 1 | 2 | 3 | 4) {
  if (orbit === 1) return "h-orbit-1 w-orbit-1";
  if (orbit === 2) return "h-orbit-2 w-orbit-2";
  if (orbit === 3) return "h-orbit-3 w-orbit-3";
  return "h-orbit-4 w-orbit-4";
}

function orbitAnimateClass(orbit: 1 | 2 | 3 | 4) {
  if (orbit === 1) return "animate-orbit-1";
  if (orbit === 2) return "animate-orbit-2";
  if (orbit === 3) return "animate-orbit-3";
  return "animate-orbit-4";
}

function counterAnimateClass(orbit: 1 | 2 | 3 | 4) {
  if (orbit === 1) return "animate-counter-1";
  if (orbit === 2) return "animate-counter-2";
  if (orbit === 3) return "animate-counter-3";
  return "animate-counter-4";
}

function AvatarSlot({ avatar }: { avatar: Avatar }) {
  return (
    <div
      className="avatar-slot"
      style={{ "--angle": `${avatar.angle}deg`, "--radius": `${avatar.radius}px` } as React.CSSProperties}
    >
      <div className={counterAnimateClass(avatar.orbit)}>
        {avatar.kind === "photo" ? (
          <Image
            src={avatar.src}
            alt={avatar.alt}
            width={avatar.size}
            height={avatar.size}
            className={`avatar ${sizeClasses(avatar.size)} ${shapeClass(avatar.shape)} ${glowClass(avatar.glow)}`}
            style={{ animationDelay: `${avatar.delay}s` }}
          />
        ) : (
          <div
            role="img"
            aria-label={avatar.label}
            className={`avatar flex items-center justify-center ${sizeClasses(avatar.size)}`}
            style={{ animationDelay: `${avatar.delay}s` }}
          >
            <avatar.Icon
              className="h-4/5 w-4/5"
              style={{ color: avatar.color, filter: `drop-shadow(0 0 10px ${avatar.color}99)` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function OrbitRing({ orbit, children }: { orbit: 1 | 2 | 3 | 4; children?: React.ReactNode }) {
  return (
    <div className={`orbit ${orbitSizeClass(orbit)} ${orbitAnimateClass(orbit)}`}>
      {children}
      {AVATARS.filter((avatar) => avatar.orbit === orbit).map((avatar) => (
        <AvatarSlot key={avatar.kind === "photo" ? avatar.src : avatar.label} avatar={avatar} />
      ))}
    </div>
  );
}

function StudentCounter() {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = countRef.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      el.textContent = "20k+";
      return;
    }

    const duration = 2000;
    const startDelay = 1200;
    let rafId = 0;

    const startTimeout = window.setTimeout(() => {
      let startTime: number | null = null;
      const frame = (ts: number) => {
        if (startTime === null) startTime = ts;
        const elapsed = ts - startTime;
        const progress = Math.min(1, elapsed / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = `${Math.round(eased * 20)}k+`;
        if (progress < 1) rafId = window.requestAnimationFrame(frame);
      };
      rafId = window.requestAnimationFrame(frame);
    }, startDelay);

    return () => {
      window.clearTimeout(startTimeout);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
      <div className={`flex flex-col items-center ${counterAnimateClass(1)}`}>
        <span ref={countRef} className="font-accent text-count-number font-medium leading-none text-white">
          0
        </span>
        <span className="mt-1 font-accent text-base font-semibold text-white">Alunos</span>
      </div>
    </div>
  );
}

/** Orbiting avatar rings with the central student counter — desktop only. */
export function HeroCircles() {
  return (
    <div className="circles-stage">
      <div className="circles">
        <OrbitRing orbit={4} />
        <OrbitRing orbit={3} />
        <OrbitRing orbit={2} />
        <OrbitRing orbit={1}>
          <StudentCounter />
        </OrbitRing>
      </div>
    </div>
  );
}
