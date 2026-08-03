"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import DecryptedText from "@/components/ui/decrypted-text";

const DURATION = 1500;

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotionRef.current) {
      setProgress(100);
      setHidden(true);
      return;
    }

    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(100, Math.round((elapsed / DURATION) * 100));
      setProgress(next);

      if (elapsed < DURATION) {
        raf = requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => setHidden(true), 350);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const { style } = document.documentElement;
    style.overflow = hidden ? "" : "hidden";
    return () => {
      style.overflow = "";
    };
  }, [hidden]);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-10 bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-vignette absolute inset-0" />

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.08 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center gap-5"
          >
            <div className="relative h-16 w-16 sm:h-20 sm:w-20">
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/30 blur-2xl"
                animate={{ opacity: [0.4, 0.85, 0.4], scale: [0.9, 1.15, 0.9] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <Image
                src="/LOGO.webp"
                alt="DevClub"
                fill
                priority
                sizes="(min-width: 640px) 80px, 64px"
                className="relative object-contain"
              />
            </div>

            <DecryptedText
              text="DEVCLUB"
              animateOn="view"
              sequential
              speed={45}
              revealDirection="start"
              parentClassName="font-accent text-sm tracking-[0.4em]"
              className="text-foreground/90"
              encryptedClassName="text-muted-foreground/50"
            />
          </motion.div>

          <div className="relative flex w-40 flex-col items-center gap-2 sm:w-48">
            <div className="h-0.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-brand"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <span className="font-sans text-xs tabular-nums text-muted-foreground">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
