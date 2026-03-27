import { socialLinks } from "@/lib/site-data";

const ICON = 22;
const STROKE = 1.6;

type Variant = "onLight" | "onDark";

function shellClass(variant: Variant, enabled: boolean) {
  const base =
    "inline-flex h-10 w-10 items-center justify-center rounded-xl border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  if (!enabled) {
    return `${base} cursor-not-allowed border-transparent opacity-40 ${
      variant === "onDark"
        ? "text-white/35"
        : "text-charcoal/35"
    }`;
  }
  if (variant === "onDark") {
    return `${base} border-white/15 text-white/85 hover:border-sunshine-yellow/40 hover:text-sunshine-yellow focus-visible:ring-sunshine-yellow/50`;
  }
  return `${base} border-[#e5dfd4] text-charcoal/85 hover:border-teal-deep/35 hover:text-teal-deep focus-visible:ring-teal-deep/30`;
}

function WhatsAppIcon() {
  return (
    <svg
      width={ICON}
      height={ICON}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width={ICON}
      height={ICON}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width={ICON}
      height={ICON}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width={ICON}
      height={ICON}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14 9.5V8c0-1.1.9-2 2-2h1V3h-2.5a5.5 5.5 0 0 0-5.5 5.5V9.5H7v3.5h2V21h4v-8.5h2.5L17 9.5h-3z" />
    </svg>
  );
}

export function SocialLinksRow({
  variant = "onLight",
  className = "",
  labelledBy,
}: {
  variant?: Variant;
  className?: string;
  /** Optional id of a heading element for aria-labelledby */
  labelledBy?: string;
}) {
  const wa = `https://wa.me/${socialLinks.whatsAppE164}`;
  const hasX = Boolean(socialLinks.x);
  const hasIg = Boolean(socialLinks.instagram);

  return (
    <div
      role="group"
      aria-label="Social media links"
      {...(labelledBy ? { "aria-labelledby": labelledBy } : {})}
      className={`flex flex-wrap items-center gap-2 sm:gap-3 ${className}`}
    >
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className={shellClass(variant, true)}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>

      {hasX ? (
        <a
          href={socialLinks.x}
          target="_blank"
          rel="noopener noreferrer"
          className={shellClass(variant, true)}
          aria-label="X (Twitter)"
        >
          <XIcon />
        </a>
      ) : (
        <span className={shellClass(variant, false)} title="Add your X profile URL in site-data">
          <XIcon />
        </span>
      )}

      {hasIg ? (
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={shellClass(variant, true)}
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>
      ) : (
        <span className={shellClass(variant, false)} title="Add your Instagram URL in site-data">
          <InstagramIcon />
        </span>
      )}

      <a
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className={shellClass(variant, true)}
        aria-label="Facebook"
      >
        <FacebookIcon />
      </a>
    </div>
  );
}
