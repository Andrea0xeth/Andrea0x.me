import { cn } from '@/lib/utils';

export type MetricNumberSize = 'sm' | 'md' | 'lg' | 'xl';

interface MetricNumberProps {
  value: string;
  label?: string;
  caption?: string;
  size?: MetricNumberSize;
  className?: string;
}

const sizeMap: Record<MetricNumberSize, string> = {
  // Mono numerics. Sizes match the design system: 13/15/24/32 (and an xl 48).
  sm: 'text-[15px] leading-[20px]',
  md: 'text-[24px] leading-[28px]',
  lg: 'text-[32px] leading-[36px]',
  xl: 'text-[48px] leading-[52px]',
};

/**
 * MetricNumber — large mono numeric display for stats.
 * - `value` renders in JetBrains Mono with tabular numerals.
 * - `label` is rendered as an uppercase tag below.
 * - `caption` is small descriptive text in tertiary tone.
 */
export function MetricNumber({
  value,
  label,
  caption,
  size = 'lg',
  className,
}: MetricNumberProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <span
        className={cn('metric block text-[color:var(--text-primary)]', sizeMap[size])}
      >
        {value}
      </span>
      {label && (
        <span className="text-tag text-[color:var(--text-tertiary)]">
          {label}
        </span>
      )}
      {caption && (
        <span className="text-caption">
          {caption}
        </span>
      )}
    </div>
  );
}
