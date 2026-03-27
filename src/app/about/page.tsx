import Image from "next/image";
import { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { businessInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About | Sunshines Handy Gal Services",
  description:
    "Meet Sheena Hotaling and learn the story behind Sunshine's Handy Gal Services, a trusted women-owned cleaning company in Orlando.",
};

export default function AboutPage() {
  return (
    <div className="space-y-14">
      <section className="rounded-[2rem] bg-gradient-to-br from-[#fff6d3] via-white to-[#ebf9fe] p-8 sm:p-12">
        <Reveal direction="up">
          <SectionHeading
            eyebrow="About Sunshine's Handy Gal Services"
            title="A local cleaning company built on care, trust, and consistency"
            description="Sunshine&apos;s Handy Gal Services was created to help Orlando families and small businesses enjoy cleaner, calmer spaces without the overwhelm."
          />
        </Reveal>
      </section>

      <section className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <Reveal direction="left" className="min-h-0">
          <figure className="mx-auto w-full max-w-[min(100%,320px)] lg:mx-0">
            <div className="relative mx-auto aspect-square max-h-[320px] overflow-hidden rounded-full border-4 border-white shadow-[0_20px_50px_-20px_rgba(12,125,150,0.35)] ring-2 ring-teal-deep/15">
              <Image
                src="/images/sheena-hotaling-about.png"
                alt={`${businessInfo.owner}, owner of ${businessInfo.name}, smiling in a black polo shirt`}
                width={640}
                height={640}
                className="h-full w-full object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 80vw, 320px"
                priority
              />
            </div>
            <figcaption className="mt-4 text-center font-heading text-lg font-semibold text-charcoal lg:text-left">
              {businessInfo.owner}
              <span className="mt-0.5 block text-sm font-normal text-muted-gray">
                Owner, {businessInfo.name}
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal direction="right" className="min-h-0" delay={0.06}>
          <article className="rounded-3xl border border-[#eee4d0] bg-white p-8">
            <h2 className="text-2xl font-bold text-charcoal">Sheena&apos;s Story</h2>
            <p className="mt-4 text-base leading-7 text-muted-gray">
              {businessInfo.owner} started Sunshine&apos;s Handy Gal Services with a
              simple mission: treat every home with pride and every client with
              respect. What began as helping local families get caught up became a
              trusted service known for detail, reliability, and genuine care.
            </p>
            <p className="mt-4 text-base leading-7 text-muted-gray">
              Clients often mention the thoughtful “special touches” and the sense
              of relief they feel after each visit. Whether it is a deep clean, a
              move-out, or organization support, the goal is always the same:
              create a refreshed environment you can feel immediately.
            </p>
          </article>
        </Reveal>
      </section>

      <Reveal direction="up" delay={0.04}>
        <article className="rounded-3xl border border-[#eee4d0] bg-cream p-8">
          <h2 className="text-2xl font-bold text-charcoal">Mission</h2>
          <p className="mt-4 text-base leading-7 text-muted-gray">
            Bring peace and order into homes and small business spaces through
            dependable, detail-oriented cleaning that feels both professional and
            personal.
          </p>
          <h3 className="mt-8 text-lg font-semibold text-charcoal">Core Values</h3>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-gray">
            <li>• Respect every space as if it were our own</li>
            <li>• Communicate clearly and follow through</li>
            <li>• Focus on details that create lasting comfort</li>
            <li>• Deliver warm, trustworthy service every time</li>
          </ul>
        </article>
      </Reveal>

      <Reveal direction="up">
        <section className="rounded-3xl border border-teal-deep/20 bg-gradient-to-br from-white to-[#fffdf6] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
          <h2 className="text-2xl font-bold text-charcoal">Why Clients Trust Us</h2>
          <StaggerGrid className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "100% recommend from local reviews",
              "Women-owned and community-focused",
              "Known for thorough, polished results",
              "Responsive and easy to schedule with",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-teal/12 bg-[#fffdf7] p-4 text-sm font-medium text-charcoal shadow-sm transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-sunshine-yellow/30"
              >
                {item}
              </div>
            ))}
          </StaggerGrid>
        </section>
      </Reveal>

      <CTASection
        title="Let us bring more calm to your space"
        description="Call or text for a personalized quote from a local team that is proud to serve Orlando with detail-focused, reliable care."
      />
    </div>
  );
}
