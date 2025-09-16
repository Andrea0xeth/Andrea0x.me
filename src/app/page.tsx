'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { AnimatedButton } from '@/components/ui/animated-button';
import { TypewriterHero } from '@/components/typewriter-hero';
import { RotatingAvatar } from '@/components/rotating-avatar';
import { MobileTabs } from '@/components/mobile-tabs';
import { portfolioData } from '@/data/portfolio';
import { PortfolioSection } from '@/components/portfolio-section';
import { ExperienceSection } from '@/components/experience-section';
import { SectionDivider } from '@/components/ui/section-divider';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  MessageCircle, 
  Calendar,
  Download
} from 'lucide-react';

export default function Home() {
  const { personal, social, expertise, stats } = portfolioData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-tertiary)]">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[var(--accent-primary)]/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-[var(--accent-secondary)]/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-[var(--accent-tertiary)]/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-2 md:py-4">
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center"
          >
            <motion.div 
              className="text-2xl font-bold text-[var(--text-primary)]"
              whileHover={{ scale: 1.05 }}
            >
              {personal.name}
            </motion.div>
            
            <div className="flex items-center space-x-4">
              <ThemeSwitcher />
              <AnimatedButton
                href={social.calendly}
                variant="glass"
                size="sm"
                className="flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Call</span>
              </AnimatedButton>
            </div>
          </motion.nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-6 md:py-12">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Card con foto e social - ora sulla sinistra e prioritaria su mobile */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-1"
            >
                  <GlassCard className="p-4 text-center" gradient>
                    <RotatingAvatar
                      images={[
                        "/images/einstein.png",
                        "/images/me.jpg"
                      ]}
                      alt={personal.name}
                      className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-white/20 shadow-2xl"
                      interval={4000}
                    />
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">{personal.name}</h3>
                  <p className="text-[var(--text-secondary)] text-sm">{personal.title}</p>
                  
                  <div className="flex justify-center space-x-3 pt-2">
                    <motion.a
                      href={social.github}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={social.linkedin}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={social.twitter}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      <Twitter className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={social.telegram}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      <MessageCircle className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Testo con typewriter - ora sulla destra e secondario su mobile */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-2"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4"
              >
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[var(--text-primary)] mb-2">
                  I&apos;m Andrea0x.eth
                </h1>
                <TypewriterHero 
                  strings={[
                    "I'm a Blockchain Product Manager",
                    "I develop DAO, Web3 and DeFi apps",
                    "I'm UX oriented", 
                    "I'm passionate about Web3 innovation",
                    "I build decentralized solutions"
                  ]}
                  className="text-xl md:text-2xl lg:text-3xl"
                />
              </motion.div>
              
              <motion.h2 
                className="text-lg lg:text-xl text-[var(--text-secondary)] mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {personal.title}
              </motion.h2>
              
              <motion.p 
                className="text-sm md:text-base text-[var(--text-tertiary)] mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {personal.description}
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <AnimatedButton
                  href={social.twitter}
                  variant="primary"
                  size="md"
                  className="flex items-center space-x-2"
                >
                  <Twitter className="w-4 h-4" />
                  <span>Follow Me</span>
                </AnimatedButton>
                
                <AnimatedButton
                  href="/assets/AndreaRitondale_CV.pdf"
                  variant="glass"
                  size="md"
                  className="flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </AnimatedButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-4">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <GlassCard className="text-center p-2 rounded-lg transition-all duration-300">
                  <div className="text-sm font-bold text-[var(--text-primary)] mb-0.5">{stat.value}</div>
                  <div className="text-xs text-[var(--text-tertiary)] font-medium">{stat.label}</div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Mobile Tabs */}
        <MobileTabs />

        {/* Expertise Section */}
        <section className="container mx-auto px-4 py-8 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-3">
              My <span className="text-[var(--accent-primary)]">Expertise</span>
            </h2>
            <p className="text-sm text-[var(--text-tertiary)] max-w-2xl mx-auto">
              Specialized skills and areas of expertise in the Web3 and blockchain space
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <GlassCard className="p-6 text-center h-full flex flex-col justify-between" hover gradient>
                  <div>
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3">{item.title}</h3>
                  </div>
                  <p className="text-[var(--text-tertiary)] leading-relaxed text-xs px-2">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
        </div>
        </section>

        {/* Section Divider */}
        <div className="hidden md:block">
          <SectionDivider />
        </div>

        {/* Portfolio Section */}
        <div className="hidden lg:block">
          <PortfolioSection />
        </div>

        {/* Section Divider */}
        <div className="hidden md:block">
          <SectionDivider />
        </div>

        {/* Experience Section */}
        <div className="hidden lg:block">
          <ExperienceSection />
        </div>

        {/* Section Divider */}
        <div className="hidden md:block">
          <SectionDivider />
        </div>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-3">
              Ready to work <span className="text-[var(--accent-primary)]">together?</span>
            </h2>
            <p className="text-sm text-[var(--text-tertiary)] max-w-2xl mx-auto">
              Let&apos;s discuss your next Web3 project and how I can help bring your vision to life.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <GlassCard className="p-8 text-center" gradient>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton
                  href={social.calendly}
                  variant="primary"
                  size="md"
                  className="flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule a Call</span>
                </AnimatedButton>
                <AnimatedButton
                  href={social.telegram}
                  variant="glass"
                  size="md"
                  className="flex items-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Contact Me</span>
                </AnimatedButton>
              </div>
            </GlassCard>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 border-t border-[var(--border-primary)]">
          <div className="text-center text-[var(--text-tertiary)]">
            <p>&copy; {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          </div>
      </footer>
      </div>
    </div>
  );
}