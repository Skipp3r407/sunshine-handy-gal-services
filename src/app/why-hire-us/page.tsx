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

const hiringQuestions = [
  {
    question: "Will the service be customized to my space?",
    answer:
      "Yes. A good cleaning plan should consider the size of the home, surface types, pets, clutter level, priorities, and timing.",
  },
  {
    question: "How do you handle special instructions?",
    answer:
      "We encourage notes about delicate surfaces, rooms to skip, product preferences, pets, entry instructions, and must-finish areas.",
  },
  {
    question: "What should I do before the appointment?",
    answer:
      "Pick up personal clutter when possible, secure valuables, share access details, and let us know about any fragile or off-limit items.",
  },
  {
    question: "How is pricing handled?",
    answer:
      "Pricing is customized because each home, rental, RV, and business has a different layout, condition, and priority list.",
  },
];

const expectations = [
  "Clear communication before scheduling so the scope makes sense.",
  "Respectful service around families, pets, belongings, and work schedules.",
  "A practical plan for kitchens, bathrooms, floors, high-touch areas, and detail work.",
  "Honest feedback if a job needs extra time, a deeper reset, or recurring maintenance.",
  "A local point of contact instead of a cold, one-size-fits-all experience.",
];

const redFlags = [
  "A quote that ignores the size, condition, or priorities of the space.",
  "Pressure to book immediately without time to ask questions.",
  "Vague communication about what is included.",
  "No willingness to discuss product preferences, pets, access, or delicate surfaces.",
];

const commonConcerns = [
  {
    question: "What do you clean in a typical home?",
    answer:
      "Kitchens, bathrooms, bedrooms, living rooms, dining spaces, entryways, floors, mirrors, high-touch areas, and priority zones can all be discussed before the visit.",
  },
  {
    question: "Can the plan change over time?",
    answer:
      "Yes. A first deep clean may focus on buildup, while recurring visits may shift toward maintenance, floors, bathrooms, pet hair, or the spaces your family uses most.",
  },
  {
    question: "Do I have to be home?",
    answer:
      "You can be home, or you can provide access instructions if that is more convenient. We work with the option that makes you most comfortable.",
  },
  {
    question: "What if I only need help once?",
    answer:
      "One-time cleaning is perfect before guests, after travel, during a move, before listing photos, or when the house needs a reset.",
  },
];

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

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal direction="left">
          <article className="h-full rounded-3xl border border-[#eee4d0] bg-white p-8 shadow-sm sm:p-10">
            <SectionHeading
              eyebrow="Smart Hiring Guide"
              title="Questions to ask before hiring a cleaning company"
              description="A trustworthy service should be able to explain scope, scheduling, access, product preferences, and how special instructions are handled."
            />
            <div className="mt-6 grid gap-4">
              {hiringQuestions.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-teal-deep/10 bg-[#fffdf7] p-4"
                >
                  <h3 className="font-bold text-charcoal">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-gray">{item.answer}</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal direction="right" delay={0.05}>
          <article className="h-full rounded-3xl border border-teal-deep/15 bg-gradient-to-br from-cream to-[#fffdf7] p-8 shadow-sm sm:p-10">
            <SectionHeading
              eyebrow="What You Should Expect"
              title="A better cleaning experience starts before the first visit"
              description="Clear expectations protect your time, your home, and the quality of the final result."
            />
            <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-gray">
              {expectations.map((item) => (
                <li key={item} className="rounded-2xl bg-white/80 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
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
          <SectionHeading
            eyebrow="Common Questions"
            title="Reliable answers before you book"
            description="A good cleaning experience should feel clear before anyone arrives. These are the details clients often want to know first."
          />
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {commonConcerns.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-teal-deep/10 bg-[#fffdf7] p-5"
              >
                <h3 className="font-bold text-charcoal">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-gray">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal direction="up">
        <section className="rounded-3xl border border-sunshine-yellow/25 bg-white p-8 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-deep">
                Red Flags
              </p>
              <h2 className="mt-2 text-2xl font-bold text-charcoal">
                Signs a cleaning quote may not fit your needs
              </h2>
              <p className="mt-3 text-base leading-7 text-muted-gray">
                Choosing the right cleaning help is not only about the lowest price.
                You deserve a clear scope, respectful communication, and a plan that
                matches your space.
              </p>
            </div>
            <ul className="space-y-3 text-sm leading-7 text-muted-gray">
              {redFlags.map((item) => (
                <li key={item} className="rounded-2xl bg-[#fffdf7] px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
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
