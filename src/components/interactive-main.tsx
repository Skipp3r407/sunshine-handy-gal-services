"use client";

import { createPortal } from "react-dom";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Droplet = {
  key: string;
  tx: number;
  ty: number;
  size: number;
  delayMs: number;
  elongated?: boolean;
};

type SprayBurst = {
  id: number;
  x: number;
  y: number;
  /** Aim direction (radians); spray cone + mist rotate with pointer movement */
  angleRad: number;
  droplets: Droplet[];
};

type InteractiveMainProps = {
  children: ReactNode;
  className?: string;
};

/** Approximate sticky navbar height so progress sits just under it */
const SCROLL_BAR_TOP = "3.5rem";

/** Spray cone fan around `aimRad` (direction of recent pointer motion, screen coords). */
function createSprayDroplets(burstId: number, aimRad: number): Droplet[] {
  const droplets: Droplet[] = [];
  const centerAngle = aimRad;
  const spread = Math.PI / 3.2;
  const n = 17;

  for (let i = 0; i < n; i++) {
    const angle = centerAngle + (Math.random() - 0.5) * spread;
    const dist = 18 + Math.random() * 76;
    const elongated = Math.random() > 0.72;
    const base = 2.4 + Math.random() * 4.8;
    droplets.push({
      key: `${burstId}-${i}-${Math.random().toString(36).slice(2, 9)}`,
      tx: Math.round(Math.cos(angle) * dist * 10) / 10,
      ty: Math.round(Math.sin(angle) * dist * 10) / 10,
      size: Math.round(base * 10) / 10,
      delayMs: Math.round(Math.random() * 42),
      elongated,
    });
  }

  return droplets;
}

export function InteractiveMain({ children, className }: InteractiveMainProps) {
  const mainRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const rafRef = useRef<number | undefined>(undefined);
  const lastPointerRef = useRef<{ x: number; y: number } | null>(null);
  /** Latest meaningful movement vector (screen coords); fallback aims up-right like static bottle art */
  const sprayDirRef = useRef({ dx: 1, dy: -1 });
  const [sprays, setSprays] = useState<SprayBurst[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const updateMouseCss = useCallback((clientX: number, clientY: number) => {
    const el = mainRef.current;
    if (!el || reduced) return;
    const vw = typeof window !== "undefined" ? window.innerWidth || 1 : 1;
    const vh = typeof window !== "undefined" ? window.innerHeight || 1 : 1;
    const x = Math.max(0, Math.min(100, (clientX / vw) * 100));
    const y = Math.max(0, Math.min(100, (clientY / vh) * 100));
    el.style.setProperty("--mouse-x", `${x}%`);
    el.style.setProperty("--mouse-y", `${y}%`);
  }, [reduced]);

  const recordPointerMotion = useCallback((clientX: number, clientY: number) => {
    const prev = lastPointerRef.current;
    if (prev) {
      const dx = clientX - prev.x;
      const dy = clientY - prev.y;
      if (dx * dx + dy * dy > 0.25) {
        sprayDirRef.current = { dx, dy };
      }
    }
    lastPointerRef.current = { x: clientX, y: clientY };
  }, []);

  useEffect(() => {
    if (reduced) return;

    const onMove = (e: PointerEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        updateMouseCss(e.clientX, e.clientY);
        recordPointerMotion(e.clientX, e.clientY);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reduced, updateMouseCss, recordPointerMotion]);

  useEffect(() => {
    if (reduced) return;

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest("[data-no-spray]")) return;

      recordPointerMotion(e.clientX, e.clientY);

      const id = performance.now();
      const { dx, dy } = sprayDirRef.current;
      const mag = Math.hypot(dx, dy);
      const angleRad =
        mag > 1e-6 ? Math.atan2(dy, dx) : -Math.PI / 4;
      const droplets = createSprayDroplets(id, angleRad);
      setSprays((prev) => [
        ...prev,
        { id, x: e.clientX, y: e.clientY, angleRad, droplets },
      ]);
      window.setTimeout(() => {
        setSprays((prev) => prev.filter((s) => s.id !== id));
      }, 520);
    };

    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [reduced, recordPointerMotion]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      setScrollProgress(total <= 0 ? 0 : doc.scrollTop / total);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mainVars = {
    "--mouse-x": "50%",
    "--mouse-y": "40%",
  } as CSSProperties;

  return (
    <>
      <main ref={mainRef} className={cn(className)} style={mainVars}>
        {!reduced ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 opacity-90 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(520px circle at var(--mouse-x) var(--mouse-y), rgba(94,201,232,0.13), rgba(244,197,66,0.06) 40%, transparent 62%)",
            }}
          />
        ) : null}

        {children}

        <div
          className="pointer-events-none fixed left-0 right-0 z-[45] h-[3px]"
          style={{ top: SCROLL_BAR_TOP }}
          aria-hidden
        >
          <div
            className="h-full origin-left rounded-full bg-gradient-to-r from-teal-deep via-aqua to-sunshine-yellow shadow-[0_1px_8px_rgba(21,153,184,0.35)] transition-[transform] duration-150 ease-out"
            style={{
              transform: `scaleX(${scrollProgress})`,
              width: "100%",
            }}
          />
        </div>
      </main>
      {mounted &&
        !reduced &&
        createPortal(
          <>
            {sprays.map((burst) => (
              <div
                key={burst.id}
                className="pointer-events-none fixed z-[38]"
                style={{ left: burst.x, top: burst.y }}
              >
                {/* Droplet offsets are already in screen space from aim angle; rotate mist only */}
                <div
                  style={{
                    transform: `rotate(${burst.angleRad}rad)`,
                    transformOrigin: "0 0",
                  }}
                >
                  <div className="spray-mist" aria-hidden />
                </div>
                {burst.droplets.map((d) => {
                  const w = d.elongated ? d.size * 1.85 : d.size;
                  const h = d.elongated ? d.size * 0.52 : d.size;
                  const style = {
                    width: w,
                    height: h,
                    marginLeft: -w / 2,
                    marginTop: -h / 2,
                    borderRadius: d.elongated ? "999px" : undefined,
                    "--tx": `${d.tx}px`,
                    "--ty": `${d.ty}px`,
                    animationDelay: `${d.delayMs}ms`,
                  } as CSSProperties;
                  return (
                    <span
                      key={d.key}
                      className="spray-droplet"
                      style={style}
                    />
                  );
                })}
              </div>
            ))}
          </>,
          document.body,
        )}
    </>
  );
}
