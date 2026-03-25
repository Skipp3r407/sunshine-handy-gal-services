"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { businessInfo, trustBadges } from "@/lib/site-data";
import { TrustBadgeRow } from "@/components/trust-badge-row";
import {
  buttonLiftHover,
  heroLoadBlock,
  heroLoadContainer,
  heroTagList,
  heroTrustItem,
  heroVisualColumn,
  primaryCtaHover,
} from "@/lib/motion-variants";

const floatingTags = [
  "Deep Cleaning",
  "Move-Out",
  "Organizing",
  "Residential + Commercial",
];

export function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#fff4cc] via-[#fffdf8] to-[#dff6fc] px-4 pb-8 pt-6 shadow-[0_20px_45px_-32px_rgba(12,125,150,0.18)] min-[400px]:rounded-[2.25rem] sm:px-10 sm:pb-12 sm:pt-14 lg:px-12">
      <div className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full bg-sunshine-yellow/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-aqua/35 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-deep/10 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          className="space-y-0"
          variants={heroLoadContainer(reduced)}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={heroLoadBlock(reduced)}
            className="mb-3 inline-flex rounded-full border border-teal/15 bg-gradient-to-r from-sunshine-yellow/35 to-aqua/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#7a5200] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]"
          >
            Professional Cleaning in Orlando
          </motion.p>
          <motion.h1
            variants={heroLoadBlock(reduced)}
            className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl"
          >
            Let Us Add Some Sunshine to Your Home
          </motion.h1>
          <motion.p
            variants={heroLoadBlock(reduced)}
            className="mt-5 max-w-xl text-base leading-7 text-muted-gray sm:text-lg"
          >
            Sunshine&apos;s Handy Gal Services delivers detail-oriented residential
            and light commercial cleaning across Orlando and nearby Central
            Florida. Warm service, reliable communication, and polished results
            you can feel right away.
          </motion.p>
          <motion.div
            variants={heroLoadBlock(reduced)}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <motion.div whileHover={primaryCtaHover(reduced)}>
              <Link
                href="/contact"
                className="cta-primary-enhanced inline-flex items-center justify-center rounded-full bg-teal-deep px-6 py-3 text-sm font-semibold text-white shadow-md shadow-teal-deep/25 transition-colors hover:bg-teal-hover hover:shadow-lg hover:shadow-teal-deep/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunshine-yellow/70 focus-visible:ring-offset-2"
              >
                Get a Custom Quote
              </Link>
            </motion.div>
            <motion.div whileHover={buttonLiftHover(reduced)}>
              <a
                href={businessInfo.textHref}
                className="inline-flex items-center justify-center rounded-full border border-teal-deep/40 bg-white px-6 py-3 text-sm font-semibold text-teal-deep shadow-sm transition-[border-color,background-color,box-shadow] hover:border-golden-amber/50 hover:bg-sunshine-yellow/12 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep/35 focus-visible:ring-offset-2"
              >
                Text for a Quote
              </a>
            </motion.div>
          </motion.div>
          <TrustBadgeRow
            badges={trustBadges.slice(0, 3)}
            className="mt-6"
          />
        </motion.div>

        <motion.div
          className="relative rounded-3xl border border-teal/10 bg-white/80 p-6 shadow-[0_12px_40px_-28px_rgba(12,125,150,0.35)] backdrop-blur"
          variants={heroVisualColumn(reduced)}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={heroLoadBlock(reduced)}>
            <Image
              src="/images/logo.png"
              alt="Sunshines Handy Gal Services logo"
              width={520}
              height={520}
              className="mx-auto w-full max-w-sm rounded-2xl bg-white p-4 shadow-[0_20px_42px_-30px_rgba(0,0,0,0.75)]"
              priority
            />
          </motion.div>
          <motion.ul
            className="mt-5 flex flex-wrap gap-2"
            variants={heroTagList(reduced)}
          >
            {floatingTags.map((tag) => (
              <motion.li
                key={tag}
                variants={heroTrustItem(reduced)}
                className="rounded-full border border-teal/12 bg-gradient-to-r from-sunshine-yellow/15 to-white px-3 py-1 text-xs font-semibold text-charcoal shadow-sm"
              >
                {tag}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
