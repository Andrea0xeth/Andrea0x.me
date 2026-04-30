import { getTranslations } from 'next-intl/server';
import { AnimatedButton } from '@/components/ui/animated-button';
import { Surface } from '@/components/ui/surface';
import { TagPill } from '@/components/ui/tag-pill';
import { portfolioData } from '@/data/portfolio';
import type { Locale } from '@/data/types';

interface ServicesSectionProps {
  locale: Locale;
}

/**
 * ServicesSection — content of the /services page.
 *
 * Layout:
 *   1. Hero (title + subtitle)
 *   2. Brief intro paragraph (personal.shortBio)
 *   3. Services grid (portfolioData.services)
 *   4. "How we engage" 3-step process
 *   5. CTA (book / email)
 */
export async function ServicesSection({ locale }: ServicesSectionProps) {
  const t = await getTranslations({ locale, namespace: 'services' });
  const { personal, services, social } = portfolioData;

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      {/* 1. Hero */}
      <header className="max-w-4xl mb-10 md:mb-16">
        <h1 className="text-display text-[color:var(--text-primary)] mb-4">
          {t('heroTitle')}
        </h1>
        <p className="text-h3 text-[color:var(--text-secondary)]">
          {t('heroSubtitle')}
        </p>
      </header>

      {/* 2. Brief intro */}
      <section className="mb-14 md:mb-20">
        <p className="text-body text-[color:var(--text-secondary)] max-w-3xl">
          {personal.shortBio[locale]}
        </p>
      </section>

      {/* 3. Services grid */}
      <section className="mb-14 md:mb-20">
        <div className="grid gap-4 md:gap-5 md:grid-cols-2">
          {services.map((service) => (
            <Surface
              key={service.id}
              variant="bordered"
              padding="md"
              as="article"
              className="flex flex-col gap-4"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h2 className="text-h3 text-[color:var(--text-primary)]">
                  {service.title[locale]}
                </h2>
                {service.rateRange && (
                  <TagPill variant="accent" size="md">
                    {service.rateRange}
                  </TagPill>
                )}
              </div>

              <p className="text-body text-[color:var(--text-secondary)]">
                {service.description[locale]}
              </p>

              <ul className="flex flex-col gap-2">
                {service.bulletPoints[locale].map((point) => (
                  <li
                    key={point}
                    className="text-body text-[color:var(--text-secondary)] flex gap-2"
                  >
                    <span
                      aria-hidden="true"
                      className="text-[color:var(--accent-primary)] flex-shrink-0"
                    >
                      —
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Surface>
          ))}
        </div>
      </section>

      {/* 4. How we engage */}
      <section className="mb-14 md:mb-20">
        <h2 className="text-h2 text-[color:var(--text-primary)] mb-8">
          {t('howWeEngage.title')}
        </h2>
        <ol className="grid gap-6 md:gap-8 md:grid-cols-3">
          {(['step1', 'step2', 'step3'] as const).map((stepKey, idx) => (
            <li key={stepKey} className="flex flex-col gap-3">
              <span className="metric text-[32px] leading-[36px] text-[color:var(--accent-primary)]">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <p className="text-body text-[color:var(--text-secondary)]">
                {t(`howWeEngage.${stepKey}`)}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* 5. CTA */}
      <section className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <AnimatedButton href={social.calendly} variant="primary" size="md">
          {t('cta.book')}
        </AnimatedButton>
        <AnimatedButton
          href={`mailto:${social.email}`}
          variant="secondary"
          size="md"
        >
          {t('cta.email')}
        </AnimatedButton>
      </section>
    </div>
  );
}
