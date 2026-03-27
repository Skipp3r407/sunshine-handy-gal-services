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
  /** Replace with real photo paths under /public when ready */
  beforeSrc?: string;
  afterSrc?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    category: "kitchen",
    categoryLabel: "Kitchen",
    title: "Kitchen Detail Refresh",
  },
  {
    id: "2",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Bathroom Shine Reset",
  },
  {
    id: "3",
    category: "bedroom",
    categoryLabel: "Bedroom",
    title: "Bedroom Calm & Clear",
  },
  {
    id: "4",
    category: "living-space",
    categoryLabel: "Living Space",
    title: "Open Living Reset",
  },
  {
    id: "5",
    category: "move-out",
    categoryLabel: "Move-Out",
    title: "Listing-Ready Handoff",
  },
  {
    id: "6",
    category: "airbnb",
    categoryLabel: "Airbnb",
    title: "Guest-Ready Turnover",
  },
];
