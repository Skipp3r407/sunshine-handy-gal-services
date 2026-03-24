import type { Variants } from "framer-motion";

/** Polished ease-out — GPU-friendly props only in variants (opacity, transform) */
export const motionEase = [0.22, 1, 0.36, 1] as const;

/** Scroll / section reveals: ~0.55–0.7s, small travel */
const SCROLL_DURATION = 0.62;
const SCROLL_Y = 14;
const SCROLL_X = 20;

/** Hero load: quick stagger, total sequence under ~1s */
const HERO_CHILD_DURATION = 0.56;
const HERO_STAGGER = 0.048;
const HERO_DELAY_CHILDREN = 0.035;

type Reduced = boolean | null;

export function revealVariants(
  direction: "up" | "left" | "right" | "scale",
  reduced: Reduced,
  delay = 0,
): Variants {
  const r = !!reduced;
  const duration = r ? 0.08 : SCROLL_DURATION;
  const hidden: Record<string, number> = { opacity: 0 };
  if (!r) {
    if (direction === "left") {
      hidden.x = -SCROLL_X;
    } else if (direction === "right") {
      hidden.x = SCROLL_X;
    } else if (direction === "scale") {
      hidden.scale = 0.985;
      hidden.y = 6;
    } else {
      hidden.y = SCROLL_Y;
    }
  }

  return {
    hidden,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration, ease: motionEase, delay: r ? 0 : delay },
    },
  };
}

export function staggerContainerVariants(reduced: Reduced, stagger = 0.065): Variants {
  const r = !!reduced;
  return {
    hidden: {},
    visible: {
      transition: r
        ? { duration: 0 }
        : { staggerChildren: stagger, delayChildren: 0.04 },
    },
  };
}

export function staggerItemVariants(reduced: Reduced): Variants {
  const r = !!reduced;
  return {
    hidden: r ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.992 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: r ? 0.08 : SCROLL_DURATION, ease: motionEase },
    },
  };
}

export function ctaBannerVariants(reduced: Reduced): Variants {
  const r = !!reduced;
  return {
    hidden: r ? { opacity: 0 } : { opacity: 0, scale: 0.99, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: r ? 0.08 : 0.68, ease: motionEase },
    },
  };
}

/** Cards: slight lift + scale — shadow from CSS hover */
export function subtleLiftHover(reduced: Reduced) {
  if (reduced) return undefined;
  return {
    y: -4,
    scale: 1.012,
    transition: { duration: 0.22, ease: motionEase },
  };
}

/** Legacy small lift for secondary controls */
export function buttonLiftHover(reduced: Reduced) {
  if (reduced) return undefined;
  return {
    y: -1,
    scale: 1.02,
    transition: { duration: 0.2, ease: motionEase },
  };
}

/** Primary conversion CTAs: subtle scale within 1.02–1.05 */
export function primaryCtaHover(reduced: Reduced) {
  if (reduced) return undefined;
  return {
    scale: 1.035,
    y: -1,
    transition: { duration: 0.22, ease: motionEase },
  };
}

/** Hero load: orchestrates stagger (mount, not scroll) */
export function heroLoadContainer(reduced: Reduced): Variants {
  const r = !!reduced;
  return {
    hidden: {},
    visible: {
      transition: r
        ? { duration: 0 }
        : {
            staggerChildren: HERO_STAGGER,
            delayChildren: HERO_DELAY_CHILDREN,
          },
    },
  };
}

/** Single hero block: fade + slight upward */
export function heroLoadBlock(reduced: Reduced): Variants {
  const r = !!reduced;
  return {
    hidden: r ? { opacity: 0 } : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: r ? 0.08 : HERO_CHILD_DURATION, ease: motionEase },
    },
  };
}

export function trustBadgeRowVariants(reduced: Reduced): Variants {
  const r = !!reduced;
  return {
    hidden: r ? { opacity: 0 } : { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: r
        ? { duration: 0.08 }
        : {
            duration: HERO_CHILD_DURATION * 0.85,
            ease: motionEase,
            staggerChildren: 0.06,
            delayChildren: 0.01,
          },
    },
  };
}

export function heroTrustItem(reduced: Reduced): Variants {
  const r = !!reduced;
  return {
    hidden: r ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: r ? 0.06 : 0.45, ease: motionEase },
    },
  };
}

/** Hero visual column: same mount timing, fade + slight rise */
export function heroVisualColumn(reduced: Reduced): Variants {
  const r = !!reduced;
  return {
    hidden: r ? { opacity: 0 } : { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: r ? 0.08 : 0.62,
        ease: motionEase,
        staggerChildren: r ? 0 : 0.05,
        delayChildren: r ? 0 : 0.06,
      },
    },
  };
}

export function heroTagList(reduced: Reduced): Variants {
  const r = !!reduced;
  return {
    hidden: r ? { opacity: 0 } : { opacity: 0 },
    visible: {
      opacity: 1,
      transition: r ? { duration: 0.08 } : { staggerChildren: 0.045 },
    },
  };
}
