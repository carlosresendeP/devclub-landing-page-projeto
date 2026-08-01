"use client";

import { useId } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "motion/react";

import { cn } from "@/lib/utils";

async function initEngine(engine: Engine) {
  await loadSlim(engine);
}

interface SparklesProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}

export function SparklesCore({ id, className, background, minSize, maxSize, speed, particleColor, particleDensity }: SparklesProps) {
  const controls = useAnimation();
  const generatedId = useId();

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      controls.start({ opacity: 1, transition: { duration: 1 } });
    }
  };

  return (
    <ParticlesProvider init={initEngine}>
      <motion.div animate={controls} className={cn("opacity-0", className)}>
        <Particles
          id={id || generatedId}
          className="h-full w-full"
          particlesLoaded={particlesLoaded}
          options={{
            background: { color: { value: background || "transparent" } },
            fullScreen: { enable: false },
            fpsLimit: 90,
            interactivity: {
              events: {
                onHover: { enable: false, mode: "repulse" },
                resize: { enable: true },
              },
            },
            particles: {
              color: { value: particleColor || "#ffffff" },
              move: { enable: true, speed: 0.4, direction: "none", outModes: { default: "out" } },
              number: { density: { enable: true, width: 400, height: 400 }, value: particleDensity || 100 },
              opacity: {
                value: { min: 0.1, max: 1 },
                animation: { enable: true, speed: speed || 3, sync: false, startValue: "random" },
              },
              shape: { type: "circle" },
              size: { value: { min: minSize || 0.4, max: maxSize || 1.4 } },
            },
            detectRetina: true,
          }}
        />
      </motion.div>
    </ParticlesProvider>
  );
}
