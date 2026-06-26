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
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import {
  businessInfo,
  cleaningNeedsHighlights,
  processSteps,
  serviceAreas,
  services,
  testimonials,
  trustBadges,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: `${businessInfo.name} | Professional Cleaning in Orlando, FL`,
  description:
    "Trusted, women-owned cleaning company in Orlando, FL. Call or text for a custom quote on Detailed Clean, deep cleaning, move-out service, and organizing support.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="space-y-12 sm:space-y-16 lg:space-y-20">
      <HeroSection />

      <section className="space-y-8">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="Services"
            title="Professional Cleaning Services Tailored to Your Space"
            description="From routine upkeep to deep clean resets, we provide polished care that leaves your home or business noticeably refreshed."
          />
        </Reveal>
        <StaggerGrid
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          enableHoverLift={false}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              benefit={service.benefit}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
            />
          ))}
        </StaggerGrid>
      </section>

      <Reveal direction="up">
        <section className="rounded-[2rem] border border-teal-deep/15 bg-white p-8 shadow-[0_14px_36px_-28px_rgba(12,125,150,0.18)] sm:p-10">
          <SectionHeading
            eyebrow="How We Meet Your Needs"
            title="Custom cleaning help for real homes, rentals, RVs, and small businesses"
            description="The best cleaning plan is the one that fits how you actually live and work. We help you choose the right scope, frequency, and focus areas before the visit."
          />
          <StaggerGrid className="mt-7 grid gap-4 md:grid-cols-2">
            {cleaningNeedsHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#eee4d0] bg-[#fffdf7] p-5"
              >
                <h3 className="text-lg font-bold text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-gray">
                  {item.description}
                </p>
              </article>
            ))}
          </StaggerGrid>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex rounded-full border border-teal-deep/35 px-5 py-2.5 text-sm font-semibold text-teal-deep transition-colors hover:bg-sunshine-yellow/10"
            >
              Explore Services
            </Link>
            <Link
              href="/cleaning-tips"
              className="inline-flex rounded-full border border-sunshine-yellow/50 px-5 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-sunshine-yellow/15"
            >
              Read Cleaning Tips
            </Link>
          </div>
        </section>
      </Reveal>

      <section className="rounded-[2rem] border border-teal/10 bg-cream px-6 py-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:px-10">
        <Reveal direction="left">
          <SectionHeading
            eyebrow="Why Clients Choose Us"
            title="Trusted, detail-oriented, and easy to work with"
            description="Clients consistently mention responsive communication, thorough cleaning, and the pride we bring into every visit."
          />
        </Reveal>
        <StaggerGrid className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
              className="rounded-2xl border border-teal/10 bg-white px-5 py-4 text-sm font-semibold text-charcoal shadow-[0_10px_24px_-22px_rgba(0,0,0,0.5)] transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-sunshine-yellow/35 hover:shadow-[0_12px_28px_-20px_rgba(12,125,150,0.18)]"
            >
              {item}
            </div>
          ))}
        </StaggerGrid>
      </section>

      <AboutPreview />

      <section className="overflow-hidden rounded-[2rem] border border-[#f1dff4] bg-white px-5 py-10 shadow-[0_18px_54px_-42px_rgba(111,39,145,0.35)] sm:px-8 lg:px-10">
        <Reveal direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-500">
              Client Reviews
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Loved by families and businesses across Central Florida
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-gray sm:text-lg">
              Real feedback from local clients who recommend {businessInfo.name} for
              responsive service, thoughtful details, and polished results.
            </p>
            <Link
              href="/testimonials"
              className="mt-6 inline-flex rounded-full border border-fuchsia-400/60 px-5 py-2 text-sm font-semibold text-fuchsia-600 transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-fuchsia-500 hover:bg-fuchsia-50"
            >
              Read More Reviews
            </Link>
          </div>
        </Reveal>

        <StaggerGrid
          className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3"
          enableHoverLift={false}
        >
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              quote={testimonial.quote}
              location={testimonial.location}
              date={testimonial.date}
              rating={testimonial.rating}
              source={testimonial.source}
            />
          ))}
        </StaggerGrid>

        <Reveal direction="up" delay={0.08}>
          <div className="mx-auto mt-9 flex max-w-3xl flex-col items-center justify-center gap-4 rounded-3xl bg-gradient-to-r from-[#fff8fc] via-white to-[#eefaff] px-5 py-5 text-center sm:flex-row sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-deep to-aqua text-lg font-bold text-white shadow-md">
              S
            </div>
            <p className="text-sm leading-6 text-muted-gray">
              Our promise is simple: communicate clearly, respect your space, and
              clean with the kind of detail that makes your home feel refreshed.
            </p>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-teal-deep px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-teal-deep/20 transition-colors hover:bg-teal-hover"
            >
              Request a Quote
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="space-y-8">
        <Reveal direction="left">
          <SectionHeading
            eyebrow="Service Areas"
            title="Proudly serving Orlando and nearby Central Florida communities"
            description="We proudly provide professional cleaning services throughout Orlando and nearby Central Florida communities."
          />
        </Reveal>
        <ServiceAreaGrid items={serviceAreas} />
      </section>

      <section className="space-y-8">
        <Reveal direction="right">
          <SectionHeading
            eyebrow="How It Works"
            title="Simple, friendly process from first message to sparkling finish"
          />
        </Reveal>
        <ProcessSteps items={processSteps} />
      </section>

      <CTASection
        title="Ready for a cleaner, calmer home?"
        description="Share your space, schedule, and goals. Call or text for a personalized quote and we will help bring a little more sunshine into your day."
      />

      <section className="space-y-8" id="contact-preview">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch for your personalized quote"
            description="Tell us what you need, and we will help you choose the best service for your space and schedule."
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal direction="left" className="min-h-0">
            <article className="rounded-3xl border border-teal/12 bg-white p-6 shadow-[0_15px_36px_-25px_rgba(12,125,150,0.12)]">
            <h3 className="text-lg font-semibold text-charcoal">Contact Details</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-gray">
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
              needs. Call or text for a personalized quote.
            </p>
          </article>
          </Reveal>
          <Reveal direction="right" className="min-h-0" delay={0.06}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
