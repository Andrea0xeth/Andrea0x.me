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
  /**
   * Reserved for future custom opacity tuning on the `glass` variant.
   * Accepted for backward compat with prior call sites.
   */
  opacity?: number;
  /** Only applied to the `glass` variant. */
  border?: boolean;
  gradient?: boolean;
  /**
   * Visual treatment:
   *  - `glass`    — current default, frosted bg + backdrop blur
   *  - `flat`     — no border, no glass; just rounded with internal padding
   *  - `bordered` — 1px border, no backdrop-filter
   */
  variant?: GlassCardVariant;
}

export function GlassCard({
  children,
  className,
  hover = true,
  blur = 'md',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  opacity: _opacity,
  border = true,
  gradient = false,
  variant = 'glass',
}: GlassCardProps) {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  } as const;

  const variantClasses: Record<GlassCardVariant, string> = {
    glass: cn(blurClasses[blur], 'shadow-2xl'),
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
      ...(gradient && {
        background:
          'linear-gradient(135deg, var(--glass-bg), rgba(255, 255, 255, 0.02))',
      }),
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
      {gradient && variant === 'glass' && (
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent-primary)]/15 via-transparent to-[color:var(--accent-primary)]/5" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
