import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, Quote } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionHeading } from "@/components/shared/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { DEPOIMENTOS, type Depoimento } from "@/lib/depoimentos";

const STARS_URL = "https://stars.devclub.com.br/#historias";

const COLUMNS = [
  [DEPOIMENTOS[0], DEPOIMENTOS[3], DEPOIMENTOS[6]],
  [DEPOIMENTOS[1], DEPOIMENTOS[4], DEPOIMENTOS[7]],
  [DEPOIMENTOS[2], DEPOIMENTOS[5], DEPOIMENTOS[8]],
];

function DepoimentoCard({ item }: { item: Depoimento }) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm">
      <Quote className="size-5 text-primary/60" />
      <p className="text-sm leading-relaxed text-foreground/90">
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-1">
        <Avatar size="sm">
          <AvatarFallback className="bg-gradient-brand text-sm font-semibold text-foreground">
            {item.initials}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">{item.name}</p>
          <p className="truncate text-xs text-muted-foreground">{item.role}</p>
        </div>
      </div>
    </article>
  );
}

function DepoimentoMosaicCard({ item }: { item: Depoimento }) {
  return (
    <article className="mb-4 flex break-inside-avoid flex-col gap-4 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm sm:flex-row sm:items-stretch">
      <div className="flex flex-1 flex-col gap-4">
        <Quote className="size-5 text-primary/60" />
        <p className="text-sm leading-relaxed text-foreground/90">
          &ldquo;{item.quote}&rdquo;
        </p>
        <div className="mt-auto flex items-center gap-3">
          <Avatar size="sm">
            <AvatarImage src={item.photo} alt={item.name} />
            <AvatarFallback className="bg-gradient-brand text-[11px] font-semibold text-foreground">
              {item.initials}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">{item.name}</p>
            <p className="truncate text-xs text-muted-foreground">{item.role}</p>
          </div>
        </div>
      </div>

      <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-xl sm:h-auto sm:w-40">
        <Image
          src={item.photo}
          alt=""
          aria-hidden
          fill
          sizes="(min-width: 640px) 160px, 100vw"
          className="object-cover"
        />
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center bg-black/20"
        >
          <span className="flex size-10 items-center justify-center rounded-full bg-primary shadow-glow-primary">
            <Play className="size-4 fill-background text-background" />
          </span>
        </span>
      </div>
    </article>
  );
}

function DepoimentoListCard({ item }: { item: Depoimento }) {
  return (
    <article className="flex flex-col gap-5 rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-8">
      <Avatar size="lg" className="shrink-0">
        <AvatarImage src={item.photo} alt={item.name} />
        <AvatarFallback className="bg-gradient-brand text-sm font-semibold text-foreground">
          {item.initials}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-3">
        <Quote className="size-6 text-primary/60" />
        <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
          &ldquo;{item.quote}&rdquo;
        </p>
        <div>
          <p className="text-sm font-semibold text-foreground">{item.name}</p>
          <p className="text-xs text-muted-foreground">{item.role}</p>
        </div>
      </div>
    </article>
  );
}

function DepoimentoColumn({
  items,
  duration,
  reverse,
  className,
}: {
  items: Depoimento[];
  duration: string;
  reverse?: boolean;
  className?: string;
}) {
  const loop = [...items, ...items];
  return (
    <div className={cn("mask-fade-y h-160 overflow-hidden", className)}>
      <div
        className="flex flex-col gap-4 animate-marquee-y hover:[animation-play-state:paused]"
        style={{
          "--marquee-duration": duration,
          animationDirection: reverse ? "reverse" : "normal",
        } as React.CSSProperties}
      >
        {loop.map((item, index) => (
          <DepoimentoCard key={`${item.name}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export function Depoimentos() {
  return (
    <section id="depoimentos" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Vidas transformadas"
          title={
            <>
              Milhares de vidas{" "}
              <span className="text-gradient-brand">TRANSFORMADAS</span> dentro da
              nossa comunidade
            </>
          }
          lede="Não é promessa de carreira — é o que já acontece com quem entra e não desiste no meio do caminho."
          align="center"
          className="mx-auto"
        />

        <Tabs defaultValue="grade" className="mt-16">
          <TabsList className="mx-auto">
            <TabsTrigger value="grade">Grade</TabsTrigger>
            <TabsTrigger value="mosaico">Mosaico</TabsTrigger>
            <TabsTrigger value="lista">Lista</TabsTrigger>
          </TabsList>

          <TabsContent value="grade" className="mt-10">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <DepoimentoColumn items={COLUMNS[0]} duration="34s" />
              <DepoimentoColumn items={COLUMNS[1]} duration="42s" reverse />
              <DepoimentoColumn items={COLUMNS[2]} duration="38s" className="hidden lg:block" />
            </div>
          </TabsContent>

          <TabsContent value="mosaico" className="mt-10">
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {DEPOIMENTOS.map((item) => (
                <DepoimentoMosaicCard key={item.name} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="lista" className="mt-10">
            <div className="mx-auto flex max-w-4xl flex-col gap-4">
              {DEPOIMENTOS.map((item) => (
                <DepoimentoListCard key={item.name} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-14 flex justify-center">
          <Link
            href={STARS_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-full border border-border glass-surface px-6 py-3 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Ver todas as histórias
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
