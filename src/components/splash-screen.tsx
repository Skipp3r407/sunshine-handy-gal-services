"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { businessInfo } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const DISPLAY_MS = 3000;
const FADE_MS = 450;

/** Base splash logo was 220×72; +50% → 330×108 (same aspect). */
const LOGO_W = 330;
const LOGO_H = 108;

type Phase = "show" | "fade" | "done";

export function SplashScreen() {
  const [phase, setPhase] = useState<Phase>("show");
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      const id = requestAnimationFrame(() => setPhase("done"));
      return () => cancelAnimationFrame(id);
    }

    const showTimer = window.setTimeout(() => setPhase("fade"), DISPLAY_MS);
    return () => window.clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (phase !== "fade") return;
    const fadeTimer = window.setTimeout(() => setPhase("done"), FADE_MS);
    return () => window.clearTimeout(fadeTimer);
  }, [phase]);

  useEffect(() => {
    if (phase === "done") {
      document.documentElement.style.overflow = "";
      return;
    }
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[200] flex items-center justify-center bg-clean-white transition-opacity duration-[450ms] ease-out",
        phase === "fade" ? "pointer-events-none opacity-0" : "opacity-100",
      )}
      aria-busy={phase === "show"}
      aria-label="Loading"
    >
      <motion.div
        initial={
          reducedMotion ? { scale: 1, opacity: 1 } : { scale: 0.68, opacity: 0.88 }
        }
        animate={{ scale: 1, opacity: 1 }}
        transition={
          reducedMotion
            ? { duration: 0 }
            : {
                type: "spring",
                stiffness: 220,
                damping: 20,
                mass: 0.72,
              }
        }
        className="will-change-transform"
      >
        <Image
          src="/images/logo.png"
          alt={businessInfo.name}
          width={LOGO_W}
          height={LOGO_H}
          priority
          className="h-auto w-[min(330px,87vw)] select-none"
        />
      </motion.div>
    </div>
  );
}
