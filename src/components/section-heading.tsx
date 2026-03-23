type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full border border-teal/15 bg-gradient-to-r from-sunshine-yellow/30 via-sunshine-yellow/20 to-aqua/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#7a5a0a] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted-gray sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
