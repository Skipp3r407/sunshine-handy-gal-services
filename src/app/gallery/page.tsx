import { Metadata } from "next";
import { GalleryPageClient } from "@/components/gallery-page-client";
import { galleryItems } from "@/lib/gallery-data";

export const metadata: Metadata = {
  title: "Gallery | Before & After Cleaning Results in Orlando",
  description:
    "Browse before-and-after results from Sunshines Handy Gal Services—kitchen, bathroom, move-out, Airbnb turnover, and more across Central Florida.",
};

export default function GalleryPage() {
  return (
    <div className="rounded-[2rem] bg-[#faf9f6] px-4 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:px-8 sm:py-12 lg:px-10 lg:py-14">
      <GalleryPageClient items={galleryItems} />
    </div>
  );
}
