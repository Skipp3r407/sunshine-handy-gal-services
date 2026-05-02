"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { TestimonialCard } from "@/components/testimonial-card";

export type TestimonialItem = {
  name: string;
  quote: string;
};

type TestimonialsExpandableSectionProps = {
  items: TestimonialItem[];
};

export function TestimonialsExpandableSection({ items }: TestimonialsExpandableSectionProps) {
  const reduced = useReducedMotion();
  const dialogTitleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState<TestimonialItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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
    mounted &&
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
              className="relative z-[1] max-h-[85vh] w-full max-w-2xl cursor-auto overflow-y-auto rounded-3xl border border-teal/15 bg-white p-6 shadow-[0_24px_60px_-28px_rgba(12,125,150,0.45)] sm:p-8"
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
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-teal/15 bg-cream/80 text-lg font-semibold leading-none text-charcoal transition hover:border-teal-deep/25 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep/35 sm:right-4 sm:top-4"
                aria-label="Close"
              >
                ×
              </button>
              <div className="pr-10">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <p id={dialogTitleId} className="text-base font-semibold text-charcoal sm:text-lg">
                    {open.name}
                  </p>
                  <p className="text-base text-golden-amber sm:text-lg" aria-label="5 stars">
                    ★★★★★
                  </p>
                </div>
                <p className="text-base leading-8 text-muted-gray sm:text-[1.05rem] sm:leading-9">
                  “{open.quote}”
                </p>
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
            onActivate={() => setOpen(item)}
          />
        ))}
      </StaggerGrid>
      {modal}
    </>
  );
}
