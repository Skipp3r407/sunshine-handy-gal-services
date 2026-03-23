export function ReviewHighlightBanner() {
  return (
    <section className="rounded-3xl border border-teal-deep/20 bg-gradient-to-r from-[#eef9fc] via-[#fffcf3] to-[#fff8e0] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-teal-deep">
        Trusted Locally
      </p>
      <blockquote className="mt-3 text-xl font-semibold leading-8 text-charcoal sm:text-2xl">
        “The absolute best and most thorough clean I&apos;ve ever received.”
      </blockquote>
      <p className="mt-3 text-sm text-muted-gray">
        100% recommend with praise for professionalism, responsiveness, and
        thoughtful finishing touches.
      </p>
    </section>
  );
}
