"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { subtleLiftHover } from "@/lib/motion-variants";

type ServiceCardProps = {
  title: string;
  description: string;
  benefit: string;
};

export function ServiceCard({ title, description, benefit }: ServiceCardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      className="group rounded-3xl border border-teal/12 bg-white p-6 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.28)] transition-[box-shadow,border-color] duration-300 hover:border-sunshine-yellow/35 hover:shadow-[0_16px_40px_-24px_rgba(12,125,150,0.45)]"
      whileHover={subtleLiftHover(reduced)}
    >
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal/12 to-aqua/20 text-xl text-teal-deep ring-1 ring-sunshine-yellow/25">
        ✨
      </div>
      <h3 className="text-xl font-semibold text-charcoal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-gray">{description}</p>
      <p className="mt-3 rounded-2xl border border-sunshine-yellow/15 bg-cream px-4 py-3 text-sm font-medium text-charcoal">
        {benefit}
      </p>
      <Link
        href="/services"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-deep transition-colors hover:text-teal hover:underline decoration-sunshine-yellow/70 underline-offset-4"
      >
        Learn more
        <span aria-hidden>→</span>
      </Link>
    </motion.article>
  );
}
