'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { portfolioData } from '@/data/portfolio';
import type { TechStackCategory, TechStackItem } from '@/data/types';
import { SectionHeader } from '@/components/ui/section-header';
import { TagPill } from '@/components/ui/tag-pill';
import { motionPresets } from '@/lib/motion-presets';
import { getMotionProps, useReducedMotion } from '@/lib/use-reduced-motion';

const CATEGORY_ORDER: TechStackCategory[] = [
  'cloud',
  'ai',
  'web3',
  'database',
  'frontend',
  'backend',
  'devops',
  'tools',
];

/**
 * TechStackSection — section "09" of the portfolio.
 *
 * Tier 3 logo wall: dense info-rich list of daily tools, grouped by category.
 * Each tech is rendered as a JetBrains Mono TagPill (variant="mono") and,
 * when an url is present, wrapped in an external link.
 */
export function TechStackSection() {
  const t = useTranslations('techStack');
  const prefersReducedMotion = useReducedMotion();
  const motionProps = getMotionProps(motionPresets.fadeInUpSlow, prefersReducedMotion);

  const { techStack } = portfolioData;

  // Group tech stack items by category, preserving order from data.
  const grouped = CATEGORY_ORDER.reduce<Record<TechStackCategory, TechStackItem[]>>(
    (acc, cat) => {
      acc[cat] = techStack.filter((item) => item.category === cat);
      return acc;
    },
    {
      cloud: [],
      ai: [],
      web3: [],
      database: [],
      frontend: [],
      backend: [],
      devops: [],
      tools: [],
    }
  );

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <motion.div {...motionProps}>
        <SectionHeader
          number="08"
          title={t('title')}
          summary={t('summary')}
          align="left"
          className="mb-8"
        />
      </motion.div>

      <div className="flex flex-col gap-4">
        {CATEGORY_ORDER.map((cat) => {
          const items = grouped[cat];
          if (items.length === 0) return null;

          return (
            <motion.div
              key={cat}
              {...motionProps}
              className="grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-2 md:gap-6 items-start"
            >
              <span className="text-tag text-[color:var(--text-tertiary)] uppercase tracking-wide pt-1">
                {t(`category.${cat}`)}
              </span>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => {
                  const pill = (
                    <TagPill variant="mono" size="sm">
                      {item.logo ? (
                        <span className="inline-flex items-center gap-1.5">
                          {item.logoLight ? (
                            <>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={item.logo}
                                alt=""
                                aria-hidden="true"
                                width={14}
                                height={14}
                                loading="lazy"
                                decoding="async"
                                className="h-3.5 w-3.5 theme-dark-only transition group-hover:scale-110"
                              />
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={item.logoLight}
                                alt=""
                                aria-hidden="true"
                                width={14}
                                height={14}
                                loading="lazy"
                                decoding="async"
                                className="h-3.5 w-3.5 theme-light-only transition group-hover:scale-110"
                              />
                            </>
                          ) : (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                              src={item.logo}
                              alt=""
                              aria-hidden="true"
                              width={14}
                              height={14}
                              loading="lazy"
                              decoding="async"
                              className="h-3.5 w-3.5 transition group-hover:scale-110"
                            />
                          )}
                          {item.name}
                        </span>
                      ) : (
                        item.name
                      )}
                    </TagPill>
                  );

                  return item.url ? (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      className="group inline-flex hover:opacity-80 transition-opacity"
                    >
                      {pill}
                    </a>
                  ) : (
                    <span key={item.name} className="group inline-flex">
                      {pill}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
