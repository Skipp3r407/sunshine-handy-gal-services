"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { revealVariants } from "@/lib/motion-variants";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  direction?: "up" | "left" | "right" | "scale";
  className?: string;
  delay?: number;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView" | "variants">;

export function Reveal({
  children,
  direction = "up",
  className,
  delay = 0,
  viewport,
  ...rest
}: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={
        viewport ?? { once: true, amount: 0.15, margin: "0px 0px -8% 0px" }
      }
      variants={revealVariants(direction, reduced, delay)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
