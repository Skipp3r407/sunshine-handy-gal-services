"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { primaryCtaHover } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

type PrimaryCtaLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Server pages can import this client wrapper for consistent primary CTA motion + glow class.
 */
export function PrimaryCtaLink({ href, className, children }: PrimaryCtaLinkProps) {
  const reduced = useReducedMotion();

  return (
    <motion.span className="inline-flex" whileHover={primaryCtaHover(reduced)}>
      <Link
        href={href}
        className={cn(
          "cta-primary-enhanced inline-flex items-center justify-center rounded-full bg-teal-deep text-sm font-semibold text-white shadow-md shadow-teal-deep/25 transition-colors hover:bg-teal-hover hover:shadow-lg hover:shadow-teal-deep/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunshine-yellow/70 focus-visible:ring-offset-2",
          className,
        )}
      >
        {children}
      </Link>
    </motion.span>
  );
}
