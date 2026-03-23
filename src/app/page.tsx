import Link from "next/link";
import { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { AboutPreview } from "@/components/about-preview";
import { TestimonialCard } from "@/components/testimonial-card";
import { ServiceAreaGrid } from "@/components/service-area-grid";
import { ProcessSteps } from "@/components/process-steps";
import { CTASection } from "@/components/cta-section";
import { ContactForm } from "@/components/contact-form";
import { trustBadges, services, testimonials, serviceAreas, processSteps, businessInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Sunshines Handy Gal Services | Professional Cleaning in Orlando, FL",
  description:
    "Trusted, women-owned cleaning company in Orlando, FL. Call or text for a custom quote on standard cleaning, deep cleaning, move-out service, and organizing support.",
};

export default function Home() {
  return (
    <div className="space-y-20">
      <HeroSection />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Services"
          title="Professional Cleaning Services Tailored to Your Space"
          description="From routine upkeep to deep clean resets, we provide polished care that leaves your home or business noticeably refreshed."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              benefit={service.benefit}
            />
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-teal/10 bg-cream px-6 py-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:px-10">
        <SectionHeading
          eyebrow="Why Clients Choose Us"
          title="Trusted, detail-oriented, and easy to work with"
          description="Clients consistently mention responsive communication, thorough cleaning, and the pride we bring into every visit."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Detail-Oriented Service",
            "Friendly, Professional Care",
            "Trusted by Local Clients",
            "Flexible Booking",
            "Women-Owned Business",
            "Reliable Communication",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-teal/10 bg-white px-5 py-4 text-sm font-semibold text-charcoal shadow-[0_10px_24px_-22px_rgba(0,0,0,0.5)] transition hover:border-sunshine-yellow/35 hover:shadow-[0_12px_28px_-20px_rgba(12,125,150,0.18)]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <AboutPreview />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by families and businesses across Central Florida"
          description="Real feedback from local clients who recommend Sunshine&apos;s Handy Gal Services."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.slice(0, 6).map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              quote={testimonial.quote}
            />
          ))}
        </div>
        <Link
          href="/testimonials"
          className="inline-flex rounded-full border border-teal-deep/40 px-5 py-2 text-sm font-semibold text-teal-deep transition hover:bg-sunshine-yellow/12 hover:border-golden-amber/45"
        >
          View All Testimonials
        </Link>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Service Areas"
          title="Proudly serving Orlando and nearby Central Florida communities"
          description="We proudly provide professional cleaning services throughout Orlando and nearby Central Florida communities."
        />
        <ServiceAreaGrid items={serviceAreas} />
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Simple, friendly process from first message to sparkling finish"
        />
        <ProcessSteps items={processSteps} />
      </section>

      <CTASection
        title="Ready for a cleaner, calmer home?"
        description="Share your space, schedule, and goals. Call or text for a personalized quote and we will help bring a little more sunshine into your day."
      />

      <section className="space-y-8" id="contact-preview">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch for your personalized quote"
          description="Tell us what you need, and we will help you choose the best service for your space and schedule."
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-3xl border border-teal/12 bg-white p-6 shadow-[0_15px_36px_-25px_rgba(12,125,150,0.12)]">
            <h3 className="text-lg font-semibold text-charcoal">Contact Details</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-gray">
              <li>
                <span className="font-semibold text-charcoal">Phone:</span>{" "}
                <a href={businessInfo.phoneHref} className="text-teal">
                  {businessInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="font-semibold text-charcoal">Email:</span>{" "}
                <a href={businessInfo.emailHref} className="text-teal">
                  {businessInfo.email}
                </a>
              </li>
              <li>
                <span className="font-semibold text-charcoal">Service Area:</span>{" "}
                {businessInfo.serviceAreaSummary}
              </li>
              <li>
                <span className="font-semibold text-charcoal">Trust Cues:</span>{" "}
                {trustBadges.join(" • ")}
              </li>
            </ul>
            <p className="mt-4 rounded-2xl border border-sunshine-yellow/20 bg-cream px-4 py-3 text-xs text-charcoal">
              Every home is different, so pricing is customized based on your
              needs. Call or text for a personalized quote. 3-hour minimum
              service rate: $150.
            </p>
          </article>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
