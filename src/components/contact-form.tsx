"use client";

import { motion, useReducedMotion } from "framer-motion";
import { buttonLiftHover } from "@/lib/motion-variants";

export function ContactForm() {
  const reduced = useReducedMotion();

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
            className="w-full rounded-xl border border-[#ddd6c8] bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            <option>Standard Cleaning</option>
            <option>Deep Cleaning</option>
            <option>Move-In / Move-Out Cleaning</option>
            <option>Organization Services</option>
            <option>Residential Cleaning</option>
            <option>Light Commercial Cleaning</option>
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
          className="w-full resize-y rounded-xl border border-[#ddd6c8] px-4 py-3 text-sm outline-none transition focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
          placeholder="Tell us about your space and what you need."
        />
      </label>

      <motion.button
        type="submit"
        whileHover={buttonLiftHover(reduced)}
        whileTap={reduced ? undefined : { scale: 0.99 }}
        className="w-full rounded-full bg-teal-deep px-6 py-3 text-sm font-semibold text-white shadow-md shadow-teal-deep/25 transition-colors hover:bg-teal-hover hover:shadow-lg hover:shadow-teal-deep/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunshine-yellow/70 focus-visible:ring-offset-2"
      >
        Request a Custom Quote
      </motion.button>
      <p className="text-xs text-muted-gray">
        Pricing is confirmed after discussing your home and service needs. A
        3-hour minimum service rate of $150 applies.
      </p>
    </form>
  );
}
