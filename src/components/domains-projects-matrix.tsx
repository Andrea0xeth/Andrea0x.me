'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { SectionHeader } from '@/components/ui/section-header';
import { Surface } from '@/components/ui/surface';
import { TagPill } from '@/components/ui/tag-pill';
import { portfolioData } from '@/data/portfolio';
import type { Locale, PillarId } from '@/data/types';
import { motionPresets } from '@/lib/motion-presets';
import { getMotionProps, useReducedMotion } from '@/lib/use-reduced-motion';

/**
 * Short label mapping for pillar columns in the matrix header.
 * Kept in code (not translation) because the header has to stay tight
 * across all locales.
 */
const PILLAR_SHORT: Record<PillarId, string> = {
  'traditional-dev': 'Dev',
  'ai-eng': 'AI',
  'cloud-devops': 'Cloud',
  web3: 'Web3',
  'it-mgmt': 'IT Mgmt',
  business: 'Biz',
};

/**
 * DomainsProjectsMatrix — section "02" of the home page.
 *
 * Visual matrix where:
 *   rows    = case studies (4)
 *   columns = pillars      (6)
 *   filled dot when caseStudy.pillarsTouched.includes(pillar.id)
 *
 * On mobile we collapse to one row per project with horizontally
 * scrollable pill list of pillars touched.
 */
export function DomainsProjectsMatrix() {
  const locale = useLocale() as Locale;
  const t = useTranslations('home.matrix.domains');
  const prefersReduced = useReducedMotion();
  const motionProps = getMotionProps(motionPresets.fadeInUpSlow, prefersReduced);

  const { caseStudies, pillars } = portfolioData;

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <motion.div {...motionProps}>
        <SectionHeader
          number="02"
          title={t('title')}
          summary={t('summary')}
          align="left"
          className="mb-8 md:mb-10"
        />
      </motion.div>

      {/* Desktop / tablet matrix */}
      <motion.div {...motionProps} className="hidden md:block">
        <Surface
          variant="bordered"
          padding="none"
          className="overflow-x-auto"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[color:var(--border-primary)]">
                <th
                  scope="col"
                  className="text-tag font-mono text-[color:var(--text-tertiary)] uppercase tracking-wide px-4 md:px-6 py-4 align-middle"
                >
                  Project / Pillar
                </th>
                {pillars.map((pillar) => (
                  <th
                    key={pillar.id}
                    scope="col"
                    className="text-tag font-mono text-[color:var(--text-tertiary)] uppercase tracking-wide px-2 md:px-3 py-4 text-center align-middle"
                    title={pillar.title[locale]}
                  >
                    {PILLAR_SHORT[pillar.id]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {caseStudies.map((cs, rowIdx) => (
                <tr
                  key={cs.slug}
                  className={
                    rowIdx < caseStudies.length - 1
                      ? 'border-b border-[color:var(--border-primary)]'
                      : ''
                  }
                >
                  <th
                    scope="row"
                    className="px-4 md:px-6 py-4 align-middle"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-body font-medium text-[color:var(--text-primary)]">
                        {cs.title}
                      </span>
                      <span className="text-tag text-[color:var(--text-tertiary)] uppercase tracking-wide">
                        {cs.domain[locale]}
                      </span>
                    </div>
                  </th>
                  {pillars.map((pillar) => {
                    const filled = cs.pillarsTouched.includes(pillar.id);
                    return (
                      <td
                        key={pillar.id}
                        className="px-2 md:px-3 py-4 text-center align-middle"
                      >
                        <span
                          aria-label={
                            filled
                              ? `${cs.title} — ${pillar.title[locale]}: yes`
                              : `${cs.title} — ${pillar.title[locale]}: no`
                          }
                          className="font-mono inline-flex items-center justify-center"
                          style={{
                            color: filled
                              ? 'var(--accent-primary)'
                              : 'var(--text-tertiary)',
                            opacity: filled ? 1 : 0.4,
                            fontSize: '18px',
                            lineHeight: 1,
                          }}
                        >
                          {filled ? '●' : '○'}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </Surface>
      </motion.div>

      {/* Mobile list */}
      <div className="md:hidden flex flex-col gap-3">
        {caseStudies.map((cs, idx) => {
          const touchedPillars = pillars.filter((p) =>
            cs.pillarsTouched.includes(p.id)
          );
          return (
            <motion.div
              key={cs.slug}
              {...(prefersReduced
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
            >
              <Surface
                variant="bordered"
                padding="md"
                className="flex flex-col gap-3"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-body font-medium text-[color:var(--text-primary)]">
                    {cs.title}
                  </span>
                  <span className="text-tag text-[color:var(--text-tertiary)] uppercase tracking-wide">
                    {cs.domain[locale]}
                  </span>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {touchedPillars.map((pillar) => (
                    <TagPill
                      key={pillar.id}
                      variant="accent"
                      size="sm"
                      className="flex-shrink-0"
                    >
                      {pillar.title[locale]}
                    </TagPill>
                  ))}
                </div>
              </Surface>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
