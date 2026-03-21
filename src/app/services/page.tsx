import { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { services, siteChecklist } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Cleaning Services in Orlando | Sunshines Handy Gal Services",
  description:
    "Explore professional cleaning services in Orlando including deep cleaning, move-out cleaning, recurring care, organizing, and light commercial support.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-14">
      <section className="rounded-[2rem] bg-gradient-to-br from-[#fff8db] via-white to-[#eefaff] p-8 sm:p-12">
        <SectionHeading
          eyebrow="Services"
          title="Cleaning and organizing services designed around your needs"
          description="Every home and business is different. We tailor service plans for your space, schedule, and priorities."
        />
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-3xl border border-[#ece3d3] bg-white p-7"
          >
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
            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-full bg-teal px-5 py-2 text-sm font-semibold text-white transition hover:bg-teal/90"
            >
              Request Quote
            </Link>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-teal/20 bg-[#f6fcff] p-8">
        <h2 className="text-2xl font-bold text-charcoal">
          Why professional cleaning saves time and stress
        </h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {siteChecklist.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-white bg-white px-4 py-3 text-sm text-muted-gray"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <CTASection
        title="Need a plan that fits your schedule?"
        description="Call or message today and we will help you choose the right cleaning service for your home or small business."
      />
    </div>
  );
}
