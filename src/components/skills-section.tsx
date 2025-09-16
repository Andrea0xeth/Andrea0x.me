'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export function SkillsSection() {
  const { skills, languages } = portfolioData;

  return (
    <section className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <h2 className="text-xl lg:text-2xl font-bold text-[var(--text-primary)] mb-2">
          My <span className="text-[var(--accent-primary)]">Skills</span>
        </h2>
        <p className="text-sm text-[var(--text-tertiary)] max-w-xl mx-auto">
          Technical expertise and language proficiency
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="p-4">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">
              Technical Skills
            </h3>
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[var(--text-secondary)] text-sm font-medium">{skill.name}</span>
                    <span className="text-[var(--accent-primary)] text-sm font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[var(--bg-tertiary)] rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="p-4">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">
              Languages
            </h3>
            <div className="space-y-3">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[var(--text-secondary)] text-sm font-medium">{language.name}</span>
                    <span className="text-[var(--accent-primary)] text-sm font-bold">{language.level}%</span>
                  </div>
                  <div className="w-full bg-[var(--bg-tertiary)] rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.level}%` }}
                      transition={{ duration: 0.8, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
