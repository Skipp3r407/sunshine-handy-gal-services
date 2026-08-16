import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  enabledConnectLinks,
  type ConnectLink,
  type ConnectLinkIcon,
} from "@/lib/connect-links";
import { businessInfo } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const legalBusinessName = "Sunshine's Handy Gal Services LLC";

export const metadata: Metadata = {
  title: "Sunshine's Handy Gal Services LLC | Connect With Us",
  description:
    "Connect with Sunshine's Handy Gal Services LLC to request a free quote, call, text, email, visit the website, or open official review and social links.",
  alternates: {
    canonical: "https://sunshineshandygal.com/connect",
  },
  openGraph: {
    title: "Sunshine's Handy Gal Services LLC | Connect With Us",
    description:
      "Official digital business card and contact hub for Sunshine's Handy Gal Services LLC.",
    url: "https://sunshineshandygal.com/connect",
    siteName: businessInfo.name,
    type: "website",
    images: [
      {
        url: "https://sunshineshandygal.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: `${businessInfo.name} logo`,
      },
    ],
  },
};

function ConnectIcon({ icon }: { icon: ConnectLinkIcon }) {
  const iconProps = {
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    "aria-hidden": true,
  } as const;

  switch (icon) {
    case "sparkles":
      return (
        <svg {...iconProps}>
          <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
          <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z" />
          <path d="M5 13l.8 2.2L8 16l-2.2.8L5 19l-.8-2.2L2 16l2.2-.8L5 13z" />
        </svg>
      );
    case "home":
      return (
        <svg {...iconProps}>
          <path d="M3 10.5L12 3l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 10v10h14V10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 20v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "phone":
      return (
        <svg {...iconProps}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1z" />
        </svg>
      );
    case "message":
      return (
        <svg {...iconProps}>
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "mail":
      return (
        <svg {...iconProps}>
          <path d="M4 4h16v16H4z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...iconProps}>
          <path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "map":
      return (
        <svg {...iconProps}>
          <path d="M12 21s7-5.1 7-12a7 7 0 1 0-14 0c0 6.9 7 12 7 12z" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case "star":
      return (
        <svg {...iconProps}>
          <path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1-4.4-4.3 6.1-.9L12 3z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <path d="M7 17L17 7" strokeLinecap="round" />
          <path d="M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

function connectButtonClass(link: ConnectLink) {
  return cn(
    "group flex min-h-[58px] w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left shadow-[0_14px_36px_-30px_rgba(30,42,58,0.5)] transition-all duration-200",
    "hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-32px_rgba(12,125,150,0.45)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunshine-yellow/80 focus-visible:ring-offset-2",
    link.type === "primary"
      ? "border-teal-deep bg-teal-deep text-white hover:bg-teal-hover"
      : "border-[#e8e4dc] bg-white/95 text-charcoal hover:border-teal/25 hover:bg-cream/80",
  );
}

function ConnectButton({ link }: { link: ConnectLink }) {
  const content = (
    <>
      <span className="flex min-w-0 items-center gap-3">
        <span
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors",
            link.type === "primary"
              ? "bg-white/16 text-white"
              : "bg-[#e3f2fb] text-teal-deep group-hover:bg-teal-deep group-hover:text-white",
          )}
        >
          <ConnectIcon icon={link.icon} />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-base font-bold sm:text-lg">
            {link.label}
          </span>
          {link.id === "call" || link.id === "text" ? (
            <span className="mt-0.5 block text-xs opacity-80">
              {businessInfo.phoneDisplay}
            </span>
          ) : null}
          {link.id === "email" ? (
            <span className="mt-0.5 block truncate text-xs opacity-80">
              {businessInfo.email}
            </span>
          ) : null}
        </span>
      </span>
      <span className="shrink-0 text-current/70 transition-transform group-hover:translate-x-0.5">
        <ConnectIcon icon={link.external ? "external" : "sparkles"} />
      </span>
    </>
  );

  if (link.href.startsWith("/")) {
    return (
      <Link
        href={link.href}
        aria-label={link.ariaLabel}
        data-analytics-event={link.analyticsEvent}
        className={connectButtonClass(link)}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={link.href}
      aria-label={link.ariaLabel}
      data-analytics-event={link.analyticsEvent}
      className={connectButtonClass(link)}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}

export default function ConnectPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <section
        className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[#fdfaf2] bg-center bg-no-repeat shadow-[0_24px_80px_-48px_rgba(30,42,58,0.55)] backdrop-blur"
        style={{
          backgroundImage: "url('/images/connect/link-tree-bg.png')",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="relative mx-auto max-w-3xl px-5 py-7 sm:px-8 sm:py-10">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-sunshine-yellow/18 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-aqua/20 blur-3xl"
            aria-hidden
          />

          <header className="relative text-center">
            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-[2rem] bg-white p-2 shadow-[0_18px_45px_-32px_rgba(30,42,58,0.5)] sm:h-44 sm:w-44">
              <Image
                src="/images/logo.png"
                alt={`${businessInfo.name} logo`}
                width={220}
                height={220}
                priority
                className="h-full w-full object-contain"
              />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-teal-deep">
              Official Digital Contact Hub
            </p>
            <h1 className="mt-2 font-heading text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl">
              {legalBusinessName}
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-muted-gray">
              Cheerful, professional cleaning and organizing with thoughtful detail
              across Orlando and Central Florida.
            </p>
            <p className="mt-3 text-sm font-semibold text-golden-amber">
              Serving {businessInfo.serviceAreaSummary}
            </p>
          </header>

          <div className="relative mt-7 grid gap-3 sm:mt-8">
            {enabledConnectLinks.map((link) => (
              <ConnectButton key={link.id} link={link} />
            ))}
          </div>

        </div>
      </section>

      <footer className="px-4 py-6 text-center text-xs leading-6 text-muted-gray">
        <p>&copy; {new Date().getFullYear()} {legalBusinessName}</p>
        <Link
          href="/"
          className="font-semibold text-teal-deep underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep/35 focus-visible:ring-offset-2"
        >
          Visit Full Website
        </Link>
      </footer>
    </div>
  );
}
