'use client';

import { useEffect, useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowLeft, Clock } from 'lucide-react';
import { CalEmbed } from '@/components/booking/cal-embed';
import {
  CAL_EVENT_TYPES,
  calEventLink,
  calEventUrl,
  prefersNativeCalBooking,
  type CalEventSlug,
} from '@/lib/booking';
import { cn } from '@/lib/utils';

interface CalBookingProps {
  className?: string;
  title?: string;
}

function useMobileBooking() {
  const [mobile, setMobile] = useState(true);
  useEffect(() => {
    const sync = () => setMobile(prefersNativeCalBooking());
    sync();
    const mq = window.matchMedia(
      '(max-width: 979px), (hover: none), (pointer: coarse)',
    );
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);
  return mobile;
}

/**
 * Step 1 — parent owns the duration list.
 * Step 2 —
 *   Desktop: Cal("inline") embed (dates → times → confirm in-page).
 *   Mobile: leave to call.andrea0x.me for that event. Any iframe / embed.js
 *   path still swallows taps on iOS; the native Cal page does not.
 */
export function CalBooking({ className, title = 'Book a call' }: CalBookingProps) {
  const t = useTranslations('bookPage');
  const locale = useLocale();
  const lang = locale === 'it' ? 'it' : 'en';
  const [selected, setSelected] = useState<CalEventSlug | null>(null);
  const mobile = useMobileBooking();

  const selectedMeta = useMemo(
    () => CAL_EVENT_TYPES.find((event) => event.slug === selected) ?? null,
    [selected],
  );

  // Desktop-only: inline calendar after a duration pick.
  if (!mobile && selected && selectedMeta) {
    const label = `${selectedMeta.title[lang]} · ${selectedMeta.minutes}m`;
    return (
      <div className={cn('flex flex-col gap-5', className)}>
        <button
          type="button"
          onClick={() => setSelected(null)}
          className="inline-flex min-h-[44px] w-fit items-center gap-2 font-mono text-[0.8rem] text-[color:var(--paper-3)] transition-colors hover:text-[color:var(--paper)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          {t('backToDurations')}
        </button>
        <CalEmbed
          title={label}
          calLink={calEventLink(selected)}
          className="block min-h-[36rem] pt-1"
        />
      </div>
    );
  }

  return (
    <div className={cn('flex flex-col gap-8', className)} role="list" aria-label={title}>
      <p className="font-mono text-[0.78rem] uppercase tracking-[0.08em] text-[color:var(--paper-3)]">
        {t('pickDuration')}
      </p>
      <ul className="divide-y divide-[color:var(--line-2)] overflow-hidden rounded-xl border border-[color:var(--line-2)] bg-[color:var(--bg-secondary)]">
        {CAL_EVENT_TYPES.map((event) => {
          const rowClass =
            'group flex w-full min-h-[72px] items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[color:var(--bg-tertiary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[color:var(--signal)]';
          const body = (
            <>
              <span className="flex flex-col gap-1">
                <span className="text-[1.05rem] font-medium text-[color:var(--paper)]">
                  {event.title[lang]}
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[0.78rem] text-[color:var(--paper-3)]">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {event.minutes}m
                </span>
              </span>
              <span
                aria-hidden="true"
                className="font-mono text-[0.85rem] text-[color:var(--paper-3)] transition-transform group-hover:translate-x-0.5 group-hover:text-[color:var(--signal)]"
              >
                →
              </span>
            </>
          );

          return (
            <li key={event.slug} role="listitem">
              {mobile ? (
                <a
                  href={calEventUrl(event.slug, { theme: 'dark' })}
                  className={rowClass}
                >
                  {body}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setSelected(event.slug)}
                  className={rowClass}
                >
                  {body}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
