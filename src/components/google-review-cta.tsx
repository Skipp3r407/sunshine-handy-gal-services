import Link from "next/link";
import { businessInfo } from "@/lib/site-data";

export function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function GoogleReviewCta() {
  return (
    <div className="text-left text-charcoal">
      <p className="text-base font-bold leading-snug sm:text-lg">
        Professional, reliable local service.
      </p>
      <p className="mt-2 text-sm leading-relaxed text-charcoal sm:text-base">
        Orlando, Florida and surrounding areas
      </p>
      <p className="mt-4 text-sm leading-relaxed text-charcoal sm:text-base">
        <span className="text-muted-gray">Had a great experience? </span>
        <Link
          href={businessInfo.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-bold underline decoration-2 underline-offset-[3px] transition hover:text-teal-deep"
        >
          Leave a Google Review
          <ExternalLinkIcon className="shrink-0 text-current" />
        </Link>
      </p>
    </div>
  );
}
