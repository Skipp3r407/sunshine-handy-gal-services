"use client";

import { motion, useReducedMotion } from "framer-motion";
import { subtleLiftHover } from "@/lib/motion-variants";

type TestimonialCardProps = {
  name: string;
  quote: string;
  /** Opens enlarged view (e.g. testimonials page zoom). */
  onActivate?: () => void;
};

export function TestimonialCard({ name, quote, onActivate }: TestimonialCardProps) {
  const reduced = useReducedMotion();
  const interactive = Boolean(onActivate);

  return (
    <motion.article
      tabIndex={interactive ? 0 : undefined}
      role={interactive ? "button" : undefined}
      aria-label={interactive ? `Open ${name} testimonial larger` : undefined}
      onClick={interactive ? () => onActivate?.() : undefined}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onActivate?.();
              }
            }
          : undefined
      }
      className={`rounded-3xl border border-teal/10 bg-white p-6 shadow-[0_10px_24px_-20px_rgba(0,0,0,0.4)] transition-[box-shadow,border-color] duration-300 hover:border-teal/20 hover:shadow-[0_14px_32px_-22px_rgba(12,125,150,0.35)] ${
        interactive
          ? "cursor-pointer select-none outline-none focus-visible:border-teal-deep/35 focus-visible:ring-2 focus-visible:ring-teal-deep/25"
          : ""
      }`}
      whileHover={subtleLiftHover(reduced)}
    >
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-charcoal">{name}</p>
        <p className="text-sm text-golden-amber" aria-label="5 stars">
          ★★★★★
        </p>
      </div>
      <p className="text-base leading-7 text-muted-gray">“{quote}”</p>
    </motion.article>
  );
}
