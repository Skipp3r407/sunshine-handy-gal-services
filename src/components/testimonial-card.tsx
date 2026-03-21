type TestimonialCardProps = {
  name: string;
  quote: string;
};

export function TestimonialCard({ name, quote }: TestimonialCardProps) {
  return (
    <article className="rounded-3xl border border-[#f0ece0] bg-white p-6 shadow-[0_10px_24px_-20px_rgba(0,0,0,0.4)]">
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
