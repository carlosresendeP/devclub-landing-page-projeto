import * as React from "react";

import { cn } from "@/lib/utils";

const VARIANT_CLASSES = {
  default: "bg-brand-green text-surface-dark hover:bg-brand-green-soft",
  outline: "border border-white/15 bg-transparent text-white hover:border-white/40 hover:bg-white/5",
  ghost: "bg-transparent text-white hover:bg-white/5",
} as const;

const SIZE_CLASSES = {
  default: "h-10 px-5 text-sm",
  icon: "size-10",
  "icon-sm": "size-8",
} as const;

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: keyof typeof VARIANT_CLASSES;
  size?: keyof typeof SIZE_CLASSES;
}

function Button({ className, variant = "default", size = "default", ...props }: ButtonProps) {
  return (
    <button
      data-slot="button"
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-body font-semibold transition-colors duration-200 disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4 [&_svg]:shrink-0",
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className
      )}
      {...props}
    />
  );
}

export { Button };
