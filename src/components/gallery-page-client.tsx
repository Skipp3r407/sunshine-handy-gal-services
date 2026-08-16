"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  galleryFilters,
  type GalleryFilterId,
  type GalleryItem,
  type MiscGalleryItem,
} from "@/lib/gallery-data";

/** Dark navy + sage — gallery-specific accents */
const navy = "bg-[#1e2a3a]";
const sage = "bg-[#6d8b6e]";
const navyText = "text-[#1e2a3a]";

type VideoGalleryItem = {
  title: string;
  caption?: string;
  embedSrc?: string;
  embedTitle?: string;
};

const videoGalleryItems: VideoGalleryItem[] = [
  { title: "Before & after clips" },
  {
    title: "Cleaning walkthroughs",
    caption:
      "A satisfying walkthrough of another beautiful clean completed with SunShines Handy Gal's detail-focused care.",
    embedSrc: "https://www.youtube.com/embed/b2k2F55AwhI",
    embedTitle: "Satisfying cleaning walkthrough video",
  },
  { title: "Project highlights" },
];

function ComparisonHalves({
  beforeSrc,
  afterSrc,
  minHeightClass = "min-h-[200px] sm:min-h-[220px]",
  imageHover = false,
  imageClassName = "object-cover",
}: {
  beforeSrc?: string;
  afterSrc?: string;
  minHeightClass?: string;
  /** Subtle zoom on real photos */
  imageHover?: boolean;
  imageClassName?: string;
}) {
  const imgMotion = imageHover
    ? ({ whileHover: { scale: 1.06 } } as const)
    : {};

  return (
    <div className={cn("flex w-full", minHeightClass)}>
      <div
        className={cn(
          "relative flex-1 overflow-hidden",
          minHeightClass,
        )}
      >
        {beforeSrc ? (
          <motion.div
            className="absolute inset-0"
            {...imgMotion}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={beforeSrc}
              alt="Before cleaning"
              fill
              className={imageClassName}
              sizes="(max-width: 768px) 50vw, 48vw"
            />
          </motion.div>
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#c5ccd4] via-[#aeb6c2] to-[#9aa3ad] motion-safe:animate-[gallery-placeholder-pulse_5s_ease-in-out_infinite]"
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
      <div
        className={cn(
          "relative flex-1 overflow-hidden border-l border-white/50",
          minHeightClass,
        )}
      >
        {afterSrc ? (
          <motion.div
            className="absolute inset-0"
            {...imgMotion}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={afterSrc}
              alt="After cleaning"
              fill
              className={imageClassName}
              sizes="(max-width: 768px) 50vw, 48vw"
            />
          </motion.div>
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#d4ead9] via-[#b8d4c0] to-[#9fc4aa] motion-safe:animate-[gallery-placeholder-pulse_5s_ease-in-out_infinite]"
            style={{ animationDelay: "0.35s" }}
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

function GalleryLightboxPanel({
  item,
  onClose,
  reduced,
}: {
  item: GalleryItem;
  onClose: () => void;
  reduced: boolean | null;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const dialogMotion = reduced
    ? {}
    : {
        initial: { opacity: 0, scale: 0.94, y: 16 },
        animate: { opacity: 1, scale: 1, y: 0 },
        transition: { type: "spring" as const, stiffness: 380, damping: 28 },
      };

  return (
    <>
      <button
        type="button"
        className="absolute inset-0 bg-charcoal/72 backdrop-blur-[3px]"
        onClick={onClose}
        aria-label="Close enlarged view"
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-lightbox-title"
        className="relative z-10 flex max-h-[min(95vh,1080px)] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-white/25 bg-white shadow-[0_24px_80px_-24px_rgba(30,42,58,0.55)]"
        {...dialogMotion}
      >
        <div className="relative shrink-0 border-b border-[#e8e4dc] px-4 py-3 sm:px-5 sm:py-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-gray">
            {item.categoryLabel}
          </p>
          <h2
            id="gallery-lightbox-title"
            className="mt-1 font-heading text-lg font-bold text-charcoal sm:text-xl"
          >
            {item.title}
          </h2>
          <p className="mt-2 max-w-2xl pr-10 text-sm leading-relaxed text-muted-gray">
            {item.description}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full border border-[#e8e4dc] bg-white p-2 text-charcoal transition-colors hover:border-teal/25 hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep/35 focus-visible:ring-offset-2 sm:right-4 sm:top-4"
            aria-label="Close"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="relative min-h-0 flex-1 overflow-auto">
          <ComparisonHalves
            beforeSrc={item.beforeSrc}
            afterSrc={item.afterSrc}
            minHeightClass="min-h-[360px] sm:min-h-[540px] lg:min-h-[680px]"
            imageHover={!!(item.beforeSrc || item.afterSrc)}
            imageClassName="object-contain bg-charcoal/5"
          />
        </div>
        <p className="shrink-0 border-t border-[#e8e4dc] bg-cream/40 px-4 py-2.5 text-center text-xs text-muted-gray">
          Tap outside or press Esc to close.
        </p>
      </motion.div>
    </>
  );
}

function MiscGalleryLightboxPanel({
  item,
  onClose,
  reduced,
}: {
  item: MiscGalleryItem;
  onClose: () => void;
  reduced: boolean | null;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const dialogMotion = reduced
    ? {}
    : {
        initial: { opacity: 0, scale: 0.94, y: 16 },
        animate: { opacity: 1, scale: 1, y: 0 },
        transition: { type: "spring" as const, stiffness: 380, damping: 28 },
      };

  return (
    <>
      <button
        type="button"
        className="absolute inset-0 bg-charcoal/72 backdrop-blur-[3px]"
        onClick={onClose}
        aria-label="Close enlarged view"
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="misc-gallery-lightbox-title"
        className="relative z-10 flex max-h-[min(95vh,1080px)] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/25 bg-white shadow-[0_24px_80px_-24px_rgba(30,42,58,0.55)]"
        {...dialogMotion}
      >
        <div className="relative shrink-0 border-b border-[#e8e4dc] px-4 py-3 sm:px-5 sm:py-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-gray">
            Misc Gallery
          </p>
          <h2
            id="misc-gallery-lightbox-title"
            className="mt-1 font-heading text-lg font-bold text-charcoal sm:text-xl"
          >
            {item.title}
          </h2>
          <p className="mt-2 max-w-2xl pr-10 text-sm leading-relaxed text-muted-gray">
            {item.description}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full border border-[#e8e4dc] bg-white p-2 text-charcoal transition-colors hover:border-teal/25 hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep/35 focus-visible:ring-offset-2 sm:right-4 sm:top-4"
            aria-label="Close"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="relative min-h-[360px] flex-1 overflow-hidden bg-charcoal/5 sm:min-h-[540px] lg:min-h-[680px]">
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 92vw, 80vw"
          />
        </div>
        <p className="shrink-0 border-t border-[#e8e4dc] bg-cream/40 px-4 py-2.5 text-center text-xs text-muted-gray">
          Tap outside or press Esc to close.
        </p>
      </motion.div>
    </>
  );
}

function GalleryCard({
  item,
  onOpen,
  reduced,
}: {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
  reduced: boolean | null;
}) {
  const handleOpen = useCallback(() => onOpen(item), [item, onOpen]);

  return (
    <motion.article
      layout={!reduced}
      className={cn(
        "group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#e8e4dc] bg-white shadow-[0_12px_40px_-28px_rgba(30,42,58,0.35)] transition-[box-shadow,transform] duration-300",
        "hover:-translate-y-1 hover:border-teal/15 hover:shadow-[0_22px_48px_-26px_rgba(12,125,150,0.35)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep/40 focus-visible:ring-offset-2",
      )}
      tabIndex={0}
      role="button"
      aria-label={`Open larger view: ${item.title}`}
      onClick={handleOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOpen();
        }
      }}
      whileTap={reduced ? undefined : { scale: 0.992 }}
    >
      <div className="relative aspect-[10/7] w-full overflow-hidden sm:aspect-auto sm:min-h-[220px]">
        <ComparisonHalves
          beforeSrc={item.beforeSrc}
          afterSrc={item.afterSrc}
          imageHover={!!(item.beforeSrc || item.afterSrc)}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col justify-center bg-white px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-gray sm:text-xs">
          {item.categoryLabel}
        </p>
        <h3 className="mt-1.5 font-heading text-base font-bold leading-snug text-charcoal transition-colors duration-200 group-hover:text-teal-deep sm:text-lg">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-gray">
          {item.description}
        </p>
        <p className="mt-2 text-xs font-medium text-teal-deep/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          Click to enlarge
        </p>
      </div>
    </motion.article>
  );
}

function MiscGalleryCard({
  item,
  onOpen,
  reduced,
}: {
  item: MiscGalleryItem;
  onOpen: (item: MiscGalleryItem) => void;
  reduced: boolean | null;
}) {
  const handleOpen = useCallback(() => onOpen(item), [item, onOpen]);

  return (
    <motion.article
      layout={!reduced}
      className={cn(
        "group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#e8e4dc] bg-white shadow-[0_12px_40px_-28px_rgba(30,42,58,0.35)] transition-[box-shadow,transform] duration-300",
        "hover:-translate-y-1 hover:border-teal/15 hover:shadow-[0_22px_48px_-26px_rgba(12,125,150,0.35)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep/40 focus-visible:ring-offset-2",
      )}
      tabIndex={0}
      role="button"
      aria-label={`Open larger view: ${item.title}`}
      onClick={handleOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOpen();
        }
      }}
      whileTap={reduced ? undefined : { scale: 0.992 }}
    >
      <div className="relative aspect-[10/7] w-full overflow-hidden sm:aspect-auto sm:min-h-[260px]">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 92vw, 32vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/[0.14] via-transparent to-transparent" />
        <span
          className={cn(
            "absolute bottom-3 left-3 z-10 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-sm",
            navy,
          )}
        >
          Misc
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-center bg-white px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-gray sm:text-xs">
          Misc Gallery
        </p>
        <h3 className="mt-1.5 font-heading text-base font-bold leading-snug text-charcoal transition-colors duration-200 group-hover:text-teal-deep sm:text-lg">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-gray">
          {item.description}
        </p>
        <p className="mt-2 text-xs font-medium text-teal-deep/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          Click to enlarge
        </p>
      </div>
    </motion.article>
  );
}

function VideoLightboxPanel({
  item,
  onClose,
  reduced,
}: {
  item: VideoGalleryItem;
  onClose: () => void;
  reduced: boolean | null;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const dialogMotion = reduced
    ? {}
    : {
        initial: { opacity: 0, scale: 0.94, y: 16 },
        animate: { opacity: 1, scale: 1, y: 0 },
        transition: { type: "spring" as const, stiffness: 380, damping: 28 },
      };

  return (
    <>
      <button
        type="button"
        className="absolute inset-0 bg-charcoal/72 backdrop-blur-[3px]"
        onClick={onClose}
        aria-label="Close enlarged video"
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-lightbox-title"
        className="relative z-10 flex max-h-[min(95vh,1080px)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/25 bg-white shadow-[0_24px_80px_-24px_rgba(30,42,58,0.55)]"
        {...dialogMotion}
      >
        <div className="relative shrink-0 border-b border-[#e8e4dc] px-4 py-3 sm:px-5 sm:py-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-gray">
            Video Gallery
          </p>
          <h2
            id="video-lightbox-title"
            className="mt-1 font-heading text-lg font-bold text-charcoal sm:text-xl"
          >
            {item.title}
          </h2>
          {item.caption ? (
            <p className="mt-2 max-w-2xl pr-10 text-sm leading-relaxed text-muted-gray">
              {item.caption}
            </p>
          ) : null}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full border border-[#e8e4dc] bg-white p-2 text-charcoal transition-colors hover:border-teal/25 hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep/35 focus-visible:ring-offset-2 sm:right-4 sm:top-4"
            aria-label="Close"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="relative bg-charcoal/5 p-4 sm:p-6">
          <div className="mx-auto aspect-[9/16] max-h-[78vh] max-w-[min(92vw,420px)] overflow-hidden rounded-xl bg-[#1e2a3a] shadow-sm">
            <iframe
              className="h-full w-full"
              src={item.embedSrc}
              title={item.embedTitle ?? item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <p className="shrink-0 border-t border-[#e8e4dc] bg-cream/40 px-4 py-2.5 text-center text-xs text-muted-gray">
          Use the video controls for fullscreen, or press Esc to close.
        </p>
      </motion.div>
    </>
  );
}

export function GalleryPageClient({
  items,
  miscItems = [],
}: {
  items: GalleryItem[];
  miscItems?: MiscGalleryItem[];
}) {
  const reduced = useReducedMotion();
  const [filter, setFilter] = useState<GalleryFilterId>("all");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [miscLightboxItem, setMiscLightboxItem] =
    useState<MiscGalleryItem | null>(null);
  const [videoLightboxItem, setVideoLightboxItem] =
    useState<VideoGalleryItem | null>(null);

  const visible = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((i) => i.category === filter);
  }, [filter, items]);

  const closeLightbox = useCallback(() => setLightboxItem(null), []);
  const closeMiscLightbox = useCallback(() => setMiscLightboxItem(null), []);
  const closeVideoLightbox = useCallback(() => setVideoLightboxItem(null), []);

  return (
    <div className="space-y-8 sm:space-y-10">
      <motion.header
        className="space-y-3 text-center sm:text-left"
        initial={reduced ? undefined : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
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
          Real before-and-after results from detailed cleaning projects. Tap any card for a
          larger view.
        </p>
      </motion.header>

      <motion.div
        className="-mx-1 overflow-x-auto pb-1 sm:mx-0"
        initial={reduced ? undefined : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: reduced ? 0 : 0.06 }}
      >
        <LayoutGroup id="gallery-filters">
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
                    "relative shrink-0 overflow-hidden rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e2a3a]/30 focus-visible:ring-offset-2",
                    active
                      ? "border-[#1e2a3a] text-white"
                      : cn(
                          `border-[#d4d0c8] bg-white ${navyText}`,
                          "hover:border-teal/30 hover:bg-cream/80",
                        ),
                  )}
                >
                  {active ? (
                    <motion.span
                      layoutId="galleryFilterIndicator"
                      className={cn("absolute inset-0", navy)}
                      transition={
                        reduced
                          ? { duration: 0 }
                          : {
                              type: "spring",
                              stiffness: 440,
                              damping: 32,
                            }
                      }
                    />
                  ) : null}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>
      </motion.div>

      <p className="text-center text-sm text-muted-gray sm:text-left">
        Showing{" "}
        <span className="font-semibold tabular-nums text-charcoal">
          {visible.length}
        </span>{" "}
        {visible.length === 1 ? "project" : "projects"}
        {filter !== "all" ? (
          <span className="text-muted-gray">
            {" "}
            ·{" "}
            <button
              type="button"
              onClick={() => setFilter("all")}
              className="font-semibold text-teal-deep underline-offset-2 hover:underline"
            >
              Clear filter
            </button>
          </span>
        ) : null}
      </p>

      <ul className="grid list-none gap-6 sm:gap-8 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((item, index) => (
            <motion.li
              key={item.id}
              layout={!reduced}
              initial={reduced ? undefined : { opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduced ? undefined : { opacity: 0, scale: 0.96, y: -8 }}
              transition={{
                duration: reduced ? 0 : 0.28,
                delay: reduced ? 0 : index * 0.04,
                ease: [0.22, 1, 0.36, 1],
                layout: { duration: reduced ? 0 : 0.28 },
              }}
            >
              <GalleryCard
                item={item}
                onOpen={setLightboxItem}
                reduced={reduced}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {visible.length === 0 ? (
        <motion.p
          className="text-center text-sm text-muted-gray"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No projects in this category yet—try &quot;All&quot; to see every result.
        </motion.p>
      ) : null}

      {miscItems.length > 0 ? (
        <motion.section
          className="border-t border-[#e8e4dc] pt-8 sm:pt-10"
          initial={reduced ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: reduced ? 0 : 0.08 }}
        >
          <div className="mb-5 space-y-2 text-center sm:text-left">
            <p
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.2em] sm:text-xs",
                navyText,
              )}
            >
              Misc Gallery
            </p>
            <h2 className="font-heading text-2xl font-bold leading-tight text-[#1e2a3a] sm:text-3xl">
              More Project Photos
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-gray sm:mx-0 sm:text-base">
              Additional project moments that do not need a before-and-after
              comparison, but still show the care SunShines Handy Gal brings to
              each visit.
            </p>
          </div>

          <ul className="grid list-none gap-6 sm:gap-8 lg:grid-cols-3">
            {miscItems.map((item) => (
              <li key={item.id}>
                <MiscGalleryCard
                  item={item}
                  onOpen={setMiscLightboxItem}
                  reduced={reduced}
                />
              </li>
            ))}
          </ul>
        </motion.section>
      ) : null}

      <motion.section
        className="border-t border-[#e8e4dc] pt-8 sm:pt-10"
        initial={reduced ? undefined : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: reduced ? 0 : 0.1 }}
      >
        <div className="mb-5 space-y-2 text-center sm:text-left">
          <p
            className={cn(
              "text-[11px] font-semibold uppercase tracking-[0.2em] sm:text-xs",
              navyText,
            )}
          >
            Video Gallery
          </p>
          <h2 className="font-heading text-2xl font-bold leading-tight text-[#1e2a3a] sm:text-3xl">
            Project Videos
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-gray sm:mx-0 sm:text-base">
            Watch cleaning walkthroughs, before-and-after clips, and
            behind-the-scenes project videos from SunShines Handy Gal.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {videoGalleryItems.map((video) => (
            <div
              key={video.title}
              className="flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#d4d0c8] bg-white/80 p-6 text-center shadow-[0_18px_45px_-32px_rgba(30,42,58,0.38)]"
            >
              {video.embedSrc ? (
                <div className="mb-4 aspect-[9/16] w-full max-w-[180px] overflow-hidden rounded-xl bg-[#1e2a3a] shadow-sm">
                  <iframe
                    className="h-full w-full"
                    src={video.embedSrc}
                    title="Satisfying cleaning walkthrough video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1e2a3a] text-white shadow-sm">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path
                      d="M8 5v14l11-7z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
              <h3 className="font-heading text-lg font-bold text-[#1e2a3a]">
                {video.title}
              </h3>
              {video.caption ? (
                <p className="mt-2 text-sm leading-relaxed text-muted-gray">
                  {video.caption}
                </p>
              ) : null}
              {video.embedSrc ? (
                <button
                  type="button"
                  onClick={() => setVideoLightboxItem(video)}
                  className="mt-3 rounded-full border border-[#1e2a3a]/15 bg-white px-4 py-2 text-sm font-semibold text-[#1e2a3a] transition-colors hover:border-teal/30 hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e2a3a]/30 focus-visible:ring-offset-2"
                >
                  Enlarge video
                </button>
              ) : null}
            </div>
          ))}
        </div>
      </motion.section>

      {typeof document !== "undefined"
        ? createPortal(
            <AnimatePresence>
              {lightboxItem ? (
                <motion.div
                  key={lightboxItem.id}
                  className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8"
                  initial={reduced ? undefined : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduced ? undefined : { opacity: 0 }}
                  transition={{ duration: reduced ? 0 : 0.22 }}
                >
                  <GalleryLightboxPanel
                    item={lightboxItem}
                    onClose={closeLightbox}
                    reduced={reduced}
                  />
                </motion.div>
              ) : null}
              {miscLightboxItem ? (
                <motion.div
                  key={miscLightboxItem.id}
                  className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8"
                  initial={reduced ? undefined : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduced ? undefined : { opacity: 0 }}
                  transition={{ duration: reduced ? 0 : 0.22 }}
                >
                  <MiscGalleryLightboxPanel
                    item={miscLightboxItem}
                    onClose={closeMiscLightbox}
                    reduced={reduced}
                  />
                </motion.div>
              ) : null}
              {videoLightboxItem ? (
                <motion.div
                  key={videoLightboxItem.title}
                  className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8"
                  initial={reduced ? undefined : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduced ? undefined : { opacity: 0 }}
                  transition={{ duration: reduced ? 0 : 0.22 }}
                >
                  <VideoLightboxPanel
                    item={videoLightboxItem}
                    onClose={closeVideoLightbox}
                    reduced={reduced}
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </div>
  );
}
