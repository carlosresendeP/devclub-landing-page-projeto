"use client";

import { useEffect } from "react";

const TARGET_SELECTOR = "h1, h2, h3, h4, h5, h6, p, [data-scroll-inout]";

const EXCLUDED_SECTION_SELECTOR = "#hero-scroll-wrapper";

/**
 * Fades every heading and paragraph (plus any element opted in via
 * data-scroll-inout, e.g. cards or icon tiles) in and out as it crosses
 * the viewport while scrolling, in both directions (not a one-shot
 * reveal). Skips only the hero, which drives its own text opacity from
 * scroll progress in JS and has its own bespoke intro choreography.
 */
export function TextScrollInOut() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const main = document.querySelector("main");
    if (!main) return;

    const targets = Array.from(main.querySelectorAll<HTMLElement>(TARGET_SELECTOR)).filter((el) => !el.closest(EXCLUDED_SECTION_SELECTOR));
    if (!targets.length) return;

    targets.forEach((el) => el.classList.add("text-inout"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-active", entry.isIntersecting);
        });
      },
      { threshold: 0.1, rootMargin: "-8% 0px -8% 0px" }
    );
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
