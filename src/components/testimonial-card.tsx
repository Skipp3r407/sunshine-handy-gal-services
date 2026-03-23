type TestimonialCardProps = {
  name: string;
  quote: string;
};

export function TestimonialCard({ name, quote }: TestimonialCardProps) {
  return (
    <article className="rounded-3xl border border-teal/10 bg-white p-6 shadow-[0_10px_24px_-20px_rgba(0,0,0,0.4)] transition-shadow hover:border-teal/20 hover:shadow-[0_14px_32px_-22px_rgba(12,125,150,0.35)]">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-charcoal">{name}</p>
        <p className="text-sm text-golden-amber" aria-label="5 stars">
          ★★★★★
        </p>
      </div>
      <p className="text-base leading-7 text-muted-gray">“{quote}”</p>
    </article>
  );
}
