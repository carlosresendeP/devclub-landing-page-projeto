"use client";

import { FiArrowRight } from "react-icons/fi";

import { useReveal } from "@/hooks/use-reveal";
import { FeatureCarousel } from "@/components/ui/feature-carousel";

export function Formacoes() {
  const rootRef = useReveal<HTMLDivElement>();

  return (
    <section id="formacoes" aria-labelledby="formacoes-heading" className="relative py-30 text-white">
      <div ref={rootRef} className="mx-auto flex max-w-wrap flex-col gap-10 px-8 md:gap-14">
        <div className="max-w-170">
          <div data-reveal className="reveal mb-5 flex items-center gap-2 font-display text-xs font-bold tracking-widest text-brand-purple-soft uppercase">
            <span className="h-2 w-2 shrink-0 rounded-full bg-brand-green" style={{ boxShadow: "0 0 10px #39D353" }} />
            <span>Trilhas DevClub</span>
          </div>

          <h2
            id="formacoes-heading"
            data-reveal
            className="reveal delay-75 mb-5 font-display text-reel-heading font-bold leading-reel-heading tracking-reel-heading text-white"
          >
            Formações completas para aprender tudo do <span className="text-brand-green-soft">zero</span> ao{" "}
            <span className="text-brand-purple-soft">avançado</span>.
          </h2>

          <p data-reveal className="reveal delay-150 flex items-center gap-2 font-accent text-xs font-bold tracking-widest text-white/50 uppercase">
            Clique para navegar <FiArrowRight className="text-brand-green-soft" />
          </p>
        </div>

        <div data-reveal className="reveal delay-200">
          <FeatureCarousel />
        </div>
      </div>
    </section>
  );
}
