"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  staggerContainerVariants,
  staggerItemVariants,
  subtleLiftHover,
} from "@/lib/motion-variants";

export type ServiceAreaItem = {
  name: string;
  description: string;
  hoverImageSrc: string;
  hoverImageAlt: string;
};

type ServiceAreaGridProps = {
  items: ServiceAreaItem[];
};

export function ServiceAreaGrid({ items }: ServiceAreaGridProps) {
  const reduced = useReducedMotion();
  const [hoveredName, setHoveredName] = useState<string | null>(null);
  const fadeMs = reduced ? "duration-150" : "duration-700";

  return (
    <div
      data-service-area-grid
      className="relative isolate overflow-hidden rounded-[2rem] border border-teal/15 bg-gradient-to-br from-[#eef8fc] via-white to-[#fffdf8] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-6 lg:p-8"
      onMouseLeave={() => setHoveredName(null)}
    >
      <p className="sr-only">
        Focusing or hovering a location softly fades in a related photograph behind this list.
      </p>
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        {items.map((area) => {
          const active = hoveredName === area.name;
          return (
            <div
              key={`bg-${area.name}`}
              className={`absolute inset-0 transition-opacity ease-out ${fadeMs} ${
                active ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={area.hoverImageSrc}
                alt=""
                fill
                className="object-cover opacity-[0.47]"
                sizes="(max-width: 1024px) 100vw, min(1200px, 100vw)"
                priority={false}
              />
            </div>
          );
        })}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#eef8fc]/82 via-white/78 to-[#fffdf8]/85 mix-blend-soft-light"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-white/55 via-transparent to-[#f4fbfd]/40"
          aria-hidden
        />
      </div>

      <motion.div
        className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -4% 0px" }}
        variants={staggerContainerVariants(reduced, 0.07)}
      >
        {items.map((area) => (
          <motion.article
            key={area.name}
            variants={staggerItemVariants(reduced)}
            whileHover={subtleLiftHover(reduced)}
            onMouseEnter={() => setHoveredName(area.name)}
            onFocus={() => setHoveredName(area.name)}
            onBlur={(e) => {
              const next = e.relatedTarget as HTMLElement | null;
              if (next?.closest("[data-service-area-grid]")) return;
              setHoveredName(null);
            }}
            tabIndex={0}
            className="rounded-2xl border border-teal/20 bg-white/95 p-5 shadow-[0_12px_28px_-24px_rgba(0,0,0,0.5)] backdrop-blur-[2px] transition-[box-shadow,border-color,background-color] duration-300 hover:border-teal-deep/35 hover:bg-white hover:shadow-[0_14px_32px_-22px_rgba(12,125,150,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#eef8fc]"
          >
            <h3 className="text-lg font-semibold text-charcoal">{area.name}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-gray">{area.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
