'use client';

import { useEffect, useState } from 'react';
import { calEmbedSrc } from '@/lib/booking';
import { cn } from '@/lib/utils';

interface CalEmbedProps {
  className?: string;
  title?: string;
}

function resolveTheme(): 'light' | 'dark' {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export function CalEmbed({ className, title = 'Book a call' }: CalEmbedProps) {
  const [src, setSrc] = useState(() => calEmbedSrc('dark'));

  useEffect(() => {
    const apply = () => setSrc(calEmbedSrc(resolveTheme()));
    apply();

    const observer = new MutationObserver(apply);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
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
