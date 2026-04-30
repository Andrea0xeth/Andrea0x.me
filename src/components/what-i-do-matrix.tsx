'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { SectionHeader } from '@/components/ui/section-header';
import { Surface } from '@/components/ui/surface';
import { TagPill } from '@/components/ui/tag-pill';
import { MetricNumber } from '@/components/ui/metric-number';
import { portfolioData } from '@/data/portfolio';
import type { Locale } from '@/data/types';
import { motionPresets } from '@/lib/motion-presets';
import { getMotionProps, useReducedMotion } from '@/lib/use-reduced-motion';

/**
 * WhatIDoMatrix — section "01" of the home page.
 *
 * Renders the 6 portfolio pillars as a responsive grid of bordered cards.
 * Each card carries: title, summary, 1-2 metrics, up to 5 tag pills.
 */
export function WhatIDoMatrix() {
  const locale = useLocale() as Locale;
  const t = useTranslations('home.matrix.whatIDo');
  const prefersReduced = useReducedMotion();
  const headerMotion = getMotionProps(motionPresets.fadeInUpSlow, prefersReduced);

  const { pillars } = portfolioData;

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <motion.div {...headerMotion}>
        <SectionHeader
          number="01"
          title={t('title')}
          summary={t('summary')}
          align="left"
          className="mb-8 md:mb-10"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={pillar.id}
            {...(prefersReduced
              ? {}
              : {
                  initial: motionPresets.fadeInUpSlow.initial,
                  whileInView: motionPresets.fadeInUpSlow.whileInView,
                  viewport: motionPresets.fadeInUpSlow.viewport,
                  transition: {
                    ...motionPresets.fadeInUpSlow.transition,
                    delay: idx * 0.06,
                  },
                })}
            className="h-full"
          >
            <Surface
              variant="bordered"
              padding="md"
              className="h-full flex flex-col gap-4"
            >
              <h3 className="text-h3 text-[color:var(--text-primary)]">
                {pillar.title[locale]}
              </h3>

              <p className="text-body text-[color:var(--text-secondary)]">
                {pillar.summary[locale]}
              </p>

              {pillar.metrics.length > 0 && (
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {pillar.metrics.slice(0, 2).map((metric, mIdx) => (
                    <MetricNumber
                      key={mIdx}
                      value={metric.value}
                      label={metric.label[locale]}
                      size="sm"
                    />
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {pillar.tags.slice(0, 5).map((tag) => (
                  <TagPill key={tag} variant="default" size="sm">
                    {tag}
                  </TagPill>
                ))}
              </div>
            </Surface>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
