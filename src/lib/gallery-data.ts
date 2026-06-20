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
  { id: "living-space", label: "Living Space" },
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
    title: "Oven Interior Detail",
    beforeSrc: "/images/gallery/beforeoven.jpeg",
    afterSrc: "/images/gallery/afteroven.jpeg",
  },
  {
    id: "2",
    category: "kitchen",
    categoryLabel: "Kitchen",
    title: "Oven Door Reset",
    beforeSrc: "/images/gallery/beforeoven2.jpeg",
    afterSrc: "/images/gallery/afteroven2.jpeg",
  },
  {
    id: "3",
    category: "kitchen",
    categoryLabel: "Kitchen",
    title: "Oven Detail Finish",
    beforeSrc: "/images/gallery/beforeoven3.jpeg",
    afterSrc: "/images/gallery/afteroven3.jpeg",
  },
  {
    id: "4",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Bathtub Shine Reset",
    beforeSrc: "/images/gallery/beforebath.jpeg",
    afterSrc: "/images/gallery/afterbath.jpeg",
  },
  {
    id: "5",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Bathroom Window Detail",
    beforeSrc: "/images/gallery/beforebathroomwindow.jpeg",
    afterSrc: "/images/gallery/afterbathroomwindow.jpeg",
  },
  {
    id: "6",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Shower Refresh",
    beforeSrc: "/images/gallery/beforeshower.jpeg",
    afterSrc: "/images/gallery/aftershower.jpeg",
  },
  {
    id: "7",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Toilet Area Reset",
    beforeSrc: "/images/gallery/beforetoiliet.jpeg",
    afterSrc: "/images/gallery/aftertoilet.jpeg",
  },
  {
    id: "8",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Bathtub Detail Refresh",
    beforeSrc: "/images/gallery/beforebathtub.jpg",
    afterSrc: "/images/gallery/afterbathtub.jpg",
  },
  {
    id: "9",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Sink Shine Reset",
    beforeSrc: "/images/gallery/beforesink.jpg",
    afterSrc: "/images/gallery/aftersink.jpg",
  },
  {
    id: "10",
    category: "living-space",
    categoryLabel: "Living Space",
    title: "Floor Detail Reset",
    beforeSrc: "/images/gallery/beforefloor.jpg",
    afterSrc: "/images/gallery/afterfloor.jpg",
  },
];
