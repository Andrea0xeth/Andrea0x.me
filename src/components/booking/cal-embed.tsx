'use client';

import { useEffect, useState } from 'react';
import { calEmbedSrc } from '@/lib/booking';
import { cn } from '@/lib/utils';

interface CalEmbedProps {
  className?: string;
  title?: string;
}

export function CalEmbed({ className, title = 'Book a call' }: CalEmbedProps) {
  const [src, setSrc] = useState(() => calEmbedSrc('dark'));

  useEffect(() => {
    const notes = new URLSearchParams(window.location.search).get('notes')?.slice(0, 500) || undefined;
    if (notes) setSrc(calEmbedSrc('dark', notes));
  }, []);

  return (
    <iframe
      src={src}
      title={title}
      loading="lazy"
      allow="camera; microphone; fullscreen; payment"
      className={cn('h-full w-full border-0 bg-transparent', className)}
    />
  );
}
