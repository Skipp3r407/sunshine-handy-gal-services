"use client";

import { Children, isValidElement, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  staggerContainerVariants,
  staggerItemVariants,
  subtleLiftHover,
} from "@/lib/motion-variants";

type StaggerGridProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  enableHoverLift?: boolean;
};

export function StaggerGrid({
  children,
  className,
  stagger = 0.075,
  enableHoverLift = true,
}: StaggerGridProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -4% 0px" }}
      variants={staggerContainerVariants(reduced, stagger)}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;
        return (
          <motion.div
            key={child.key ?? index}
            variants={staggerItemVariants(reduced)}
            whileHover={enableHoverLift ? subtleLiftHover(reduced) : undefined}
            className="h-full min-h-0"
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
