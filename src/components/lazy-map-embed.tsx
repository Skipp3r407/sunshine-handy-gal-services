"use client";

import { useEffect, useRef, useState } from "react";

type LazyMapEmbedProps = {
  src: string;
  title: string;
  className?: string;
};

/**
 * Google Maps embed that only loads once the box is actually on screen or tapped.
 * The embed pulls in over 1 MB of Google JavaScript, so it should not load with the page.
 */
export function LazyMapEmbed({ src, title, className }: LazyMapEmbedProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (load) return;
    const box = boxRef.current;
    if (!box || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(box);
    return () => observer.disconnect();
  }, [load]);

  return (
    <div ref={boxRef} className={className}>
      {load ? (
        <iframe
          title={title}
          src={src}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoad(true)}
          className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-2 text-sm font-semibold text-teal-deep transition hover:bg-[#d6e5ee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-deep/35"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          Tap to load map
          <span className="sr-only">: {title}</span>
        </button>
      )}
    </div>
  );
}
