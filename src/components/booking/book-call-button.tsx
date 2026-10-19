'use client';

import { useState, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { AnimatedButton } from '@/components/ui/animated-button';
import { BookingModal } from '@/components/booking/booking-modal';

interface BookCallButtonProps {
  children?: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  /** Override modal title; defaults to nav.bookCall */
  modalTitle?: string;
}

export function BookCallButton({
  children,
  className,
  variant = 'primary',
  size = 'md',
  modalTitle,
}: BookCallButtonProps) {
  const [open, setOpen] = useState(false);
  const tNav = useTranslations('nav');
  const title = modalTitle ?? tNav('bookCall');

  return (
    <>
      <AnimatedButton
        variant={variant}
        size={size}
        className={className}
        onClick={() => setOpen(true)}
      >
        {children ?? title}
      </AnimatedButton>
      <BookingModal open={open} onClose={() => setOpen(false)} title={title} />
    </>
  );
}
