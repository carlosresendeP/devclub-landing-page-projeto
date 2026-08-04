"use client";

import { useState, useEffect, useRef, useCallback, forwardRef, useImperativeHandle } from "react";
import Image from "next/image";
import gsap from "gsap";

export interface CardItem {
  imgUrl: string;
  alt?: string;
  linkUrl?: string;
}

export interface CardFanCarouselHandle {
  goTo: (index: number) => void;
  next: () => void;
  prev: () => void;
}

interface CardFanCarouselProps {
  cards: CardItem[];
  onActiveChange?: (index: number) => void;
  hideNav?: boolean;
}

const MAX_VISIBLE = 7;
const HALF = 3;

const FAN_POSITIONS = [
  { rot: -21, scale: 0.7756, x: -30, y: 7.3, zIndex: 1 },
  { rot: -14, scale: 0.8498, x: -22, y: 4.0, zIndex: 2 },
  { rot: -7, scale: 0.9346, x: -11, y: 1.3, zIndex: 3 },
  { rot: 0, scale: 1.0, x: 0, y: 0.0, zIndex: 10 },
  { rot: 7, scale: 0.9346, x: 11, y: 1.3, zIndex: 3 },
  { rot: 14, scale: 0.8498, x: 22, y: 4.0, zIndex: 2 },
  { rot: 21, scale: 0.7756, x: 30, y: 7.3, zIndex: 1 },
];

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

function getResponsiveMultiplier(width: number) {
  if (width < 480) return 0.28;
  if (width < 640) return 0.38;
  if (width < 768) return 0.5;
  if (width < 1024) return 0.75;
  return 1.0;
}

/**
 * Returns a multiplier (0..1] that scales y-offsets and entry animation
 * distances when the viewport is too short for the ideal layout height.
 */
function getHeightMultiplier(width: number) {
  let idealPx: number;
  if (width < 480) idealPx = 22 * 16;
  else if (width < 640) idealPx = 26 * 16;
  else if (width < 768) idealPx = 28 * 16;
  else if (width < 1024) idealPx = 34 * 16;
  else idealPx = 38 * 16;

  const available = window.innerHeight * 0.7;
  if (available >= idealPx) return 1;
  return available / idealPx;
}

function getSlotConfig(totalCards: number, slot: number) {
  if (totalCards >= MAX_VISIBLE) return FAN_POSITIONS[slot];
  const center = totalCards >> 1;
  const distance = totalCards > 1 ? (slot - center) / center : 0;
  const absDistance = Math.abs(distance);
  return {
    rot: distance * 21,
    scale: 1.0 - 0.2244 * absDistance * absDistance,
    x: distance * 30,
    y: absDistance * absDistance * 7.3,
    zIndex: 10 - Math.abs(slot - center),
  };
}

const ARROW_CLASSES =
  "relative flex items-center justify-center rounded-full border-[1.5px] border-white/10 bg-white/5 backdrop-blur-[16px] text-white/55 cursor-pointer shrink-0 z-30 outline-none shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-white/25 hover:text-white/80 active:opacity-70 transition-colors duration-300 before:content-[''] before:absolute before:inset-[3px] before:rounded-full before:border before:border-white/[0.04] before:pointer-events-none";

export const CardFanCarousel = forwardRef<CardFanCarouselHandle, CardFanCarouselProps>(
  function CardFanCarousel({ cards, onActiveChange, hideNav }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isAnimating = useRef(false);
    const hasEntered = useRef(false);
    const directionRef = useRef<"left" | "right" | null>(null);
    const prevVisible = useRef<Set<number>>(new Set());

    const totalCards = cards.length;
    const needsPagination = totalCards > MAX_VISIBLE;
    const [centerIndex, setCenterIndex] = useState(needsPagination ? HALF : totalCards >> 1);
    const centerIndexRef = useRef(centerIndex);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const mq = window.matchMedia("(max-width: 767px)");
      const update = () => setIsMobile(mq.matches);
      update();
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    }, []);

    const getVisibleMap = useCallback(
      (center: number, mobile: boolean) => {
        const map = new Map<number, number>();
        if (mobile) {
          map.set(center, 0);
          return map;
        }
        if (!needsPagination) {
          cards.forEach((_, i) => map.set(i, i));
          return map;
        }
        for (let slot = 0; slot < MAX_VISIBLE; slot++) {
          map.set(((center + slot - HALF) % totalCards + totalCards) % totalCards, slot);
        }
        return map;
      },
      [totalCards, needsPagination, cards]
    );

    const goTo = useCallback(
      (index: number) => {
        if (isAnimating.current || !totalCards) return;
        setCenterIndex((prev) => {
          const normalized = ((index % totalCards) + totalCards) % totalCards;
          if (normalized === prev) return prev;
          const diff = wrap(-(totalCards / 2), totalCards / 2, normalized - prev);
          directionRef.current = diff < 0 ? "left" : "right";
          isAnimating.current = true;
          return normalized;
        });
      },
      [totalCards]
    );

    const cycle = useCallback(
      (direction: "left" | "right") => {
        if (!needsPagination) return;
        goTo(centerIndexRef.current + (direction === "right" ? 1 : -1));
      },
      [needsPagination, goTo]
    );

    useImperativeHandle(
      ref,
      () => ({
        goTo,
        next: () => cycle("right"),
        prev: () => cycle("left"),
      }),
      [goTo, cycle]
    );

    useEffect(() => {
      centerIndexRef.current = centerIndex;
      onActiveChange?.(centerIndex);
    }, [centerIndex, onActiveChange]);

    useEffect(() => {
      const container = containerRef.current;
      if (!container || !totalCards) return;

      const cardElements = Array.from(container.querySelectorAll<HTMLElement>(".fan-card"));
      if (!cardElements.length) return;

      const visibleMap = getVisibleMap(centerIndex, isMobile);
      const previouslyVisible = prevVisible.current;
      const direction = directionRef.current;
      const isFirstMount = !hasEntered.current;
      const multiplier = getResponsiveMultiplier(window.innerWidth);
      const hMult = getHeightMultiplier(window.innerWidth);
      const slotCount = isMobile ? 1 : needsPagination ? MAX_VISIBLE : totalCards;
      const config = (slot: number) => getSlotConfig(slotCount, slot);

      if (isFirstMount) isAnimating.current = true;

      let completedCount = 0;
      const visibleCount = visibleMap.size;
      const onCardDone = () => {
        if (++completedCount >= visibleCount) {
          isAnimating.current = false;
          if (isFirstMount) hasEntered.current = true;
        }
      };

      cardElements.forEach((card, cardIndex) => {
        const slot = visibleMap.get(cardIndex);
        const wasVisible = previouslyVisible.has(cardIndex);

        if (slot !== undefined) {
          const { x, y, rot, scale, zIndex } = config(slot);
          const target = {
            x: `${x * multiplier}rem`,
            y: `${y * hMult}rem`,
            rotation: rot,
            scale,
            opacity: 1,
            zIndex,
          };

          if (isFirstMount) {
            gsap.set(card, { x: 0, y: `${12 * hMult}rem`, rotation: 0, scale: 0.5, opacity: 0 });
            gsap.to(card, { ...target, duration: 1.2, ease: "elastic.out(1.05,.78)", delay: 0.2 + slot * 0.06, onComplete: onCardDone });
          } else if (!wasVisible) {
            const enterX = direction === "right" ? 40 : -40;
            gsap.set(card, { x: `${enterX}rem`, y: `${y * hMult}rem`, rotation: direction === "right" ? 30 : -30, scale: 0.5, opacity: 0 });
            gsap.to(card, { ...target, duration: 0.6, ease: "power2.out", onComplete: onCardDone });
          } else {
            gsap.to(card, { ...target, duration: 0.5, ease: "power2.out", onComplete: onCardDone });
          }
        } else if (wasVisible) {
          const exitX = direction === "right" ? -40 : 40;
          gsap.to(card, { x: `${exitX}rem`, opacity: 0, scale: 0.5, rotation: direction === "right" ? -30 : 30, duration: 0.4, ease: "power2.in", zIndex: 0 });
        } else if (isFirstMount) {
          gsap.set(card, { opacity: 0, scale: 0.3, x: 0, y: 0, zIndex: 0 });
        }
      });

      prevVisible.current = new Set(visibleMap.keys());

      const onResize = () => {
        if (isAnimating.current) return;
        const mult = getResponsiveMultiplier(window.innerWidth);
        const hM = getHeightMultiplier(window.innerWidth);

        cardElements.forEach((card, cardIndex) => {
          const slot = visibleMap.get(cardIndex);
          if (slot === undefined) return;
          const base = config(slot);
          gsap.to(card, {
            x: `${base.x * mult}rem`,
            y: `${base.y * hM}rem`,
            rotation: base.rot,
            scale: base.scale,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
          });
        });
      };
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
      };
    }, [centerIndex, totalCards, getVisibleMap, needsPagination, isMobile]);

    if (!totalCards) return null;

    const chevron = (direction: "left" | "right") => (
      <svg className="relative z-[2] w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points={direction === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
      </svg>
    );

    return (
      <div className="flex flex-col items-center w-full px-4 md:px-8 relative z-20">
        <div className="flex items-center justify-center w-full max-w-[90rem]">
          <div ref={containerRef} className="fan-layout flex relative justify-center items-center w-full max-w-[80rem]">
            {cards.map((card, index) => (
              <div key={index} className={`fan-card ${index === centerIndex ? "is-active" : ""}`}>
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={card.imgUrl}
                    alt={card.alt || `Card ${index}`}
                    fill
                    sizes="(min-width: 1024px) 15rem, (min-width: 768px) 13rem, (min-width: 640px) 11rem, 16rem"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {needsPagination && !hideNav && (
          <div className="flex items-center justify-center gap-4 mt-4 md:mt-6 z-30">
            <button className={`${ARROW_CLASSES} w-10 h-10 md:w-12 md:h-12`} onClick={() => cycle("left")} aria-label="Previous">
              {chevron("left")}
            </button>
            <div className="flex items-center gap-2">
              {cards.map((_, i) => (
                <span key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === centerIndex ? "bg-white/80 scale-[1.3]" : "bg-white/15"}`} />
              ))}
            </div>
            <button className={`${ARROW_CLASSES} w-10 h-10 md:w-12 md:h-12`} onClick={() => cycle("right")} aria-label="Next">
              {chevron("right")}
            </button>
          </div>
        )}
      </div>
    );
  }
);

export default CardFanCarousel;
