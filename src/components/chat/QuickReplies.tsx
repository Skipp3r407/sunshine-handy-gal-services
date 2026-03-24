type QuickRepliesProps = {
  labels: readonly string[];
  onSelect: (label: string) => void;
  disabled?: boolean;
};

export function QuickReplies({
  labels,
  onSelect,
  disabled,
}: QuickRepliesProps) {
  if (labels.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 pt-1">
      {labels.map((label) => (
        <button
          key={label}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(label)}
          className="rounded-full border border-teal-deep/25 bg-sunshine-yellow/15 px-3 py-1.5 text-left text-xs font-semibold text-teal-deep transition-colors hover:border-teal-deep/45 hover:bg-sunshine-yellow/25 disabled:opacity-50"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
