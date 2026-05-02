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

const BUBBLES: BubbleSpec[] = [
  { left: "10%", top: "12%", size: 48, duration: 28, delay: 0, opacity: 0.24, fadeFloor: 0.048, fadeDuration: 92, variant: "aqua" },
  { left: "86%", top: "18%", size: 34, duration: 32, delay: 2, opacity: 0.22, fadeFloor: 0.042, fadeDuration: 104, variant: "teal" },
  { left: "22%", top: "48%", size: 26, duration: 26, delay: 1, opacity: 0.23, fadeFloor: 0.045, fadeDuration: 84, variant: "sky" },
  { left: "74%", top: "32%", size: 56, duration: 30, delay: 3, opacity: 0.21, fadeFloor: 0.04, fadeDuration: 112, variant: "aqua" },
  { left: "8%", top: "72%", size: 38, duration: 27, delay: 4, opacity: 0.225, fadeFloor: 0.044, fadeDuration: 88, variant: "teal" },
  { left: "52%", top: "8%", size: 20, duration: 24, delay: 2.5, opacity: 0.25, fadeFloor: 0.052, fadeDuration: 78, variant: "sky" },
  { left: "58%", top: "78%", size: 44, duration: 29, delay: 1.2, opacity: 0.21, fadeFloor: 0.042, fadeDuration: 96, variant: "aqua" },
  { left: "33%", top: "24%", size: 24, duration: 31, delay: 0.8, opacity: 0.23, fadeFloor: 0.045, fadeDuration: 88, variant: "sky" },
  { left: "92%", top: "54%", size: 42, duration: 27, delay: 3.2, opacity: 0.215, fadeFloor: 0.041, fadeDuration: 98, variant: "teal" },
  { left: "43%", top: "62%", size: 32, duration: 29, delay: 2.2, opacity: 0.235, fadeFloor: 0.048, fadeDuration: 90, variant: "aqua" },
  { left: "66%", top: "46%", size: 36, duration: 25, delay: 1.6, opacity: 0.22, fadeFloor: 0.043, fadeDuration: 94, variant: "sky" },
  { left: "17%", top: "88%", size: 28, duration: 33, delay: 4.2, opacity: 0.228, fadeFloor: 0.044, fadeDuration: 100, variant: "teal" },
  { left: "5%", top: "38%", size: 22, duration: 30, delay: 0.4, opacity: 0.245, fadeFloor: 0.05, fadeDuration: 86, variant: "aqua" },
  { left: "96%", top: "34%", size: 26, duration: 28, delay: 2.8, opacity: 0.23, fadeFloor: 0.046, fadeDuration: 91, variant: "sky" },
  { left: "48%", top: "42%", size: 18, duration: 22, delay: 1.1, opacity: 0.26, fadeFloor: 0.055, fadeDuration: 74, variant: "aqua" },
  { left: "72%", top: "84%", size: 30, duration: 31, delay: 3.6, opacity: 0.218, fadeFloor: 0.042, fadeDuration: 96, variant: "sky" },
  { left: "28%", top: "6%", size: 34, duration: 26, delay: 0.2, opacity: 0.232, fadeFloor: 0.046, fadeDuration: 89, variant: "teal" },
  { left: "38%", top: "74%", size: 24, duration: 29, delay: 2.6, opacity: 0.24, fadeFloor: 0.049, fadeDuration: 93, variant: "aqua" },
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
                reduced ? { opacity: b.opacity * 0.72 } : undefined
              }
              initial={false}
              animate={
                reduced
                  ? {}
                  : {
                      y: [0, -10 - (i % 4), 0],
                      opacity: [b.opacity, b.fadeFloor, b.opacity],
                      scale: [1, 1.04 + (i % 3) * 0.015, 1],
                    }
              }
              transition={{
                y: {
                  duration: b.duration,
                  delay: b.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
                opacity: {
                  duration: b.fadeDuration,
                  delay: b.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
                scale: {
                  duration: b.fadeDuration * 1.05,
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
