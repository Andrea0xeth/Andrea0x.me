import { cn } from '@/lib/utils';

export type SectionHeaderAlign = 'left' | 'center';

interface SectionHeaderProps {
  /** Optional ordinal prefix, e.g. "01". Rendered in mono / tertiary. */
  number?: string;
  title: string;
  summary?: string;
  align?: SectionHeaderAlign;
  className?: string;
}

/**
 * SectionHeader — keeps section title rhythm consistent across the site.
 *
 *   [01]            <- mono caption, tertiary
 *   Section title   <- H2
 *   Optional summary line  <- caption, tertiary
 */
export function SectionHeader({
  number,
  title,
  summary,
  align = 'left',
  className,
}: SectionHeaderProps) {
  const alignClass =
    align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <header className={cn('flex flex-col gap-3', alignClass, className)}>
      {number && (
        <span className="font-mono text-tag text-[color:var(--text-tertiary)]">
          {number}
        </span>
      )}
      <h2 className="text-h2 text-[color:var(--text-primary)]">
        {title}
      </h2>
      {summary && (
        <p className="text-caption max-w-2xl">
          {summary}
        </p>
      )}
    </header>
  );
}
