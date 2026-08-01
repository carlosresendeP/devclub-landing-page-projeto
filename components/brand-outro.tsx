"use client";

import Image from "next/image";

import { SparklesCore } from "@/components/ui/sparkles";

export function BrandOutro() {
  return (
    <section aria-label="DevClub" className="relative flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 size-125 max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/12 blur-3xl"
      />

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={70}
          particleColor="#ffffff"
          speed={0.6}
          className="mask-[linear-gradient(to_bottom,transparent,white_25%,white_75%,transparent)] h-full w-full"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        <span className="font-display text-[11px] font-bold tracking-[0.3em] text-white/50 uppercase">do zero ao dev</span>

        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <Image src="/LOGO.webp" alt="" width={160} height={160} className="size-14 shrink-0 brightness-0 invert sm:size-20 lg:size-24" />
          <h2 aria-label="DevClub" className="select-none font-display text-[12vw] leading-none font-extrabold tracking-tighter text-white/80 sm:text-[9vw] lg:text-[6rem]">
            DevClub
          </h2>
        </div>

        <div aria-hidden className="relative h-px w-full max-w-md">
          <div className="absolute inset-0 h-px w-full bg-gradient-to-r from-transparent via-brand-green to-transparent" />
          <div className="absolute inset-0 h-px w-full bg-gradient-to-r from-transparent via-brand-green to-transparent blur-sm" />
          <div className="absolute top-0 left-1/2 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-green to-transparent blur-md" />
        </div>

        <p className="max-w-md text-sm text-balance text-white/55 sm:text-base">
          Sua vaga como programador está mais perto do que você imagina. O chamado continua aqui.
        </p>
      </div>

      <span className="sr-only">DevClub</span>
    </section>
  );
}
