"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface TechArchitectureProps {
  className?: string;
}

export function TechArchitecture({ className }: TechArchitectureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const active = reducedMotion || inView;

  return (
    <div ref={containerRef} className={cn("text-white/12", className)}>
      {active && <TechCpuSvg animate={!reducedMotion} />}
    </div>
  );
}

function TechCpuSvg({ animate }: { animate: boolean }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 100" className="overflow-visible">
      {/* Traces */}
      <g stroke="currentColor" fill="none" strokeWidth="0.3" markerStart="url(#tech-circle-marker)">
        <path strokeDasharray="100 100" pathLength="100" d="M 10 20 h 79.5 q 5 0 5 5 v 30">
          {animate && <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1s" fill="freeze" calcMode="spline" keySplines="0.25,0.1,0.5,1" keyTimes="0; 1" />}
        </path>
        <path strokeDasharray="100 100" pathLength="100" d="M 180 10 h -69.7 q -5 0 -5 5 v 30">
          {animate && <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1s" fill="freeze" calcMode="spline" keySplines="0.25,0.1,0.5,1" keyTimes="0; 1" />}
        </path>
        <path strokeDasharray="100 100" pathLength="100" d="M 130 20 v 21.8 q 0 5 -5 5 h -10">
          {animate && <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1s" fill="freeze" calcMode="spline" keySplines="0.25,0.1,0.5,1" keyTimes="0; 1" />}
        </path>
        <path strokeDasharray="100 100" pathLength="100" d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50">
          {animate && <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1s" fill="freeze" calcMode="spline" keySplines="0.25,0.1,0.5,1" keyTimes="0; 1" />}
        </path>
        <path strokeDasharray="100 100" pathLength="100" d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20">
          {animate && <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1s" fill="freeze" calcMode="spline" keySplines="0.25,0.1,0.5,1" keyTimes="0; 1" />}
        </path>
        <path strokeDasharray="100 100" pathLength="100" d="M 94.8 95 v -36">
          {animate && <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1s" fill="freeze" calcMode="spline" keySplines="0.25,0.1,0.5,1" keyTimes="0; 1" />}
        </path>
        <path strokeDasharray="100 100" pathLength="100" d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14">
          {animate && <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1s" fill="freeze" calcMode="spline" keySplines="0.25,0.1,0.5,1" keyTimes="0; 1" />}
        </path>
        <path strokeDasharray="100 100" pathLength="100" d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20">
          {animate && <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1s" fill="freeze" calcMode="spline" keySplines="0.25,0.1,0.5,1" keyTimes="0; 1" />}
        </path>
      </g>

      {/* Traveling light pulses, one per trace, flowing into the chip */}
      {animate && (
        <>
          <g mask="url(#tech-mask-1)"><circle className="tech-light tech-light-1" cx="0" cy="0" r="8" fill="url(#tech-blue-grad)" /></g>
          <g mask="url(#tech-mask-2)"><circle className="tech-light tech-light-2" cx="0" cy="0" r="8" fill="url(#tech-yellow-grad)" /></g>
          <g mask="url(#tech-mask-3)"><circle className="tech-light tech-light-3" cx="0" cy="0" r="8" fill="url(#tech-pinkish-grad)" /></g>
          <g mask="url(#tech-mask-4)"><circle className="tech-light tech-light-4" cx="0" cy="0" r="8" fill="url(#tech-white-grad)" /></g>
          <g mask="url(#tech-mask-5)"><circle className="tech-light tech-light-5" cx="0" cy="0" r="8" fill="url(#tech-green-grad)" /></g>
          <g mask="url(#tech-mask-6)"><circle className="tech-light tech-light-6" cx="0" cy="0" r="8" fill="url(#tech-orange-grad)" /></g>
          <g mask="url(#tech-mask-7)"><circle className="tech-light tech-light-7" cx="0" cy="0" r="8" fill="url(#tech-cyan-grad)" /></g>
          <g mask="url(#tech-mask-8)"><circle className="tech-light tech-light-8" cx="0" cy="0" r="8" fill="url(#tech-rose-grad)" /></g>
        </>
      )}

      {/* Chip */}
      <g>
        <g fill="url(#tech-connection-gradient)">
          <rect x="93" y="37" width="2.5" height="5" rx="0.7" />
          <rect x="104" y="37" width="2.5" height="5" rx="0.7" />
          <rect x="116.3" y="44" width="2.5" height="5" rx="0.7" transform="rotate(90 116.25 45.5)" />
          <rect x="122.8" y="44" width="2.5" height="5" rx="0.7" transform="rotate(90 116.25 45.5)" />
          <rect x="104" y="16" width="2.5" height="5" rx="0.7" transform="rotate(180 105.25 39.5)" />
          <rect x="114.5" y="16" width="2.5" height="5" rx="0.7" transform="rotate(180 105.25 39.5)" />
          <rect x="80" y="-13.6" width="2.5" height="5" rx="0.7" transform="rotate(270 115.25 19.5)" />
          <rect x="87" y="-13.6" width="2.5" height="5" rx="0.7" transform="rotate(270 115.25 19.5)" />
        </g>

        <rect x="85" y="40" width="30" height="20" rx="2" fill="#181818" filter="url(#tech-light-shadow)" />

        {/* "CPU" label, fades out once the traces finish drawing */}
        <text x="92" y="52.5" fontSize="7" fill="white" fontWeight="600" letterSpacing="0.05em" opacity={animate ? undefined : "0"}>
          {animate && <animate attributeName="opacity" from="1" to="0" begin="0.9s" dur="0.5s" fill="freeze" />}
          CPU
        </text>

        {/* DevClub mark, fades in as the chip "boots up" */}
        <image href="/LOGO.webp" x="92.5" y="43" width="15" height="15" opacity={animate ? "0" : "1"} style={{ filter: "drop-shadow(0 0 4px rgba(57,211,83,0.65))" }}>
          {animate && <animate attributeName="opacity" from="0" to="1" begin="0.9s" dur="0.5s" fill="freeze" />}
        </image>
      </g>

      {/* Masks (feed each colored pulse only along its own wire) */}
      <defs>
        <mask id="tech-mask-1"><path d="M 10 20 h 79.5 q 5 0 5 5 v 24" strokeWidth="0.5" stroke="white" /></mask>
        <mask id="tech-mask-2"><path d="M 180 10 h -69.7 q -5 0 -5 5 v 24" strokeWidth="0.5" stroke="white" /></mask>
        <mask id="tech-mask-3"><path d="M 130 20 v 21.8 q 0 5 -5 5 h -10" strokeWidth="0.5" stroke="white" /></mask>
        <mask id="tech-mask-4"><path d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" strokeWidth="0.5" stroke="white" /></mask>
        <mask id="tech-mask-5"><path d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20" strokeWidth="0.5" stroke="white" /></mask>
        <mask id="tech-mask-6"><path d="M 94.8 95 v -36" strokeWidth="0.5" stroke="white" /></mask>
        <mask id="tech-mask-7"><path d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14" strokeWidth="0.5" stroke="white" /></mask>
        <mask id="tech-mask-8"><path d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20" strokeWidth="0.5" stroke="white" /></mask>

        <radialGradient id="tech-blue-grad" fx="1">
          <stop offset="0%" stopColor="#00E8ED" />
          <stop offset="50%" stopColor="#08F" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="tech-yellow-grad" fx="1">
          <stop offset="0%" stopColor="#FFD800" />
          <stop offset="50%" stopColor="#FFD800" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="tech-pinkish-grad" fx="1">
          <stop offset="0%" stopColor="#830CD1" />
          <stop offset="50%" stopColor="#FF008B" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="tech-white-grad" fx="1">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="tech-green-grad" fx="1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="tech-orange-grad" fx="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="tech-cyan-grad" fx="1">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="tech-rose-grad" fx="1">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        <filter id="tech-light-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="1.5" dy="1.5" stdDeviation="1" floodColor="black" floodOpacity="0.1" />
        </filter>

        <marker id="tech-circle-marker" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="14" markerHeight="14">
          <circle cx="5" cy="5" r="2" fill="black" stroke="#232323" strokeWidth="0.5">
            {animate && <animate attributeName="r" values="0; 3; 2" dur="0.5s" />}
          </circle>
        </marker>

        <linearGradient id="tech-connection-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4F4F4F" />
          <stop offset="60%" stopColor="#121214" />
        </linearGradient>
      </defs>
    </svg>
  );
}
