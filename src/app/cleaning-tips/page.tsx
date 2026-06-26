import Link from "next/link";
import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { PrimaryCtaLink } from "@/components/motion/primary-cta-link";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { cleaningTipGuides, featuredCleaningTip } from "@/lib/cleaning-tips-data";
import { businessInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Cleaning Tips & Tutorials | ${businessInfo.name}`,
  description:
    "Detailed cleaning tips, tutorials, checklists, and tricks for kitchens, bathrooms, move-out cleaning, organizing, light commercial spaces, and RV cleaning.",
  alternates: {
    canonical: "/cleaning-tips",
  },
};

export default function CleaningTipsPage() {
  return (
    <div className="space-y-14">
      <section className="rounded-[2rem] bg-gradient-to-br from-[#fff8db] via-white to-[#eefaff] p-8 sm:p-12">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="Cleaning Tips"
            title="Detailed tutorials for a cleaner, calmer space"
            description={`Step-by-step cleaning tips from ${businessInfo.name} for real homes, rentals, RVs, and small business spaces around Central Florida.`}
          />
        </Reveal>
      </section>

      <Reveal direction="up" delay={0.04}>
        <section className="grid gap-6 rounded-3xl border border-teal-deep/15 bg-white p-6 shadow-[0_14px_36px_-28px_rgba(12,125,150,0.18)] sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-deep">
              Featured Guide
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-charcoal">
              {featuredCleaningTip.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-gray">
              {featuredCleaningTip.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-charcoal">
              <span className="rounded-full bg-sunshine-yellow/20 px-3 py-1">
                {featuredCleaningTip.category}
              </span>
              <span className="rounded-full bg-aqua/20 px-3 py-1">
                {featuredCleaningTip.readingTime}
              </span>
              <span className="rounded-full bg-cream px-3 py-1">
                {featuredCleaningTip.difficulty}
              </span>
            </div>
            <PrimaryCtaLink
              href={`/cleaning-tips/${featuredCleaningTip.slug}`}
              className="mt-6 px-5 py-2.5"
            >
              Read the Kitchen Tutorial
            </PrimaryCtaLink>
          </div>

          <div className="rounded-3xl border border-[#eee4d0] bg-gradient-to-br from-cream to-[#fffdf7] p-5">
            <h3 className="text-lg font-bold text-charcoal">What these guides cover</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-gray">
              <li>Step-by-step tutorials that follow a professional top-to-bottom flow.</li>
              <li>Supply lists, safety reminders, and surface-friendly cleaning notes.</li>
              <li>Pro tricks for shine, speed, odor control, and long-term maintenance.</li>
              <li>Common mistakes to avoid before a mess becomes harder to fix.</li>
            </ul>
          </div>
        </section>
      </Reveal>

      <section className="space-y-6">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="Guides"
            title="Room-by-room cleaning help"
            description="Choose a tutorial below for detailed steps, supplies, tips, and maintenance routines."
          />
        </Reveal>

        <StaggerGrid className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cleaningTipGuides.map((guide) => (
            <article
              key={guide.slug}
              className="group flex h-full flex-col rounded-3xl border border-[#ece3d3] bg-white p-6 shadow-sm transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-sunshine-yellow/40 hover:shadow-[0_14px_32px_-24px_rgba(12,125,150,0.18)]"
            >
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-charcoal">
                <span className="rounded-full bg-sunshine-yellow/20 px-3 py-1">
                  {guide.category}
                </span>
                <span className="rounded-full bg-aqua/20 px-3 py-1">
                  {guide.readingTime}
                </span>
              </div>
              <h2 className="mt-4 text-xl font-bold leading-tight text-charcoal">
                {guide.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-gray">
                {guide.summary}
              </p>
              <p className="mt-4 rounded-2xl bg-cream px-4 py-3 text-sm font-semibold leading-6 text-charcoal">
                Best for: {guide.bestFor}
              </p>
              <Link
                href={`/cleaning-tips/${guide.slug}`}
                className="mt-5 inline-flex font-semibold text-teal-deep transition-colors hover:text-teal-hover"
              >
                Read guide
                <span aria-hidden className="ml-1 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </article>
          ))}
        </StaggerGrid>
      </section>

      <CTASection
        title="Need a deeper reset than a checklist can cover?"
        description="Use these tips between visits, or call/text for hands-on cleaning help from a local Orlando team."
      />
    </div>
  );
}
