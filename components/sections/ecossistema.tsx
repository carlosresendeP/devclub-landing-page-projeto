"use client";

import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TiltedCard } from "@/components/ui/tilted-card";
import { cn } from "@/lib/utils";

interface EcossistemaItem {
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  path: string;
  accent: "green" | "purple";
  linkLabel: string;
}

const ITENS: EcossistemaItem[] = [
  {
    label: "Hub de formações",
    title: "Todas as trilhas em um único lugar",
    description: "Full Stack, Data, Front End, Gestor de IA e muito mais. Escolha sua trilha e continue de onde parou.",
    image: "/plataforma/platafoma-aula.png",
    alt: "Plataforma DevClub mostrando as trilhas de formação e o curso Full Stack Pro em destaque",
    path: "devclub.com.br/plataforma",
    accent: "purple",
    linkLabel: "Ver as trilhas",
  },
  {
    label: "Aulas na prática",
    title: "Aulas do jeito certo, do iniciante ao avançado",
    description: "Aulas direto do Rodolfo Mori, sem enrolação, ensinando o passo a passo para você dominar o desenvolvimento web moderno.",
    image: "/plataforma/aulas.png",
    alt: "Tela de aula com editor de código e player de vídeo lado a lado, mostrando o progresso do módulo",
    path: "devclub.com.br/aulas",
    accent: "green",
    linkLabel: "Ver uma aula",
  },
  {
    label: "Método DevClub",
    title: "Aulas, IA e mentoria organizadas em um método",
    description: "ClubHub, Club Agents, Playground, e-books e o Programa de Aceleração de Carreira reunidos num só painel.",
    image: "/plataforma/tudo-para-evoluir.png",
    alt: "Painel do método DevClub com cards de Aulas, ClubHub, Club Agents, Playground, E-Books e Aceleração de Carreira",
    path: "devclub.com.br/metodo",
    accent: "purple",
    linkLabel: "Conhecer o método",
  },
  {
    label: "Feed da comunidade",
    title: "Um feed só de gente construindo carreira",
    description: "Publicações, dúvidas respondidas e novidades da turma, sem o ruído das redes sociais.",
    image: "/plataforma/comunidade.png",
    alt: "Feed da comunidade DevClub com publicações, eventos futuros e categorias de dúvidas",
    path: "devclub.com.br/comunidade",
    accent: "green",
    linkLabel: "Entrar na comunidade",
  },
  {
    label: "Agenda ao vivo",
    title: "Lives, calls e mentorias toda semana",
    description: "Uma agenda só com os encontros da comunidade. Você entra, participa e nunca perde o próximo.",
    image: "/plataforma/lives.png",
    alt: "Agenda de eventos da comunidade DevClub com encontros ao vivo do dia",
    path: "devclub.com.br/agenda",
    accent: "purple",
    linkLabel: "Ver a agenda",
  },
  {
    label: "Resumo semanal",
    title: "Um vídeo semanal com tudo que rolou",
    description: "Vagas abertas, posts em destaque e as novidades da semana, direto do fundador, sem enrolação.",
    image: "/plataforma/redbull-semanal.png",
    alt: "Post do RedBull Semanal, resumo em vídeo com as novidades da semana na comunidade DevClub",
    path: "devclub.com.br/semanal",
    accent: "green",
    linkLabel: "Assistir ao resumo",
  },
  {
    label: "Campus virtual",
    title: "Um espaço para estudar acompanhado",
    description: "Entre no campus virtual, sente perto de alguém e estude por voz, como se fosse presencial.",
    image: "/plataforma/workadventure.png",
    alt: "Campus virtual em pixel art com avatares de alunos estudando juntos por voz",
    path: "devclub.com.br/campus",
    accent: "purple",
    linkLabel: "Entrar no campus",
  },
  {
    label: "Vagas exclusivas",
    title: "Onde empresas encontram talentos DevClub",
    description: "Um hub de vagas e talentos que conecta quem está pronto com empresas que precisam contratar.",
    image: "/plataforma/vaga-exclusivas.png",
    alt: "Página de talentos DevClub conectando empresas a desenvolvedores e especialistas em IA",
    path: "devclub.com.br/vagas",
    accent: "green",
    linkLabel: "Ver as vagas",
  },
];

export function Ecossistema() {
  return (
    <section id="ecossistema" className="relative overflow-hidden py-24 text-white sm:py-32">
      <div className="mx-auto max-w-wrap px-8">
        <SectionHeading
          eyebrow="Ecossistema DevClub"
          title={
            <>
              Um <span className="text-brand-purple-soft">ecossistema completo</span> por trás de cada{" "}
              <span className="text-brand-green-soft">aula</span>
            </>
          }
          lede="Plataforma, comunidade, eventos e vagas. Tudo desenhado para você nunca precisar estudar sozinho."
          align="center"
          className="mx-auto"
        />

        <div className="mt-20 flex flex-col gap-20 sm:gap-28">
          {ITENS.map((item, index) => {
            const reverse = index % 2 === 1;
            const isPurple = item.accent === "purple";
            return (
              <div key={item.title} className={cn("flex flex-col items-center gap-10 lg:gap-16", reverse ? "lg:flex-row-reverse" : "lg:flex-row")}>
                <ScrollReveal className="w-full lg:w-3/5">
                  <TiltedCard className="overflow-hidden rounded-card border border-white/10 bg-black shadow-xl">
                    <div className="flex items-center gap-2 border-b border-white/10 bg-black/50 px-4 py-3">
                      <span className="size-2.5 rounded-full bg-red-500/60" />
                      <span className="size-2.5 rounded-full bg-brand-purple/60" />
                      <span className="size-2.5 rounded-full bg-brand-green/60" />
                      <span className="ml-3 truncate rounded-md bg-white/10 px-3 py-1 font-display text-[11px] text-white/50">{item.path}</span>
                    </div>
                    <div className="relative aspect-[2/1] w-full overflow-hidden">
                      <Image src={item.image} alt={item.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover object-top" />
                    </div>
                  </TiltedCard>
                </ScrollReveal>

                <ScrollReveal delayMs={120} className="flex w-full flex-col gap-5 lg:w-2/5">
                  <span className="font-display text-6xl font-light text-white/15">{String(index + 1).padStart(2, "0")}</span>
                  <span
                    className={cn(
                      "font-display text-[11px] font-bold tracking-widest uppercase",
                      isPurple ? "text-brand-purple-soft" : "text-brand-green-soft"
                    )}
                  >
                    {item.label}
                  </span>
                  <h3 className="text-3xl font-semibold text-white sm:text-4xl">{item.title}</h3>
                  <p className="max-w-md text-base text-white/60">{item.description}</p>
                  <a
                    href="#"
                    className={cn(
                      "inline-flex w-fit items-center gap-1.5 text-sm font-semibold transition-colors hover:text-white",
                      isPurple ? "text-brand-purple-soft" : "text-brand-green-soft"
                    )}
                  >
                    {item.linkLabel}
                    <FiArrowUpRight className="size-4" />
                  </a>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
