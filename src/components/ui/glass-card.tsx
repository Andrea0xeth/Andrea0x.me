'use client';

import { motion } from 'framer-motion';
import { CSSProperties, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type GlassCardVariant = 'glass' | 'flat' | 'bordered';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  /** Only applied to the `glass` variant. */
  border?: boolean;
  /**
   * Visual treatment:
   *  - `glass`    — frosted bg + backdrop blur (the original purpose).
   *  - `flat`     — no border, no glass; just rounded with internal padding.
   *  - `bordered` — 1px border, no backdrop-filter.
   *
   * NOTE: as of the design-system migration, this primitive has no remaining
   * consumers in the home-page sections. Prefer `Surface` from
   * `@/components/ui/surface` for new work. Kept for any case-study /
   * legacy pages still relying on the frosted look.
   */
  variant?: GlassCardVariant;
}

export function GlassCard({
  children,
  className,
  hover = true,
  blur = 'md',
  border = true,
  variant = 'glass',
}: GlassCardProps) {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  } as const;

  const variantClasses: Record<GlassCardVariant, string> = {
    // shadow-md keeps a subtle lift without the heavy halo `shadow-2xl` had.
    // Surface containers should provide most of the visual containment now.
    glass: cn(blurClasses[blur], 'shadow-md'),
    flat: '',
    bordered: '',
  };

  // Style is computed per-variant. We avoid backdrop-filter on non-glass
  // variants so they render crisp on top of arbitrary backgrounds.
  let style: CSSProperties;
  if (variant === 'glass') {
    style = {
      backgroundColor: 'var(--glass-bg)',
      border: border ? '1px solid var(--glass-border)' : 'none',
    };
  } else if (variant === 'bordered') {
    style = {
      backgroundColor: 'var(--bg-secondary)',
      border: '1px solid var(--border-primary)',
    };
  } else {
    // flat
    style = {
      backgroundColor: 'transparent',
      border: 'none',
    };
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={
        hover
          ? {
              y: -2,
              transition: { duration: 0.2 },
            }
          : undefined
      }
      className={cn(
        'relative overflow-hidden rounded-2xl p-6',
        'transition-colors duration-300',
        variantClasses[variant],
        className
      )}
      style={style}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
