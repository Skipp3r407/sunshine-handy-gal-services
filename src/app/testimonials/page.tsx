import { Metadata } from "next";
import { ReviewHighlightBanner } from "@/components/review-highlight-banner";
import { PrimaryCtaLink } from "@/components/motion/primary-cta-link";
import { Reveal } from "@/components/motion/reveal";
import { TestimonialsExpandableSection } from "@/components/testimonials-expandable-section";
import { testimonials, businessInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Testimonials | ${businessInfo.name}`,
  description: `Read what local clients say about ${businessInfo.name}, from deep cleans and move-out support to detail-focused residential and commercial cleaning.`,
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <div className="space-y-14">
      <section className="overflow-hidden rounded-[2rem] border border-fuchsia-200 bg-gradient-to-br from-[#fff8fc] via-white to-[#eefaff] p-8 shadow-[0_18px_54px_-42px_rgba(111,39,145,0.35)] sm:p-12">
        <Reveal direction="up">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 inline-flex rounded-full border border-fuchsia-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-fuchsia-500">
              Client Reviews
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
              Thorough, responsive, and trusted across Orlando
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-gray">
              Our clients consistently mention detailed cleaning, professional
              communication, and homes that feel refreshed and renewed.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-2 text-xs font-semibold text-charcoal">
              <span className="rounded-full bg-sunshine-yellow/25 px-3 py-1.5">
                Facebook recommendations
              </span>
              <span className="rounded-full bg-aqua/20 px-3 py-1.5">
                Residential and commercial
              </span>
              <span className="rounded-full bg-white px-3 py-1.5 ring-1 ring-fuchsia-200">
                Local Central Florida clients
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      <Reveal direction="up" delay={0.04}>
        <ReviewHighlightBanner />
      </Reveal>

      <section className="rounded-[2rem] border border-[#f1dff4] bg-white px-5 py-8 shadow-[0_18px_54px_-42px_rgba(111,39,145,0.35)] sm:px-8 sm:py-10">
        <Reveal direction="up">
          <div className="mx-auto mb-8 flex max-w-5xl flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-fuchsia-500">
                More Local Feedback
              </p>
              <h2 className="mt-2 text-2xl font-bold text-charcoal">
                What clients are saying
              </h2>
            </div>
            <p className="mx-auto w-fit rounded-full bg-sunshine-yellow/20 px-4 py-2 text-sm font-semibold text-teal-deep sm:mx-0">
              100% recommend
            </p>
          </div>
        </Reveal>
        <TestimonialsExpandableSection items={testimonials} />
      </section>

      <Reveal direction="scale">
        <section className="rounded-3xl border border-[#efe5d6] bg-gradient-to-br from-white to-[#fff8fc] p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-charcoal">
            Ready to feel the difference in your space?
          </h2>
          <p className="mt-3 text-base text-muted-gray">
            From deep clean resets to recurring care, we make your home or business
            feel polished, refreshed, and easier to enjoy.
          </p>
          <PrimaryCtaLink href="/contact" className="mt-6 px-6 py-3">
            Call or Text Today
          </PrimaryCtaLink>
        </section>
      </Reveal>
    </div>
  );
}
