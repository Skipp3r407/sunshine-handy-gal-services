"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { businessInfo } from "@/lib/site-data";
import { primaryCtaHover, revealVariants } from "@/lib/motion-variants";

const aboutViewport = { once: true, amount: 0.2, margin: "0px 0px -8% 0px" };

export function AboutPreview() {
  const reduced = useReducedMotion();

  return (
    <section className="grid gap-8 rounded-[2rem] border border-teal/10 bg-white p-6 shadow-[0_18px_40px_-28px_rgba(12,125,150,0.12)] sm:p-10 lg:grid-cols-2 lg:items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={aboutViewport}
        variants={revealVariants("left", reduced, 0)}
      >
        <p className="mb-3 inline-flex rounded-full border border-teal/12 bg-gradient-to-r from-coral-peach/20 via-sunshine-yellow/15 to-aqua/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#8a4a2e]">
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
        <motion.div className="mt-6 inline-block" whileHover={primaryCtaHover(reduced)}>
          <Link
            href="/about"
            className="cta-primary-enhanced inline-flex rounded-full bg-teal-deep px-6 py-3 text-sm font-semibold text-white shadow-md shadow-teal-deep/25 transition-colors hover:bg-teal-hover hover:shadow-lg hover:shadow-teal-deep/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunshine-yellow/70 focus-visible:ring-offset-2"
          >
            Learn More About Us
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sunshine-yellow/40 via-[#fff2c7] to-aqua/30 p-6"
        initial="hidden"
        whileInView="visible"
        viewport={aboutViewport}
        variants={revealVariants("right", reduced, 0.06)}
      >
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/60 blur-xl" />
        <Image
          src="/images/logo.png"
          alt="Sunshines Handy Gal Services logo"
          width={420}
          height={420}
          className="relative mx-auto w-full max-w-xs rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_16px_35px_-26px_rgba(0,0,0,0.7)]"
        />
      </motion.div>
    </section>
  );
}
