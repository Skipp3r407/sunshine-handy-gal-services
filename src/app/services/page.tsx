import { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { PrimaryCtaLink } from "@/components/motion/primary-cta-link";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { services, siteChecklist, businessInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Cleaning Services in Orlando | ${businessInfo.name}`,
  description:
    "Explore professional cleaning services in Orlando including deep cleaning, move-out cleaning, Airbnb turnovers, RV cleaning, recurring care, organizing, and light commercial support.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="space-y-14">
      <section className="rounded-[2rem] bg-gradient-to-br from-[#fff8db] via-white to-[#eefaff] p-8 sm:p-12">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="Services"
            title="Cleaning and organizing services designed around your needs"
            description="Every home and business is different. We tailor service plans for your space, schedule, and priorities."
          />
        </Reveal>
      </section>

      <StaggerGrid className="grid gap-5 lg:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="group overflow-hidden rounded-3xl border border-[#ece3d3] bg-white transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-24px_rgba(12,125,150,0.15)]"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-b from-teal/5 to-cream/30">
              <Image
                src={service.imageSrc}
                alt={service.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/20 to-transparent"
                aria-hidden
              />
            </div>
            <div className="p-7">
              <h2 className="text-2xl font-bold text-charcoal">{service.title}</h2>
              <p className="mt-3 text-base leading-7 text-muted-gray">
                {service.description}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-gray">
                <span className="font-semibold text-charcoal">Who it&apos;s for:</span>{" "}
                {service.whoItsFor}
              </p>
              <p className="mt-3 rounded-2xl bg-cream px-4 py-3 text-sm font-semibold text-charcoal">
                {service.benefit}
              </p>
              <div className="mt-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-gray">
                  Example tasks we often tackle
                </h3>
                <ul className="mt-3 flex list-disc flex-col gap-y-2 pl-5 text-sm leading-snug text-muted-gray marker:text-teal-deep sm:grid sm:grid-cols-2 sm:gap-x-6">
                  {service.examples.map((line) => (
                    <li key={line} className="pl-1">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <PrimaryCtaLink href="/contact" className="mt-5 px-5 py-2">
                Request a Custom Quote
              </PrimaryCtaLink>
            </div>
          </article>
        ))}
      </StaggerGrid>

      <Reveal direction="up">
        <section className="rounded-3xl border border-teal-deep/20 bg-gradient-to-br from-[#f4fcff] to-[#fffdf5] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
          <h2 className="text-2xl font-bold text-charcoal">
            Why professional cleaning saves time and stress
          </h2>
          <StaggerGrid className="mt-5 grid gap-3 sm:grid-cols-2" stagger={0.06}>
            {siteChecklist.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-teal/10 bg-white px-4 py-3 text-sm text-muted-gray shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
              >
                {item}
              </div>
            ))}
          </StaggerGrid>
        </section>
      </Reveal>

      <CTASection
        title="Need a plan that fits your schedule?"
        description="Call or text today and we will help you choose the right cleaning service for your home or small business."
      />
    </div>
  );
}
