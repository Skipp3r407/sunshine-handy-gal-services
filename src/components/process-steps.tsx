type ProcessStep = {
  title: string;
  description: string;
};

type ProcessStepsProps = {
  items: ProcessStep[];
};

export function ProcessSteps({ items }: ProcessStepsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((step, index) => (
        <article
          key={step.title}
          className="rounded-3xl border border-teal/10 bg-white p-6 shadow-[0_12px_30px_-24px_rgba(0,0,0,0.45)] transition hover:border-sunshine-yellow/30 hover:shadow-[0_14px_34px_-22px_rgba(12,125,150,0.3)]"
        >
          <p className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sunshine-yellow to-golden-amber text-sm font-bold text-charcoal shadow-sm ring-2 ring-teal/15">
            {index + 1}
          </p>
          <h3 className="text-lg font-semibold text-charcoal">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-gray">{step.description}</p>
        </article>
      ))}
    </div>
  );
}
