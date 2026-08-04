"use client";

import { usePreloaderReady } from "@/components/layout/preloader-context";
import { HeroActs } from "./hero-acts";
import { HeroCircles } from "./hero-circles";
import { HeroCta } from "./hero-cta";
import { HeroTicker } from "./hero-ticker";
import { StarField } from "./star-field";
import { TypewriterHeading } from "./typewriter-heading";
import { useHeroScrollVideo } from "./use-scroll-video";

export function Hero() {
  const { wrapperRef, canvasRef, heroContentRef, heroActsRef } = useHeroScrollVideo();
  const ready = usePreloaderReady();

  return (
    <section
      ref={wrapperRef}
      id="hero-scroll-wrapper"
      aria-label="Apresentação DevClub"
      className="relative h-[420vh] bg-ink"
    >
      <div className="sticky top-0 h-svh overflow-hidden bg-ink">
        <StarField wrapperRef={wrapperRef} />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-ink">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500"
          />
        </div>

        <div aria-hidden="true" className="hero-scrim pointer-events-none absolute inset-0 z-20" />

        <div ref={heroContentRef} className="relative z-30 flex h-full flex-col justify-between">
          <main className="mx-auto flex w-full max-w-mkt flex-1 flex-col items-center justify-center gap-8 px-10 py-0 md:flex-row md:items-center md:justify-between md:gap-6">
            <div className="flex-none text-center md:max-w-200 md:text-left">
              {ready && (
                <>
                  <TypewriterHeading />
                  <HeroCta />
                </>
              )}
            </div>

            <div className="hidden md:block">{ready && <HeroCircles />}</div>
          </main>

          <HeroTicker />
        </div>

        <HeroActs ref={heroActsRef} />
      </div>
    </section>
  );
}
