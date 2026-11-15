'use client';

import Link from 'next/link';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { metaForService } from '@/data/service-rail-meta';
import type { Locale, Service } from '@/data/types';
import { ArrowRightIcon } from '@/components/site/icons';

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

interface ServicesRailProps {
  services: Service[];
  locale: Locale;
}

export function ServicesRail({ services, locale }: ServicesRailProps) {
  const t = useTranslations('servicesPage');
  const baseId = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const lockUntil = useRef(0);
  const reducedRef = useRef(false);

  const ids = services.map((s) => s.id);
  const [activeId, setActiveId] = useState(ids[0] ?? '');
  const [chapterMode, setChapterMode] = useState(false);

  /** Tall track = desktop scroll-driven. Reduced-motion / mobile chapters → not. */
  const scrollDriven = useCallback(() => {
    if (typeof window === 'undefined' || reducedRef.current || chapterMode) return false;
    const track = trackRef.current;
    if (!track) return false;
    return track.offsetHeight > window.innerHeight + 80;
  }, [chapterMode]);

  const scrollToService = useCallback(
    (id: string) => {
      const i = ids.indexOf(id);
      if (i < 0) return;
      setActiveId(id);

      if (chapterMode) {
        const pane = trackRef.current?.querySelector<HTMLElement>(
          `[data-case-pane="${id}"]`,
        );
        lockUntil.current = performance.now() + 420;
        pane?.scrollIntoView({
          behavior: reducedRef.current ? 'auto' : 'smooth',
          block: 'start',
        });
        return;
      }

      const track = trackRef.current;
      if (!track || !scrollDriven()) return;

      const rect = track.getBoundingClientRect();
      const absTop = rect.top + window.scrollY;
      const travel = Math.max(1, track.offsetHeight - window.innerHeight);
      const y = absTop + ((i + 0.35) / ids.length) * travel;
      lockUntil.current = performance.now() + 420;
      window.scrollTo({
        top: y,
        behavior: reducedRef.current ? 'auto' : 'smooth',
      });
    },
    [ids, scrollDriven, chapterMode],
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 979px)');
    const syncChapter = () => setChapterMode(mq.matches);
    syncChapter();
    mq.addEventListener('change', syncChapter);

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedRef.current = reduced.matches;
    const onReduced = () => {
      reducedRef.current = reduced.matches;
    };
    reduced.addEventListener('change', onReduced);

    const unlockScroll = () => {
      lockUntil.current = 0;
    };
    window.addEventListener('wheel', unlockScroll, { passive: true });
    window.addEventListener('touchmove', unlockScroll, { passive: true });

    const pickFromScroll = () => {
      if (!ids.length || performance.now() < lockUntil.current) return;

      if (mq.matches) {
        /* Eager spy: last pane whose top crossed a line under sticky chips. */
        const root = trackRef.current;
        if (!root) return;
        const railEl = root.querySelector<HTMLElement>('.cases-rail');
        const railBottom = railEl ? railEl.getBoundingClientRect().bottom : 0;
        const line = Math.max(railBottom + 12, window.innerHeight * 0.2);
        let best = ids[0];
        for (const id of ids) {
          const pane = root.querySelector<HTMLElement>(`[data-case-pane="${id}"]`);
          if (!pane) continue;
          const r = pane.getBoundingClientRect();
          if (r.height < 24) continue;
          if (r.top <= line) best = id;
        }
        if (best) setActiveId((cur) => (cur === best ? cur : best));
        return;
      }

      if (!scrollDriven()) return;
      const track = trackRef.current;
      if (!track) return;
      const r = track.getBoundingClientRect();
      const travel = Math.max(1, r.height - window.innerHeight);
      const p = clamp01(-r.top / travel);
      const i = Math.min(ids.length - 1, Math.max(0, Math.floor(p * ids.length)));
      const next = ids[i];
      if (next) setActiveId((cur) => (cur === next ? cur : next));
    };

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(pickFromScroll);
    };

    pickFromScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', pickFromScroll);

    return () => {
      mq.removeEventListener('change', syncChapter);
      reduced.removeEventListener('change', onReduced);
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', pickFromScroll);
      window.removeEventListener('wheel', unlockScroll);
      window.removeEventListener('touchmove', unlockScroll);
    };
  }, [ids, scrollDriven]);

  useEffect(() => {
    if (!chapterMode) return;
    const root = trackRef.current;
    if (!root) return;
    const rail = root.querySelector<HTMLElement>('.cases-rail');
    const btn = root.querySelector<HTMLElement>(`.cases-rail [data-case="${activeId}"]`);
    if (!rail || !btn) return;
    /* Horizontal-only — scrollIntoView(block:nearest) fights vertical page scroll. */
    const left = btn.offsetLeft - (rail.clientWidth - btn.offsetWidth) / 2;
    rail.scrollTo({ left: Math.max(0, left), behavior: 'auto' });
  }, [activeId, chapterMode]);

  return (
    <div
      className="cases wrap cases-js cases-services"
      data-cases
      data-case={activeId}
      style={{ ['--cases-steps' as string]: String(Math.max(ids.length, 1)) }}
    >
      <div ref={trackRef} className="cases-track">
        <div className="cases-sticky">
          <nav className="cases-rail" aria-label={t('railLabel')}>
            {services.map((svc, idx) => {
              const meta = metaForService(svc.id);
              const on = svc.id === activeId;
              return (
                <button
                  key={svc.id}
                  type="button"
                  className={`cases-item${on ? ' on' : ''}`}
                  data-case={svc.id}
                  aria-selected={on}
                  aria-controls={`${baseId}-pane-${svc.id}`}
                  onClick={() => scrollToService(svc.id)}
                >
                  <span className="cases-num">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="cases-name">
                    {meta?.railName[locale] ?? svc.title[locale]}
                  </span>
                  <span className="cases-hint">
                    {meta?.railHint[locale] ??
                      (svc.rateRange ? svc.rateRange : svc.title[locale])}
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="cases-stage">
            {services.map((svc) => {
              const on = svc.id === activeId;
              const bullets = svc.bulletPoints[locale];
              const includeCount = bullets.length;

              return (
                <article
                  key={svc.id}
                  id={`${baseId}-pane-${svc.id}`}
                  className={`case-pane${on ? ' on' : ''}`}
                  data-case-pane={svc.id}
                  aria-hidden={chapterMode ? false : !on}
                >
                  <div className="case-tags">
                    <span>{t('serviceChip')}</span>
                    {svc.rateRange ? (
                      <span className="ghost">
                        <span className="sr-only">{t('rate')}: </span>
                        {svc.rateRange}
                      </span>
                    ) : null}
                  </div>
                  <h2 className="case-title">{svc.title[locale]}</h2>
                  <p className="case-lead">{svc.description[locale]}</p>

                  <div className="case-body case-body--services">
                    <div className="case-main">
                      <p className="case-scope-label">{t('includes')}</p>
                      <ul className="bullets">
                        {bullets.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <Link href={`/${locale}/book`} className="read">
                        {t('bookCta')}
                        <ArrowRightIcon />
                      </Link>
                    </div>

                    {(svc.rateRange || includeCount > 0) && (
                      <aside className="case-glance" aria-label={t('glanceLabel')}>
                        <p className="case-glance-label">{t('glanceLabel')}</p>
                        <dl className="glance">
                          {svc.rateRange ? (
                            <div>
                              <dt>{t('rate')}</dt>
                              <dd>{svc.rateRange}</dd>
                            </div>
                          ) : null}
                          <div>
                            <dt>{t('includes')}</dt>
                            <dd>
                              {includeCount} {t('includesUnit')}
                            </dd>
                          </div>
                        </dl>
                      </aside>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
