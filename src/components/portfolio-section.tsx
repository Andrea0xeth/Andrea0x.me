'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Surface } from '@/components/ui/surface';
import { SectionHeader } from '@/components/ui/section-header';
import { TagPill } from '@/components/ui/tag-pill';
import { AnimatedButton } from '@/components/ui/animated-button';
import { PortfolioImage } from '@/components/ui/portfolio-image';
import { portfolioData } from '@/data/portfolio';
import { motionPresets } from '@/lib/motion-presets';
import { getMotionProps, useReducedMotion } from '@/lib/use-reduced-motion';
import { ExternalLink } from 'lucide-react';

export function PortfolioSection() {
  const locale = useLocale() as 'it' | 'en';
  const t = useTranslations('portfolio');
  const [activeCategory, setActiveCategory] = useState('All');
  const { projects } = portfolioData;
  const prefersReduced = useReducedMotion();
  const headerMotion = getMotionProps(motionPresets.fadeInUpSlow, prefersReduced);

  // Derive categories from data — keeps "All" first, then unique cats in
  // insertion order. Avoids hand-maintained lists drifting out of sync.
  const allCategories = useMemo(
    () =>
      Array.from(
        new Set(['All', ...projects.flatMap((p) => p.categories)])
      ),
    [projects]
  );

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.categories.includes(activeCategory));

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

      {/* Category Filter */}
      <div
        className="flex flex-wrap gap-2 mb-8 md:mb-10"
        role="group"
        aria-label={t('title')}
      >
        {allCategories.map((category) => {
          const active = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={active}
              className={
                active
                  ? 'px-3 py-1.5 rounded-full text-tag transition-colors duration-200 bg-[var(--accent-primary)] text-white border border-transparent'
                  : 'px-3 py-1.5 rounded-full text-tag transition-colors duration-200 bg-transparent text-[color:var(--text-secondary)] border border-[color:var(--border-primary)] hover:text-[color:var(--text-primary)] hover:border-[color:var(--accent-primary)]/40'
              }
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            {...(prefersReduced
              ? {}
              : {
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  transition: {
                    duration: 0.5,
                    delay: Math.min(index * 0.04, 0.2),
                  },
                })}
            className="h-full"
          >
            <Surface
              variant="bordered"
              padding="none"
              className="h-full flex flex-col overflow-hidden"
            >
              <div className="relative">
                <PortfolioImage
                  src={project.image}
                  gif={project.gif}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <TagPill variant="accent" size="sm">
                      Featured
                    </TagPill>
                  </div>
                )}
              </div>

              <div className="p-4 md:p-5 flex flex-col flex-grow gap-3">
                <h3 className="text-h3 text-[color:var(--text-primary)]">
                  {project.title}
                </h3>
                <p className="text-body text-[color:var(--text-secondary)] flex-grow">
                  {project.description[locale]}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.categories.map((category) => (
                    <TagPill key={category} variant="default" size="sm">
                      {category}
                    </TagPill>
                  ))}
                </div>

                {project.link && (
                  <div className="pt-1">
                    <AnimatedButton
                      href={project.link}
                      variant="ghost"
                      size="sm"
                      className="inline-flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Project</span>
                    </AnimatedButton>
                  </div>
                )}
              </div>
            </Surface>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
