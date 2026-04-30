'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { Surface } from '@/components/ui/surface';
import { SectionHeader } from '@/components/ui/section-header';
import { AnimatedButton } from '@/components/ui/animated-button';
import { portfolioData } from '@/data/portfolio';
import { motionPresets } from '@/lib/motion-presets';
import { getMotionProps, useReducedMotion } from '@/lib/use-reduced-motion';
import { ExternalLink, Calendar } from 'lucide-react';

export function ExperienceSection() {
  const locale = useLocale() as 'it' | 'en';
  const t = useTranslations('experience');
  const { experience, education } = portfolioData;
  const prefersReduced = useReducedMotion();
  const headerMotion = getMotionProps(motionPresets.fadeInUpSlow, prefersReduced);

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <motion.div {...headerMotion} className="mb-8 md:mb-10">
        <SectionHeader
          number="04"
          title={t('title')}
          summary={t('summary')}
          align="left"
        />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
        {/* Work Experience */}
        <div>
          <h3 className="text-h3 text-[color:var(--text-primary)] mb-4">
            {t('work')}
          </h3>

          <div className="space-y-4">
            {experience.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.period}`}
                {...(prefersReduced
                  ? {}
                  : {
                      initial: motionPresets.fadeInUpSlow.initial,
                      whileInView: motionPresets.fadeInUpSlow.whileInView,
                      viewport: motionPresets.fadeInUpSlow.viewport,
                      transition: {
                        ...motionPresets.fadeInUpSlow.transition,
                        delay: Math.min(index * 0.05, 0.25),
                      },
                    })}
              >
                <Surface variant="bordered" padding="md">
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-h3 text-[color:var(--text-primary)] mb-2">
                        {job.position[locale]}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[color:var(--text-secondary)] mb-2">
                        <span className="text-body font-medium">
                          {job.company}
                        </span>
                        <span
                          className="text-caption text-[color:var(--text-tertiary)]"
                          aria-hidden="true"
                        >
                          ·
                        </span>
                        <span className="text-caption">
                          {job.type[locale]}
                        </span>
                      </div>
                      <div className="flex items-center text-[color:var(--accent-primary)] text-caption">
                        <Calendar className="w-3 h-3 mr-2" aria-hidden="true" />
                        {job.period}
                      </div>
                    </div>
                    {job.link && (
                      <AnimatedButton
                        href={job.link}
                        variant="ghost"
                        size="sm"
                        className="shrink-0"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </AnimatedButton>
                    )}
                  </div>

                  <p className="text-body text-[color:var(--text-secondary)] leading-relaxed">
                    {job.description[locale]}
                  </p>
                </Surface>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-h3 text-[color:var(--text-primary)] mb-4">
            {t('education')}
          </h3>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={`${edu.title[locale]}-${edu.period}`}
                {...(prefersReduced
                  ? {}
                  : {
                      initial: motionPresets.fadeInUpSlow.initial,
                      whileInView: motionPresets.fadeInUpSlow.whileInView,
                      viewport: motionPresets.fadeInUpSlow.viewport,
                      transition: {
                        ...motionPresets.fadeInUpSlow.transition,
                        delay: Math.min(index * 0.05, 0.25),
                      },
                    })}
              >
                <Surface variant="bordered" padding="md">
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-h3 text-[color:var(--text-primary)] mb-2">
                        {edu.title[locale]}
                      </h4>
                      <div className="flex items-center text-[color:var(--accent-primary)] text-caption mb-2">
                        <Calendar className="w-3 h-3 mr-2" aria-hidden="true" />
                        {edu.period}
                      </div>
                    </div>
                    {edu.link && (
                      <AnimatedButton
                        href={edu.link}
                        variant="ghost"
                        size="sm"
                        className="shrink-0"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </AnimatedButton>
                    )}
                  </div>

                  <p className="text-body text-[color:var(--text-secondary)] leading-relaxed">
                    {edu.description[locale]}
                  </p>
                </Surface>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
