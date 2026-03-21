import { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ServiceAreaGrid } from "@/components/service-area-grid";
import { CTASection } from "@/components/cta-section";
import { serviceAreas } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Service Areas | Orlando & Central Florida Cleaning",
  description:
    "Sunshines Handy Gal Services proudly serves Orlando, Lake Nona, Winter Park, Lake Mary, St. Cloud, and nearby Central Florida communities.",
};

export default function ServiceAreasPage() {
  return (
    <div className="space-y-14">
      <section className="rounded-[2rem] bg-gradient-to-br from-[#fff6d5] via-white to-[#eaf9ff] p-8 sm:p-12">
        <SectionHeading
          eyebrow="Service Areas"
          title="Local cleaning services throughout Central Florida"
          description="If you are looking for dependable, detail-focused cleaning in Orlando or nearby areas, Sunshine&apos;s Handy Gal Services is here to help."
        />
      </section>

      <ServiceAreaGrid items={serviceAreas} />

      <CTASection
        title="Not sure if you are in our service area?"
        description="Reach out with your location and service needs. We will quickly confirm availability and next steps."
      />
    </div>
  );
}
