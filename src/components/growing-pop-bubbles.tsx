"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const BUBBLE_COUNT = 15;

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function bubbleSpec(seed: number) {
  const rnd = mulberry32(seed);
  return {
    left: rnd() * 86 + 7,
    top: rnd() * 76 + 12,
    size: Math.round(48 + rnd() * 80),
    duration: 10 + rnd() * 12,
    stagger: rnd() * 5,
    repopPause: rnd() * 0.55 + 0.14,
    variant: Math.floor(rnd() * 4) as 0 | 1 | 2 | 3,
  };
}

const variantClass: Record<number, string> = {
  0: "gb-var-aqua",
  1: "gb-var-teal",
  2: "gb-var-sky",
  3: "gb-var-deep",
};

function LifecycleBubble({ bubbleIndex }: { bubbleIndex: number }) {
  const [cycle, setCycle] = useState(0);

  const spec = useMemo(
    () => bubbleSpec(bubbleIndex * 1_000_003 + cycle * 1_299_721),
    [bubbleIndex, cycle],
  );

  return (
    <div
      className="pointer-events-none absolute"
      style={{
        left: `${spec.left}%`,
        top: `${spec.top}%`,
      }}
    >
      <div
        key={`${bubbleIndex}-${cycle}`}
        className={cn("growing-pop-bubble-shell", variantClass[spec.variant])}
        style={
          {
            "--gb-size": `${spec.size}px`,
            "--gb-duration": `${spec.duration}s`,
            animationDelay: `${cycle === 0 ? spec.stagger : spec.repopPause}s`,
          } as CSSProperties
        }
        onAnimationEnd={() => setCycle((c) => c + 1)}
      />
    </div>
  );
}

export function GrowingPopBubbles() {
  const reduced = useReducedMotion();
  const [shift, setShift] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const vw = window.innerWidth || 1;
        const vh = window.innerHeight || 1;
        setShift({
          x: (e.clientX / vw - 0.5) * 20,
          y: (e.clientY / vh - 0.5) * 14,
        });
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      className="growing-pop-bubble-field pointer-events-none absolute inset-0 z-[3] overflow-hidden"
      style={{
        transform: `translate(${shift.x}px, ${shift.y}px)`,
        transition: "transform 1.45s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      aria-hidden
    >
      {Array.from({ length: BUBBLE_COUNT }, (_, i) => (
        <LifecycleBubble key={i} bubbleIndex={i} />
      ))}
    </div>
  );
}
