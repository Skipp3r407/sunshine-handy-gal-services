"use client";

import { scrollToTopSmooth } from "@/lib/scroll-to-top";

type FloatingBackToTopProps = {
  /** Hide when chat panel is open so the dialog isn’t cluttered. */
  hidden?: boolean;
};

/** Fixed FAB stacked above the chat launcher; offsets mirror ChatWidget. */
export function FloatingBackToTop({ hidden }: FloatingBackToTopProps) {
  if (hidden) return null;

  return (
    <button
      type="button"
      data-no-spray
      onClick={() => scrollToTopSmooth()}
      className="nav-open-hide fixed bottom-[9.5rem] right-4 z-[100] flex h-14 w-14 items-center justify-center rounded-full border-2 border-teal-deep/25 bg-white text-teal-deep shadow-lg shadow-teal-deep/20 transition-[transform,box-shadow] hover:scale-[1.04] hover:border-teal-deep/45 hover:shadow-xl hover:shadow-teal-deep/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunshine-yellow/90 focus-visible:ring-offset-2 sm:bottom-[10.25rem] sm:right-5 lg:bottom-[5.75rem] lg:right-8"
      aria-label="Back to top of page"
    >
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 18V8M12 8l-5 5M12 8l5 5" />
      </svg>
    </button>
  );
}
