"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  galleryFilters,
  type GalleryFilterId,
  type GalleryItem,
} from "@/lib/gallery-data";

/** Dark navy + sage — gallery-specific accents */
const navy = "bg-[#1e2a3a]";
const sage = "bg-[#6d8b6e]";
const navyText = "text-[#1e2a3a]";

function ComparisonHalves({
  beforeSrc,
  afterSrc,
}: {
  beforeSrc?: string;
  afterSrc?: string;
}) {
  return (
    <div className="flex min-h-[200px] w-full sm:min-h-[220px]">
      <div className="relative min-h-[200px] flex-1 overflow-hidden sm:min-h-[220px]">
        {beforeSrc ? (
          <Image
            src={beforeSrc}
            alt="Before cleaning"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#c5ccd4] via-[#aeb6c2] to-[#9aa3ad]"
            aria-hidden
          />
        )}
        <span
          className={cn(
            "absolute bottom-3 left-3 z-10 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-sm",
            navy,
          )}
        >
          Before
        </span>
      </div>
      <div className="relative min-h-[200px] flex-1 overflow-hidden border-l border-white/50 sm:min-h-[220px]">
        {afterSrc ? (
          <Image
            src={afterSrc}
            alt="After cleaning"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#d4ead9] via-[#b8d4c0] to-[#9fc4aa]"
            aria-hidden
          />
        )}
        <span
          className={cn(
            "absolute bottom-3 right-3 z-10 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-sm",
            sage,
          )}
        >
          After
        </span>
      </div>
    </div>
  );
}

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-[#e8e4dc] bg-white shadow-[0_12px_40px_-28px_rgba(30,42,58,0.35)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-24px_rgba(30,42,58,0.4)]">
      <div className="relative aspect-[10/7] w-full overflow-hidden sm:aspect-auto sm:min-h-[220px]">
        <ComparisonHalves beforeSrc={item.beforeSrc} afterSrc={item.afterSrc} />
      </div>
      <div className="flex flex-1 flex-col justify-center bg-white px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-gray sm:text-xs">
          {item.categoryLabel}
        </p>
        <h3 className="mt-1.5 font-heading text-base font-bold leading-snug text-charcoal sm:text-lg">
          {item.title}
        </h3>
      </div>
    </article>
  );
}

export function GalleryPageClient({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<GalleryFilterId>("all");

  const visible = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((i) => i.category === filter);
  }, [filter, items]);

  return (
    <div className="space-y-8 sm:space-y-10">
      <header className="space-y-3 text-center sm:text-left">
        <p
          className={cn(
            "text-[11px] font-semibold uppercase tracking-[0.2em] sm:text-xs",
            navyText,
          )}
        >
          Gallery / Results
        </p>
        <h1 className="font-heading text-3xl font-bold leading-tight text-[#1e2a3a] sm:text-4xl">
          See the Difference a Detailed Clean Makes
        </h1>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-gray sm:mx-0 sm:text-base">
          These sample placeholders are ready to be replaced with your real before-and-after photos.
        </p>
      </header>

      <div className="-mx-1 overflow-x-auto pb-1 sm:mx-0">
        <div
          className="flex w-max flex-nowrap gap-2 sm:w-full sm:flex-wrap sm:gap-2.5"
          role="tablist"
          aria-label="Filter gallery by room type"
        >
          {galleryFilters.map((tab) => {
            const active = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(tab.id)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e2a3a]/30 focus-visible:ring-offset-2",
                  active
                    ? `${navy} border-[#1e2a3a] text-white`
                    : `border-[#d4d0c8] bg-white ${navyText} hover:border-[#1e2a3a]/25`,
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <ul className="grid list-none gap-6 sm:gap-8 lg:grid-cols-3">
        {visible.map((item) => (
          <li key={item.id}>
            <GalleryCard item={item} />
          </li>
        ))}
      </ul>

      {visible.length === 0 ? (
        <p className="text-center text-sm text-muted-gray">
          No projects in this category yet—try &quot;All&quot; to see every result.
        </p>
      ) : null}
    </div>
  );
}
