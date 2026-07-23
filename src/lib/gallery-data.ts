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
];

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  categoryLabel: string;
  title: string;
  description: string;
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
    description:
      "SunShines Handy Gal took pride in breaking down baked-on oven buildup and restoring a cleaner, brighter cooking space.",
    beforeSrc: "/images/gallery/beforeoven.jpeg",
    afterSrc: "/images/gallery/afteroven.jpeg",
  },
  {
    id: "2",
    category: "kitchen",
    categoryLabel: "Kitchen",
    title: "Oven Door Reset",
    description:
      "This oven door was detailed with care to lift grime from the glass and frame, leaving the appliance looking refreshed.",
    beforeSrc: "/images/gallery/beforeoven2.jpeg",
    afterSrc: "/images/gallery/afteroven2.jpeg",
  },
  {
    id: "3",
    category: "kitchen",
    categoryLabel: "Kitchen",
    title: "Oven Detail Finish",
    description:
      "A focused oven detail removed heavy residue from the interior surfaces so the finish looked cleaner and easier to maintain.",
    beforeSrc: "/images/gallery/beforeoven3.jpeg",
    afterSrc: "/images/gallery/afteroven3.jpeg",
  },
  {
    id: "4",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Bathtub Shine Reset",
    description:
      "SunShines Handy Gal scrubbed the tub and tile lines with patience, turning a dull bathroom area into a brighter clean space.",
    beforeSrc: "/images/gallery/beforebath.jpeg",
    afterSrc: "/images/gallery/afterbath.jpeg",
  },
  {
    id: "5",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Bathroom Window Detail",
    description:
      "This detail focused on the window and surrounding bathroom surfaces, clearing buildup so the room felt lighter and fresher.",
    beforeSrc: "/images/gallery/beforebathroomwindow.jpeg",
    afterSrc: "/images/gallery/afterbathroomwindow.jpeg",
  },
  {
    id: "6",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Shower Refresh",
    description:
      "The shower was carefully cleaned from tile to fixtures, helping remove visible buildup and bring back a cleaner finish.",
    beforeSrc: "/images/gallery/beforeshower.jpeg",
    afterSrc: "/images/gallery/aftershower.jpeg",
  },
  {
    id: "7",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Toilet Area Reset",
    description:
      "SunShines Handy Gal gave this toilet area detailed attention, removing stains and leaving the bathroom noticeably refreshed.",
    beforeSrc: "/images/gallery/beforetoiliet.jpeg",
    afterSrc: "/images/gallery/aftertoilet.jpeg",
  },
  {
    id: "8",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Bathtub Detail Refresh",
    description:
      "This bathtub received a careful reset along the basin, edges, and nearby surfaces to create a cleaner, more polished look.",
    beforeSrc: "/images/gallery/beforebathtub.jpg",
    afterSrc: "/images/gallery/afterbathtub.jpg",
  },
  {
    id: "9",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Sink Shine Reset",
    description:
      "The sink and counter were cleaned with pride, lifting residue and restoring a smoother, brighter bathroom vanity area.",
    beforeSrc: "/images/gallery/beforesink.jpg",
    afterSrc: "/images/gallery/aftersink.jpg",
  },
  {
    id: "10",
    category: "living-space",
    categoryLabel: "Living Space",
    title: "Floor Detail Reset",
    description:
      "This floor detail focused on grime and traffic marks, transforming the surface into a cleaner foundation for the room.",
    beforeSrc: "/images/gallery/beforefloor.jpg",
    afterSrc: "/images/gallery/afterfloor.jpg",
  },
  {
    id: "11",
    category: "kitchen",
    categoryLabel: "Kitchen",
    title: "Kitchen Sink and Cabinet Reset",
    description:
      "SunShines Handy Gal cleaned the sink, counter, cabinet fronts, and floor area to make the kitchen feel organized and refreshed.",
    beforeSrc: "/images/gallery/kitchenbefore724.jpg",
    afterSrc: "/images/gallery/kitchenafter724.jpg",
  },
  {
    id: "12",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Bathroom Vanity Detail",
    description:
      "The vanity, sink, toilet area, and surrounding surfaces were reset with care to turn a messy bathroom into a cleaner space.",
    beforeSrc: "/images/gallery/bathroombefore724.jpg",
    afterSrc: "/images/gallery/bathroomafter724.jpg",
  },
  {
    id: "13",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Shower Glass and Tile Detail",
    description:
      "This shower transformation focused on glass, tile, and floor buildup, bringing back a cleaner and more inviting finish.",
    beforeSrc: "/images/gallery/bathroom724-2before.jpg",
    afterSrc: "/images/gallery/bathroom724-2after.jpg",
  },
  {
    id: "14",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Toilet Detail Reset",
    description:
      "SunShines Handy Gal tackled visible toilet stains and surrounding floor details to leave the bathroom looking fresh again.",
    beforeSrc: "/images/gallery/toiletbefore724.jpg",
    afterSrc: "/images/gallery/toiletafter724.jpg",
  },
  {
    id: "15",
    category: "bedroom",
    categoryLabel: "Bedroom",
    title: "Bedroom Pickup and Reset",
    description:
      "This bedroom was picked up, straightened, and cleaned so the space changed from cluttered to calm and livable.",
    beforeSrc: "/images/gallery/bedroombefore724.jpg",
    afterSrc: "/images/gallery/bedroomafter724.jpg",
  },
  {
    id: "16",
    category: "bedroom",
    categoryLabel: "Bedroom",
    title: "Bedroom Floor and Toy Reset",
    description:
      "SunShines Handy Gal organized toys and cleared the floor with care, giving the bedroom a neat and comfortable reset.",
    beforeSrc: "/images/gallery/bedroombefore724-2.jpg",
    afterSrc: "/images/gallery/bedroomafter724-2.jpg",
  },
  {
    id: "17",
    category: "living-space",
    categoryLabel: "Living Space",
    title: "Living Room Laundry Reset",
    description:
      "Laundry, clutter, and open floor space were handled with pride to transform the living room into a cleaner shared area.",
    beforeSrc: "/images/gallery/livingroombefore724.jpg",
    afterSrc: "/images/gallery/livingroomafter724.jpg",
  },
  {
    id: "18",
    category: "living-space",
    categoryLabel: "Living Space",
    title: "Open Room Carpet Refresh",
    description:
      "This room was reset by clearing items, refreshing the carpeted area, and restoring a more open, cared-for feel.",
    beforeSrc: "/images/gallery/roombefore724.jpg",
    afterSrc: "/images/gallery/roomafter724.jpg",
  },
];
