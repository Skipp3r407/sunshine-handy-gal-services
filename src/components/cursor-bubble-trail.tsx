"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/** Full class strings so Tailwind can compile utilities used only imperatively. */
const BUBBLE_VARIANTS = [
  "cursor-trail-bubble border border-sky-400/55 bg-sky-200/25 shadow-[0_0_12px_rgba(56,189,248,0.45)]",
  "cursor-trail-bubble border border-[#7dd3fc]/55 bg-[#bae6fd]/22 shadow-[0_0_12px_rgba(125,211,252,0.4)]",
  "cursor-trail-bubble border border-aqua/50 bg-aqua/18 shadow-[0_0_12px_rgba(94,201,232,0.42)]",
  "cursor-trail-bubble border border-teal/45 bg-teal/14 shadow-[0_0_10px_rgba(21,153,184,0.35)]",
] as const;

const MAX_NODES = 44;

function spawnBubble(container: HTMLDivElement, clientX: number, clientY: number) {
  const el = document.createElement("div");
  const variant = BUBBLE_VARIANTS[Math.floor(Math.random() * BUBBLE_VARIANTS.length)];
  el.className = variant;
  const size = 6 + Math.random() * 10;
  el.style.width = `${size}px`;
  el.style.height = `${size}px`;
  el.style.left = `${clientX}px`;
  el.style.top = `${clientY}px`;
  container.appendChild(el);
  el.addEventListener(
    "animationend",
    () => {
      el.remove();
    },
    { once: true },
  );
  while (container.childElementCount > MAX_NODES) {
    container.firstElementChild?.remove();
  }
}

export function CursorBubbleTrail() {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const lastRef = useRef({ t: 0, x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;
    const container = containerRef.current;
    if (!container) return;

    let touchAccum = 0;

    const maybeSpawn = (clientX: number, clientY: number, minInterval: number, minDist: number) => {
      const now = performance.now();
      const { t, x, y } = lastRef.current;
      const dist = Math.hypot(clientX - x, clientY - y);
      if (now - t < minInterval && dist < minDist) return;
      lastRef.current = { t: now, x: clientX, y: clientY };
      spawnBubble(container, clientX, clientY);
    };

    const onMouseMove = (e: MouseEvent) => {
      maybeSpawn(e.clientX, e.clientY, 38, 16);
    };

    const onTouchMove = (e: TouchEvent) => {
      const tch = e.touches[0];
      if (!tch) return;
      touchAccum += 1;
      if (touchAccum % 3 !== 0) return;
      maybeSpawn(tch.clientX, tch.clientY, 90, 24);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[35]"
      aria-hidden
    />
  );
}
