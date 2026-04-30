'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { GlassCard } from '@/components/ui/glass-card';
import { portfolioData } from '@/data/portfolio';
import { PortfolioSection } from '@/components/portfolio-section';
import { ExperienceSection } from '@/components/experience-section';

export function MobileTabs() {
  const locale = useLocale() as 'it' | 'en';
  const t = useTranslations('mobileTabs.tab');

  const tabs = [
    { id: 'pillars', label: t('expertise'), content: 'pillars' },
    { id: 'portfolio', label: t('portfolio'), content: 'portfolio' },
    { id: 'experience', label: t('experience'), content: 'experience' },
    { id: 'skills', label: t('skills'), content: 'skills' },
  ] as const;

  const [activeTab, setActiveTab] = useState<typeof tabs[number]['id']>('pillars');
  const [isExpanded, setIsExpanded] = useState(true);

  const { pillars, skills, languages } = portfolioData;

  const renderContent = (contentType: string) => {
    switch (contentType) {
      case 'pillars':
        return (
          <div className="px-4 space-y-4">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-4" hover>
                  <div className="flex items-start space-x-3">
                    <span
                      aria-hidden
                      className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--accent-primary)]"
                    />
                    <div className="flex-1">
                      <h3 className="text-h3 text-sm font-bold text-[var(--text-primary)] mb-1">
                        {pillar.title[locale]}
                      </h3>
                      <p className="text-body text-[var(--text-tertiary)] text-xs leading-relaxed mb-2">
                        {pillar.summary[locale]}
                      </p>
                      {pillar.metrics && pillar.metrics.length > 0 && (
                        <div className="flex flex-wrap gap-3 mt-2">
                          {pillar.metrics.slice(0, 2).map((metric) => (
                            <div
                              key={metric.value + metric.label[locale]}
                              className="flex items-baseline gap-1.5"
                            >
                              <span className="text-[var(--accent-primary)] text-sm font-bold">
                                {metric.value}
                              </span>
                              <span className="text-[var(--text-tertiary)] text-[10px] uppercase tracking-wide">
                                {metric.label[locale]}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        );

      case 'portfolio':
        return <PortfolioSection />;

      case 'experience':
        return <ExperienceSection />;

      case 'skills':
        return (
          <div className="px-4 space-y-4">
            {/* Technical Skills — categories with tag list */}
            <div>
              <h3 className="text-base font-semibold text-[var(--text-primary)] mb-3">
                Technical Skills
              </h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category[locale]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <h4 className="text-[var(--text-secondary)] text-sm font-medium mb-2">
                      {skill.category[locale]}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-0.5 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-secondary)] text-[11px]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages — keep simple bars (LanguageProficiency unchanged) */}
            <div>
              <h3 className="text-base font-semibold text-[var(--text-primary)] mb-3">Languages</h3>
              <div className="space-y-2">
                {languages.map((language, index) => (
                  <motion.div
                    key={language.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center justify-between py-1"
                  >
                    <span className="text-[var(--text-secondary)] text-sm">{language.name}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-[var(--bg-tertiary)] rounded-full h-1.5">
                        <motion.div
                          className="bg-[var(--accent-primary)] h-1.5 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${language.level}%` }}
                          transition={{ duration: 0.8, delay: index * 0.05 }}
                        />
                      </div>
                      <span className="text-[var(--accent-primary)] text-xs font-medium w-8">{language.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="lg:hidden">
      {/* Tab Headers */}
      <div className="relative flex justify-center gap-8 mb-6 pb-2 border-b border-white/10 mt-8">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <motion.button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setIsExpanded(true);
              }}
              className={`relative text-sm font-medium transition-colors duration-300 focus:outline-none ${
                isActive
                  ? 'text-primary-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
              {isActive && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-primary-500"
                  layoutId="activeTab"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            {renderContent(activeTab)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
