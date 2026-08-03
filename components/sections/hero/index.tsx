"use client";

import { Header } from "@/components/header";
import { HeroActs } from "./hero-acts";
import { HeroCircles } from "./hero-circles";
import { HeroCta } from "./hero-cta";
import { HeroTicker } from "./hero-ticker";
import { StarField } from "./star-field";
import { TypewriterHeading } from "./typewriter-heading";
import { useHeroScrollVideo } from "./use-scroll-video";

export function Hero() {
  const { wrapperRef, videoRef, canvasRef, heroContentRef, heroActsRef } = useHeroScrollVideo();

  return (
    <section
      ref={wrapperRef}
      id="hero-scroll-wrapper"
      aria-label="Apresentação DevClub"
      className="relative bg-ink"
      style={{ height: "420vh" }}
    >
      <div className="sticky top-0 h-svh overflow-hidden bg-ink">
        <StarField wrapperRef={wrapperRef} />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-ink">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500"
            muted
            playsInline
            preload="auto"
          />
          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500"
          />
        </div>

        <div aria-hidden="true" className="hero-scrim pointer-events-none absolute inset-0 z-20" />

        <div ref={heroContentRef} className="relative z-30 flex h-full flex-col justify-between">
          <Header />

          <main className="mx-auto flex w-full max-w-mkt flex-1 flex-col items-center justify-center gap-8 px-10 py-0 md:flex-row md:items-center md:justify-between md:gap-6">
            <div className="flex-none text-center md:max-w-200 md:text-left">
              <TypewriterHeading />
              <HeroCta />
            </div>

            <div className="hidden md:block">
              <HeroCircles />
            </div>
          </main>

          <HeroTicker />
        </div>

        <HeroActs ref={heroActsRef} />
      </div>
    </section>
  );
}
