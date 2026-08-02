"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";
import { EMPRESAS } from "@/lib/empresas";

const SLOT_COUNT = 10;
const TICK_MS = 500;

function shuffledSlotOrder() {
  const order = Array.from({ length: SLOT_COUNT }, (_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

export function Empresas() {
  const reducedMotion = usePrefersReducedMotion();
  const [slots, setSlots] = useState(() => Array.from({ length: SLOT_COUNT }, (_, i) => i % EMPRESAS.length));

  const orderRef = useRef(shuffledSlotOrder());
  const orderPosRef = useRef(0);
  const nextLogoRef = useRef(SLOT_COUNT % EMPRESAS.length);

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      const slot = orderRef.current[orderPosRef.current % SLOT_COUNT];
      orderPosRef.current += 1;

      const logoIndex = nextLogoRef.current;
      nextLogoRef.current = (nextLogoRef.current + 1) % EMPRESAS.length;

      setSlots((prev) => {
        const next = [...prev];
        next[slot] = logoIndex;
        return next;
      });
    }, TICK_MS);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <section id="empresas" className="relative overflow-hidden py-24 text-white sm:py-32">
      <div className="mx-auto w-full max-w-wrap px-8">
        <SectionHeading
          eyebrow="Mercado de trabalho"
          title={
            <>
              Empresas que já <span className="text-gradient-brand">contrataram</span> alunos DevClub
            </>
          }
          lede="De multinacionais de tecnologia a bancos e varejo: quem passa pela DevClub chega até empresas assim."
          align="center"
          className="mx-auto"
        />

        <ScrollReveal delayMs={100} className="mt-16 grid grid-cols-3 gap-x-8 gap-y-10 sm:grid-cols-5 sm:gap-x-10">
          {slots.map((logoIndex, slot) => {
            const empresa = EMPRESAS[logoIndex];
            return (
              <div key={slot} className="relative h-12 w-28 perspective-[600px] sm:h-14 sm:w-32">
                <Image
                  key={logoIndex}
                  src={empresa.src}
                  alt={empresa.alt}
                  fill
                  sizes="130px"
                  className={cn(
                    "object-contain opacity-70 brightness-0 invert transition-opacity duration-300 hover:opacity-100",
                    !reducedMotion && "animate-logo-flip-in"
                  )}
                />
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
