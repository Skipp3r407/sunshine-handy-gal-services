import Link from "next/link";
import Image from "next/image";
import { GoogleReviewCta } from "@/components/google-review-cta";
import { SocialLinksRow } from "@/components/social-links-row";
import { FooterHours } from "@/components/footer-hours";
import { businessInfo, navLinks, serviceAreas } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-12 sm:mt-16 lg:mt-20">
      <div className="border-t border-[#e8e4dc] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:px-8">
          <div className="min-w-0 flex-1">
            <GoogleReviewCta />
          </div>
          <SocialLinksRow variant="onLight" className="shrink-0 lg:pb-0.5" />
        </div>
      </div>
      <div className="bg-charcoal text-white">
        <div
          className="h-1 w-full bg-gradient-to-r from-teal-deep via-aqua to-sunshine-yellow"
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl gap-6 px-3 py-8 sm:gap-10 sm:px-6 sm:py-12 lg:grid-cols-4 lg:px-8">
          <div>
            <Image
              src="/images/logo.png"
              alt="Sunshines Handy Gal Services logo"
              width={160}
              height={56}
              className="h-auto w-[112px] rounded-lg bg-white p-1 sm:w-[140px]"
            />
            <p className="mt-3 text-sm leading-relaxed text-white/80 sm:mt-4 sm:leading-6">
              Cheerful, professional cleaning and organizing with thoughtful detail
              across Orlando and Central Florida.
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-sunshine-yellow sm:mt-3">
              Women-Owned Business
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-aqua sm:text-sm">
              Quick Links
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-white/80 sm:mt-4 sm:space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-sunshine-yellow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-aqua sm:text-sm">
              Service Areas
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-white/80 sm:mt-4 sm:space-y-2">
              {serviceAreas.slice(0, 5).map((area) => (
                <li key={area.name}>{area.name}</li>
              ))}
              <li>Nearby Central Florida</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-aqua sm:text-sm">
              Contact
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-white/80 sm:mt-4 sm:space-y-2">
              <li>
                <a
                  href={businessInfo.phoneHref}
                  className="transition hover:text-sunshine-yellow"
                >
                  {businessInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={businessInfo.emailHref}
                  className="transition hover:text-sunshine-yellow"
                >
                  {businessInfo.email}
                </a>
              </li>
              <li>{businessInfo.location}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-3 py-8 sm:px-6 sm:py-10 lg:px-8">
            <FooterHours />
          </div>
        </div>

        <div className="border-t border-teal-deep/40 px-3 py-2.5 text-center text-[0.7rem] leading-snug text-white/70 sm:py-4 sm:text-xs">
          <p>
            © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
          </p>
          <p className="mt-1">
            <a
              href="https://elevatedigitalstudios.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:underline"
            >
              Website Design by Elevate Digital Studio.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
