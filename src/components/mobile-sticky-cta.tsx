"use client";

import { motion, useReducedMotion } from "framer-motion";
import { businessInfo } from "@/lib/site-data";
import { buttonLiftHover, primaryCtaHover } from "@/lib/motion-variants";

export function MobileStickyCTA() {
  const reduced = useReducedMotion();

  return (
    <div className="nav-open-hide fixed inset-x-0 bottom-0 z-40 border-t border-teal/15 bg-white/95 px-2 pb-[max(0.375rem,env(safe-area-inset-bottom,0px))] pt-2 shadow-[0_-4px_24px_-8px_rgba(12,125,150,0.2)] backdrop-blur sm:p-3 lg:hidden">
      <div className="mx-auto flex max-w-6xl gap-1.5 sm:gap-2">
        <motion.a
          href={businessInfo.phoneHref}
          className="flex min-h-[44px] flex-1 items-center justify-center rounded-full border border-teal-deep/40 px-2.5 py-2 text-center text-xs font-semibold leading-tight text-teal-deep transition-colors hover:bg-sunshine-yellow/12 sm:px-4 sm:text-sm"
          whileHover={buttonLiftHover(reduced)}
          whileTap={reduced ? undefined : { scale: 0.99 }}
        >
          Call for a Quote
        </motion.a>
        <motion.a
          href={businessInfo.textHref}
          className="cta-primary-enhanced flex min-h-[44px] flex-1 items-center justify-center rounded-full bg-teal-deep px-2.5 py-2 text-center text-xs font-semibold leading-tight text-white shadow-md shadow-teal-deep/30 transition-colors hover:bg-teal-hover sm:px-4 sm:text-sm"
          whileHover={primaryCtaHover(reduced)}
          whileTap={reduced ? undefined : { scale: 0.99 }}
        >
          Text for a Quote
        </motion.a>
      </div>
    </div>
  );
}
