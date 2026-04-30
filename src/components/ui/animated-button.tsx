'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  href?: string;
}

export function AnimatedButton({
  children,
  onClick,
  className,
  variant = 'primary',
  size = 'md',
  disabled = false,
  href,
}: AnimatedButtonProps) {
  const baseClasses =
    'relative overflow-hidden rounded-full font-medium transition-all duration-300 hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)] inline-flex items-center justify-center';

  const variantClasses = {
    primary: 'bg-[var(--accent-primary)] hover:opacity-90 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-[var(--bg-tertiary)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-primary)]',
    ghost: 'bg-transparent hover:bg-[var(--glass-bg)] text-[var(--text-primary)] border border-[var(--border-primary)]',
    glass: 'bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--border-primary)] text-[var(--text-primary)] hover:bg-[var(--glass-bg)]/80',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const isExternal = href
    ? href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
    : false;

  if (href) {
    if (isExternal) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            baseClasses,
            variantClasses[variant],
            sizeClasses[size],
            className
          )}
        >
          <span className="relative z-10 flex items-center gap-2">{children}</span>
        </motion.a>
      );
    }

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex"
      >
        <Link
          href={href}
          className={cn(
            baseClasses,
            variantClasses[variant],
            sizeClasses[size],
            className
          )}
        >
          <span className="relative z-10 flex items-center gap-2">{children}</span>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
