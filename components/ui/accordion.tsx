"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { cn } from "@/lib/utils";

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return <AccordionPrimitive.Root data-slot="accordion" className={cn("flex w-full flex-col", className)} {...props} />;
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return <AccordionPrimitive.Item data-slot="accordion-item" className={cn("border-t border-white/10 last:border-b", className)} {...props} />;
}

function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger flex flex-1 items-start justify-between gap-6 py-6 text-left font-display font-bold text-white outline-none transition-colors hover:text-brand-green-soft",
          className
        )}
        {...props}
      >
        {children}
        <FiChevronDown className="mt-1 shrink-0 text-brand-purple-soft group-aria-expanded/accordion-trigger:hidden" />
        <FiChevronUp className="mt-1 hidden shrink-0 text-brand-purple-soft group-aria-expanded/accordion-trigger:inline" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...props}
    >
      <div className={cn("h-(--accordion-panel-height) pb-6 font-body text-white/60 data-ending-style:h-0 data-starting-style:h-0", className)}>
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
