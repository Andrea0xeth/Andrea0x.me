import { cn } from '@/lib/utils';
import type { MetricNumberSize } from '@/components/ui/metric-number';

interface MetricCalloutProps {
  value: string;
  label: string;
  caption?: string;
  size?: MetricNumberSize;
  className?: string;
}

const sizeMap: Record<MetricNumberSize, string> = {
  sm: 'text-[18px] leading-[24px]',
  md: 'text-[28px] leading-[32px]',
  lg: 'text-[40px] leading-[44px]',
  xl: 'text-[56px] leading-[60px]',
};

/**
 * MetricCallout — visual variant of MetricNumber tuned for case study pages.
 * Larger value, accent border on the left, mono numerics.
 */
export function MetricCallout({
  value,
  label,
  caption,
  size = 'lg',
  className,
}: MetricCalloutProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-1 pl-4',
        'border-l-2',
        className
      )}
      style={{ borderLeftColor: 'var(--accent-primary)' }}
    >
      <span
        className={cn(
          'metric block text-[color:var(--text-primary)]',
          sizeMap[size]
        )}
      >
        {value}
      </span>
      <span className="text-tag text-[color:var(--text-tertiary)]">
        {label}
      </span>
      {caption && (
        <span className="text-caption">
          {caption}
        </span>
      )}
    </div>
  );
}
