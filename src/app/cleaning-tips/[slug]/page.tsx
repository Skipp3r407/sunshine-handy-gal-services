import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/cta-section";
import { PrimaryCtaLink } from "@/components/motion/primary-cta-link";
import { Reveal } from "@/components/motion/reveal";
import {
  cleaningSafetyBasics,
  cleaningTipGuides,
  getCleaningTipGuide,
} from "@/lib/cleaning-tips-data";
import { businessInfo } from "@/lib/site-data";

type CleaningTipPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return cleaningTipGuides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: CleaningTipPageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getCleaningTipGuide(slug);

  if (!guide) {
    return {
      title: `Cleaning Tips | ${businessInfo.name}`,
    };
  }

  return {
    title: `${guide.title} | ${businessInfo.name}`,
    description: guide.summary,
    alternates: {
      canonical: `/cleaning-tips/${guide.slug}`,
    },
  };
}

export default async function CleaningTipGuidePage({
  params,
}: CleaningTipPageProps) {
  const { slug } = await params;
  const guide = getCleaningTipGuide(slug);

  if (!guide) notFound();

  const relatedGuides = cleaningTipGuides
    .filter((item) => item.slug !== guide.slug)
    .slice(0, 3);

  return (
    <div className="space-y-12">
      <Reveal direction="up">
        <section className="rounded-[2rem] bg-gradient-to-br from-[#fff8db] via-white to-[#eefaff] p-8 sm:p-12">
          <Link
            href="/cleaning-tips"
            className="text-sm font-semibold text-teal-deep transition-colors hover:text-teal-hover"
          >
            ← Back to Cleaning Tips
          </Link>
          <div className="mt-6 max-w-4xl">
            <p className="inline-flex rounded-full border border-teal/15 bg-sunshine-yellow/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#7a5a0a]">
              {guide.category}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
              {guide.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-gray">
              {guide.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-charcoal">
              <span className="rounded-full bg-aqua/20 px-3 py-1">
                {guide.readingTime}
              </span>
              <span className="rounded-full bg-cream px-3 py-1">
                Difficulty: {guide.difficulty}
              </span>
              <span className="rounded-full bg-white px-3 py-1 ring-1 ring-teal-deep/10">
                Best for: {guide.bestFor}
              </span>
            </div>
          </div>
        </section>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <main className="space-y-8">
          <Reveal direction="up">
            <section className="rounded-3xl border border-[#eee4d0] bg-white p-7 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-charcoal">Supplies to Gather</h2>
              <p className="mt-3 text-sm leading-7 text-muted-gray">
                Gather supplies first so the job moves smoothly from one area to the
                next without stopping mid-clean.
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {guide.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-2xl border border-teal-deep/10 bg-[#fffdf7] px-4 py-3 text-sm font-medium text-charcoal"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal direction="up" delay={0.04}>
            <section className="rounded-3xl border border-sunshine-yellow/25 bg-gradient-to-br from-[#fffdf7] to-white p-7 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-charcoal">
                Safety Notes Before You Start
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-gray">
                Strong results come from good technique, not harsh shortcuts. Clean
                visible soil first, follow product labels, and use ventilation when
                products have stronger fumes.
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {cleaningSafetyBasics.slice(0, 4).map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-teal-deep/10 bg-white/80 px-4 py-3 text-sm leading-6 text-muted-gray"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <section className="space-y-5">
            {guide.steps.map((step, index) => (
              <Reveal key={step.title} direction="up" delay={index * 0.03}>
                <article className="rounded-3xl border border-teal-deep/15 bg-white p-7 shadow-sm sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-deep">
                    Step {index + 1}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-charcoal">
                    {step.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-muted-gray">
                    {step.body}
                  </p>
                  <ul className="mt-5 list-disc space-y-2.5 pl-5 text-sm leading-7 text-muted-gray marker:text-teal-deep">
                    {step.checklist.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </section>
        </main>

        <aside className="space-y-5 lg:sticky lg:top-24">
          <Reveal direction="right">
            <section className="rounded-3xl border border-[#eee4d0] bg-gradient-to-br from-cream to-[#fffdf7] p-6">
              <h2 className="text-xl font-bold text-charcoal">Pro Tips</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-gray">
                {guide.proTips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal direction="right" delay={0.04}>
            <section className="rounded-3xl border border-[#eee4d0] bg-white p-6">
              <h2 className="text-xl font-bold text-charcoal">Avoid These Mistakes</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-gray">
                {guide.mistakesToAvoid.map((mistake) => (
                  <li key={mistake}>{mistake}</li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal direction="right" delay={0.08}>
            <section className="rounded-3xl border border-teal-deep/15 bg-white p-6">
              <h2 className="text-xl font-bold text-charcoal">Maintenance Rhythm</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-gray">
                {guide.maintenance.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <PrimaryCtaLink href={guide.serviceHref} className="mt-5 px-4 py-2">
                View {guide.serviceLabel}
              </PrimaryCtaLink>
            </section>
          </Reveal>
        </aside>
      </div>

      <Reveal direction="up">
        <section className="rounded-3xl border border-[#eee4d0] bg-gradient-to-br from-cream to-[#fffdf7] p-7 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-deep">
                When to Get Help
              </p>
              <h2 className="mt-2 text-2xl font-bold text-charcoal">
                Call in support when the checklist becomes a weekend project
              </h2>
              <p className="mt-3 text-base leading-7 text-muted-gray">
                If the space has heavy buildup, move-out deadlines, rental turnover
                pressure, recurring pet hair, or rooms that never feel fully reset,
                professional help can save time and protect your energy.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-5">
              <h3 className="font-bold text-charcoal">Good reasons to book</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-gray marker:text-teal-deep">
                <li>You need a deep reset before guests, photos, or a move.</li>
                <li>You want recurring care so maintenance stays manageable.</li>
                <li>You are unsure which products are safe for a surface.</li>
                <li>You need detail work in bathrooms, kitchens, RVs, or rentals.</li>
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal direction="up">
        <section className="rounded-3xl border border-teal-deep/15 bg-white p-7 sm:p-8">
          <h2 className="text-2xl font-bold text-charcoal">More Cleaning Guides</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {relatedGuides.map((item) => (
              <Link
                key={item.slug}
                href={`/cleaning-tips/${item.slug}`}
                className="rounded-2xl border border-[#eee4d0] bg-[#fffdf8] p-4 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-sunshine-yellow/40"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-deep">
                  {item.category}
                </p>
                <h3 className="mt-2 font-bold leading-snug text-charcoal">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      <CTASection
        title="Want the clean without spending your weekend on it?"
        description="Use these tutorials for upkeep, or request a custom quote when your home, rental, RV, or workspace needs hands-on detail cleaning."
      />
    </div>
  );
}
