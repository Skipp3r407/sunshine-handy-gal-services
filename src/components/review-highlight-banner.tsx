export function ReviewHighlightBanner() {
  return (
    <section className="overflow-hidden rounded-3xl border border-fuchsia-200 bg-gradient-to-br from-[#fff8fc] via-white to-[#eefaff] p-6 shadow-[0_18px_54px_-42px_rgba(111,39,145,0.35)] sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-fuchsia-500">
            Trusted Locally
          </p>
          <blockquote className="mt-3 text-2xl font-bold leading-9 text-charcoal sm:text-3xl sm:leading-10">
            “The absolute best and most thorough clean I&apos;ve ever received.”
          </blockquote>
          <p className="mt-3 text-sm leading-7 text-muted-gray">
            100% recommend with praise for professionalism, responsiveness, and
            thoughtful finishing touches.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {["100% recommend", "Detail-focused", "Easy to schedule"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-fuchsia-200/70 bg-white/80 px-4 py-3 text-center text-sm font-semibold text-charcoal shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
