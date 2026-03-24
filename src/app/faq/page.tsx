import { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { FAQAccordion } from "@/components/faq-accordion";
import { Reveal } from "@/components/motion/reveal";
import { faqItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ | Sunshines Handy Gal Services",
  description:
    "Answers to common questions about Sunshine's Handy Gal Services, including service types, supplies, scheduling, custom quote pricing, and service areas.",
};

export default function FAQPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] bg-gradient-to-br from-[#fff7d7] via-white to-[#edfaff] p-8 sm:p-12">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="FAQ"
            title="Helpful answers before you book"
            description="Friendly, straightforward guidance to help you plan your cleaning service with confidence."
          />
        </Reveal>
      </section>

      <Reveal direction="up" delay={0.05}>
        <FAQAccordion items={faqItems} />
      </Reveal>
    </div>
  );
}
