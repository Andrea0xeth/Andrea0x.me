'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { blurbForSlug } from '@/data/case-index-blurbs';
import type { CaseStudy, Locale } from '@/data/types';
import { ArrowRightIcon } from '@/components/site/icons';

type TabId = 'context' | 'architecture' | 'results';

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

interface CasesRailProps {
  caseStudies: CaseStudy[];
  locale: Locale;
}

export function CasesRail({ caseStudies, locale }: CasesRailProps) {
  const t = useTranslations('caseStudyPage');
  const tCs = useTranslations('caseStudy');
  const baseId = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const lockUntil = useRef(0);
  const reducedRef = useRef(false);

  const ids = caseStudies.map((cs) => cs.slug);
  const [activeId, setActiveId] = useState(ids[0] ?? '');
  const [chapterMode, setChapterMode] = useState(false);
  const [tabBySlug, setTabBySlug] = useState<Record<string, TabId>>(() =>
    Object.fromEntries(ids.map((id) => [id, 'context' as TabId])),
  );

  /** Tall track = desktop scroll-driven. Reduced-motion / mobile chapters → not. */
  const scrollDriven = useCallback(() => {
    if (typeof window === 'undefined' || reducedRef.current || chapterMode) return false;
    const track = trackRef.current;
    if (!track) return false;
    return track.offsetHeight > window.innerHeight + 80;
  }, [chapterMode]);

  const scrollToCase = useCallback(
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

  const setTab = (slug: string, tab: TabId) => {
    setTabBySlug((prev) => ({ ...prev, [slug]: tab }));
  };

  const tabs: { id: TabId; label: string }[] = [
    { id: 'context', label: t('tabContext') },
    { id: 'architecture', label: t('tabArchitecture') },
    { id: 'results', label: t('tabResults') },
  ];

  return (
    <div
      className="cases wrap cases-js"
      data-cases
      data-case={activeId}
      style={{ ['--cases-steps' as string]: String(Math.max(ids.length, 1)) }}
    >
      <div ref={trackRef} className="cases-track">
        <div className="cases-sticky">
          <nav className="cases-rail" aria-label={t('railLabel')}>
            {caseStudies.map((cs, idx) => {
              const blurb = blurbForSlug(cs.slug);
              const on = cs.slug === activeId;
              return (
                <button
                  key={cs.slug}
                  type="button"
                  className={`cases-item${on ? ' on' : ''}`}
                  data-case={cs.slug}
                  aria-selected={on}
                  aria-controls={`${baseId}-pane-${cs.slug}`}
                  onClick={() => scrollToCase(cs.slug)}
                >
                  <span className="cases-num">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="cases-name">{blurb?.railName ?? cs.title}</span>
                  <span className="cases-hint">
                    {blurb?.railHint[locale] ?? cs.role[locale]}
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="cases-stage">
            {caseStudies.map((cs) => {
              const blurb = blurbForSlug(cs.slug);
              if (!blurb) return null;
              const on = cs.slug === activeId;
              const tab = tabBySlug[cs.slug] ?? 'context';
              const paneText = blurb.tabs[tab][locale];

              return (
                <article
                  key={cs.slug}
                  id={`${baseId}-pane-${cs.slug}`}
                  className={`case-pane${on ? ' on' : ''}`}
                  data-case-pane={cs.slug}
                  aria-hidden={chapterMode ? false : !on}
                >
                  <div className="case-tags">
                    <span>{t('caseStudyChip')}</span>
                    <span className="ghost">{blurb.statusTag[locale]}</span>
                    <span className="ghost">{cs.domain[locale]}</span>
                  </div>
                  <h2 className="case-title">{blurb.headline[locale]}</h2>
                  <p className="case-lead">{blurb.lead[locale]}</p>

                  <div className="case-body">
                    <div className="case-main">
                      <div
                        className="case-tabs"
                        role="tablist"
                        aria-label={t('tabsLabel')}
                      >
                        {tabs.map((item) => {
                          const selected = tab === item.id;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              role="tab"
                              id={`${baseId}-${cs.slug}-tab-${item.id}`}
                              aria-selected={selected}
                              aria-controls={`${baseId}-${cs.slug}-panel`}
                              tabIndex={selected ? 0 : -1}
                              className={selected ? 'on' : undefined}
                              onClick={() => setTab(cs.slug, item.id)}
                            >
                              {item.label}
                            </button>
                          );
                        })}
                      </div>
                      <div className="case-tabpanes">
                        <p
                          className="case-tabpane on"
                          role="tabpanel"
                          id={`${baseId}-${cs.slug}-panel`}
                          aria-labelledby={`${baseId}-${cs.slug}-tab-${tab}`}
                        >
                          {paneText}
                        </p>
                      </div>
                      <Link href={`/${locale}/work/${cs.slug}`} className="read">
                        {tCs('readMore')}
                        <ArrowRightIcon />
                      </Link>
                    </div>

                    <aside className="case-glance" aria-label={t('decisionGlance')}>
                      <div className="case-shot">
                        <Image
                          src={cs.image}
                          alt=""
                          fill
                          sizes="(min-width: 980px) 20rem, 40vw"
                        />
                      </div>
                      <p className="case-glance-label">{t('decisionGlance')}</p>
                      <dl className="glance">
                        <div>
                          <dt>{tCs('role')}</dt>
                          <dd>{blurb.glance.role[locale]}</dd>
                        </div>
                        {blurb.glance.clients ? (
                          <div>
                            <dt>{tCs('clients')}</dt>
                            <dd>{blurb.glance.clients}</dd>
                          </div>
                        ) : null}
                        <div>
                          <dt>{t('glanceStack')}</dt>
                          <dd>{blurb.glance.stack}</dd>
                        </div>
                        <div>
                          <dt>{t('glanceKeyNumber')}</dt>
                          <dd>{blurb.glance.keyNumber[locale]}</dd>
                        </div>
                      </dl>
                    </aside>
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
