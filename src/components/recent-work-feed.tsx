"use client";

import { useEffect, useState } from "react";

/**
 * "Fresh from the job": photos Sheena adds from her phone with the Elevate photo app. They come from the
 * Elevate studio's gallery feed, so new photos appear here without redeploying the site. Hidden when empty.
 */
const FEED_URL = "https://www.elevatedigitalstudios.net/api/gallery/sunshines-handy-gal";

type FeedItem = { id: string; caption: string; category?: string; added: string; src: string };

export function RecentWorkFeed() {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [open, setOpen] = useState<FeedItem | null>(null);
  const [section, setSection] = useState("All");

  useEffect(() => {
    fetch(FEED_URL)
      .then((r) => (r.ok ? r.json() : { items: [] }))
      .then((d: { items?: FeedItem[] }) => setItems((d.items || []).slice(0, 60)))
      .catch(() => setItems([]));
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (items.length === 0) return null;
  // Sheena picks a section for each photo in her app; show them as tabs once there are 2 or more.
  const sections = [...new Set(items.map((i) => i.category).filter((c): c is string => Boolean(c)))];
  const shown = items.filter((i) => section === "All" || i.category === section).slice(0, 12);

  return (
    <section aria-labelledby="recent-work-heading" className="mb-12">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6d8b6e]">Fresh from the job</p>
      <h2 id="recent-work-heading" className="mt-2 text-2xl font-bold text-[#1e2a3a] sm:text-3xl">
        Recent Work
      </h2>
      {sections.length > 1 ? (
        <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter photos by service">
          {["All", ...sections].map((name) => (
            <button
              key={name}
              type="button"
              aria-pressed={section === name}
              onClick={() => setSection(name)}
              className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${section === name ? "border-[#6d8b6e] bg-[#6d8b6e] text-white" : "border-[#1e2a3a]/15 bg-white text-[#1e2a3a] hover:border-[#6d8b6e]"}`}
            >
              {name}
            </button>
          ))}
        </div>
      ) : null}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {shown.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOpen(item)}
            className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-black/5 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d8b6e]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- photos come from the Elevate feed (external, short-lived links) */}
            <img src={item.src} alt={item.caption || "Recent cleaning job"} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
            {item.caption ? <p className="px-3 py-2 text-sm leading-snug text-[#1e2a3a]/80">{item.caption}</p> : null}
          </button>
        ))}
      </div>
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.caption || "Photo"}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- external feed photo */}
          <img src={open.src} alt={open.caption || "Recent cleaning job"} className="max-h-[80vh] max-w-full rounded-xl" />
          {open.caption ? <p className="mt-3 max-w-xl text-center text-white">{open.caption}</p> : null}
          <button type="button" className="absolute right-4 top-3 text-4xl leading-none text-white" aria-label="Close">
            ×
          </button>
        </div>
      ) : null}
    </section>
  );
}
