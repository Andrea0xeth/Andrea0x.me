'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { portfolioData } from '@/data/portfolio';
import type { Locale } from '@/data/types';
import { SectionHeader } from '@/components/ui/section-header';
import { Surface } from '@/components/ui/surface';
import { motionPresets } from '@/lib/motion-presets';
import { getMotionProps, useReducedMotion } from '@/lib/use-reduced-motion';

/**
 * CollaborationsSection — section "08" of the portfolio.
 *
 * Tier 2 logo wall: past contributor / advisor / community lead roles.
 * Visually less prominent than TrustedBy (Tier 1): rendered as a grid of
 * compact bordered cards with logo + name + role + period + 1-line desc.
 */
export function CollaborationsSection() {
  const locale = useLocale() as Locale;
  const t = useTranslations('collaborations');
  const prefersReducedMotion = useReducedMotion();
  const headerMotion = getMotionProps(motionPresets.fadeInUpSlow, prefersReducedMotion);
  const cardHover = prefersReducedMotion ? {} : motionPresets.cardHover;

  const { collaborations } = portfolioData;

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <motion.div {...headerMotion}>
        <SectionHeader
          number="08"
          title={t('title')}
          summary={t('summary')}
          align="left"
          className="mb-8"
        />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {collaborations.map((collab, idx) => {
          const card = (
            <motion.div
              {...cardHover}
              {...(prefersReducedMotion
                ? {}
                : {
                    initial: motionPresets.fadeInUpSlow.initial,
                    whileInView: motionPresets.fadeInUpSlow.whileInView,
                    viewport: motionPresets.fadeInUpSlow.viewport,
                    transition: {
                      ...motionPresets.fadeInUpSlow.transition,
                      delay: idx * 0.05,
                    },
                  })}
              className="h-full"
            >
              <Surface variant="bordered" padding="md" className="h-full flex flex-col gap-2">
                {collab.logo && (
                  <div className="relative h-10 w-10 rounded-md overflow-hidden bg-[color:var(--bg-secondary)]">
                    <Image
                      src={collab.logo}
                      alt={collab.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                )}
                <h3 className="text-h3 text-[color:var(--text-primary)] text-base leading-tight">
                  {collab.name}
                </h3>
                <p className="text-tag text-[color:var(--accent-primary)] uppercase tracking-wide">
                  {collab.role[locale]}
                </p>
                <p className="text-caption text-[color:var(--text-tertiary)]">
                  {collab.period}
                </p>
                {collab.description && (
                  <p className="text-caption text-[color:var(--text-secondary)] line-clamp-1">
                    {collab.description[locale]}
                  </p>
                )}
              </Surface>
            </motion.div>
          );

          return collab.link ? (
            <a
              key={collab.name}
              href={collab.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={collab.name}
              className="block h-full"
            >
              {card}
            </a>
          ) : (
            <div key={collab.name} className="h-full">
              {card}
            </div>
          );
        })}
      </div>
    </section>
  );
}
