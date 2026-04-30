import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { portfolioData } from '@/data/portfolio';
import type { Locale } from '@/data/types';
import { CaseStudyHero } from '@/components/case-study-hero';
import { CaseStudySection } from '@/components/case-study-section';
import { CaseStudyDecisions } from '@/components/case-study-decisions';
import { CaseStudyResults } from '@/components/case-study-results';
import { CaseStudyTech } from '@/components/case-study-tech';
import { CaseStudyFooter } from '@/components/case-study-footer';

interface CaseStudyPageParams {
  locale: string;
  slug: string;
}

export function generateStaticParams() {
  const params: CaseStudyPageParams[] = [];
  for (const locale of routing.locales) {
    for (const cs of portfolioData.caseStudies) {
      params.push({ locale, slug: cs.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<CaseStudyPageParams>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const caseStudy = portfolioData.caseStudies.find((cs) => cs.slug === slug);
  if (!caseStudy) {
    return {};
  }

  const typedLocale = locale as Locale;
  const description = caseStudy.problem[typedLocale];
  const title = `${caseStudy.title} — ${caseStudy.domain[typedLocale]}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      images: caseStudy.image ? [{ url: caseStudy.image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<CaseStudyPageParams>;
}) {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const caseStudy = portfolioData.caseStudies.find((cs) => cs.slug === slug);
  if (!caseStudy) {
    notFound();
  }

  const typedLocale = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'caseStudy' });

  // prev/next navigation across all case studies (in array order).
  const all = portfolioData.caseStudies;
  const idx = all.findIndex((cs) => cs.slug === slug);
  const prev = idx > 0 ? all[idx - 1] : undefined;
  const next = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : undefined;

  return (
    <main className="container mx-auto px-4 max-w-5xl">
      <CaseStudyHero caseStudy={caseStudy} locale={typedLocale} />

      <CaseStudySection title={t('section.problem')} index="01">
        <p>{caseStudy.problem[typedLocale]}</p>
      </CaseStudySection>

      <CaseStudySection title={t('section.architecture')} index="02">
        <p>{caseStudy.architecture[typedLocale]}</p>
      </CaseStudySection>

      <section className="py-12 md:py-16">
        <header className="flex flex-col gap-3 items-start text-left mb-6">
          <span className="font-mono text-tag text-[color:var(--text-tertiary)]">
            03
          </span>
          <h2 className="text-h2 text-[color:var(--text-primary)]">
            {t('section.decisions')}
          </h2>
        </header>
        <CaseStudyDecisions
          decisions={caseStudy.decisions}
          locale={typedLocale}
        />
      </section>

      <section className="py-12 md:py-16">
        <header className="flex flex-col gap-3 items-start text-left mb-6">
          <span className="font-mono text-tag text-[color:var(--text-tertiary)]">
            04
          </span>
          <h2 className="text-h2 text-[color:var(--text-primary)]">
            {t('section.results')}
          </h2>
        </header>
        <CaseStudyResults
          results={caseStudy.results}
          locale={typedLocale}
        />
      </section>

      <section className="py-12 md:py-16">
        <header className="flex flex-col gap-3 items-start text-left mb-6">
          <span className="font-mono text-tag text-[color:var(--text-tertiary)]">
            05
          </span>
          <h2 className="text-h2 text-[color:var(--text-primary)]">
            {t('section.tech')}
          </h2>
        </header>
        <CaseStudyTech
          techStack={caseStudy.techStack}
          pillars={caseStudy.pillarsTouched}
        />
      </section>

      <CaseStudyFooter prev={prev} next={next} locale={typedLocale} />
    </main>
  );
}
