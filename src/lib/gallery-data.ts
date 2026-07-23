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
      "SunShines Handy Gal focused on the tub basin, tile walls, and dark grout lines, lifting visible staining so the bathroom looked brighter and better cared for.",
    beforeSrc: "/images/gallery/beforebath.jpeg",
    afterSrc: "/images/gallery/afterbath.jpeg",
  },
  {
    id: "5",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Bathroom Window Detail",
    description:
      "This bathroom glass detail targeted cloudy buildup, water spots, and surrounding tile so the shower area looked clearer, cleaner, and more polished.",
    beforeSrc: "/images/gallery/beforebathroomwindow.jpeg",
    afterSrc: "/images/gallery/afterbathroomwindow.jpeg",
  },
  {
    id: "6",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Shower Refresh",
    description:
      "The shower walls, tub ledge, fixtures, and lower edges were carefully cleaned to reduce residue and bring back a fresh, brighter finish.",
    beforeSrc: "/images/gallery/beforeshower.jpeg",
    afterSrc: "/images/gallery/aftershower.jpeg",
  },
  {
    id: "7",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Toilet Area Reset",
    description:
      "SunShines Handy Gal gave the toilet bowl, seat, base, and nearby floor detailed attention, removing visible stains and restoring a cleaner bathroom feel.",
    beforeSrc: "/images/gallery/beforetoiliet.jpeg",
    afterSrc: "/images/gallery/aftertoilet.jpeg",
  },
  {
    id: "8",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Bathtub Detail Refresh",
    description:
      "This bathtub detail focused on the tub edge, wall seams, floor line, and built-up grime around the surround to make the area look cleaner and more maintained.",
    beforeSrc: "/images/gallery/beforebathtub.jpg",
    afterSrc: "/images/gallery/afterbathtub.jpg",
  },
  {
    id: "9",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Sink Shine Reset",
    description:
      "The sink bowl, faucet, counter, and vanity surface were cleaned with care to lift residue, soap film, and marks from daily use.",
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
      "The vanity, sink, toilet area, trash, and floor were reset with care, turning a cluttered bathroom into a cleaner and more comfortable space.",
    beforeSrc: "/images/gallery/bathroombefore724.jpg",
    afterSrc: "/images/gallery/bathroomafter724.jpg",
  },
  {
    id: "13",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Shower Glass and Tile Detail",
    description:
      "This shower transformation focused on foggy glass, tile walls, grout lines, and the shower floor to remove buildup and reveal a cleaner finish.",
    beforeSrc: "/images/gallery/bathroom724-2before.jpg",
    afterSrc: "/images/gallery/bathroom724-2after.jpg",
  },
  {
    id: "14",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Toilet Detail Reset",
    description:
      "SunShines Handy Gal tackled the toilet ring, bowl staining, seat area, and surrounding floor details so the bathroom looked fresh again.",
    beforeSrc: "/images/gallery/toiletbefore724.jpg",
    afterSrc: "/images/gallery/toiletafter724.jpg",
  },
  {
    id: "15",
    category: "bedroom",
    categoryLabel: "Bedroom",
    title: "Bedroom Pickup and Reset",
    description:
      "SunShines Handy Gal brought care and order back to this bedroom by clearing the floor, resetting the bed area, and giving the room a neater, more comfortable feel.",
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
  {
    id: "19",
    category: "kitchen",
    categoryLabel: "Kitchen",
    title: "Refrigerator Interior Reset",
    description:
      "SunShines Handy Gal removed spills, crumbs, and drawer buildup to turn the refrigerator interior into a cleaner, brighter food storage space.",
    beforeSrc: "/images/gallery/fridgebefore724.jpg",
    afterSrc: "/images/gallery/fridgeafter724.jpg",
  },
  {
    id: "20",
    category: "kitchen",
    categoryLabel: "Kitchen",
    title: "Oven Rack and Door Detail",
    description:
      "This oven received detailed care across the racks, glass, and interior surfaces, helping lift residue and restore a more polished finish.",
    beforeSrc: "/images/gallery/overbefore724.jpg",
    afterSrc: "/images/gallery/overafter724.jpg",
  },
  {
    id: "21",
    category: "bathroom",
    categoryLabel: "Bathroom",
    title: "Bathroom Sink and Counter Shine",
    description:
      "SunShines Handy Gal cleaned the sink basin, faucet handles, counter surface, mirror edge, and vanity buildup to reveal a smoother, brighter finish.",
    beforeSrc: "/images/gallery/beforesink724.jpg",
    afterSrc: "/images/gallery/aftgersink724.jpg",
  },
];
