import { Metadata } from "next";
import { GalleryPageClient } from "@/components/gallery-page-client";
import {
  galleryFilters,
  galleryItems,
  type GalleryItem,
  miscGalleryItems,
  slugifyCategory,
} from "@/lib/gallery-data";
import { businessInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gallery | Before & After Cleaning Results in Orlando",
  description: `Browse before-and-after results from ${businessInfo.name}—kitchen, bathroom, move-out, Airbnb turnover, and more across Central Florida.`,
  alternates: {
    canonical: "/gallery",
  },
};

// Refresh the live "recent work" photos a few times an hour without redeploying.
export const revalidate = 300;

type FeedItem = {
  id: string;
  caption?: string;
  category?: string;
  stage?: string;
  pair?: string;
  src: string;
};

/**
 * Photos the client uploads from the Elevate photo app, mapped into the main
 * gallery's shape so they filter and count alongside the showcase set. Before/after
 * photos are paired by `pair`; a lone or half-pair photo shows as a single image.
 */
async function liveItems(): Promise<GalleryItem[]> {
  try {
    const res = await fetch(
      "https://www.elevatedigitalstudios.net/api/gallery/sunshines-handy-gal",
      { next: { revalidate: 300 } },
    );
    if (!res.ok) return [];
    const data = (await res.json()) as { items?: FeedItem[] };
    const items = data.items || [];
    // Group by pair; a photo with no pair is its own group (keyed by its id).
    const byPair: Record<string, FeedItem[]> = {};
    for (const i of items) (byPair[i.pair || `solo_${i.id}`] ||= []).push(i);
    const out: GalleryItem[] = [];
    for (const [pid, g] of Object.entries(byPair)) {
      const before = g.find((x) => x.stage === "before");
      const after = g.find((x) => x.stage === "after");
      const single = before && after ? undefined : after || before || g[0];
      const cat = (g.map((x) => x.category).find((c) => c && c.trim()) || "").trim();
      const caption = (g.map((x) => x.caption).find((c) => c && c.trim()) || "").trim();
      out.push({
        id: "live-" + pid,
        category: cat ? slugifyCategory(cat) : "other",
        categoryLabel: cat || "Recent Work",
        title: caption || (cat ? `${cat} Clean` : "Recent Work"),
        description:
          caption ||
          (before && after
            ? `A recent ${cat ? cat.toLowerCase() : "cleaning"} job — see the before and after.`
            : `A recent ${cat ? cat.toLowerCase() : "cleaning"} job.`),
        beforeSrc: before && after ? before.src : undefined,
        afterSrc: before && after ? after.src : single?.src,
        remote: true,
      });
    }
    return out;
  } catch {
    return [];
  }
}

export default async function GalleryPage() {
  const live = await liveItems();
  // Live jobs first, then the showcase set.
  const items = [...live, ...galleryItems];
  // Filter tabs: the fixed set plus any new live categories (RV, Whole Home, …), in order, no duplicates.
  const have = new Set(galleryFilters.map((f) => f.id));
  const filters = [...galleryFilters];
  for (const it of live) {
    if (it.category && !have.has(it.category)) {
      have.add(it.category);
      filters.push({ id: it.category, label: it.categoryLabel });
    }
  }

  return (
    <div className="rounded-[2rem] bg-[#faf9f6] px-4 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:px-8 sm:py-12 lg:px-10 lg:py-14">
      <GalleryPageClient items={items} miscItems={miscGalleryItems} filters={filters} />
    </div>
  );
}
