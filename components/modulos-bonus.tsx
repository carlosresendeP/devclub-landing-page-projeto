"use client";

import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { SectionHeading } from "@/components/shared/section-heading";

interface Modulo {
  file: string;
  title: string;
  alt: string;
}

const MODULOS: Modulo[] = [
  { file: "1710445732987_png_1_1x.webp", title: "Arquitetura de Software", alt: "Módulo bônus Arquitetura de Software" },
  { file: "50k_1_1x.webp", title: "Operação 50K", alt: "Módulo bônus Operação 50K" },
  { file: "ace_1_1x.webp", title: "Aceleração de Carreira", alt: "Módulo bônus Aceleração de Carreira" },
  { file: "mil7_1_1x.webp", title: "Mil Reais em 7 Dias 2.0", alt: "Módulo bônus Mil Reais em 7 Dias" },
  { file: "planodev_1_1x.webp", title: "O Plano Dev", alt: "Módulo bônus O Plano Dev" },
  { file: "projetos_1_1x.webp", title: "Portfólio de Projetos", alt: "Módulo bônus Portfólio de Projetos" },
  { file: "1734446893842_png_1_1x.webp", title: "DevClub Pass", alt: "Módulo bônus DevClub Pass" },
  { file: "1734641808976_jpg_1_1x.webp", title: "Portfólio Club", alt: "Módulo bônus Portfólio Club" },
  { file: "1734641837999_jpg_1_1x.webp", title: "Produtividade Suprema", alt: "Módulo bônus Produtividade Suprema" },
  { file: "1734641859419_jpg_1_1x.webp", title: "Trilha do Sucesso", alt: "Módulo bônus Trilha do Sucesso" },
  { file: "1736887142764_jpg_1_1x.webp", title: "Carreira Tech Day", alt: "Módulo bônus Carreira Tech Day" },
  { file: "1739887739194_jpg_1_1x.webp", title: "Inglês com Camille", alt: "Módulo bônus Inglês com Camille" },
  { file: "1754510593669_1_1x.webp", title: "Investimentos", alt: "Módulo bônus Investimentos" },
  { file: "1749478459286_jpg_1_1x.webp", title: "Cripto na Prática", alt: "Módulo bônus Cripto na Prática" },
];

export function ModulosBonus() {
  return (
    <section id="modulos-bonus" className="relative overflow-hidden py-24 text-white sm:py-32">
      <div className="mx-auto flex w-full max-w-wrap flex-col gap-12 px-8">
        <SectionHeading
          eyebrow="Bônus"
          title={
            <>
              Módulos bônus para te levar <span className="text-brand-purple-soft">mais longe</span>
            </>
          }
          lede="Aulas extras com especialistas convidados: carreira, produtividade, investimentos e projetos reais, todos inclusos na matrícula."
        />

        <Carousel opts={{ align: "start", loop: true }} className="relative">
          <CarouselContent>
            {MODULOS.map((modulo) => (
              <CarouselItem key={modulo.file} className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="group relative aspect-bonus overflow-hidden rounded-card border border-white/10 bg-black transition-colors duration-300 hover:border-brand-purple-soft/50">
                  <Image
                    src={`/formacoes_extras/${modulo.file}`}
                    alt={modulo.alt}
                    fill
                    sizes="(min-width: 1280px) 18vw, (min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                    className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
                  />
                  <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                  <span className="absolute inset-x-4 bottom-4 text-sm font-semibold text-white">{modulo.title}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-3" />
          <CarouselNext className="right-3" />
        </Carousel>
      </div>
    </section>
  );
}
