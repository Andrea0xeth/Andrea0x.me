'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Locale } from '@/data/types';

interface CVDownloadButtonProps {
  locale: Locale;
  variant?: 'primary' | 'glass';
  className?: string;
  label?: string;
}

const LABELS: Record<Locale, string> = {
  it: 'Scarica CV',
  en: 'Download CV',
};

export function CVDownloadButton({
  locale,
  variant = 'primary',
  className,
  label,
}: CVDownloadButtonProps) {
  const href = `/api/cv?lang=${locale}`;
  const text = label ?? LABELS[locale];

  const baseClasses =
    'relative overflow-hidden rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 inline-flex items-center justify-center px-5 py-2.5 text-sm';

  const variantClasses: Record<NonNullable<CVDownloadButtonProps['variant']>, string> = {
    primary:
      'bg-[var(--accent-primary)] hover:opacity-90 text-white shadow-lg hover:shadow-xl',
    glass:
      'bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--border-primary)] text-[var(--text-primary)] hover:bg-[var(--glass-bg)]/80',
  };

  return (
    <motion.a
      href={href}
      download
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseClasses, variantClasses[variant], className)}
      aria-label={text}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative z-10 flex items-center gap-2">
        <Download className="h-4 w-4" aria-hidden="true" />
        {text}
      </span>
    </motion.a>
  );
}

export default CVDownloadButton;
