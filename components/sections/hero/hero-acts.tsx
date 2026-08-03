import type { RefObject } from "react";
import { HERO_ACTS } from "./constants";

/** Mid-scroll interlude phrases, crossfaded in by useHeroScrollVideo. */
export function HeroActs({ ref }: { ref: RefObject<HTMLDivElement | null> }) {
  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 z-40">
      {HERO_ACTS.map((phrase, i) => (
        <p
          key={phrase}
          data-hero-act={i + 1}
          className="hero-act w-full max-w-3xl px-6 text-center font-display text-hero-act font-bold leading-hero-act tracking-reel-heading text-white"
        >
          {phrase}
        </p>
      ))}
    </div>
  );
}
