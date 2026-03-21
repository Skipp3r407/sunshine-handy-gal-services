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
          className="rounded-3xl border border-[#efe9dc] bg-white p-6 shadow-[0_12px_30px_-24px_rgba(0,0,0,0.45)]"
        >
          <p className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-sunshine-yellow text-sm font-bold text-charcoal">
            {index + 1}
          </p>
          <h3 className="text-lg font-semibold text-charcoal">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-gray">{step.description}</p>
        </article>
      ))}
    </div>
  );
}
