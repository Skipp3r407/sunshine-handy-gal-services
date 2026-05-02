"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { subtleLiftHover } from "@/lib/motion-variants";

type ServiceCardProps = {
  title: string;
  description: string;
  benefit: string;
  imageSrc: string;
  imageAlt: string;
};

export function ServiceCard({
  title,
  description,
  benefit,
  imageSrc,
  imageAlt,
}: ServiceCardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      className="group overflow-hidden rounded-3xl border border-teal/12 bg-white shadow-[0_10px_30px_-20px_rgba(0,0,0,0.28)] transition-[box-shadow,border-color] duration-300 hover:border-sunshine-yellow/35 hover:shadow-[0_16px_40px_-24px_rgba(12,125,150,0.45)]"
      whileHover={subtleLiftHover(reduced)}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-b from-teal/5 to-cream/30">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover opacity-[0.73] transition-[transform,opacity] duration-500 group-hover:scale-[1.03] group-hover:opacity-[0.83]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/35 via-transparent to-[#fffdfb]/45"
          aria-hidden
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-charcoal">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted-gray">{description}</p>
        <p className="mt-3 rounded-2xl border border-sunshine-yellow/15 bg-cream px-4 py-3 text-sm font-medium text-charcoal">
          {benefit}
        </p>
        <Link
          href="/services"
          className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-deep transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-gradient-to-r after:from-teal-deep after:to-aqua after:transition-all after:duration-300 hover:text-teal hover:after:w-full"
        >
          Learn more
          <span aria-hidden>→</span>
        </Link>
      </div>
    </motion.article>
  );
}
