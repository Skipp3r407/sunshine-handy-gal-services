import Link from "next/link";
import Image from "next/image";
import { businessInfo, navLinks, serviceAreas } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-20 bg-charcoal text-white">
      <div
        className="h-1 w-full bg-gradient-to-r from-teal-deep via-aqua to-sunshine-yellow"
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Image
            src="/images/logo.png"
            alt="Sunshines Handy Gal Services logo"
            width={160}
            height={56}
            className="h-auto w-[140px] rounded-lg bg-white p-1"
          />
          <p className="mt-4 text-sm leading-6 text-white/80">
            Cheerful, professional cleaning and organizing with thoughtful detail
            across Orlando and Central Florida.
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-sunshine-yellow">
            Women-Owned Business
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-aqua">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
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
          <h3 className="text-sm font-semibold uppercase tracking-wider text-aqua">
            Service Areas
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {serviceAreas.slice(0, 5).map((area) => (
              <li key={area.name}>{area.name}</li>
            ))}
            <li>Nearby Central Florida</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-aqua">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
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
      <div className="border-t border-teal-deep/40 py-4 text-center text-xs text-white/70">
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
    </footer>
  );
}
