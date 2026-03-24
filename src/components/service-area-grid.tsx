"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  staggerContainerVariants,
  staggerItemVariants,
  subtleLiftHover,
} from "@/lib/motion-variants";

type ServiceArea = {
  name: string;
  description: string;
};

type ServiceAreaGridProps = {
  items: ServiceArea[];
};

export function ServiceAreaGrid({ items }: ServiceAreaGridProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -4% 0px" }}
      variants={staggerContainerVariants(reduced, 0.07)}
    >
      {items.map((area) => (
        <motion.article
          key={area.name}
          variants={staggerItemVariants(reduced)}
          whileHover={subtleLiftHover(reduced)}
          className="rounded-2xl border border-teal/20 bg-white p-5 shadow-[0_12px_28px_-24px_rgba(0,0,0,0.5)] transition-[box-shadow,border-color] duration-300 hover:border-teal-deep/35 hover:shadow-[0_14px_32px_-22px_rgba(12,125,150,0.28)]"
        >
          <h3 className="text-lg font-semibold text-charcoal">{area.name}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-gray">{area.description}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}
