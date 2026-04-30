import { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type SurfaceVariant = 'flat' | 'bordered' | 'subtle';
export type SurfacePadding = 'none' | 'sm' | 'md' | 'lg';

type SurfaceTag = 'div' | 'section' | 'article';

interface SurfaceProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  /**
   *  - `flat`     — no border, no bg, no padding default. Just a styled div.
   *  - `bordered` — 1px border using --border-primary.
   *  - `subtle`   — very faint bg using --bg-secondary.
   */
  variant?: SurfaceVariant;
  padding?: SurfacePadding;
  className?: string;
  /** Render-as element. Defaults to `div`. */
  as?: SurfaceTag;
}

const paddingMap: Record<SurfacePadding, string> = {
  none: '',
  sm: 'p-3',
  md: 'p-6',
  lg: 'p-8',
};

/**
 * Surface — a non-glass alternative to GlassCard for sections that should
 * read as flat/minimal. No motion, no hover effects.
 */
export function Surface({
  children,
  variant = 'flat',
  padding = 'none',
  className,
  as = 'div',
  ...rest
}: SurfaceProps) {
  const Tag = as as ElementType;

  const variantStyle: React.CSSProperties =
    variant === 'bordered'
      ? {
          border: '1px solid var(--border-primary)',
          backgroundColor: 'transparent',
        }
      : variant === 'subtle'
      ? {
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid transparent',
        }
      : {};

  return (
    <Tag
      {...rest}
      className={cn(
        'rounded-2xl',
        paddingMap[padding],
        className
      )}
      style={{ ...variantStyle, ...rest.style }}
    >
      {children}
    </Tag>
  );
}
