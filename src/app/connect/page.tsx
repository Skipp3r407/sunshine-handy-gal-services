import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ConnectButtons } from "@/components/connect-buttons";
import { FloatingBubbles } from "@/components/floating-bubbles";
import { GrowingPopBubbles } from "@/components/growing-pop-bubbles";
import { businessInfo } from "@/lib/site-data";

const legalBusinessName = "Sunshine's Handy Gal Services LLC";

export const metadata: Metadata = {
  title: "Sunshine's Handy Gal Services LLC | Connect With Us",
  description:
    "Connect with Sunshine's Handy Gal Services LLC to request a free quote, pay an invoice, call, text, email, visit the website, or open official review and social links.",
  alternates: {
    canonical: "https://sunshineshandygal.com/connect",
  },
  openGraph: {
    title: "Sunshine's Handy Gal Services LLC | Connect With Us",
    description:
      "Official digital business card and contact hub for Sunshine's Handy Gal Services LLC, including invoice payment.",
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
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          aria-hidden
        >
          <FloatingBubbles />
          <GrowingPopBubbles />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-5 py-7 sm:px-8 sm:py-10">
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

          <ConnectButtons />

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
