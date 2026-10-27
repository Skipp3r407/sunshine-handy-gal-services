"use client";

import { useEffect, useState } from "react";

/**
 * "Fresh from the job": photos Sheena adds from her phone with the Elevate photo app. They come from the
 * Elevate studio's gallery feed, so new photos appear here without redeploying the site. Hidden when empty.
 * Each job is a before/after: photos tagged before/after are paired and shown side by side under the section
 * (Kitchen, Bathroom, …) she picked in the app.
 */
const FEED_URL = "https://www.elevatedigitalstudios.net/api/gallery/sunshines-handy-gal";

type FeedItem = { id: string; caption: string; category?: string; stage?: string; pair?: string; added: string; src: string };
type Unit = { key: string; caption: string; before?: FeedItem; after?: FeedItem; single?: FeedItem };

/** Group a section's photos into before/after pairs; anything unpaired shows on its own. */
function toUnits(items: FeedItem[]): Unit[] {
  const byPair: Record<string, FeedItem[]> = {};
  const loose: FeedItem[] = [];
  items.forEach((i) => {
    if (i.pair) (byPair[i.pair] = byPair[i.pair] || []).push(i);
    else loose.push(i);
  });
  const units: Unit[] = [];
  const order: string[] = [];
  items.forEach((i) => { if (i.pair && order.indexOf(i.pair) < 0) order.push(i.pair); });
  order.forEach((pid) => {
    const g = byPair[pid];
    if (g.length >= 2) {
      const before = g.find((x) => x.stage === "before") || g[0];
      const after = g.find((x) => x.stage === "after") || g.find((x) => x !== before) || g[1];
      units.push({ key: "p-" + pid, caption: before.caption || after.caption || "", before, after });
    } else g.forEach((x) => loose.push(x));
  });
  loose.forEach((s) => units.push({ key: s.id, caption: s.caption || "", single: s }));
  return units;
}

function Half({ item, label, onOpen }: { item?: FeedItem; label: "Before" | "After"; onOpen: (i: FeedItem) => void }) {
  const badge = label === "Before" ? "bg-[#1e2a3a]" : "bg-[#6d8b6e]";
  return (
    <button
      type="button"
      onClick={() => item && onOpen(item)}
      className="group relative block w-full overflow-hidden"
      aria-label={`${label}: ${item?.caption || "cleaning job"}`}
    >
      {item ? (
        /* eslint-disable-next-line @next/next/no-img-element -- photos come from the Elevate feed (external, short-lived links) */
        <img src={item.src} alt={`${label} — ${item.caption || "cleaning job"}`} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
      ) : (
        <div className="aspect-[4/3] w-full bg-gradient-to-br from-[#e6e3dc] to-[#d4d0c8]" aria-hidden />
      )}
      <span className={`absolute bottom-2 left-2 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-sm ${badge}`}>{label}</span>
    </button>
  );
}

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
  const filtered = items.filter((i) => section === "All" || i.category === section);
  const units = toUnits(filtered).slice(0, 12);

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
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {units.map((u) => (
          <article key={u.key} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md">
            {u.before || u.after ? (
              <div className="grid grid-cols-2 divide-x divide-white/60">
                <Half item={u.before} label="Before" onOpen={setOpen} />
                <Half item={u.after} label="After" onOpen={setOpen} />
              </div>
            ) : (
              <button
                type="button"
                onClick={() => u.single && setOpen(u.single)}
                className="group block w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d8b6e]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- external feed photo */}
                <img src={u.single!.src} alt={u.single!.caption || "Recent cleaning job"} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
              </button>
            )}
            {u.caption ? <p className="px-3 py-2 text-sm leading-snug text-[#1e2a3a]/80">{u.caption}</p> : null}
          </article>
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
