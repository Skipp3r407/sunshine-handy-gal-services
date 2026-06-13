import Link from "next/link";
import Image from "next/image";
import { GoogleReviewCta } from "@/components/google-review-cta";
import { SocialLinksRow } from "@/components/social-links-row";
import { FooterHours } from "@/components/footer-hours";
import { businessInfo, navLinks, serviceAreas } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/** Body/footer nav links — vivid teal-blue on hover */
const footerColumnLinkClass = cn(
  "text-black underline-offset-[3px] decoration-teal/50 transition-colors duration-200",
  "hover:text-teal hover:underline",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep/35 focus-visible:ring-offset-2 focus-visible:rounded-sm",
);

export function Footer() {
  return (
    <footer className="relative z-[2] mt-12 pb-[calc(5.75rem+env(safe-area-inset-bottom,0px))] sm:mt-16 lg:mt-20 lg:pb-0">
      <div className="border-t border-white/10 bg-charcoal text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:px-8">
          <div className="min-w-0 flex-1">
            <GoogleReviewCta variant="onDark" />
          </div>
          <SocialLinksRow variant="onDark" className="shrink-0 lg:pb-0.5" />
        </div>
      </div>
      <div className="border-t border-[#e8e4dc] bg-white text-black">
        <div
          className="h-1 w-full bg-gradient-to-r from-teal-deep via-aqua to-sunshine-yellow"
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl gap-6 px-3 py-8 sm:gap-10 sm:px-6 sm:py-12 lg:grid-cols-4 lg:px-8">
          <div>
            <Image
              src="/images/logo.png"
              alt={`${businessInfo.name} logo`}
              width={160}
              height={56}
              className="h-auto w-[112px] sm:w-[140px]"
            />
            <p className="mt-3 text-sm leading-relaxed text-black sm:mt-4 sm:leading-6">
              Cheerful, professional cleaning and organizing with thoughtful detail
              across Orlando and Central Florida.
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-golden-amber sm:mt-3">
              Women-Owned Business
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-deep sm:text-sm">
              Quick Links
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-black sm:mt-4 sm:space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerColumnLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-deep sm:text-sm">
              Service Areas
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm sm:mt-4 sm:space-y-2">
              {serviceAreas.slice(0, 5).map((area) => (
                <li key={area.name}>
                  <Link href="/service-areas" className={footerColumnLinkClass}>
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className={footerColumnLinkClass}>
                  Nearby Central Florida
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-deep sm:text-sm">
              Contact
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-black sm:mt-4 sm:space-y-2">
              <li>
                <a
                  href={businessInfo.phoneHref}
                  className={footerColumnLinkClass}
                >
                  {businessInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={businessInfo.emailHref}
                  className={footerColumnLinkClass}
                >
                  {businessInfo.email}
                </a>
              </li>
              <li>{businessInfo.location}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e8e4dc]">
          <div className="mx-auto max-w-6xl px-3 py-8 sm:px-6 sm:py-10 lg:px-8">
            <FooterHours />
          </div>
        </div>

        <div className="border-t border-white/10 bg-charcoal px-3 py-3 text-[0.7rem] leading-snug text-white sm:py-4 sm:text-xs">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">
            <p className="text-white">
              © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
            </p>
            <a
              href="https://www.elevatedigitalstudios.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-sm text-white transition-all duration-200 hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/55 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
              aria-label="Website designed by Elevate Digital Studios"
            >
              <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/65">
                Website Designed By
              </span>
              <span className="mt-1 flex items-center justify-center gap-2 sm:justify-start">
                <Image
                  src="/images/elevate-digital-studios-logo.png"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full bg-white object-cover"
                />
                <span className="font-semibold text-white transition-all duration-200 group-hover:text-sky-200 group-hover:[text-shadow:0_0_12px_rgba(56,189,248,0.75)]">
                  Elevate Digital Studios
                </span>
              </span>
              <span className="mt-1 block text-[0.68rem] font-medium text-white/55 transition-colors group-hover:text-sky-200">
                www.elevatedigitalstudios.net
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
