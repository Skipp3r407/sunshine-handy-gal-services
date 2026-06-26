"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { TestimonialCard } from "@/components/testimonial-card";
import type { Testimonial } from "@/lib/site-data";

const getStars = (rating: number) => "★".repeat(Math.max(0, Math.min(5, Math.round(rating))));

type TestimonialsExpandableSectionProps = {
  items: Testimonial[];
};

export function TestimonialsExpandableSection({ items }: TestimonialsExpandableSectionProps) {
  const reduced = useReducedMotion();
  const dialogTitleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState<Testimonial | null>(null);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => closeRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const modal =
    typeof document !== "undefined" &&
    createPortal(
      <AnimatePresence>
        {open ? (
          <motion.div
            key={open.name}
            className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0.12 : 0.22 }}
          >
            <div
              className="absolute inset-0 bg-charcoal/50 backdrop-blur-[3px]"
              aria-hidden
              onClick={close}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={dialogTitleId}
              className="relative z-[1] max-h-[85vh] w-full max-w-2xl cursor-auto overflow-y-auto rounded-[2rem] border border-fuchsia-200 bg-white p-6 text-center shadow-[0_24px_60px_-28px_rgba(111,39,145,0.45)] sm:p-8"
              initial={reduced ? false : { scale: 0.9, opacity: 0 }}
              animate={reduced ? { opacity: 1 } : { scale: 1, opacity: 1 }}
              exit={reduced ? { opacity: 0 } : { scale: 0.94, opacity: 0 }}
              transition={
                reduced
                  ? { duration: 0.12 }
                  : { type: "spring", damping: 26, stiffness: 280, mass: 0.85 }
              }
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-fuchsia-200 bg-cream/80 text-lg font-semibold leading-none text-charcoal transition hover:border-fuchsia-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300/35 sm:right-4 sm:top-4"
                aria-label="Close"
              >
                ×
              </button>
              <div className="px-2 pt-4 sm:px-6">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-400 to-pink-500 shadow-[0_12px_30px_-16px_rgba(217,70,239,0.75)] ring-8 ring-fuchsia-100/70">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-9 w-9 text-white"
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
                <div className="mb-5">
                  {open.rating ? (
                    <p
                      className="text-base tracking-[0.18em] text-[#fff200] sm:text-lg"
                      aria-label={`${open.rating} out of 5 stars`}
                    >
                      {getStars(open.rating)}
                    </p>
                  ) : open.source ? (
                    <p className="rounded-full bg-sunshine-yellow/15 px-3 py-1 text-xs font-medium capitalize text-teal-deep">
                      {open.source.replace(/^Facebook /, "")}
                    </p>
                  ) : (
                    <p className="text-base tracking-[0.18em] text-[#fff200]" aria-label="Recommended review">
                      ★★★★★
                    </p>
                  )}
                </div>
                <p className="text-base italic leading-8 text-charcoal/75 sm:text-[1.05rem] sm:leading-9">
                  &ldquo;{open.quote}&rdquo;
                </p>
                <p id={dialogTitleId} className="mt-6 text-base font-semibold text-charcoal sm:text-lg">
                  {open.name}
                </p>
                {[open.location, open.date].filter(Boolean).length ? (
                  <p className="mt-1 text-sm leading-6 text-muted-gray">
                    {[open.location, open.date].filter(Boolean).join(" • ")}
                  </p>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
      <StaggerGrid
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        enableHoverLift={false}
      >
        {items.map((item) => (
          <TestimonialCard
            key={item.name}
            name={item.name}
            quote={item.quote}
            location={item.location}
            date={item.date}
            rating={item.rating}
            source={item.source}
            onActivate={() => setOpen(item)}
          />
        ))}
      </StaggerGrid>
      {modal}
    </>
  );
}
