"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  staggerContainerVariants,
  staggerItemVariants,
  subtleLiftHover,
} from "@/lib/motion-variants";

type ProcessStep = {
  title: string;
  description: string;
};

type ProcessStepsProps = {
  items: ProcessStep[];
};

export function ProcessSteps({ items }: ProcessStepsProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="grid gap-4 md:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -4% 0px" }}
      variants={staggerContainerVariants(reduced, 0.08)}
    >
      {items.map((step, index) => (
        <motion.article
          key={step.title}
          variants={staggerItemVariants(reduced)}
          whileHover={subtleLiftHover(reduced)}
          className="rounded-3xl border border-teal/10 bg-white p-6 shadow-[0_12px_30px_-24px_rgba(0,0,0,0.45)] transition-[box-shadow,border-color] duration-300 hover:border-sunshine-yellow/30 hover:shadow-[0_14px_34px_-22px_rgba(12,125,150,0.3)]"
        >
          <p className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sunshine-yellow to-golden-amber text-sm font-bold text-charcoal shadow-sm ring-2 ring-teal/15">
            {index + 1}
          </p>
          <h3 className="text-lg font-semibold text-charcoal">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-gray">{step.description}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}
