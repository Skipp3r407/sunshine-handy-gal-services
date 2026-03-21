import Image from "next/image";
import Link from "next/link";
import { businessInfo } from "@/lib/site-data";

export function AboutPreview() {
  return (
    <section className="grid gap-8 rounded-[2rem] border border-[#efe6d4] bg-white p-6 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.45)] sm:p-10 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="mb-3 inline-flex rounded-full bg-coral-peach/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#a65235]">
          Meet Your Cleaning Partner
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
          Warm, detail-focused care from {businessInfo.owner}
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-gray">
          Sunshine&apos;s Handy Gal Services was built on pride, consistency, and
          the belief that a clean home creates peace for busy families. Clients
          often mention the thoughtful special touches and the care that goes into
          every single visit.
        </p>
        <Link
          href="/about"
          className="mt-6 inline-flex rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal/90"
        >
          Learn More About Us
        </Link>
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sunshine-yellow/40 via-[#fff2c7] to-aqua/30 p-6">
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/60 blur-xl" />
        <Image
          src="/images/logo.png"
          alt="Sunshines Handy Gal Services logo"
          width={420}
          height={420}
          className="relative mx-auto w-full max-w-xs rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_16px_35px_-26px_rgba(0,0,0,0.7)]"
        />
      </div>
    </section>
  );
}
