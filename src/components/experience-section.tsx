'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { AnimatedButton } from '@/components/ui/animated-button';
import { portfolioData } from '@/data/portfolio';
import { ExternalLink, Calendar, MapPin, Users } from 'lucide-react';

export function ExperienceSection() {
  const { experience, education } = portfolioData;

  return (
    <section className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-3">
          My <span className="text-[var(--accent-primary)]">Experience</span>
        </h2>
        <p className="text-sm text-[var(--text-tertiary)] max-w-2xl mx-auto">
          A journey through Web3, blockchain, and decentralized technologies
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Work Experience */}
        <div>
          <motion.h3 
            className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Users className="w-4 h-4 mr-2 text-[var(--accent-primary)]" />
            Work Experience
          </motion.h3>
          
          <div className="space-y-4">
            {experience.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-4" hover>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">
                        {job.position}
                      </h4>
                      <div className="flex items-center space-x-4 text-[var(--text-tertiary)] mb-2">
                        <span className="font-medium text-sm">{job.company}</span>
                        <span className="text-xs">•</span>
                        <span className="text-xs">{job.type}</span>
                      </div>
                      <div className="flex items-center text-[var(--accent-primary)] text-xs">
                        <Calendar className="w-3 h-3 mr-2" />
                        {job.period}
                      </div>
                    </div>
                    {job.link && (
                      <AnimatedButton
                        href={job.link}
                        variant="ghost"
                        size="sm"
                        className="ml-4"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </AnimatedButton>
                    )}
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed text-xs">
                    {job.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.h3 
            className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <MapPin className="w-4 h-4 mr-2 text-[var(--accent-primary)]" />
            Education
          </motion.h3>
          
          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={`${edu.title}-${edu.period}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-4" hover>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">
                        {edu.title}
                      </h4>
                      <div className="flex items-center text-[var(--accent-primary)] text-xs mb-2">
                        <Calendar className="w-3 h-3 mr-2" />
                        {edu.period}
                      </div>
                    </div>
                    {edu.link && (
                      <AnimatedButton
                        href={edu.link}
                        variant="ghost"
                        size="sm"
                        className="ml-4"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </AnimatedButton>
                    )}
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed text-xs">
                    {edu.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
