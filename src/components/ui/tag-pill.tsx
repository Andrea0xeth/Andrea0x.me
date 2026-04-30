import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type TagPillVariant = 'default' | 'accent' | 'mono';
export type TagPillSize = 'sm' | 'md';

interface TagPillProps {
  children: ReactNode;
  variant?: TagPillVariant;
  size?: TagPillSize;
  className?: string;
}

const sizeMap: Record<TagPillSize, string> = {
  sm: 'px-2 py-0.5 text-[11px] leading-[14px]',
  md: 'px-2.5 py-1 text-[13px] leading-[16px]',
};

/**
 * TagPill — standardized pill for tech tags.
 *
 * Variants:
 *  - `default` — subtle bg, low-contrast border.
 *  - `accent`  — accent-colored border + text.
 *  - `mono`    — JetBrains Mono inside; for code refs / shortcuts.
 */
export function TagPill({
  children,
  variant = 'default',
  size = 'sm',
  className,
}: TagPillProps) {
  const variantClass =
    variant === 'accent'
      ? 'border-[color:var(--accent-primary)]/40 text-[color:var(--accent-primary)] bg-[color:var(--accent-primary)]/8'
      : variant === 'mono'
      ? 'font-mono border-[color:var(--border-primary)] text-[color:var(--text-secondary)] bg-[color:var(--bg-secondary)]'
      : 'border-[color:var(--border-primary)] text-[color:var(--text-secondary)] bg-[color:var(--bg-secondary)]';

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border align-middle whitespace-nowrap',
        'tracking-wide',
        sizeMap[size],
        variantClass,
        className
      )}
    >
      {children}
    </span>
  );
}
