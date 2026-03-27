import Link from "next/link";
import { ExternalLinkIcon } from "@/components/google-review-cta";
import { SocialLinksRow } from "@/components/social-links-row";
import { businessHoursRows, businessInfo } from "@/lib/site-data";

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

      <section className={inputClass}>
        <h2 className="text-base font-bold text-charcoal">Hours</h2>
        <ul className="mt-3 divide-y divide-[#efe9dc] text-sm text-muted-gray">
          {businessHoursRows.map((row) => (
            <li
              key={row.id}
              className="flex justify-between gap-4 py-2.5 first:pt-0 last:pb-0"
            >
              <span className="font-medium text-charcoal">{row.labelShort}</span>
              <span className="text-right">{row.hours}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs leading-relaxed text-muted-gray">
          Call or text for the soonest openings—we&apos;ll work with your schedule.
        </p>
      </section>

      <section className={inputClass}>
        <h2 className="text-base font-bold text-charcoal">Service area</h2>
        <div
          className="mt-3 flex min-h-[140px] items-center justify-center rounded-xl border border-[#d4e8f0] bg-[#e8f4fa] px-4 text-center text-sm font-medium text-teal-deep/80"
          role="img"
          aria-label="Service area map placeholder"
        >
          Map preview
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
