import Link from "next/link";
import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { PrimaryCtaLink } from "@/components/motion/primary-cta-link";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { businessInfo, services, testimonials } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Why Hire Us | ${businessInfo.name}`,
  description: `See why Orlando homeowners, renters, hosts, and small businesses choose ${businessInfo.name} for trustworthy, detail-focused cleaning and organizing.`,
  alternates: {
    canonical: "/why-hire-us",
  },
};

const reasons = [
  {
    title: "Trust in Your Space",
    body:
      "Inviting someone into your home or business should feel comfortable. We communicate clearly, respect personal belongings, and treat each room with the care we would want in our own space.",
  },
  {
    title: "Detail-Focused Quality",
    body:
      "Clients choose us for the finishing touches: handles wiped, corners checked, surfaces polished, and rooms left feeling lighter instead of just quickly straightened.",
  },
  {
    title: "Flexible, Custom Quotes",
    body:
      "Every home, rental, RV, and office has different priorities. We build quotes around your space, timing, and service goals instead of forcing a one-size-fits-all package.",
  },
  {
    title: "Reliable Communication",
    body:
      "From the first message to the final walkthrough, we keep the process simple. You know what to expect, how to reach us, and what happens next.",
  },
];

const standards = [
  "We listen to your priorities before we start.",
  "We focus on high-touch and often-missed areas.",
  "We use careful techniques for kitchens, bathrooms, floors, and fixtures.",
  "We respect pets, families, work-from-home schedules, and small business hours.",
  "We offer recurring, one-time, move-ready, rental, RV, and organizing support.",
  "We finish with a walkthrough mindset so the space feels ready when you return.",
];

const process = [
  {
    title: "Tell Us What Matters",
    body:
      "Share your service type, space details, timing, and the areas that need extra attention.",
  },
  {
    title: "Get a Custom Plan",
    body:
      "We match the scope to your priorities, whether you need a full reset, maintenance clean, turnover, or organization help.",
  },
  {
    title: "Enjoy the Reset",
    body:
      "Come back to a cleaner, calmer space with the details handled and the stress taken off your plate.",
  },
];

const serviceLinks = services.slice(0, 6).map((service) => service.title);

export default function WhyHireUsPage() {
  const featuredQuote = testimonials[0];

  return (
    <div className="space-y-14">
      <section className="rounded-[2rem] bg-gradient-to-br from-[#fff8db] via-white to-[#eefaff] p-8 sm:p-12">
        <Reveal direction="up">
          <div className="max-w-4xl">
            <p className="mb-3 inline-flex rounded-full border border-teal/15 bg-gradient-to-r from-sunshine-yellow/30 via-sunshine-yellow/20 to-aqua/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#7a5a0a] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
              Why Hire Us
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
              Local cleaning care built on trust, detail, and follow-through
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-gray">
              When you hire {businessInfo.name}, you are choosing a women-owned
              Orlando cleaning company that cares about how your space feels after
              the job is done - cleaner, calmer, and easier to enjoy.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <PrimaryCtaLink href="/contact" className="px-5 py-2.5">
                Request a Custom Quote
              </PrimaryCtaLink>
              <Link
                href="/testimonials"
                className="inline-flex items-center justify-center rounded-full border border-teal-deep/35 px-5 py-2.5 text-sm font-semibold text-teal-deep transition-colors hover:bg-sunshine-yellow/10"
              >
                Read Client Reviews
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-stretch">
        <Reveal direction="left">
          <article className="h-full rounded-3xl border border-teal-deep/15 bg-white p-8 shadow-[0_14px_36px_-28px_rgba(12,125,150,0.18)] sm:p-10">
            <SectionHeading
              eyebrow="What Sets Us Apart"
              title="A personal standard for every clean"
              description={`${businessInfo.owner} built ${businessInfo.name} around dependable communication, careful detail work, and the kind of warm service that makes clients feel comfortable calling again.`}
            />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {standards.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-teal-deep/10 bg-[#fffdf7] px-4 py-3 text-sm font-medium leading-6 text-charcoal"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal direction="right" delay={0.06}>
          <aside className="h-full rounded-3xl border border-[#eee4d0] bg-gradient-to-br from-cream to-[#fffdf7] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-deep">
              Client Confidence
            </p>
            <blockquote className="mt-4 text-xl font-semibold leading-8 text-charcoal">
              &ldquo;{featuredQuote.quote}&rdquo;
            </blockquote>
            <p className="mt-4 text-sm font-semibold text-teal-deep">
              - {featuredQuote.name}
            </p>
            <p className="mt-5 text-sm leading-7 text-muted-gray">
              Reviews like this reflect what we work toward on every visit:
              responsive service, thoughtful details, and results people can feel
              as soon as they walk in.
            </p>
          </aside>
        </Reveal>
      </section>

      <section className="space-y-6">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="Reasons to Choose SunShines"
            title="Professional service without the cold franchise feeling"
            description="National cleaning companies often highlight trust, affordability, quality, and service promises. We bring those same customer-first ideas into a local, personal Orlando experience."
          />
        </Reveal>

        <StaggerGrid className="grid gap-5 md:grid-cols-2">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-3xl border border-[#ece3d3] bg-white p-6 shadow-sm transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-sunshine-yellow/40 hover:shadow-[0_14px_32px_-24px_rgba(12,125,150,0.18)] sm:p-7"
            >
              <h2 className="text-2xl font-bold text-charcoal">{reason.title}</h2>
              <p className="mt-3 text-base leading-7 text-muted-gray">
                {reason.body}
              </p>
            </article>
          ))}
        </StaggerGrid>
      </section>

      <Reveal direction="up">
        <section className="rounded-3xl border border-teal-deep/15 bg-gradient-to-br from-white to-[#fffdf6] p-8 sm:p-10">
          <SectionHeading
            eyebrow="Our Service Promise"
            title="If something needs attention, we want to know"
            description="A great cleaning relationship is built on communication. If a priority changes, a detail needs extra focus, or you want a different approach next time, tell us. We use your feedback to make the next visit even better."
          />
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-teal/12 bg-[#fffdf7] p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-deep">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-bold text-charcoal">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-gray">{step.body}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal direction="up">
        <section className="rounded-3xl border border-[#eee4d0] bg-white p-8 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-deep">
                Built for Real Life
              </p>
              <h2 className="mt-2 text-2xl font-bold text-charcoal">
                The right fit for homes, rentals, RVs, and small businesses
              </h2>
              <p className="mt-3 text-base leading-7 text-muted-gray">
                Whether you need routine upkeep, a deep clean, a move-out reset,
                rental turnover help, organizing, or light commercial support, we
                tailor the work to the way your space is actually used.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex rounded-full border border-teal-deep/35 px-5 py-2.5 text-sm font-semibold text-teal-deep transition-colors hover:bg-sunshine-yellow/10"
            >
              Explore Services
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {serviceLinks.map((service) => (
              <span
                key={service}
                className="rounded-full bg-cream px-3 py-1.5 text-xs font-semibold text-charcoal"
              >
                {service}
              </span>
            ))}
          </div>
        </section>
      </Reveal>

      <CTASection
        title="Ready to feel the difference?"
        description="Call, text, or send a quote request for detail-focused cleaning from a local team that treats your space with care."
      />
    </div>
  );
}
