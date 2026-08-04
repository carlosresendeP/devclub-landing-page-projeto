"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { MENTORES } from "@/lib/mentores";

const AUTO_PLAY_INTERVAL = 4000;

export function Professores() {
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api || isPaused) return;
    const interval = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [api, isPaused]);

  return (
    <section id="professores" className="relative overflow-hidden py-24 text-white sm:py-32">
      <div className="mx-auto flex w-full max-w-wrap flex-col gap-14 px-8">
        <SectionHeading
          eyebrow="Mentores"
          title={
            <>
              Aprenda com os <span className="text-brand-green-soft">melhores</span>
            </>
          }
          lede="Um time formado por quem já viveu o mercado: programação, carreira, performance mental e IA, todos na mesma comunidade."
        />

        <ScrollReveal>
          <Carousel
            opts={{ align: "start", loop: true }}
            setApi={setApi}
            className="w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <CarouselContent>
              {MENTORES.map((mentor) => (
                <CarouselItem key={mentor.name} className="basis-[78%] sm:basis-1/2 lg:basis-1/3">
                  <article className="group relative flex aspect-4/5 flex-col justify-end overflow-hidden rounded-card border border-white/10 bg-black transition-colors duration-300 hover:border-brand-green-soft/40">
                    {mentor.photo ? (
                      <Image
                        src={mentor.photo}
                        alt={`${mentor.name}, ${mentor.role}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 45vw, 78vw"
                        className="object-cover grayscale transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                        <Avatar className="size-24">
                          <AvatarFallback className="bg-gradient-brand text-2xl font-semibold text-white">{mentor.initials}</AvatarFallback>
                        </Avatar>
                      </div>
                    )}

                    <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className="relative z-10 flex flex-col gap-1 p-6 transition-transform duration-300 group-hover:-translate-y-1">
                      <span className="font-display text-2xl font-light leading-tight text-white">{mentor.name}</span>
                      <span className="text-sm leading-tight text-white/60">{mentor.role}</span>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-8 flex items-center justify-center gap-4">
              <CarouselPrevious className="static" />
              <CarouselNext className="static" />
            </div>
          </Carousel>
        </ScrollReveal>
      </div>
    </section>
  );
}
