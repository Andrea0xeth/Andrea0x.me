import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { AnimatedButton } from '@/components/ui/animated-button';
import { Surface } from '@/components/ui/surface';
import { portfolioData } from '@/data/portfolio';
import type { Locale } from '@/data/types';

interface AboutSectionProps {
  locale: Locale;
}

/**
 * AboutSection — content of the /about page.
 *
 * Layout:
 *   1. Header (photo + name + dual identity + tagline)
 *   2. Long bio (split on \n\n)
 *   3. Quick facts (nationality, work mode, etc.)
 *   4. Languages list
 *   5. Education timeline
 *   6. CTA (schedule / cv / email)
 */
export async function AboutSection({ locale }: AboutSectionProps) {
  const t = await getTranslations({ locale, namespace: 'about' });
  const tSkills = await getTranslations({ locale, namespace: 'skills' });
  const { personal, social, taglines, languages, education } = portfolioData;

  const longBioParagraphs = personal.longBio[locale]
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const proficiencyLabel = (level: number): string => {
    if (level >= 100) return tSkills('proficiency.native');
    if (level >= 80) return tSkills('proficiency.fluent');
    if (level >= 50) return tSkills('proficiency.professional');
    if (level >= 25) return tSkills('proficiency.basic');
    return tSkills('proficiency.beginner');
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      {/* 1. Header */}
      <header className="grid gap-8 md:gap-12 md:grid-cols-[auto_1fr] md:items-center mb-14 md:mb-20">
        <div className="flex justify-center md:justify-start">
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-[color:var(--border-primary)]">
            <Image
              src={personal.avatarReal}
              alt={personal.name}
              fill
              sizes="(max-width: 768px) 160px, 224px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-display text-[color:var(--text-primary)]">
            {personal.name}
          </h1>
          <p
            className="text-h3 font-mono"
            style={{ color: 'var(--text-tertiary)' }}
          >
            {personal.handle}
          </p>
          <p className="text-h3 text-[color:var(--text-secondary)] max-w-2xl">
            {taglines.primary[locale]}
          </p>
        </div>
      </header>

      {/* 2. Long bio */}
      <section className="mb-14 md:mb-20">
        {longBioParagraphs.map((paragraph, idx) => (
          <p
            key={idx}
            className="text-body text-[color:var(--text-secondary)] mb-4 max-w-prose"
          >
            {paragraph}
          </p>
        ))}
      </section>

      {/* 3. Quick facts */}
      <section className="mb-14 md:mb-20">
        <h2 className="text-h2 text-[color:var(--text-primary)] mb-6">
          {t('quickFacts')}
        </h2>
        <Surface variant="bordered" padding="md">
          <dl className="grid gap-4 md:grid-cols-3">
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

      {/* 4. Languages */}
      <section className="mb-14 md:mb-20">
        <h2 className="text-h2 text-[color:var(--text-primary)] mb-6">
          {t('languages')}
        </h2>
        <ul className="flex flex-col gap-2 max-w-md">
          {languages.map((lang) => (
            <li
              key={lang.name}
              className="flex items-baseline justify-between gap-4"
            >
              <span className="text-body text-[color:var(--text-primary)]">
                {lang.name}
              </span>
              <span className="text-tag text-[color:var(--text-tertiary)] uppercase tracking-wide">
                {proficiencyLabel(lang.level)}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. Education */}
      <section className="mb-14 md:mb-20">
        <h2 className="text-h2 text-[color:var(--text-primary)] mb-6">
          {t('education')}
        </h2>
        <ol className="flex flex-col gap-5 max-w-3xl">
          {education.map((edu) => (
            <li
              key={`${edu.title.en}-${edu.period}`}
              className="grid gap-2 md:gap-3 md:grid-cols-[160px_1fr] border-b pb-5 last:border-b-0 last:pb-0"
              style={{ borderColor: 'var(--border-primary)' }}
            >
              <span className="text-caption font-mono text-[color:var(--text-tertiary)]">
                {edu.period}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-h3 text-[color:var(--text-primary)]">
                  {edu.link ? (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[color:var(--accent-primary)] transition-colors"
                    >
                      {edu.title[locale]}
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

      {/* 6. CTA */}
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
