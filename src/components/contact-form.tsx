"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { businessInfo } from "@/lib/site-data";
import { primaryCtaHover } from "@/lib/motion-variants";
import { BookingCalendar } from "@/components/booking-calendar";

const SERVICE_OPTIONS = [
  "Detailed Clean",
  "Deep Cleaning",
  "Move-In / Move-Out Cleaning",
  "Organization Services",
  "Residential Cleaning",
  "Light Commercial Cleaning",
] as const;

const fieldLabel = "space-y-1.5 text-sm font-medium text-charcoal";
const fieldInput =
  "w-full rounded-xl border border-[#ddd6c8] bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20";

function ContactFormFields({ variant }: { variant: "page" | "compact" }) {
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

  const [preferredDate, setPreferredDate] = useState("");

  if (variant === "page") {
    return (
      <form className="space-y-8 rounded-[1.25rem] border border-[#efe9dc] bg-white p-6 shadow-[0_20px_48px_-32px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={fieldLabel}>
            Name
            <input
              name="name"
              autoComplete="name"
              required
              className={fieldInput}
              placeholder="Your full name"
            />
          </label>
          <label className={fieldLabel}>
            Phone
            <input
              name="phone"
              autoComplete="tel"
              required
              className={fieldInput}
              placeholder={businessInfo.phoneDisplay}
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className={fieldLabel}>
            Email
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              className={fieldInput}
              placeholder="you@email.com"
            />
          </label>
          <label className={fieldLabel}>
            Address
            <input
              name="address"
              autoComplete="street-address"
              className={fieldInput}
              placeholder="Street, city, ZIP"
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className={fieldLabel}>
            Service needed
            <select
              name="service"
              key={searchParams.toString()}
              defaultValue={serviceDefault || ""}
              className={fieldInput}
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
          <label className={fieldLabel}>
            Preferred date
            <input
              type="date"
              name="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className={`${fieldInput} min-h-[46px]`}
            />
          </label>
        </div>

        <div className="rounded-2xl border border-[#ebe4d6] bg-cream/40 p-4 sm:p-5">
          <div className="mb-1">
            <h3 className="text-sm font-semibold text-charcoal">Select from calendar</h3>
            <p className="text-xs text-muted-gray">
              Tap a date to fill in preferred date, or use the field above.
            </p>
          </div>
          <BookingCalendar
            className="mx-auto max-w-sm pt-2"
            value={preferredDate}
            onChange={setPreferredDate}
          />
        </div>

        <label className={fieldLabel}>
          Message / details
          <textarea
            name="message"
            rows={5}
            key={searchParams.toString()}
            defaultValue={messageDefault}
            className={`${fieldInput} resize-y`}
            placeholder="Tell us about your space and what you need."
          />
        </label>

        <div className="flex flex-col items-stretch gap-3 sm:items-start">
          <motion.button
            type="submit"
            whileHover={reduced ? undefined : { y: -1 }}
            whileTap={reduced ? undefined : { scale: 0.99 }}
            className="inline-flex w-full items-center justify-center rounded-xl bg-charcoal px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-charcoal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunshine-yellow/70 focus-visible:ring-offset-2 sm:w-auto sm:min-w-[200px]"
          >
            Request a quote
          </motion.button>
          <p className="max-w-xl text-xs leading-relaxed text-muted-gray">
            Pricing is confirmed after discussing your home and service needs. A 3-hour minimum
            service rate of $150 applies.
          </p>
        </div>
      </form>
    );
  }

  return (
    <form className="space-y-4 rounded-3xl border border-[#efe9dc] bg-white p-6 shadow-[0_16px_42px_-28px_rgba(0,0,0,0.45)] sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={fieldLabel}>
          Name
          <input
            name="name"
            autoComplete="name"
            required
            className={fieldInput}
            placeholder="Your full name"
          />
        </label>
        <label className={fieldLabel}>
          Phone
          <input
            name="phone"
            autoComplete="tel"
            required
            className={fieldInput}
            placeholder={businessInfo.phoneDisplay}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={fieldLabel}>
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            className={fieldInput}
            placeholder="you@email.com"
          />
        </label>
        <label className={fieldLabel}>
          Service Needed
          <select
            name="service"
            key={searchParams.toString()}
            defaultValue={serviceDefault || ""}
            className={fieldInput}
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

      <label className={fieldLabel}>
        Preferred Date
        <input type="date" name="date" className={fieldInput} />
      </label>

      <label className={fieldLabel}>
        Message
        <textarea
          name="message"
          rows={4}
          key={searchParams.toString()}
          defaultValue={messageDefault}
          className={`${fieldInput} resize-y`}
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
        Pricing is confirmed after discussing your home and service needs. A 3-hour minimum
        service rate of $150 applies.
      </p>
    </form>
  );
}

function ContactFormFallback({ variant }: { variant: "page" | "compact" }) {
  const h = variant === "page" ? "min(52rem,85vh)" : "min(28rem,70vh)";
  return (
    <div
      className="animate-pulse rounded-3xl border border-[#efe9dc] bg-cream/50"
      style={{ height: h }}
      aria-hidden
    />
  );
}

export function ContactForm({ variant = "compact" }: { variant?: "page" | "compact" }) {
  return (
    <Suspense fallback={<ContactFormFallback variant={variant} />}>
      <ContactFormFields variant={variant} />
    </Suspense>
  );
}
