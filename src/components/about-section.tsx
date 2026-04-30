import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Calendar,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react';
import { AnimatedButton } from '@/components/ui/animated-button';
import { Surface } from '@/components/ui/surface';
import { TagPill } from '@/components/ui/tag-pill';
import { XIcon } from '@/components/ui/x-icon';
import { portfolioData } from '@/data/portfolio';
import type { Locale } from '@/data/types';

interface AboutSectionProps {
  locale: Locale;
}

const HANDLE_DOMAIN_GLUE_IT = '·';

export async function AboutSection({ locale }: AboutSectionProps) {
  const t = await getTranslations({ locale, namespace: 'about' });
  const tSkills = await getTranslations({ locale, namespace: 'skills' });
  const {
    personal,
    social,
    taglines,
    languages,
    education,
    caseStudies,
    pillars,
    stats,
  } = portfolioData;

  // Long bio split into paragraphs
  const longBioParagraphs = personal.longBio[locale]
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  // "Currently working on" — derive from active/in-production case studies
  const activeCaseStudies = caseStudies.filter((cs) =>
    cs.status === 'active' || cs.status === 'production' || cs.status === 'pre-launch'
  );

  const proficiencyLabel = (level: number): string => {
    if (level >= 100) return tSkills('proficiency.native');
    if (level >= 80) return tSkills('proficiency.fluent');
    if (level >= 50) return tSkills('proficiency.professional');
    if (level >= 25) return tSkills('proficiency.basic');
    return tSkills('proficiency.beginner');
  };

  const yearsOfExperience = new Date().getFullYear() - 2019; // first relevant role 2020
  const domainsLabel = locale === 'it' ? 'Domini' : 'Domains';
  const yearsLabel = locale === 'it' ? 'Anni di esperienza' : 'Years of experience';
  const pillarsLabel = locale === 'it' ? 'Pillar di competenza' : 'Skill pillars';

  // Quick facts derived stats — unique top-line metrics
  const quickStats = [
    { value: `${yearsOfExperience}+`, label: yearsLabel },
    { value: `${pillars.length}`, label: pillarsLabel },
    { value: stats[3]?.value ?? '5+', label: domainsLabel },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
      {/* 1. HERO — generous, asymmetric */}
      <header className="grid gap-8 md:gap-14 md:grid-cols-[auto_1fr] md:items-end mb-16 md:mb-24">
        <div className="flex justify-center md:justify-start">
          <div className="relative w-44 h-44 md:w-60 md:h-60 rounded-3xl overflow-hidden border border-[color:var(--border-primary)]">
            <Image
              src={personal.avatarReal}
              alt={personal.name}
              fill
              sizes="(max-width: 768px) 176px, 240px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-display text-[color:var(--text-primary)] leading-none">
              {personal.name}
            </h1>
            <p className="font-mono text-h3 text-[color:var(--text-tertiary)]">
              {HANDLE_DOMAIN_GLUE_IT} {personal.handle}
            </p>
          </div>
          <p className="text-h2 text-[color:var(--text-secondary)] max-w-2xl text-balance">
            {taglines.primary[locale]}
          </p>
        </div>
      </header>

      {/* 2. AT A GLANCE — derived stats strip */}
      <section className="mb-16 md:mb-24">
        <h2 className="sr-only">{t('quickFacts')}</h2>
        <div
          className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border"
          style={{
            backgroundColor: 'var(--border-primary)',
            borderColor: 'var(--border-primary)',
          }}
        >
          {quickStats.map((stat) => (
            <div
              key={stat.label}
              className="p-5 md:p-6 flex flex-col gap-1"
              style={{ backgroundColor: 'var(--bg-primary)' }}
            >
              <span className="metric text-[28px] md:text-[36px] leading-none text-[color:var(--accent-primary)]">
                {stat.value}
              </span>
              <span className="text-tag text-[color:var(--text-tertiary)] mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STORY (long bio) */}
      <section className="mb-16 md:mb-24">
        <header className="mb-6 flex items-center gap-3">
          <span className="block w-1 h-6 rounded bg-[color:var(--accent-primary)]" />
          <h2 className="text-tag uppercase tracking-wider text-[color:var(--text-tertiary)] font-semibold">
            {t('story')}
          </h2>
        </header>
        <div className="max-w-3xl">
          {longBioParagraphs.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-body text-[color:var(--text-secondary)] mb-4 last:mb-0 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* 4. CURRENTLY — active case studies */}
      {activeCaseStudies.length > 0 && (
        <section className="mb-16 md:mb-24">
          <header className="mb-6 flex items-center gap-3">
            <span className="block w-1 h-6 rounded bg-[color:var(--accent-primary)]" />
            <div className="flex flex-col">
              <h2 className="text-tag uppercase tracking-wider text-[color:var(--text-tertiary)] font-semibold">
                {t('now')}
              </h2>
              <p className="text-caption text-[color:var(--text-tertiary)]">
                {t('nowSummary')}
              </p>
            </div>
          </header>
          <div className="grid gap-3 md:grid-cols-2">
            {activeCaseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/${locale}/work/${cs.slug}`}
                className="group block"
              >
                <Surface
                  variant="bordered"
                  padding="md"
                  className="h-full transition-colors group-hover:border-[color:var(--accent-primary)]/40"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-h3 text-[color:var(--text-primary)] group-hover:text-[color:var(--accent-primary)] transition-colors">
                      {cs.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[color:var(--text-tertiary)] group-hover:text-[color:var(--accent-primary)] transition-colors" />
                  </div>
                  <p className="text-caption text-[color:var(--text-tertiary)] mb-2 font-mono">
                    {cs.period}
                  </p>
                  <p className="text-caption text-[color:var(--text-secondary)] line-clamp-2">
                    {cs.role[locale]} · {cs.domain[locale]}
                  </p>
                </Surface>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 5. AT A GLANCE — quick facts */}
      <section className="mb-16 md:mb-24">
        <header className="mb-6 flex items-center gap-3">
          <span className="block w-1 h-6 rounded bg-[color:var(--accent-primary)]" />
          <h2 className="text-tag uppercase tracking-wider text-[color:var(--text-tertiary)] font-semibold">
            {t('quickFacts')}
          </h2>
        </header>
        <Surface variant="bordered" padding="md">
          <dl className="grid gap-5 md:grid-cols-3">
            <div className="flex flex-col gap-1">
              <dt className="text-tag text-[color:var(--text-tertiary)]">
                {locale === 'it' ? 'Nazionalità' : 'Nationality'}
              </dt>
              <dd className="text-body text-[color:var(--text-primary)]">
                {personal.nationality}
              </dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="text-tag text-[color:var(--text-tertiary)]">
                {locale === 'it' ? 'Modalità di lavoro' : 'Work mode'}
              </dt>
              <dd className="text-body text-[color:var(--text-primary)]">
                {personal.workMode[locale]}
              </dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="text-tag text-[color:var(--text-tertiary)]">
                {locale === 'it' ? 'Anno di nascita' : 'Birth year'}
              </dt>
              <dd className="text-body text-[color:var(--text-primary)]">
                {personal.birthYear}
              </dd>
            </div>
          </dl>
        </Surface>
      </section>

      {/* 6. LANGUAGES */}
      <section className="mb-16 md:mb-24">
        <header className="mb-6 flex items-center gap-3">
          <span className="block w-1 h-6 rounded bg-[color:var(--accent-primary)]" />
          <h2 className="text-tag uppercase tracking-wider text-[color:var(--text-tertiary)] font-semibold">
            {t('languages')}
          </h2>
        </header>
        <ul className="flex flex-wrap gap-3 md:gap-4">
          {languages.map((lang) => (
            <li key={lang.name}>
              <Surface variant="bordered" padding="sm" className="px-3 py-2 inline-flex flex-col gap-0.5 min-w-[140px]">
                <span className="text-body text-[color:var(--text-primary)]">
                  {lang.name}
                </span>
                <span className="text-tag text-[color:var(--text-tertiary)]">
                  {proficiencyLabel(lang.level)}
                </span>
              </Surface>
            </li>
          ))}
        </ul>
      </section>

      {/* 7. EDUCATION */}
      <section className="mb-16 md:mb-24">
        <header className="mb-6 flex items-center gap-3">
          <span className="block w-1 h-6 rounded bg-[color:var(--accent-primary)]" />
          <h2 className="text-tag uppercase tracking-wider text-[color:var(--text-tertiary)] font-semibold">
            {t('education')}
          </h2>
        </header>
        <ol className="flex flex-col">
          {education.map((edu, idx) => (
            <li
              key={`${edu.title.en}-${edu.period}`}
              className="grid gap-2 md:gap-4 md:grid-cols-[140px_1fr] py-4"
              style={{
                borderTop: idx > 0 ? '1px solid var(--border-primary)' : undefined,
              }}
            >
              <span className="text-caption font-mono text-[color:var(--text-tertiary)] md:pt-1">
                {edu.period}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-h3 text-[color:var(--text-primary)]">
                  {edu.link ? (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[color:var(--accent-primary)] transition-colors inline-flex items-center gap-1.5"
                    >
                      {edu.title[locale]}
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  ) : (
                    edu.title[locale]
                  )}
                </h3>
                <p className="text-body text-[color:var(--text-secondary)]">
                  {edu.description[locale]}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 8. FIND ME ELSEWHERE — social grid */}
      <section className="mb-16 md:mb-24">
        <header className="mb-6 flex items-center gap-3">
          <span className="block w-1 h-6 rounded bg-[color:var(--accent-primary)]" />
          <h2 className="text-tag uppercase tracking-wider text-[color:var(--text-tertiary)] font-semibold">
            {t('elsewhere')}
          </h2>
        </header>
        <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
          <SocialCard
            href={`mailto:${social.email}`}
            label="Email"
            handle={social.email}
            icon={<Mail className="w-4 h-4" />}
            external
          />
          <SocialCard
            href={social.github}
            label="GitHub"
            handle={shortenHandle(social.github)}
            icon={<Github className="w-4 h-4" />}
            external
          />
          <SocialCard
            href={social.linkedin}
            label="LinkedIn"
            handle="andrea-ritondale"
            icon={<Linkedin className="w-4 h-4" />}
            external
          />
          <SocialCard
            href={social.twitter}
            label="X / Twitter"
            handle="@andrea0x_eth"
            icon={<XIcon className="w-4 h-4" />}
            external
          />
          <SocialCard
            href={social.telegram}
            label="Telegram"
            handle="@Andrea0x_eth"
            icon={<MessageCircle className="w-4 h-4" />}
            external
          />
          <SocialCard
            href={social.calendly}
            label="Calendly"
            handle="calendly.com/andrea0x_eth"
            icon={<Calendar className="w-4 h-4" />}
            external
          />
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <AnimatedButton href={social.calendly} variant="primary" size="md">
          {t('cta.schedule')}
        </AnimatedButton>
        <AnimatedButton
          href={`/api/cv?lang=${locale}`}
          variant="secondary"
          size="md"
        >
          {t('cta.cv')}
        </AnimatedButton>
        <AnimatedButton
          href={`mailto:${social.email}`}
          variant="ghost"
          size="md"
        >
          {t('cta.email')}
        </AnimatedButton>
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function shortenHandle(url: string): string {
  try {
    const u = new URL(url);
    const pathname = u.pathname.replace(/\/$/, '').split('/').filter(Boolean).pop();
    return pathname ?? u.host;
  } catch {
    return url;
  }
}

interface SocialCardProps {
  href: string;
  label: string;
  handle: string;
  icon: React.ReactNode;
  external?: boolean;
}

function SocialCard({ href, label, handle, icon, external }: SocialCardProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group block"
    >
      <Surface
        variant="bordered"
        padding="md"
        className="h-full flex flex-col gap-1.5 transition-colors group-hover:border-[color:var(--accent-primary)]/40"
      >
        <div className="flex items-center justify-between text-[color:var(--text-tertiary)] group-hover:text-[color:var(--accent-primary)] transition-colors">
          <span className="inline-flex items-center gap-2">
            {icon}
            <span className="text-tag uppercase tracking-wider">{label}</span>
          </span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
        <span className="text-caption font-mono text-[color:var(--text-secondary)] truncate">
          {handle}
        </span>
      </Surface>
    </a>
  );
}
