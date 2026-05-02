export type GalleryCategory =
  | "kitchen"
  | "bathroom"
  | "bedroom"
  | "living-space"
  | "move-out"
  | "airbnb";

export type GalleryFilterId = "all" | GalleryCategory;

export const galleryFilters: { id: GalleryFilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "kitchen", label: "Kitchen" },
  { id: "bathroom", label: "Bathroom" },
  { id: "bedroom", label: "Bedroom" },
  { id: "living-space", label: "Living Space" },
  { id: "move-out", label: "Move-Out" },
  { id: "airbnb", label: "Airbnb" },
];

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  categoryLabel: string;
  title: string;
  /** Paths under /public, referenced as /images/... */
  beforeSrc?: string;
  afterSrc?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    category: "kitchen",
    categoryLabel: "Kitchen",
    title: "Kitchen Detail Refresh",
    beforeSrc: "/images/gallery/kitchen-before.jpg",
    afterSrc: "/images/gallery/kitchen-after.jpg",
  },
  {
    id: "2",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Bathroom Shine Reset",
    beforeSrc: "/images/gallery/bathroom-before.jpg",
    afterSrc: "/images/gallery/bathroom-after.jpg",
  },
  {
    id: "3",
    category: "bedroom",
    categoryLabel: "Bedroom",
    title: "Bedroom Calm & Clear",
    beforeSrc: "/images/gallery/bedroom-before.jpg",
    afterSrc: "/images/gallery/bedroom-after.jpg",
  },
  {
    id: "4",
    category: "living-space",
    categoryLabel: "Living Space",
    title: "Open Living Reset",
    beforeSrc: "/images/gallery/living-before.jpg",
    afterSrc: "/images/gallery/living-after.jpg",
  },
  {
    id: "5",
    category: "move-out",
    categoryLabel: "Move-Out",
    title: "Listing-Ready Handoff",
    beforeSrc: "/images/gallery/moveout-before.jpg",
    afterSrc: "/images/gallery/moveout-after.jpg",
  },
  {
    id: "6",
    category: "airbnb",
    categoryLabel: "Airbnb",
    title: "Guest-Ready Turnover",
    beforeSrc: "/images/gallery/airbnb-before.jpg",
    afterSrc: "/images/gallery/airbnb-after.jpg",
  },
];
