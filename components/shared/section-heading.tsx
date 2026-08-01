"use client";

import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, lede, align = "left", className }: SectionHeadingProps) {
  const rootRef = useReveal<HTMLDivElement>();

  return (
    <div ref={rootRef} className={cn("flex max-w-170 flex-col gap-3", align === "center" && "mx-auto items-center text-center", className)}>
      <span data-reveal className="reveal flex items-center gap-2 font-display text-xs font-bold tracking-widest text-brand-purple-soft uppercase">
        <span className="h-2 w-2 shrink-0 rounded-full bg-brand-green" style={{ boxShadow: "0 0 10px #39D353" }} />
        {eyebrow}
      </span>
      <h2 data-reveal className="reveal delay-75 font-display text-reel-heading font-bold leading-reel-heading tracking-reel-heading text-white">{title}</h2>
      {lede ? (
        <p data-reveal className={cn("reveal delay-150 max-w-135 font-body text-reel-body leading-reel-body text-white/62", align === "center" && "mx-auto")}>{lede}</p>
      ) : null}
    </div>
  );
}
