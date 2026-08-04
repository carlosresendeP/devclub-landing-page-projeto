"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { HugeiconsIcon } from "@hugeicons/react";

import { useReveal } from "@/hooks/use-reveal";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";
import { FORMACOES } from "@/lib/formacoes";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";

function FormacoesCarouselContent({ activeIndex }: { activeIndex: number }) {
  return (
    <CarouselContent>
      {FORMACOES.map((formacao, index) => {
        const distance = Math.abs(index - activeIndex);
        const isActive = distance === 0;

        return (
          <CarouselItem
            key={formacao.id}
            className="basis-3/5 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <div
              className={cn(
                "relative aspect-3/4 origin-center overflow-hidden rounded-card border bg-black transition-all duration-500 ease-signature",
                isActive
                  ? "scale-100 border-brand-green/60 opacity-100 shadow-glow-green"
                  : distance === 1
                    ? "scale-90 border-white/10 opacity-60"
                    : "scale-80 border-white/10 opacity-35"
              )}
            >
              <Image
                src={formacao.image}
                alt={formacao.label}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 60vw"
                className="object-cover"
              />
            </div>
          </CarouselItem>
        );
      })}
    </CarouselContent>
  );
}

export function Formacoes() {
  const rootRef = useReveal<HTMLDivElement>();
  const sectionRef = useRef<HTMLElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reducedMotion = usePrefersReducedMotion();

  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setActiveIndex(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Pins the section on desktop while the carousel advances through every
  // card, matching the scroll-jacked behavior from Módulos Bônus.
  useEffect(() => {
    if (reducedMotion || !api) return;

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    let ticking = false;

    function compute() {
      ticking = false;
      const section = sectionRef.current;
      if (!section || !api || !desktopQuery.matches) return;
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;
      const snaps = api.scrollSnapList();
      const index = Math.min(snaps.length - 1, Math.round(progress * (snaps.length - 1)));
      api.scrollTo(index, false);
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(compute);
    }

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [api, reducedMotion]);

  useEffect(() => {
    const button = stepRefs.current[activeIndex];
    const container = stepsContainerRef.current;
    if (!button || !container) return;

    const targetScroll = button.offsetLeft - container.clientWidth / 2 + button.offsetWidth / 2;
    container.scrollTo({ left: targetScroll, behavior: "smooth" });
  }, [activeIndex]);

  const heading = (
    <div className="max-w-170">
      <div data-reveal className="reveal mb-5 flex items-center gap-2 font-display text-xs font-bold tracking-widest text-brand-purple-soft uppercase">
        <span className="h-2 w-2 shrink-0 rounded-full bg-brand-green" style={{ boxShadow: "0 0 10px #39D353" }} />
        <span>Trilhas DevClub</span>
      </div>

      <h2
        id="formacoes-heading"
        className="mb-5 font-display text-reel-heading font-bold leading-reel-heading tracking-reel-heading text-white"
      >
        Formações completas para aprender tudo do <span className="text-brand-green-soft">zero</span> ao{" "}
        <span className="text-brand-purple-soft">avançado</span>.
      </h2>

      <p className="flex items-center gap-2 font-accent text-xs font-bold tracking-widest text-white/50 uppercase">
        Clique para navegar <FiArrowRight className="text-brand-green-soft" />
      </p>
    </div>
  );

  const stepsNav = (
    <div ref={stepsContainerRef} className="overflow-x-auto scrollbar-hide mask-fade-x pb-2">
      <ol className="mx-auto flex w-max items-center gap-2 px-6 sm:gap-3 sm:px-10">
        {FORMACOES.map((feature, index) => {
          const isActive = index === activeIndex;
          const isCompleted = index < activeIndex;

          return (
            <li key={feature.id} className="shrink-0">
              <button
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                onClick={() => goTo(index)}
                aria-current={isActive}
                className={cn(
                  "flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-accent text-[10px] font-semibold tracking-wide whitespace-nowrap uppercase transition-colors duration-300 sm:px-4 sm:py-2 sm:text-[11px]",
                  isActive
                    ? "border-brand-green bg-brand-green text-surface-dark"
                    : isCompleted
                      ? "border-brand-green/40 bg-brand-green/10 text-brand-green-soft"
                      : "border-white/15 text-white/50 hover:border-white/40 hover:text-white"
                )}
              >
                <span
                  className={cn(
                    "flex size-4 shrink-0 items-center justify-center rounded-full font-display text-[9px] font-bold",
                    isActive ? "bg-surface-dark/15" : "bg-white/10"
                  )}
                >
                  {isCompleted ? <FiCheck className="size-3" /> : String(index + 1).padStart(2, "0")}
                </span>
                <HugeiconsIcon
                  icon={feature.icon}
                  size={12}
                  strokeWidth={2}
                  className={isActive ? "text-surface-dark" : isCompleted ? "text-brand-green-soft" : undefined}
                />
                {feature.label}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );

  const carousel = (
    <div data-reveal className="reveal delay-200 flex flex-col gap-8">
      <Carousel opts={{ align: "center", loop: true }} setApi={setApi} className="relative">
        <FormacoesCarouselContent activeIndex={activeIndex} />
        <CarouselPrevious className="left-3" />
        <CarouselNext className="right-3" />
      </Carousel>

      {stepsNav}
    </div>
  );

  if (reducedMotion) {
    return (
      <section id="formacoes" aria-labelledby="formacoes-heading" className="relative overflow-hidden py-20 text-white">
        <div ref={rootRef} className="mx-auto flex max-w-wrap flex-col gap-10 px-8 md:gap-14">
          {heading}
          {carousel}
        </div>
      </section>
    );
  }

  return (
    <section id="formacoes" ref={sectionRef} aria-labelledby="formacoes-heading" className="relative lg:h-[320vh]">
      <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center">
        <div ref={rootRef} className="mx-auto flex w-full max-w-wrap flex-col gap-10 px-8 py-20 lg:py-0 md:gap-14">
          {heading}
          {carousel}
        </div>
      </div>
    </section>
  );
}
