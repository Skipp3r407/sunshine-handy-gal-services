"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { businessInfo } from "@/lib/site-data";
import { primaryCtaHover } from "@/lib/motion-variants";

const SERVICE_OPTIONS = [
  "Standard Cleaning",
  "Deep Cleaning",
  "Move-In / Move-Out Cleaning",
  "Organization Services",
  "Residential Cleaning",
  "Light Commercial Cleaning",
] as const;

function ContactFormFields() {
  const reduced = useReducedMotion();
  const searchParams = useSearchParams();
  const { messageDefault, serviceDefault } = useMemo(() => {
    const message = searchParams.get("message") ?? "";
    const service = searchParams.get("service") ?? "";
    const validService = SERVICE_OPTIONS.includes(service as (typeof SERVICE_OPTIONS)[number])
      ? service
      : "";
    return { messageDefault: message, serviceDefault: validService };
  }, [searchParams]);

  return (
    <form className="space-y-4 rounded-3xl border border-[#efe9dc] bg-white p-6 shadow-[0_16px_42px_-28px_rgba(0,0,0,0.45)] sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1 text-sm font-medium text-charcoal">
          Name
          <input
            name="name"
            autoComplete="name"
            required
            className="w-full rounded-xl border border-[#ddd6c8] px-4 py-3 text-sm outline-none transition focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
            placeholder="Your full name"
          />
        </label>
        <label className="space-y-1 text-sm font-medium text-charcoal">
          Phone
          <input
            name="phone"
            autoComplete="tel"
            required
            className="w-full rounded-xl border border-[#ddd6c8] px-4 py-3 text-sm outline-none transition focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
            placeholder="(321) 339-6686"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1 text-sm font-medium text-charcoal">
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            className="w-full rounded-xl border border-[#ddd6c8] px-4 py-3 text-sm outline-none transition focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
            placeholder="you@email.com"
          />
        </label>
        <label className="space-y-1 text-sm font-medium text-charcoal">
          Service Needed
          <select
            name="service"
            key={searchParams.toString()}
            defaultValue={serviceDefault || ""}
            className="w-full rounded-xl border border-[#ddd6c8] bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="space-y-1 text-sm font-medium text-charcoal">
        Preferred Date
        <input
          type="date"
          name="date"
          className="w-full rounded-xl border border-[#ddd6c8] px-4 py-3 text-sm outline-none transition focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
        />
      </label>

      <label className="space-y-1 text-sm font-medium text-charcoal">
        Message
        <textarea
          name="message"
          rows={4}
          key={searchParams.toString()}
          defaultValue={messageDefault}
          className="w-full resize-y rounded-xl border border-[#ddd6c8] px-4 py-3 text-sm outline-none transition focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
          placeholder="Tell us about your space and what you need."
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <motion.a
          href={businessInfo.phoneHref}
          whileHover={primaryCtaHover(reduced)}
          whileTap={reduced ? undefined : { scale: 0.99 }}
          className="cta-primary-enhanced inline-flex flex-1 items-center justify-center rounded-full bg-teal-deep px-6 py-3 text-sm font-semibold text-white shadow-md shadow-teal-deep/25 transition-colors hover:bg-teal-hover hover:shadow-lg hover:shadow-teal-deep/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunshine-yellow/70 focus-visible:ring-offset-2"
        >
          Call {businessInfo.phoneDisplay}
        </motion.a>
        <motion.button
          type="submit"
          whileHover={reduced ? undefined : { y: -1 }}
          whileTap={reduced ? undefined : { scale: 0.99 }}
          className="inline-flex flex-1 items-center justify-center rounded-full border border-teal-deep/45 bg-white px-6 py-3 text-sm font-semibold text-teal-deep shadow-sm transition-colors hover:border-golden-amber/50 hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep/30 focus-visible:ring-offset-2"
        >
          Request a Quote
        </motion.button>
      </div>

      <p className="text-xs text-muted-gray">
        Pricing is confirmed after discussing your home and service needs. A
        3-hour minimum service rate of $150 applies.
      </p>
    </form>
  );
}

function ContactFormFallback() {
  return (
    <div
      className="h-[min(28rem,70vh)] animate-pulse rounded-3xl border border-[#efe9dc] bg-cream/50"
      aria-hidden
    />
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={<ContactFormFallback />}>
      <ContactFormFields />
    </Suspense>
  );
}
