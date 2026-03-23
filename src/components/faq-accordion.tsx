"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <article
            key={item.question}
            className={cn(
              "rounded-2xl border bg-white transition-colors",
              isOpen
                ? "border-teal-deep/45 shadow-[inset_3px_0_0_0_rgba(244,197,66,0.85)]"
                : "border-[#efe9dc] hover:border-teal/25",
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-charcoal">
                {item.question}
              </span>
              <span
                className={cn(
                  "inline-flex h-7 w-7 items-center justify-center rounded-full border border-teal-deep/35 bg-sunshine-yellow/10 text-teal-deep transition-transform",
                  isOpen ? "rotate-45" : "",
                )}
              >
                +
              </span>
            </button>
            {isOpen ? (
              <div className="px-5 pb-5 text-sm leading-7 text-muted-gray">
                {item.answer}
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
