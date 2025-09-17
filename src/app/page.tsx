'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { AnimatedButton } from '@/components/ui/animated-button';
import { TypewriterHero } from '@/components/typewriter-hero';
import { RotatingAvatar } from '@/components/rotating-avatar';
import { MobileTabs } from '@/components/mobile-tabs';
import { portfolioData } from '@/data/portfolio';
import { ExpertiseIcons } from '@/components/expertise-icons';
import { PortfolioSection } from '@/components/portfolio-section';
import { ExperienceSection } from '@/components/experience-section';
import { SkillsSection } from '@/components/skills-section';
import { SectionDivider } from '@/components/ui/section-divider';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import { 
  Github, 
  Linkedin, 
  MessageCircle, 
  Calendar,
  Download,
  Mail
} from 'lucide-react';
import { XIcon } from '@/components/ui/x-icon';

export default function Home() {
  const { personal, social, expertise, stats } = portfolioData;
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Memoize le strings del TypewriterHero per evitare re-render
  const typewriterStrings = useMemo(() => [
    "I'm a web3 & Blockchain Product Manager",
    "I develop DAO, Web3 and DeFi apps",
    "I'm UX oriented", 
    "I'm passionate about Web3 innovation",
    "I build decentralized solutions"
  ], []);

  // Effetto glitch periodico
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 800); // Glitch dura 1 secondi
    }, 6000); // Ogni 8 secondi

    return () => clearInterval(glitchInterval);
  }, []);

  // Gestione scroll per header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        {/* Header - Fixed on desktop, hidden on mobile */}
        <header className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[var(--glass-bg)] backdrop-blur-md border-b border-[var(--glass-border)]' 
            : 'bg-transparent'
        }`}>
          <div className="container mx-auto px-4 py-2 md:py-4">
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-end items-center"
          >
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
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-6 md:py-12 md:pt-28">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Card con foto e social - ora sulla sinistra e prioritaria su mobile */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-1"
            >
                  <GlassCard className="p-4 text-center relative" gradient>
                    {/* Anon Button */}
                    <motion.button
                      onClick={() => setIsAnonymous(!isAnonymous)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 z-10 cursor-pointer bg-[var(--glass-bg)] text-[var(--text-secondary)] border border-[var(--glass-border)]"
                    >
                      <span 
                        style={isAnonymous ? {} : { textDecoration: 'line-through', opacity: 0.6 }}
                      >
                        Anon
                      </span>
                    </motion.button>

                    <div className="relative">
                      <RotatingAvatar
                        images={[
                          isAnonymous ? "/images/einstein.png" : "/images/me.jpg"
                        ]}
                        alt={isAnonymous ? "Andrea0x.eth" : "Andrea Ritondale"}
                        className={`w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-white/20 shadow-2xl transition-all duration-300 ${
                          isGlitching ? 'opacity-30 blur-sm' : 'opacity-100'
                        }`}
                        interval={4000}
                      />
                      
                      {/* Avatar glitch overlay */}
                      {isGlitching && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-red-500/50 shadow-2xl"
                          style={{
                            backgroundImage: `url(${isAnonymous ? "/images/me.jpg" : "/images/einstein.png"})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'hue-rotate(180deg) contrast(1.5)',
                            animation: 'glitch 0.5s infinite'
                          }}
                        />
                      )}
                    </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] relative">
                    {isAnonymous ? "Andrea0x.eth" : "Andrea Ritondale"}
                    {isGlitching && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 text-red-400"
                        style={{
                          filter: 'hue-rotate(180deg)',
                          animation: 'glitch 0.5s infinite'
                        }}
                      >
                        {isAnonymous ? "Andrea Ritondale" : "Andrea0x.eth"}
                      </motion.span>
                    )}
                  </h3>
                  
                  <div className="flex justify-center space-x-3 pt-2">
                    <motion.a
                      href={`mailto:${social.email}?subject=Hello from your portfolio&body=Hi Andrea0x.eth,%0D%0A%0D%0AI found your portfolio and I'm interested in...`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      <Mail className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      <XIcon className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={social.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
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
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[var(--text-primary)] mb-2 relative">
                    I&apos;m {isAnonymous ? "Andrea0x.eth" : "Andrea Ritondale"}
                    {isGlitching && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 text-red-400"
                        style={{
                          filter: 'hue-rotate(180deg)',
                          animation: 'glitch 0.5s infinite'
                        }}
                      >
                        I&apos;m {isAnonymous ? "Andrea Ritondale" : "Andrea0x.eth"}
                      </motion.span>
                    )}
                  </h1>
                <TypewriterHero 
                  strings={typewriterStrings}
                  className="text-xl md:text-2xl lg:text-3xl"
                />
              </motion.div>
              
              
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
                  <XIcon className="w-4 h-4" />
                  <span>Follow Me</span>
                </AnimatedButton>
                
                <AnimatedButton
                  href="https://tinyurl.com/Andrea0x-CV"
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
                <GlassCard className="p-6 h-full flex flex-col justify-between" hover gradient>
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="text-[var(--accent-primary)] flex-shrink-0 mr-3">
                        {ExpertiseIcons[item.icon as keyof typeof ExpertiseIcons]}
                      </div>
                      <h3 className="text-sm font-bold text-[var(--text-primary)]">{item.title}</h3>
                    </div>
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

        {/* Skills Section */}
        <div className="hidden lg:block">
          <SkillsSection />
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
                <div className="flex w-full sm:w-auto">
                  <AnimatedButton
                    href={social.telegram}
                    variant="glass"
                    size="md"
                    className="flex items-center justify-center space-x-2 rounded-r-none border-r-0 flex-1"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Telegram</span>
                  </AnimatedButton>
                  <AnimatedButton
                    href={`mailto:${social.email}?subject=Hello from your portfolio&body=Hi Andrea0x.eth,%0D%0A%0D%0AI found your portfolio and I'm interested in...`}
                    variant="glass"
                    size="md"
                    className="flex items-center justify-center space-x-2 rounded-l-none flex-1"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </AnimatedButton>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 pb-20 md:pb-12 border-t border-[var(--border-primary)]">
          <div className="text-center text-[var(--text-tertiary)]">
            <p>&copy; {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          </div>
      </footer>

        {/* Mobile Footer - Always visible */}
        <footer className="fixed bottom-0 left-0 right-0 md:hidden z-50">
          <div className="bg-[var(--glass-bg)] backdrop-blur-md border-t border-[var(--glass-border)] px-4 py-3">
            <div className="flex justify-end items-center space-x-3">
              <ThemeSwitcher />
              <AnimatedButton
                href={social.calendly}
                variant="primary"
                size="sm"
                className="flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Call</span>
              </AnimatedButton>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}