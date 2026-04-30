'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { MetricNumber } from '@/components/ui/metric-number';
import { portfolioData } from '@/data/portfolio';
import type { Locale } from '@/data/types';
import { motionPresets } from '@/lib/motion-presets';
import { getMotionProps, useReducedMotion } from '@/lib/use-reduced-motion';

/**
 * StatsSection — clean strip of 4 metric numbers.
 *
 * - Horizontal flex row on desktop with subtle vertical dividers between stats.
 * - 2×2 grid on mobile.
 * - No emoji, no card wrapping.
 */
export function StatsSection() {
  const locale = useLocale() as Locale;
  const { stats } = portfolioData;
  const prefersReduced = useReducedMotion();
  const fadeIn = getMotionProps(motionPresets.fadeInUpSlow, prefersReduced);

  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <motion.div
        {...fadeIn}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[color:var(--border-primary)]"
      >
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="md:px-6 first:md:pl-0 last:md:pr-0 flex flex-col gap-1"
          >
            <MetricNumber
              value={stat.value}
              label={stat.label[locale]}
              caption={stat.caption?.[locale]}
              size="lg"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
