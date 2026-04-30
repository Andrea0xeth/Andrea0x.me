'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  Github,
  Linkedin,
  MessageCircle,
  Mail,
} from 'lucide-react';
import { AnimatedButton } from '@/components/ui/animated-button';
import { CVDownloadButton } from '@/components/cv-download-button';
import { TypewriterHero } from '@/components/typewriter-hero';
import { XIcon } from '@/components/ui/x-icon';
import { portfolioData } from '@/data/portfolio';
import type { Locale } from '@/data/types';
import { motionPresets } from '@/lib/motion-presets';
import { getMotionProps, useReducedMotion } from '@/lib/use-reduced-motion';

interface HeroSectionProps {
  locale: Locale;
}

/**
 * HeroSection — top of the home page.
 *
 * - 2-column layout on desktop (photo left, copy right), stacked on mobile.
 * - Photo is the real avatar by default. Easter egg: pressing
 *   Ctrl/Cmd+Shift+A toggles between real and anon photo.
 * - No periodic glitch animation.
 * - No `RotatingAvatar` rotation; static `Image`.
 */
export function HeroSection({ locale }: HeroSectionProps) {
  const t = useTranslations('hero');
  const { personal, social, taglines } = portfolioData;

  const prefersReduced = useReducedMotion();
  const fadeIn = getMotionProps(motionPresets.fadeInUpSlow, prefersReduced);

  const [isAnon, setIsAnon] = useState(false);

  // Easter egg: Ctrl/Cmd+Shift+A toggles the avatar.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        setIsAnon((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const avatarSrc = isAnon ? personal.avatarAnon : personal.avatarReal;
  const avatarAlt = isAnon ? personal.handle : personal.name;

  // Memoize typewriter strings so the typewriter doesn't re-init on every render.
  const typewriterStrings = useMemo(
    () => taglines.typewriter[locale],
    [locale, taglines]
  );

  return (
    <section className="container mx-auto px-4 py-8 md:py-16 md:pt-28">
      <div className="grid lg:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
        {/* Photo column */}
        <motion.div
          {...fadeIn}
          className="order-1 lg:order-1 flex justify-center lg:justify-start"
        >
          <div
            className="relative rounded-full overflow-hidden"
            style={{
              width: 'clamp(200px, 28vw, 256px)',
              height: 'clamp(200px, 28vw, 256px)',
              border: '1px solid var(--border-primary)',
            }}
          >
            <Image
              src={avatarSrc}
              alt={avatarAlt}
              fill
              priority
              sizes="(min-width: 1024px) 256px, 200px"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Copy column */}
        <motion.div
          {...fadeIn}
          transition={
            prefersReduced
              ? undefined
              : {
                  ...motionPresets.fadeInUpSlow.transition,
                  delay: 0.1,
                }
          }
          className="order-2 lg:order-2 flex flex-col gap-5"
        >
          {/* Dual identity */}
          <div className="flex flex-col gap-1">
            <h1 className="text-h2 text-[color:var(--text-primary)]">
              {personal.name}
            </h1>
            <p className="font-mono text-tag text-[color:var(--text-tertiary)]">
              · {personal.handle}
            </p>
          </div>

          {/* Primary tagline */}
          <p
            className="text-display text-[color:var(--text-primary)]"
            style={{ fontWeight: 600 }}
          >
            {taglines.primary[locale]}
          </p>

          {/* Typewriter cycling */}
          <TypewriterHero
            strings={typewriterStrings}
            className="text-h3"
          />

          {/* Short bio */}
          <p className="text-body text-[color:var(--text-secondary)] max-w-prose">
            {personal.shortBio[locale]}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <AnimatedButton
              href={social.twitter}
              variant="primary"
              size="md"
              className="flex items-center space-x-2"
            >
              <XIcon className="w-4 h-4" />
              <span>{t('followMe')}</span>
            </AnimatedButton>

            <CVDownloadButton locale={locale} variant="glass" />
          </div>

          {/* Social row */}
          <div className="flex items-center gap-4 pt-2">
            <SocialIcon
              href={`mailto:${social.email}`}
              label="Email"
            >
              <Mail className="w-5 h-5" />
            </SocialIcon>
            <SocialIcon href={social.github} label="GitHub">
              <Github className="w-5 h-5" />
            </SocialIcon>
            <SocialIcon href={social.linkedin} label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </SocialIcon>
            <SocialIcon href={social.twitter} label="X / Twitter">
              <XIcon className="w-5 h-5" />
            </SocialIcon>
            <SocialIcon href={social.telegram} label="Telegram">
              <MessageCircle className="w-5 h-5" />
            </SocialIcon>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface SocialIconProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

function SocialIcon({ href, label, children }: SocialIconProps) {
  const isExternal = href.startsWith('http');
  return (
    <motion.a
      href={href}
      aria-label={label}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="text-[color:var(--text-tertiary)] hover:text-[color:var(--text-primary)] transition-colors"
    >
      {children}
    </motion.a>
  );
}
