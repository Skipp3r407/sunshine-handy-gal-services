"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroTrustItem, trustBadgeRowVariants } from "@/lib/motion-variants";

type TrustBadgeRowProps = {
  badges: string[];
  className?: string;
};

export function TrustBadgeRow({ badges, className }: TrustBadgeRowProps) {
  const reduced = useReducedMotion();

  return (
    <motion.ul
      className={["flex flex-wrap gap-2", className].filter(Boolean).join(" ")}
      variants={trustBadgeRowVariants(reduced)}
    >
      {badges.map((badge) => (
        <motion.li
          key={badge}
          variants={heroTrustItem(reduced)}
          className="rounded-full border border-teal-deep/30 bg-white/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-deep shadow-sm shadow-teal-deep/10"
        >
          {badge}
        </motion.li>
      ))}
    </motion.ul>
  );
}
