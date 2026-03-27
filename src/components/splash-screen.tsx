"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const DISPLAY_MS = 3000;
const FADE_MS = 450;

type Phase = "show" | "fade" | "done";

export function SplashScreen() {
  const [phase, setPhase] = useState<Phase>("show");

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setPhase("done");
      return;
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
      <Image
        src="/images/logo.png"
        alt="Sunshines Handy Gal Services"
        width={220}
        height={72}
        priority
        className="h-auto w-[min(220px,58vw)] select-none"
      />
    </div>
  );
}
