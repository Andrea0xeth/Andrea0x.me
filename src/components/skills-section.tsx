'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { portfolioData } from '@/data/portfolio';
import type { Locale } from '@/data/types';
import { SectionHeader } from '@/components/ui/section-header';
import { TagPill } from '@/components/ui/tag-pill';
import { motionPresets } from '@/lib/motion-presets';
import { getMotionProps, useReducedMotion } from '@/lib/use-reduced-motion';

/**
 * SkillsSection — section "06" of the portfolio.
 *
 * Renders Technical Skills (grouped by category) and Languages (with text
 * proficiency labels) side by side. No progress bars: skills are pure
 * tag pills, languages get a textual level label.
 */
export function SkillsSection() {
  const locale = useLocale() as Locale;
  const t = useTranslations('skills');
  const prefersReducedMotion = useReducedMotion();
  const motionProps = getMotionProps(motionPresets.fadeInUpSlow, prefersReducedMotion);

  const { skills, languages } = portfolioData;

  const proficiencyLabel = (level: number): string => {
    if (level >= 100) return t('proficiency.native');
    if (level >= 80) return t('proficiency.fluent');
    if (level >= 50) return t('proficiency.professional');
    if (level >= 25) return t('proficiency.basic');
    return t('proficiency.beginner');
  };

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <motion.div {...motionProps}>
        <SectionHeader
          number="05"
          title={t('title')}
          align="left"
          className="mb-8"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Technical Skills */}
        <motion.div {...motionProps}>
          <div className="flex flex-col gap-6">
            {skills.map((skill) => (
              <div key={skill.category.en}>
                <h3 className="text-h3 text-[color:var(--text-primary)] mb-3">
                  {skill.category[locale]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <TagPill key={item} variant="default" size="sm">
                      {item}
                    </TagPill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div {...motionProps}>
          <h3 className="text-h3 text-[color:var(--text-primary)] mb-3">
            {t('languages')}
          </h3>
          <ul className="flex flex-col gap-2">
            {languages.map((language) => (
              <li
                key={language.name}
                className="flex items-baseline justify-between gap-4"
              >
                <span className="text-body text-[color:var(--text-secondary)]">
                  {language.name}
                </span>
                <span className="text-tag text-[color:var(--text-tertiary)] uppercase tracking-wide">
                  {proficiencyLabel(language.level)}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
