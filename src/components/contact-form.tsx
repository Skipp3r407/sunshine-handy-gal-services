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
  "Airbnb & Vacation Rental Cleaning",
  "Post-Construction Cleaning",
] as const;

const fieldLabel = "group/field space-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal";
const fieldInput =
  "w-full rounded-2xl border border-[#efe9dc] bg-[#fffefb] px-4 py-3 text-sm leading-snug text-charcoal shadow-[inset_0_1px_0_rgba(255,255,255,0.92)] outline-none transition-[border-color,background-color,box-shadow] placeholder:text-muted-gray/60 hover:border-teal/25 hover:bg-white focus:border-teal-deep/55 focus:bg-white focus:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_3px_rgba(21,153,184,0.12)]";

const formCardPage =
  "relative overflow-hidden rounded-2xl border border-[#efe9dc] bg-white shadow-[0_8px_28px_-20px_rgba(0,0,0,0.12)] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-1 before:bg-gradient-to-r before:from-teal-deep before:via-aqua before:to-sunshine-yellow";

const formCardCompact =
  "relative overflow-hidden rounded-2xl border border-[#efe9dc] bg-white shadow-[0_8px_28px_-20px_rgba(0,0,0,0.12)] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-teal-deep before:via-aqua before:to-sunshine-yellow";

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
      <form
        className={`${formCardPage} space-y-8 p-6 pt-8 sm:p-8 sm:pt-9 lg:p-10 lg:pt-11`}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={fieldLabel}>
            <span className="normal-case tracking-normal">Name</span>
            <input
              name="name"
              autoComplete="name"
              required
              className={fieldInput}
              placeholder="Your full name"
            />
          </label>
          <label className={fieldLabel}>
            <span className="normal-case tracking-normal">Phone</span>
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
            <span className="normal-case tracking-normal">Email</span>
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
            <span className="normal-case tracking-normal">Address</span>
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
            <span className="normal-case tracking-normal">Service needed</span>
            <select
              name="service"
              key={searchParams.toString()}
              defaultValue={serviceDefault || ""}
              className={`${fieldInput} cursor-pointer pr-10`}
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
            <span className="normal-case tracking-normal">Preferred date</span>
            <input
              type="date"
              name="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className={`${fieldInput} min-h-[46px] [color-scheme:light]`}
            />
          </label>
        </div>

        <div className="rounded-2xl border border-[#d4e8f0] bg-gradient-to-b from-[#f4fbfd] via-white to-[#fffdf8] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] sm:p-5">
          <div className="mb-1">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-charcoal">
              Select from calendar
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-gray">
              Tap a date to fill in preferred date, or use the field above.
            </p>
          </div>
          <BookingCalendar
            className="mx-auto max-w-sm pt-3"
            value={preferredDate}
            onChange={setPreferredDate}
          />
        </div>

        <label className={fieldLabel}>
          <span className="normal-case tracking-normal">Message / details</span>
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
            className="cta-primary-enhanced inline-flex w-full items-center justify-center rounded-full bg-teal-deep px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-teal-deep/25 transition-colors hover:bg-teal-hover hover:shadow-lg hover:shadow-teal-deep/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunshine-yellow/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffefb] sm:w-auto sm:min-w-[220px]"
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
    <form className={`${formCardCompact} space-y-4 p-6 pt-8 sm:p-8 sm:pt-9`}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={fieldLabel}>
          <span className="normal-case tracking-normal">Name</span>
          <input
            name="name"
            autoComplete="name"
            required
            className={fieldInput}
            placeholder="Your full name"
          />
        </label>
        <label className={fieldLabel}>
          <span className="normal-case tracking-normal">Phone</span>
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
          <span className="normal-case tracking-normal">Email</span>
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
          <span className="normal-case tracking-normal">Service needed</span>
          <select
            name="service"
            key={searchParams.toString()}
            defaultValue={serviceDefault || ""}
            className={`${fieldInput} cursor-pointer pr-10`}
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
        <span className="normal-case tracking-normal">Preferred date</span>
        <input type="date" name="date" className={`${fieldInput} [color-scheme:light]`} />
      </label>

      <label className={fieldLabel}>
        <span className="normal-case tracking-normal">Message</span>
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
      className="animate-pulse overflow-hidden rounded-2xl border border-[#efe9dc] bg-white shadow-[0_8px_28px_-20px_rgba(0,0,0,0.12)] before:block before:h-1 before:bg-gradient-to-r before:from-teal-deep before:via-aqua before:to-sunshine-yellow"
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
