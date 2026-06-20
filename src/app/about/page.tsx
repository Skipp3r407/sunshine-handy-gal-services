import Image from "next/image";
import { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { businessInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `About | ${businessInfo.name}`,
  description: `Meet ${businessInfo.owner} and learn the story behind ${businessInfo.name}, a trusted women-owned cleaning company in Orlando.`,
};

const coreValues = [
  "Respect every space as if it were our own",
  "Communicate clearly and follow through",
  "Focus on details that create lasting comfort",
  "Deliver warm, trustworthy service every time",
];

const trustHighlights = [
  "100% recommend from local reviews",
  "Women-owned and community-focused",
  "Known for thorough, polished results",
  "Responsive and easy to schedule with",
  "Professional supplies and careful technique on every visit",
  "Transparent quoting based on your space and priorities",
];

export default function AboutPage() {
  return (
    <div className="space-y-14">
      <section className="rounded-[2rem] bg-gradient-to-br from-[#fff6d3] via-white to-[#ebf9fe] p-8 sm:p-12">
        <Reveal direction="up">
          <SectionHeading
            eyebrow={`About ${businessInfo.name}`}
            title="A local cleaning company built on care, trust, and consistency"
            description={`${businessInfo.name} was created to help Orlando families and small businesses enjoy cleaner, calmer spaces without the overwhelm.`}
          />
        </Reveal>
      </section>

      <section className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <Reveal direction="left" className="min-h-0">
          <figure className="mx-auto w-full max-w-[min(100%,340px)] lg:mx-0">
            <div className="relative mx-auto aspect-square max-h-[340px] overflow-hidden rounded-full border-4 border-white shadow-[0_20px_50px_-20px_rgba(12,125,150,0.35)] ring-2 ring-teal-deep/15">
              <Image
                src="/images/sheena-hotaling-about.png"
                alt={`${businessInfo.owner}, owner of ${businessInfo.name}, smiling in a black polo shirt`}
                width={680}
                height={680}
                className="h-full w-full object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 85vw, 340px"
                priority
              />
              <span className="pointer-events-none absolute bottom-4 right-4 rounded-full border border-teal-deep/15 bg-white/95 px-3 py-1.5 text-xs font-semibold text-charcoal shadow-md backdrop-blur-sm">
                Sunshine <span aria-hidden>🌻</span>
              </span>
            </div>
            <figcaption className="mt-5 text-center lg:text-left">
              <span className="block font-heading text-lg font-semibold text-charcoal">
                {businessInfo.owner}
              </span>
              <span className="mt-1 block text-sm text-muted-gray">
                Owner, {businessInfo.name}
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal direction="right" className="min-h-0" delay={0.06}>
          <article className="rounded-3xl border border-[#eee4d0] bg-white p-8 shadow-[0_14px_36px_-28px_rgba(12,125,150,0.12)] sm:p-9">
            <h2 className="text-2xl font-bold text-charcoal">Sheena&apos;s Story</h2>
            <p className="mt-4 text-base leading-7 text-muted-gray">
              {businessInfo.owner} started {businessInfo.name} with a simple mission:
              treat every home with pride and every client with respect. What began as
              helping local families get caught up became a trusted service known for
              detail, reliability, and genuine care.
            </p>
            <blockquote className="mt-6 border-l-4 border-sunshine-yellow/90 pl-4 text-base italic leading-7 text-charcoal">
              Clients often mention the thoughtful &ldquo;special touches&rdquo;—and the
              relief they feel walking back into a refreshed space.
            </blockquote>
            <p className="mt-5 text-base leading-7 text-muted-gray">
              Whether it is a deep clean, a move-out, or organization support, the goal
              is always the same: create an environment you can feel immediately—calmer,
              lighter, and ready for real life.
            </p>
          </article>
        </Reveal>
      </section>

      <Reveal direction="up" delay={0.04}>
        <article className="rounded-3xl border border-teal-deep/15 bg-gradient-to-br from-cream to-[#fffdf8] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            <div className="lg:w-[42%] lg:shrink-0">
              <h2 className="text-2xl font-bold text-charcoal">Mission</h2>
              <p className="mt-4 text-base leading-7 text-muted-gray">
                Bring peace and order into homes and small business spaces through
                dependable, detail-oriented cleaning that feels both professional and
                personal.
              </p>
            </div>
            <div className="min-h-0 flex-1 border-t border-teal-deep/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <h3 className="text-lg font-semibold text-charcoal">Core Values</h3>
              <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-7 text-muted-gray marker:text-teal-deep">
                {coreValues.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </Reveal>

      <Reveal direction="up">
        <section className="rounded-3xl border border-teal-deep/20 bg-gradient-to-br from-white to-[#fffdf6] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] sm:p-10">
          <h2 className="text-2xl font-bold text-charcoal">Why Clients Trust Us</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-gray">
            Local families and businesses choose us when they want responsive
            communication and results they do not have to second-guess.
          </p>
          <StaggerGrid className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trustHighlights.map((item) => (
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

      <Reveal direction="up">
        <section className="overflow-hidden rounded-3xl border border-teal-deep/15 bg-white shadow-[0_14px_36px_-28px_rgba(12,125,150,0.2)]">
          <div className="p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-deep">
              Service Area
            </p>
            <h2 className="mt-2 text-2xl font-bold text-charcoal">
              Proudly serving Orlando and nearby Central Florida communities
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-gray">
              Based in {businessInfo.location}, we help homes, rentals, RVs, and
              small businesses throughout {businessInfo.serviceAreaSummary}.
            </p>
            <a
              href={businessInfo.serviceAreaGoogleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full border border-teal-deep/35 px-4 py-2 text-sm font-semibold text-teal-deep transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-golden-amber/45 hover:bg-sunshine-yellow/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep/30 focus-visible:ring-offset-2"
            >
              Open Service Area Map
            </a>
          </div>
          <div className="border-t border-teal-deep/10">
            <iframe
              src={businessInfo.serviceAreaMapEmbedUrl}
              title={`${businessInfo.name} service area map`}
              className="h-[320px] w-full sm:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>
      </Reveal>

      <CTASection
        title="Let us bring more calm to your space"
        description="Call or text for a personalized quote from a local team that is proud to serve Orlando with detail-focused, reliable care."
      />
    </div>
  );
}
