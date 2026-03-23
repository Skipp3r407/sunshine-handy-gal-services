type TrustBadgeRowProps = {
  badges: string[];
};

export function TrustBadgeRow({ badges }: TrustBadgeRowProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {badges.map((badge) => (
        <li
          key={badge}
          className="rounded-full border border-teal-deep/30 bg-white/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-deep shadow-sm shadow-teal-deep/10"
        >
          {badge}
        </li>
      ))}
    </ul>
  );
}
