'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { portfolioData } from '@/data/portfolio';
import { PortfolioSection } from '@/components/portfolio-section';
import { ExperienceSection } from '@/components/experience-section';
// No additional imports needed for simple text tabs

const tabs = [
  {
    id: 'expertise',
    label: 'Expertise',
    content: 'expertise'
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    content: 'portfolio'
  },
  {
    id: 'experience',
    label: 'Experience',
    content: 'experience'
  },
  {
    id: 'skills',
    label: 'Skills',
    content: 'skills'
  }
];

export function MobileTabs() {
  const [activeTab, setActiveTab] = useState('expertise');
  const [isExpanded, setIsExpanded] = useState(true); // Auto-apre Expertise

  const { expertise, skills, languages } = portfolioData;

  const renderContent = (contentType: string) => {
    switch (contentType) {
      case 'expertise':
        return (
          <div className="space-y-4">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-4 flex items-center space-x-4" hover>
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">{item.title}</h3>
                    <p className="text-[var(--text-tertiary)] text-xs leading-relaxed">{item.description}</p>
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
          <div className="space-y-6">
            {/* Skills */}
            <div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Technical Skills</h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[var(--text-secondary)] font-medium text-sm">{skill.name}</span>
                      <span className="text-[var(--accent-primary)] font-bold text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[var(--bg-tertiary)] rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Languages</h3>
              <div className="space-y-3">
                {languages.map((language, index) => (
                  <motion.div
                    key={language.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[var(--text-secondary)] font-medium text-sm">{language.name}</span>
                      <span className="text-[var(--accent-primary)] font-bold text-sm">{language.level}%</span>
                    </div>
                    <div className="w-full bg-[var(--bg-tertiary)] rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${language.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
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
              {/* Individual underline for each tab */}
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
