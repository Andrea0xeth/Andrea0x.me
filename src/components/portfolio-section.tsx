'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { GlassCard } from '@/components/ui/glass-card';
import { AnimatedButton } from '@/components/ui/animated-button';
import { PortfolioImage } from '@/components/ui/portfolio-image';
import { SectionHeader } from '@/components/ui/section-header';
import { portfolioData } from '@/data/portfolio';
import { ExternalLink } from 'lucide-react';

const categories = [
  'All',
  'DeFi',
  'Web3',
  'DAO',
  'NFT',
  'Community',
  'Web2',
  'B2B SaaS',
  'AI',
  'Government',
  'Enterprise',
];

export function PortfolioSection() {
  const locale = useLocale() as 'it' | 'en';
  const t = useTranslations('portfolio');
  const [activeCategory, setActiveCategory] = useState('All');
  const { projects } = portfolioData;

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.categories.includes(activeCategory));

  return (
    <section className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12 md:mb-16"
      >
        <SectionHeader
          number="04"
          title={t('title')}
          summary={t('summary')}
          align="center"
          className="mb-8 mx-auto"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 md:gap-3 md:mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-medium transition-all duration-300 text-xs md:text-sm ${
                activeCategory === category
                  ? 'bg-[var(--accent-primary)] text-white shadow-lg'
                  : 'bg-[var(--glass-bg)] text-[var(--text-secondary)] hover:bg-[var(--glass-bg)]/80 border border-[var(--glass-border)]'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <GlassCard className="p-0 overflow-hidden h-full flex flex-col" hover>
              <div className="relative group">
                <PortfolioImage
                  src={project.image}
                  gif={project.gif}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-300"
                />

                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-[var(--accent-primary)] text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {project.link && (
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <AnimatedButton
                      href={project.link}
                      variant="glass"
                      size="sm"
                      className="w-full flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Project</span>
                    </AnimatedButton>
                  </div>
                )}
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3">{project.title}</h3>
                <p className="text-[var(--text-tertiary)] mb-3 flex-grow text-xs leading-relaxed">{project.description[locale]}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className="px-3 py-1 bg-[var(--glass-bg)] text-[var(--text-secondary)] rounded-full text-xs"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <GlassCard className="p-4 text-center max-w-md mx-auto" gradient>
          <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3">
            {t('cta.title')}
          </h3>
          <p className="text-[var(--text-tertiary)] mb-3 text-xs">
            {t('cta.body')}
          </p>
          <AnimatedButton
            href={portfolioData.social.calendly}
            variant="primary"
            size="sm"
            className="flex items-center space-x-2 mx-auto"
          >
            <span>{t('cta.button')}</span>
          </AnimatedButton>
        </GlassCard>
      </motion.div>
    </section>
  );
}
