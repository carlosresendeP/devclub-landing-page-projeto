"use client";

import { FiMessageSquare } from "react-icons/fi";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useReveal } from "@/hooks/use-reveal";

const PERGUNTAS = [
  {
    pergunta: "Preciso ter experiência prévia com programação?",
    resposta:
      "Não. As formações começam do zero e evoluem de forma gradual. A maioria dos nossos alunos nunca escreveu uma linha de código antes de entrar na DevClub.",
  },
  {
    pergunta: "Quanto tempo leva para concluir uma formação?",
    resposta:
      "Varia por trilha e pela sua dedicação semanal, mas a maioria conclui a formação principal entre 6 e 12 meses estudando de forma consistente, com projetos reais desde as primeiras semanas.",
  },
  {
    pergunta: "As aulas são ao vivo ou gravadas?",
    resposta:
      "Você tem acesso a uma trilha completa de aulas gravadas, no seu ritmo, além de mentorias semanais ao vivo com os professores para tirar dúvidas e acelerar seu progresso.",
  },
  {
    pergunta: "O certificado tem validade real?",
    resposta: "Sim. A DevClub é reconhecida pelo MEC e emite diploma oficial de conclusão, válido em todo o território nacional para comprovar sua qualificação.",
  },
  {
    pergunta: "E se eu não conseguir acompanhar o ritmo das aulas?",
    resposta:
      "O acesso é no seu ritmo, não existe prazo para perder aulas. Além disso, você conta com suporte humano 7 dias por semana e mentorias semanais para nunca ficar travado sozinho.",
  },
  {
    pergunta: "A DevClub ajuda a conseguir emprego?",
    resposta:
      "Sim. Você tem acompanhamento semanal da nossa recrutadora, acesso a vagas exclusivas e uma comunidade ativa de profissionais que já contratam e indicam alunos da DevClub.",
  },
];

export function Faq() {
  const rootRef = useReveal<HTMLDivElement>();

  return (
    <section id="faq" className="relative overflow-hidden py-24 text-white sm:py-32">
      <div className="mx-auto grid w-full max-w-wrap gap-12 px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div ref={rootRef} className="flex flex-col gap-6 lg:sticky lg:top-28 lg:h-fit">
          <span data-reveal className="reveal flex items-center gap-2 font-display text-xs font-bold tracking-widest text-brand-purple-soft uppercase">
            <span className="h-2 w-2 shrink-0 rounded-full bg-brand-green" style={{ boxShadow: "0 0 10px #39D353" }} />
            Dúvidas
          </span>
          <h2 data-reveal className="reveal delay-75 font-display text-reel-heading font-bold leading-reel-heading tracking-reel-heading text-white">Perguntas que todo futuro aluno faz</h2>
          <p data-reveal className="reveal delay-150 max-w-sm text-base text-white/60">Ainda com dúvida? Fala direto com a gente antes de decidir.</p>
          <a
            data-reveal
            href="#"
            className="reveal delay-200 glass-surface inline-flex w-fit items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            <FiMessageSquare className="size-4 text-brand-purple-soft" />
            Falar com um consultor
          </a>
        </div>

        <ScrollReveal>
          <Accordion className="flex flex-col">
            {PERGUNTAS.map((item, index) => (
              <AccordionItem key={item.pergunta} value={`item-${index}`} className="border-t border-white/10 last:border-b">
                <AccordionTrigger className="py-5 text-base font-medium text-white sm:text-lg">{item.pergunta}</AccordionTrigger>
                <AccordionContent className="text-sm text-white/60 sm:text-base">{item.resposta}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
