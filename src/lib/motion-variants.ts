import type { Variants } from "framer-motion";

/** Premium ease-out; short durations to avoid feeling slow */
export const motionEase = [0.22, 1, 0.36, 1] as const;

type Reduced = boolean | null;

export function revealVariants(
  direction: "up" | "left" | "right" | "scale",
  reduced: Reduced,
  delay = 0,
): Variants {
  const r = !!reduced;
  const duration = r ? 0.12 : 0.48;
  const hidden: Record<string, number> = { opacity: 0 };
  if (!r) {
    if (direction === "left") {
      hidden.x = -28;
    } else if (direction === "right") {
      hidden.x = 28;
    } else if (direction === "scale") {
      hidden.scale = 0.96;
      hidden.y = 8;
    } else {
      hidden.y = 22;
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

export function staggerContainerVariants(reduced: Reduced, stagger = 0.075): Variants {
  const r = !!reduced;
  return {
    hidden: {},
    visible: {
      transition: r
        ? { duration: 0 }
        : { staggerChildren: stagger, delayChildren: 0.05 },
    },
  };
}

export function staggerItemVariants(reduced: Reduced): Variants {
  const r = !!reduced;
  return {
    hidden: r ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.985 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: r ? 0.1 : 0.4, ease: motionEase },
    },
  };
}

export function ctaBannerVariants(reduced: Reduced): Variants {
  const r = !!reduced;
  return {
    hidden: r ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: 14 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: r ? 0.12 : 0.52, ease: motionEase },
    },
  };
}

export function subtleLiftHover(reduced: Reduced) {
  if (reduced) return undefined;
  return { y: -3, transition: { duration: 0.22, ease: motionEase } };
}

export function buttonLiftHover(reduced: Reduced) {
  if (reduced) return undefined;
  return { y: -2, transition: { duration: 0.2, ease: motionEase } };
}

/** Hero: left column with staggered children */
export function heroLeftColumn(reduced: Reduced): Variants {
  const r = !!reduced;
  return {
    hidden: r ? { opacity: 0 } : { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: r ? 0.12 : 0.48,
        ease: motionEase,
        staggerChildren: r ? 0 : 0.085,
        delayChildren: r ? 0 : 0.04,
      },
    },
  };
}

export function heroBlock(reduced: Reduced): Variants {
  const r = !!reduced;
  return {
    hidden: r ? { opacity: 0 } : { opacity: 0, x: -12 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: r ? 0.1 : 0.36, ease: motionEase },
    },
  };
}

/** Trust row: enters with hero column stagger, then badges stagger in */
export function trustBadgeRowVariants(reduced: Reduced): Variants {
  const r = !!reduced;
  return {
    hidden: r ? { opacity: 0 } : { opacity: 0, x: -12 },
    visible: {
      opacity: 1,
      x: 0,
      transition: r
        ? { duration: 0.1 }
        : {
            duration: 0.36,
            ease: motionEase,
            staggerChildren: 0.075,
            delayChildren: 0.02,
          },
    },
  };
}

export function heroTrustItem(reduced: Reduced): Variants {
  const r = !!reduced;
  return {
    hidden: r ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: r ? 0.08 : 0.32, ease: motionEase },
    },
  };
}

/** Hero: right column + tag stagger */
export function heroRightColumn(reduced: Reduced): Variants {
  const r = !!reduced;
  return {
    hidden: r ? { opacity: 0 } : { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: r ? 0.12 : 0.5,
        ease: motionEase,
        staggerChildren: r ? 0 : 0.08,
        delayChildren: r ? 0 : 0.1,
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
      transition: r ? { duration: 0.1 } : { staggerChildren: 0.055 },
    },
  };
}
