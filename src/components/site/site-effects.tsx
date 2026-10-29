'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Small progressive-enhancement layer shared by every inner page:
 * nav "scrolled" state, reveal-on-scroll for `[data-reveal]`, and the
 * pointer-following highlight on `[data-spot]` grids and `[data-glass]`.
 */
export function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const nav = document.querySelector('[data-nav]');
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.in)');
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    let frame = 0;
    let last: PointerEvent | null = null;

    const paint = () => {
      frame = 0;
      const e = last;
      if (!e || !(e.target instanceof Element)) return;
      const grid = e.target.closest('[data-spot]');
      if (grid) {
        for (const card of grid.querySelectorAll<HTMLElement>('.spot')) {
          const r = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${e.clientX - r.left}px`);
          card.style.setProperty('--my', `${e.clientY - r.top}px`);
        }
      }
      const glass = e.target.closest<HTMLElement>('[data-glass]');
      if (glass) {
        const r = glass.getBoundingClientRect();
        glass.style.setProperty('--mx', `${e.clientX - r.left}px`);
        glass.style.setProperty('--my', `${e.clientY - r.top}px`);
      }
    };

    const onMove = (e: PointerEvent) => {
      last = e;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      document.removeEventListener('pointermove', onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
