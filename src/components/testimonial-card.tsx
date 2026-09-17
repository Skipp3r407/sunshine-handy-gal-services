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

function ReviewBadge() {
  return (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-400 to-pink-500 shadow-[0_12px_30px_-16px_rgba(217,70,239,0.75)] ring-8 ring-fuchsia-100/70">
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <path
          d="M12 3.8 14.2 8.3l5 .7-3.6 3.5.8 5-4.4-2.3-4.4 2.3.8-5L4.8 9l5-.7L12 3.8Z"
          strokeLinejoin="round"
        />
        <path d="M7.2 20.4a9 9 0 1 1 9.6 0" strokeLinecap="round" />
      </svg>
    </div>
  );
}

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
  const sourceLabel = source ? source.replace(/^Facebook /, "") : null;

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
      className={`group relative overflow-hidden rounded-[2rem] border border-[#f2d7f5] bg-white px-6 pb-6 pt-8 text-center shadow-[0_18px_44px_-34px_rgba(111,39,145,0.45)] transition-[box-shadow,border-color] duration-300 hover:border-fuchsia-300/70 hover:shadow-[0_22px_48px_-32px_rgba(111,39,145,0.55)] ${
        interactive
          ? "cursor-pointer select-none outline-none focus-visible:border-fuchsia-300 focus-visible:ring-2 focus-visible:ring-fuchsia-300/35"
          : ""
      }`}
      whileHover={subtleLiftHover(reduced)}
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/70 to-transparent" />
      <ReviewBadge />
      <p className="mt-7 text-[0.95rem] italic leading-8 text-charcoal/65">
        &ldquo;{quote}&rdquo;
      </p>
      {interactive ? (
        <p className="mt-2 text-sm font-semibold text-teal-deep underline decoration-teal-deep/25 underline-offset-4 transition-colors group-hover:text-teal-hover">
          Read More
        </p>
      ) : null}
      <div className="mt-5">
        <p className="text-sm font-semibold text-charcoal">{name}</p>
        {details ? (
          <p className="mt-1 text-[13px] leading-5 text-muted-gray">{details}</p>
        ) : null}
      </div>
      <div className="mt-4 flex min-h-5 items-center justify-center">
        {rating ? (
          <p className="text-sm tracking-[0.18em] text-[#fff200]" aria-label={`${rating} out of 5 stars`}>
            {getStars(rating)}
          </p>
        ) : sourceLabel ? (
          <p className="rounded-full bg-sunshine-yellow/15 px-3 py-1 text-[11px] font-semibold capitalize text-teal-deep">
            {sourceLabel}
          </p>
        ) : (
          <p className="text-sm tracking-[0.18em] text-[#fff200]" aria-label="Recommended review">
            ★★★★★
          </p>
        )}
      </div>
    </motion.article>
  );
}
