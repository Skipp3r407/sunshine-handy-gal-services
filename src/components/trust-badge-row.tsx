type TrustBadgeRowProps = {
  badges: string[];
};

export function TrustBadgeRow({ badges }: TrustBadgeRowProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {badges.map((badge) => (
        <li
          key={badge}
          className="rounded-full border border-teal/25 bg-white/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal"
        >
          {badge}
        </li>
      ))}
    </ul>
  );
}
