import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  benefit: string;
};

export function ServiceCard({ title, description, benefit }: ServiceCardProps) {
  return (
    <article className="group rounded-3xl border border-sunshine-yellow/20 bg-white p-6 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-24px_rgba(21,153,184,0.55)]">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-teal/10 text-xl text-teal">
        ✨
      </div>
      <h3 className="text-xl font-semibold text-charcoal">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-gray">{description}</p>
      <p className="mt-3 rounded-2xl bg-cream px-4 py-3 text-sm font-medium text-charcoal">
        {benefit}
      </p>
      <Link
        href="/services"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-teal/80"
      >
        Learn more
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
