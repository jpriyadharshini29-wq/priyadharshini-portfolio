export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10 flex items-baseline gap-3">
      <span className="font-mono text-sm text-primary">{"//"} {index}</span>
      <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {children}
      </h2>
      <span className="ml-2 h-px flex-1 bg-border" />
    </div>
  );
}
