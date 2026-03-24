type SunnyChatLogoProps = {
  className?: string;
  /** White bottle on teal (FAB). Teal bottle for light backgrounds (panel header). */
  variant?: "onTeal" | "onLight";
};

/**
 * Lightweight cleaning mark: spray bottle + sunshine sparkles (matches brand feel).
 */
export function SunnyChatLogo({
  className = "h-8 w-8",
  variant = "onTeal",
}: SunnyChatLogoProps) {
  const bottle = variant === "onTeal" ? "#ffffff" : "#0c7d96";
  const bottleShade = variant === "onTeal" ? "#e8f7fb" : "#0a6b82";
  const sparkle = "#f4c542";
  const nozzle = variant === "onTeal" ? "#dff6fc" : "#5ec9e8";

  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Sparkles */}
      <path
        d="M30 6v2.5M28.75 7.25h2.5M30 10v2.5M28.75 11.75h2.5"
        stroke={sparkle}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="33" cy="14" r="1.1" fill={sparkle} />
      {/* Spray mist */}
      <path
        d="M26 12c1.5 1 2.5 2.2 3 3.5"
        stroke={nozzle}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Pump head */}
      <rect x="15" y="7" width="10" height="5" rx="1.5" fill={bottle} />
      <rect x="23" y="8" width="6" height="4" rx="1" fill={bottleShade} />
      {/* Neck */}
      <rect x="17" y="11" width="6" height="3" rx="0.5" fill={bottleShade} />
      {/* Bottle body */}
      <path
        d="M13 14h14a2 2 0 012 2v15a4 4 0 01-4 4H15a4 4 0 01-4-4V16a2 2 0 012-2z"
        fill={bottle}
      />
      <path
        d="M15 18h10v11a2 2 0 01-2 2h-6a2 2 0 01-2-2V18z"
        fill={bottleShade}
        opacity="0.35"
      />
      {/* Shine */}
      <ellipse cx="17" cy="22" rx="1.2" ry="4" fill="white" opacity="0.25" />
    </svg>
  );
}
