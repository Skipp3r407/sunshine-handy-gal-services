import Link from "next/link";
import Image from "next/image";
import { businessInfo, trustBadges } from "@/lib/site-data";
import { TrustBadgeRow } from "@/components/trust-badge-row";

const floatingTags = [
  "Deep Cleaning",
  "Move-Out",
  "Organizing",
  "Residential + Commercial",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-[#fff9df] via-[#fffdf8] to-[#eaf8fd] px-6 pb-12 pt-10 shadow-[0_20px_45px_-32px_rgba(0,0,0,0.45)] sm:px-10 sm:pt-14 lg:px-12">
      <div className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full bg-sunshine-yellow/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-aqua/30 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-3 inline-flex rounded-full bg-sunshine-yellow/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#875a00]">
            Professional Cleaning in Orlando
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
            Let Us Add Some Sunshine to Your Home
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-gray sm:text-lg">
            Sunshine&apos;s Handy Gal Services delivers detail-oriented residential
            and light commercial cleaning across Orlando and nearby Central
            Florida. Warm service, reliable communication, and polished results
            you can feel right away.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal/90"
            >
              Book Your Cleaning
            </Link>
            <a
              href={businessInfo.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-teal/30 bg-white px-6 py-3 text-sm font-semibold text-teal transition hover:bg-teal/5"
            >
              Call {businessInfo.phoneDisplay}
            </a>
          </div>
          <div className="mt-6">
            <TrustBadgeRow badges={trustBadges.slice(0, 3)} />
          </div>
        </div>

        <div className="relative rounded-3xl border border-white/70 bg-white/75 p-6 backdrop-blur">
          <Image
            src="/images/logo.png"
            alt="Sunshines Handy Gal Services logo"
            width={520}
            height={520}
            className="mx-auto w-full max-w-sm rounded-2xl bg-white p-4 shadow-[0_20px_42px_-30px_rgba(0,0,0,0.75)]"
            priority
          />
          <ul className="mt-5 flex flex-wrap gap-2">
            {floatingTags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-charcoal"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
