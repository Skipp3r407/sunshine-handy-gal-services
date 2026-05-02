import Link from "next/link";
import { ContactHoursCard } from "@/components/contact-hours-card";
import { ExternalLinkIcon } from "@/components/google-review-cta";
import { SocialLinksRow } from "@/components/social-links-row";
import { businessInfo } from "@/lib/site-data";

const inputClass =
  "rounded-2xl border border-[#efe9dc] bg-white p-5 shadow-[0_8px_28px_-20px_rgba(0,0,0,0.12)]";

export function ContactPageSidebar() {
  return (
    <div className="flex flex-col gap-5">
      <section className={inputClass}>
        <h2 className="text-base font-bold text-charcoal">Quick contact</h2>
        <ul className="mt-3 space-y-2.5 text-sm text-muted-gray">
          <li>
            <span className="font-semibold text-charcoal">Phone: </span>
            <a href={businessInfo.phoneHref} className="text-teal-deep hover:underline">
              {businessInfo.phoneDisplay}
            </a>
          </li>
          <li>
            <span className="font-semibold text-charcoal">Email: </span>
            <a href={businessInfo.emailHref} className="break-all text-teal-deep hover:underline">
              {businessInfo.email}
            </a>
          </li>
          <li>
            <span className="font-semibold text-charcoal">Service area: </span>
            {businessInfo.serviceAreaSummary}.
          </li>
        </ul>
        <div className="mt-5 border-t border-[#efe9dc] pt-5">
          <p id="contact-social-heading" className="text-xs font-semibold uppercase tracking-wide text-charcoal">
            Follow us
          </p>
          <SocialLinksRow
            variant="onLight"
            className="mt-3"
            labelledBy="contact-social-heading"
          />
        </div>
      </section>

      <ContactHoursCard className={inputClass} />

      <section className={inputClass}>
        <h2 className="text-base font-bold text-charcoal">Service area</h2>
        <div className="mt-3 overflow-hidden rounded-xl border border-[#d4e8f0] bg-[#e8f4fa] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
          <div className="relative aspect-[4/3] w-full min-h-[168px] bg-[#dfeaf1]">
            <iframe
              title={`Map of Orlando, Florida — ${businessInfo.name} service area`}
              src={businessInfo.serviceAreaMapEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="border-t border-[#d4e8f0] bg-white/70 px-3 py-2.5 text-center text-xs text-muted-gray">
            <a
              href={businessInfo.serviceAreaGoogleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 font-semibold text-teal-deep underline-offset-2 transition hover:text-teal-deep hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep/35 focus-visible:ring-offset-2"
            >
              Open in Google Maps
              <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0 text-current" />
            </a>
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-[#e8dcc8] bg-[#f3e9dc] p-5 shadow-[0_8px_28px_-22px_rgba(0,0,0,0.12)]">
        <h2 className="text-base font-bold text-charcoal">Before you book</h2>
        <p className="mt-2 text-sm leading-relaxed text-charcoal/90">
          Every home is a little different. Share a few details so we can plan time and supplies
          that match your space—no surprises, just thoughtful service.
        </p>
      </section>

      <section className={inputClass}>
        <h2 className="text-base font-bold text-charcoal">Reviews</h2>
        <p className="mt-2 text-sm text-muted-gray">
          See what neighbors say about our cleaning and organizing work in Central Florida.
        </p>
        <p className="mt-3 text-sm text-charcoal">
          <span className="text-muted-gray">Had a great experience? </span>
          <Link
            href={businessInfo.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold underline decoration-2 underline-offset-[3px] transition hover:text-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep/30 focus-visible:ring-offset-2"
          >
            Leave a Google Review
            <ExternalLinkIcon className="shrink-0" />
          </Link>
        </p>
      </section>
    </div>
  );
}
