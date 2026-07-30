"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { reelContent } from "@/lib/site-config";

gsap.registerPlugin(ScrollTrigger);

export function Reel() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (reducedMotion || !section) return;

    const targets = section.querySelectorAll<HTMLElement>("[data-reveal]");

    const tween = gsap.fromTo(
      targets,
      { autoAlpha: 0, y: 32 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} id="reel" aria-labelledby="reel-heading" className="relative overflow-hidden bg-ink py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--ink) 55%, transparent) 0%, transparent 35%, transparent 65%, color-mix(in srgb, var(--ink) 70%, transparent) 100%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-9 px-6 md:px-8">
        <div data-reveal className="flex max-w-2xl flex-col gap-4.5">
          <p className="text-xs font-semibold tracking-widest text-brand uppercase">{reelContent.eyebrow}</p>
          <h2
            id="reel-heading"
            className="font-display text-3xl leading-none font-light tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            {reelContent.heading}
          </h2>
          <p className="text-base leading-snug text-white/70 md:text-lg lg:text-xl">{reelContent.paragraph}</p>
        </div>

        <div
          data-reveal
          className="relative aspect-video overflow-hidden rounded-2xl border border-white/15 bg-ink"
          style={{ boxShadow: "0 0 60px color-mix(in srgb, var(--brand-2) 18%, transparent)" }}
        >
          <video
            className="h-full w-full object-cover"
            src={reelContent.video.src}
            poster={reelContent.video.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <track kind="captions" />
          </video>
        </div>

        <p data-reveal className="text-sm tracking-wide text-white/70">
          {reelContent.captionPrefix} <span className="text-brand">{reelContent.captionHighlight}</span>{" "}
          {reelContent.captionSuffix}
        </p>
      </div>
    </section>
  );
}
