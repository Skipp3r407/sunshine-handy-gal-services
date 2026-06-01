"use client";

import { motion, useReducedMotion } from "framer-motion";
import { subtleLiftHover } from "@/lib/motion-variants";

type TestimonialCardProps = {
  name: string;
  quote: string;
  location?: string;
  date?: string;
  rating?: number;
  source?: string;
  /** Opens enlarged view (e.g. testimonials page zoom). */
  onActivate?: () => void;
};

const getStars = (rating: number) => "★".repeat(Math.max(0, Math.min(5, Math.round(rating))));

export function TestimonialCard({
  name,
  quote,
  location,
  date,
  rating,
  source,
  onActivate,
}: TestimonialCardProps) {
  const reduced = useReducedMotion();
  const interactive = Boolean(onActivate);
  const details = [location, date].filter(Boolean).join(" • ");

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
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-charcoal">{name}</p>
          {details ? (
            <p className="mt-1 text-xs font-medium text-muted-gray">{details}</p>
          ) : null}
        </div>
        {rating ? (
          <p className="shrink-0 text-sm text-golden-amber" aria-label={`${rating} out of 5 stars`}>
            {getStars(rating)}
          </p>
        ) : source ? (
          <p className="shrink-0 rounded-full bg-sunshine-yellow/15 px-3 py-1 text-xs font-semibold text-teal-deep">
            Recommendation
          </p>
        ) : null}
      </div>
      <p className="text-base leading-7 text-muted-gray">“{quote}”</p>
      {source ? (
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-teal-deep/70">
          {source}
        </p>
      ) : null}
    </motion.article>
  );
}
