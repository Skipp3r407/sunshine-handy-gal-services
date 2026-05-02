"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

type BubbleVariant = "aqua" | "teal" | "sky";

type BubbleSpec = {
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  /** Peak opacity (slowly fades toward ~fadeFloor via animation) */
  opacity: number;
  fadeFloor: number;
  fadeDuration: number;
  variant: BubbleVariant;
};

/**
 * Horizontally spread; start above the viewport so bubbles drift down across the screen.
 */
const BUBBLES: BubbleSpec[] = [
  { left: "6%", top: "-14%", size: 46, duration: 42, delay: 0, opacity: 0.24, fadeFloor: 0.05, fadeDuration: 96, variant: "aqua" },
  { left: "18%", top: "-20%", size: 32, duration: 48, delay: 2.2, opacity: 0.22, fadeFloor: 0.045, fadeDuration: 108, variant: "teal" },
  { left: "28%", top: "-11%", size: 26, duration: 38, delay: 0.6, opacity: 0.23, fadeFloor: 0.048, fadeDuration: 88, variant: "sky" },
  { left: "38%", top: "-17%", size: 54, duration: 52, delay: 4.1, opacity: 0.21, fadeFloor: 0.042, fadeDuration: 118, variant: "aqua" },
  { left: "48%", top: "-9%", size: 22, duration: 34, delay: 1.2, opacity: 0.26, fadeFloor: 0.054, fadeDuration: 78, variant: "sky" },
  { left: "58%", top: "-19%", size: 40, duration: 46, delay: 3.3, opacity: 0.22, fadeFloor: 0.046, fadeDuration: 102, variant: "teal" },
  { left: "68%", top: "-13%", size: 30, duration: 40, delay: 0.3, opacity: 0.24, fadeFloor: 0.049, fadeDuration: 90, variant: "aqua" },
  { left: "78%", top: "-22%", size: 36, duration: 50, delay: 2.8, opacity: 0.21, fadeFloor: 0.044, fadeDuration: 112, variant: "sky" },
  { left: "88%", top: "-10%", size: 44, duration: 44, delay: 1.7, opacity: 0.23, fadeFloor: 0.047, fadeDuration: 96, variant: "teal" },
  { left: "94%", top: "-16%", size: 28, duration: 36, delay: 3.9, opacity: 0.25, fadeFloor: 0.051, fadeDuration: 84, variant: "aqua" },
  { left: "12%", top: "-7%", size: 20, duration: 32, delay: 4.6, opacity: 0.27, fadeFloor: 0.056, fadeDuration: 74, variant: "sky" },
  { left: "52%", top: "-23%", size: 34, duration: 46, delay: 0.9, opacity: 0.22, fadeFloor: 0.046, fadeDuration: 100, variant: "teal" },
  { left: "72%", top: "-8%", size: 24, duration: 35, delay: 2.4, opacity: 0.24, fadeFloor: 0.048, fadeDuration: 82, variant: "sky" },
  { left: "32%", top: "-18%", size: 42, duration: 43, delay: 3.6, opacity: 0.23, fadeFloor: 0.047, fadeDuration: 94, variant: "aqua" },
  { left: "82%", top: "-12%", size: 38, duration: 41, delay: 1.1, opacity: 0.235, fadeFloor: 0.046, fadeDuration: 92, variant: "teal" },
  { left: "42%", top: "-15%", size: 52, duration: 54, delay: 4.8, opacity: 0.2, fadeFloor: 0.041, fadeDuration: 122, variant: "aqua" },
  { left: "62%", top: "-21%", size: 26, duration: 37, delay: 0.15, opacity: 0.25, fadeFloor: 0.05, fadeDuration: 86, variant: "sky" },
  { left: "22%", top: "-6%", size: 18, duration: 30, delay: 5.2, opacity: 0.28, fadeFloor: 0.058, fadeDuration: 72, variant: "aqua" },
];

const variantRing: Record<BubbleVariant, string> = {
  aqua:
    "border-[#38bdf8]/52 bg-gradient-to-br from-[#b8efff]/38 to-[#1599b8]/22 ring-1 ring-[#7dd3fc]/28 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_0_26px_rgba(56,189,248,0.22)]",
  teal:
    "border-[#22d3ee]/44 bg-gradient-to-br from-[#5eead4]/26 to-[#0e7490]/18 ring-1 ring-cyan-400/22 shadow-[inset_0_1px_0_rgba(255,255,255,0.38),0_0_22px_rgba(34,211,238,0.18)]",
  sky:
    "border-[#60a5fa]/48 bg-gradient-to-br from-[#bfdbfe]/34 to-[#2563eb]/18 ring-1 ring-blue-300/26 shadow-[inset_0_1px_0_rgba(255,255,255,0.42),0_0_24px_rgba(96,165,250,0.2)]",
};

export function FloatingBubbles() {
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 28, damping: 18, mass: 0.4 });
  const springY = useSpring(my, { stiffness: 28, damping: 18, mass: 0.4 });
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (reduced) return;

    const update = (clientX: number, clientY: number) => {
      const cx = clientX / window.innerWidth - 0.5;
      const cy = clientY / window.innerHeight - 0.5;
      mx.set(cx * 44);
      my.set(cy * 44);
    };

    const onMove = (e: MouseEvent) => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => update(e.clientX, e.clientY));
    };

    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => update(t.clientX, t.clientY));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [reduced, mx, my]);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute inset-[-8%]"
        style={{
          x: reduced ? 0 : springX,
          y: reduced ? 0 : springY,
        }}
      >
        {BUBBLES.map((b, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: b.left,
              top: b.top,
              width: b.size,
              height: b.size,
            }}
            initial={
              reduced
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              opacity: {
                duration: reduced ? 0 : 2.4 + (i % 5) * 0.28,
                delay: reduced ? 0 : b.delay * 0.42,
                ease: [0.22, 1, 0.36, 1],
              },
              scale: {
                duration: reduced ? 0 : 3 + (i % 5) * 0.32,
                delay: reduced ? 0 : b.delay * 0.38,
                ease: [0.34, 1.45, 0.64, 1],
              },
            }}
          >
            <motion.div
              className={`absolute inset-0 rounded-full border ${variantRing[b.variant]}`}
              style={
                reduced ? { opacity: b.opacity * 0.78 } : undefined
              }
              initial={false}
              animate={
                reduced
                  ? {}
                  : {
                      y: [0, "118vh"],
                      opacity: [b.opacity * 0.88, b.fadeFloor * 1.35, b.opacity * 0.88],
                    }
              }
              transition={{
                y: {
                  duration: b.duration * 0.85,
                  delay: b.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
                opacity: {
                  duration: b.fadeDuration * 0.55,
                  delay: b.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
