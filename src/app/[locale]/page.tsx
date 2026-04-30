import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Calendar, Mail, MessageCircle } from 'lucide-react';
import { notFound } from 'next/navigation';

import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import type { Locale } from '@/data/types';
import { portfolioData } from '@/data/portfolio';

import { HeroSection } from '@/components/hero-section';
import { StatsSection } from '@/components/stats-section';
import { TrustedBySection } from '@/components/trusted-by-section';
import { WhatIDoMatrix } from '@/components/what-i-do-matrix';
import { DomainsProjectsMatrix } from '@/components/domains-projects-matrix';
import { FeaturedCaseStudies } from '@/components/featured-case-studies';
import { PortfolioSection } from '@/components/portfolio-section';
import { ExperienceSection } from '@/components/experience-section';
import { SkillsSection } from '@/components/skills-section';
import { WhoIsThisFor } from '@/components/who-is-this-for';
import { CollaborationsSection } from '@/components/collaborations-section';
import { TechStackSection } from '@/components/tech-stack-section';

import { AnimatedButton } from '@/components/ui/animated-button';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import { Surface } from '@/components/ui/surface';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomePageProps) {
  const { locale: rawLocale } = await params;
  if (!hasLocale(routing.locales, rawLocale)) {
    notFound();
  }
  setRequestLocale(rawLocale);
  const locale = rawLocale as Locale;

  const tNav = await getTranslations('nav');
  const tCta = await getTranslations('home.contactCta');

  const { social, personal } = portfolioData;

  return (
    <div className="min-h-screen bg-[color:var(--bg-primary)]">
      {/* Sticky desktop header */}
      <header className="hidden md:block sticky top-0 z-50 backdrop-blur-md border-b border-[color:var(--border-primary)]/60 bg-[color:var(--bg-primary)]/80">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex flex-col leading-tight">
            <span className="text-body font-medium text-[color:var(--text-primary)]">
              {personal.name}
            </span>
            <span className="font-mono text-tag text-[color:var(--text-tertiary)]">
              · {personal.handle}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <AnimatedButton
              href={social.calendly}
              variant="primary"
              size="sm"
              className="flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{tNav('bookCall')}</span>
            </AnimatedButton>
          </div>
        </div>
      </header>

      <main className="relative">
        <HeroSection locale={locale} />

        <StatsSection />

        <TrustedBySection />

        <WhatIDoMatrix />

        <DomainsProjectsMatrix />

        <FeaturedCaseStudies locale={locale} />

        <PortfolioSection />

        <ExperienceSection />

        <SkillsSection />

        <WhoIsThisFor locale={locale} />

        <CollaborationsSection />

        <TechStackSection />

        {/* Final contact CTA */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <Surface
            variant="bordered"
            padding="lg"
            className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto"
          >
            <h2 className="text-h2 text-[color:var(--text-primary)]">
              {tCta('title')}
            </h2>
            <p className="text-body text-[color:var(--text-secondary)] max-w-xl">
              {tCta('body')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <AnimatedButton
                href={social.calendly}
                variant="primary"
                size="md"
                className="flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{tCta('scheduleCall')}</span>
              </AnimatedButton>
              <AnimatedButton
                href={social.telegram}
                variant="glass"
                size="md"
                className="flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{tCta('telegram')}</span>
              </AnimatedButton>
              <AnimatedButton
                href={`mailto:${social.email}`}
                variant="glass"
                size="md"
                className="flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>{tCta('email')}</span>
              </AnimatedButton>
            </div>
          </Surface>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 pb-24 md:pb-12 border-t border-[color:var(--border-primary)]">
          <div className="text-center text-caption text-[color:var(--text-tertiary)]">
            <p>
              &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
            </p>
          </div>
        </footer>

        {/* Mobile fixed-bottom bar */}
        <div className="fixed bottom-0 left-0 right-0 md:hidden z-50">
          <div
            className="px-4 py-3 backdrop-blur-md border-t"
            style={{
              backgroundColor: 'var(--glass-bg)',
              borderColor: 'var(--glass-border)',
            }}
          >
            <div className="flex items-center justify-end gap-3">
              <LanguageSwitcher />
              <ThemeSwitcher />
              <AnimatedButton
                href={social.calendly}
                variant="primary"
                size="sm"
                className="flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{tNav('bookCall')}</span>
              </AnimatedButton>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
