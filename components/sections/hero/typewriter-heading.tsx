"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  SOCIAL_PROOF_AVATARS,
  SOCIAL_PROOF_COUNT,
  SOCIAL_PROOF_TEXT,
  TYPEWRITER_DELAY,
  TYPEWRITER_SPEED,
  TYPEWRITER_SPLIT,
  TYPEWRITER_TEXT,
} from "./constants";

export function TypewriterHeading() {
  const dimRef = useRef<HTMLSpanElement>(null);
  const brightRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dim = dimRef.current;
    const bright = brightRef.current;
    const cursor = cursorRef.current;
    if (!dim || !bright || !cursor) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      dim.textContent = TYPEWRITER_TEXT.slice(0, TYPEWRITER_SPLIT);
      bright.textContent = TYPEWRITER_TEXT.slice(TYPEWRITER_SPLIT);
      cursor.classList.add("is-done");
      return;
    }

    let i = 0;
    let interval: number | undefined;

    const startTimeout = window.setTimeout(() => {
      interval = window.setInterval(() => {
        i += 1;
        dim.textContent = TYPEWRITER_TEXT.slice(0, Math.min(i, TYPEWRITER_SPLIT));
        bright.textContent = i > TYPEWRITER_SPLIT ? TYPEWRITER_TEXT.slice(TYPEWRITER_SPLIT, i) : "";
        if (i >= TYPEWRITER_TEXT.length) {
          window.clearInterval(interval);
          cursor.classList.add("is-done");
        }
      }, TYPEWRITER_SPEED);
    }, TYPEWRITER_DELAY);

    return () => {
      window.clearTimeout(startTimeout);
      if (interval) window.clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1
        aria-label={TYPEWRITER_TEXT}
        className="font-accent text-hero-heading font-semibold leading-hero-heading tracking-hero-heading"
      >
        <span aria-hidden="true">
          <span ref={dimRef} className="text-white/85" />
          <span ref={brightRef} className="text-gradient-brand" />
          <span ref={cursorRef} className="tw-cursor" />
        </span>
      </h1>

      <div className="mt-5 flex items-center justify-center flex-col gap-3 opacity-0 animate-fade-up [animation-delay:2.9s] sm:flex-row md:justify-start">
        <div className="flex -space-x-3">
          {SOCIAL_PROOF_AVATARS.map((avatar) => (
            <Image
              key={avatar.src}
              src={avatar.src}
              alt={avatar.alt}
              width={36}
              height={36}
              className="h-9 w-9 rounded-full border-2 border-ink object-cover"
            />
          ))}
        </div>
        <p className="text-left text-sm text-white/70">
          <span className="font-semibold text-white">{SOCIAL_PROOF_COUNT}</span> {SOCIAL_PROOF_TEXT}
        </p>
      </div>
    </div>
  );
}
