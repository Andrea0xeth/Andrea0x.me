'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Briefcase, Rocket, Users } from 'lucide-react';
import type { ReactNode } from 'react';
import { SectionHeader } from '@/components/ui/section-header';
import { Surface } from '@/components/ui/surface';
import { motionPresets } from '@/lib/motion-presets';
import { useReducedMotion, getMotionProps } from '@/lib/use-reduced-motion';
import { portfolioData } from '@/data/portfolio';
import type { Locale } from '@/data/types';

interface WhoIsThisForProps {
  locale: Locale;
}

interface CardLink {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

interface CardSpec {
  icon: ReactNode;
  title: string;
  body: string;
  links: CardLink[];
}

/**
 * WhoIsThisFor — 3-card section for the home page.
 *
 * Targets three audiences:
 *   1. Recruiter / Hiring Manager
 *   2. Founder / Co-founder seek
 *   3. Consulting / Fractional CTO client
 */
export function WhoIsThisFor({ locale }: WhoIsThisForProps) {
  const t = useTranslations('whoIsThisFor');
  const prefersReduced = useReducedMotion();
  const { social } = portfolioData;

  const cards: CardSpec[] = [
    {
      icon: <Briefcase aria-hidden="true" className="w-6 h-6" />,
      title: t('card1.title'),
      body: t('card1.body'),
      links: [
        {
          label: t('card1.ctaPrimary'),
          href: `/api/cv?lang=${locale}`,
          variant: 'primary',
        },
        {
          label: t('card1.ctaSecondary'),
          href: `/${locale}/about`,
          variant: 'secondary',
        },
      ],
    },
    {
      icon: <Rocket aria-hidden="true" className="w-6 h-6" />,
      title: t('card2.title'),
      body: t('card2.body'),
      links: [
        {
          label: t('card2.ctaPrimary'),
          href: `mailto:${social.email}`,
          variant: 'primary',
        },
        {
          label: t('card2.ctaSecondary'),
          href: `/${locale}/about`,
          variant: 'secondary',
        },
      ],
    },
    {
      icon: <Users aria-hidden="true" className="w-6 h-6" />,
      title: t('card3.title'),
      body: t('card3.body'),
      links: [
        {
          label: t('card3.ctaPrimary'),
          href: `/${locale}/services`,
          variant: 'primary',
        },
      ],
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <SectionHeader number="07" title={t('title')} className="mb-8 md:mb-10" />

      <div className="grid gap-4 md:gap-5 md:grid-cols-3">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            {...getMotionProps(motionPresets.cardHover, prefersReduced)}
            className="h-full"
          >
            <Surface
              variant="bordered"
              padding="md"
              className="h-full flex flex-col gap-4"
            >
              <span
                className="inline-flex items-center justify-center w-10 h-10 rounded-full"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--accent-primary)',
                }}
              >
                {card.icon}
              </span>

              <h3 className="text-h3 text-[color:var(--text-primary)]">
                {card.title}
              </h3>

              <p className="text-body text-[color:var(--text-secondary)] flex-1">
                {card.body}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-auto">
                {card.links.map((link) => {
                  const isExternal =
                    link.href.startsWith('mailto:') ||
                    link.href.startsWith('http') ||
                    link.href.startsWith('/api/');
                  const baseClass =
                    link.variant === 'primary'
                      ? 'text-body font-medium text-[color:var(--accent-primary)] hover:underline'
                      : 'text-body text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors';

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={baseClass}
                      {...(isExternal
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {link.label}
                      <span aria-hidden="true"> →</span>
                    </a>
                  );
                })}
              </div>
            </Surface>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
