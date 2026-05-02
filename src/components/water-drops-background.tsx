"use client";

import { motion, useReducedMotion } from "framer-motion";

type DropSpec = {
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  peakOpacity: number;
};

/** Positions / timing only — shapes are SVG teardrops */
const DROPS: DropSpec[] = [
  { left: "8%", top: "16%", size: 20, duration: 36, delay: 0, peakOpacity: 0.19 },
  { left: "88%", top: "24%", size: 16, duration: 32, delay: 2, peakOpacity: 0.17 },
  { left: "18%", top: "52%", size: 24, duration: 38, delay: 1, peakOpacity: 0.18 },
  { left: "78%", top: "36%", size: 26, duration: 34, delay: 3, peakOpacity: 0.185 },
  { left: "52%", top: "12%", size: 13, duration: 30, delay: 4, peakOpacity: 0.2 },
  { left: "68%", top: "68%", size: 18, duration: 33, delay: 0.5, peakOpacity: 0.175 },
  { left: "34%", top: "78%", size: 28, duration: 42, delay: 2.5, peakOpacity: 0.165 },
  { left: "4%", top: "62%", size: 15, duration: 35, delay: 1.8, peakOpacity: 0.18 },
  { left: "94%", top: "72%", size: 22, duration: 37, delay: 3.5, peakOpacity: 0.17 },
  { left: "44%", top: "28%", size: 17, duration: 31, delay: 0.9, peakOpacity: 0.19 },
  { left: "61%", top: "22%", size: 14, duration: 29, delay: 2.2, peakOpacity: 0.176 },
];

/** Classic teardrop path in 40×52 viewBox (rounded top → tip bottom) */
const DROP_PATH =
  "M20 3.5C11.5 3.5 5 11 5 21c0 14 11.5 27.5 15 29.5 4 2 15-15.5 15-29.5C35 11 28.5 3.5 20 3.5z";

function DropletSvg({
  size,
  gradientId,
}: {
  size: number;
  gradientId: string;
}) {
  const w = size;
  const h = Math.round(size * 1.3);
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 40 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible drop-shadow-[0_2px_10px_rgba(56,189,248,0.22)]"
      aria-hidden
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="8"
          y1="6"
          x2="34"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7dd3fc" stopOpacity="0.48" />
          <stop offset="0.45" stopColor="#38bdf8" stopOpacity="0.32" />
          <stop offset="1" stopColor="#0284c7" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path
        d={DROP_PATH}
        fill={`url(#${gradientId})`}
        stroke="rgba(255,253,248,0.28)"
        strokeWidth="0.75"
      />
      {/* Specular highlight */}
      <ellipse cx="15" cy="16" rx="5" ry="3.5" fill="white" fillOpacity="0.16" />
      <ellipse cx="14" cy="15" rx="2" ry="1.2" fill="white" fillOpacity="0.26" />
    </svg>
  );
}

export function WaterDropsBackground() {
  const reduced = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
      aria-hidden
    >
      {DROPS.map((drop, i) => {
        const gradientId = `water-drop-grad-${i}`;
        return (
          <motion.div
            key={`${drop.left}-${drop.top}-${i}`}
            className="absolute"
            style={{
              left: drop.left,
              top: drop.top,
            }}
            initial={
              reduced
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.78 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              opacity: {
                duration: reduced ? 0 : 2.1 + (i % 4) * 0.35,
                delay: reduced ? 0 : drop.delay * 0.35,
                ease: "easeOut",
              },
              scale: {
                duration: reduced ? 0 : 2.5 + (i % 4) * 0.3,
                delay: reduced ? 0 : drop.delay * 0.3,
                ease: [0.34, 1.35, 0.64, 1],
              },
            }}
          >
            <motion.div
              style={
                reduced ? { opacity: drop.peakOpacity * 0.5 } : undefined
              }
              initial={false}
              animate={
                reduced
                  ? {}
                  : {
                      y: [0, 10, 0, -4, 0],
                      rotate: [0, -2, 1, 0],
                      scale: [1, 1.06, 0.98, 1],
                      opacity: [
                        drop.peakOpacity * 0.62,
                        drop.peakOpacity * 0.18,
                        drop.peakOpacity * 0.62,
                      ],
                    }
              }
              transition={{
                y: {
                  duration: drop.duration,
                  delay: drop.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
                rotate: {
                  duration: drop.duration,
                  delay: drop.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
                scale: {
                  duration: drop.duration,
                  delay: drop.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
                opacity: {
                  duration: drop.duration * 2.4,
                  delay: drop.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
              }}
            >
              <DropletSvg size={drop.size} gradientId={gradientId} />
            </motion.div>
          </motion.div>
        );
      })}
      {/* Tiny bead accents (condensation) */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`bead-${i}`}
          className="absolute"
          style={{
            width: 5 + (i % 3) * 2,
            height: 5 + (i % 3) * 2,
            left: `${10 + i * 11}%`,
            top: `${60 + (i % 4) * 7}%`,
          }}
          initial={
            reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.35 }
          }
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: reduced ? 0 : 1.6 + i * 0.22,
            delay: reduced ? 0 : i * 0.5,
            ease: [0.34, 1.4, 0.64, 1],
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400/28 to-blue-600/16 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)] ring-1 ring-sky-300/25"
            initial={false}
            animate={
              reduced
                ? {}
                : {
                    opacity: [0.06, 0.18, 0.06],
                    scale: [1, 1.06, 1],
                  }
            }
            transition={{
              duration: 8 + i * 0.65,
              delay: i * 0.45,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
