type ServiceArea = {
  name: string;
  description: string;
};

type ServiceAreaGridProps = {
  items: ServiceArea[];
};

export function ServiceAreaGrid({ items }: ServiceAreaGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((area) => (
        <article
          key={area.name}
          className="rounded-2xl border border-teal/20 bg-white p-5 shadow-[0_12px_28px_-24px_rgba(0,0,0,0.5)]"
        >
          <h3 className="text-lg font-semibold text-charcoal">{area.name}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-gray">{area.description}</p>
        </article>
      ))}
    </div>
  );
}
