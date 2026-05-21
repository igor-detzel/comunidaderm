type Props = {
  index: string;
  kicker: string;
};

export function SectionHeader({ index, kicker }: Props) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-display text-sm italic text-stone">{index}</span>
      <span className="h-px w-10 bg-line-strong" />
      <span className="text-xs uppercase tracking-[0.18em] text-stone">
        {kicker}
      </span>
    </div>
  );
}
