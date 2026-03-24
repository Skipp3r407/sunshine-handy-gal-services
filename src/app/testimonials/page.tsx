import { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ReviewHighlightBanner } from "@/components/review-highlight-banner";
import { TestimonialCard } from "@/components/testimonial-card";
import { PrimaryCtaLink } from "@/components/motion/primary-cta-link";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { testimonials } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Testimonials | Sunshines Handy Gal Services",
  description:
    "Read what local clients say about Sunshines Handy Gal Services, from deep cleans and move-out support to detail-focused residential and commercial cleaning.",
};

export default function TestimonialsPage() {
  return (
    <div className="space-y-14">
      <section className="rounded-[2rem] bg-gradient-to-br from-[#fff8dd] via-white to-[#eefaff] p-8 sm:p-12">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="Client Reviews"
            title="Thorough, responsive, and trusted across Orlando"
            description="Our clients consistently mention detailed cleaning, professional communication, and homes that feel refreshed and renewed."
          />
        </Reveal>
      </section>

      <Reveal direction="up" delay={0.04}>
        <ReviewHighlightBanner />
      </Reveal>

      <section className="space-y-6">
        <Reveal direction="up">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold text-charcoal">What clients are saying</h2>
            <p className="text-sm font-semibold text-golden-amber">★★★★★ 100% Recommend</p>
          </div>
        </Reveal>
        <StaggerGrid
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          enableHoverLift={false}
        >
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} name={item.name} quote={item.quote} />
          ))}
        </StaggerGrid>
      </section>

      <Reveal direction="scale">
        <section className="rounded-3xl border border-[#efe5d6] bg-white p-8 text-center">
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
