import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { portfolioData } from '@/data/portfolio';
import type { Locale } from '@/data/types';
import { PageHero } from '@/components/site/page-hero';
import { ClosingCta } from '@/components/site/closing-cta';
import { CasesRail } from '@/components/work/cases-rail';
import { PillarMatrix } from '@/components/work/pillar-matrix';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return {};
  }
  const typedLocale = locale as Locale;

  const title =
    typedLocale === 'it' ? 'Lavori selezionati' : 'Selected Work';
  const description =
    typedLocale === 'it'
      ? 'Una selezione di case study end-to-end: B2B SaaS pharma in produzione, DeFi multi-agent, dati pubblici italiani e infrastruttura DeFi vault.'
      : 'A selection of end-to-end case studies: production B2B pharma SaaS, multi-agent DeFi, Italian public-sector data products, and DeFi vault infrastructure.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${typedLocale}/work`,
      languages: { it: '/it/work', en: '/en/work' },
    },
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function WorkIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const typedLocale = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'work' });

  const items = portfolioData.caseStudies.filter((cs) => cs.featured);
  const total = String(items.length).padStart(2, '0');

  return (
    <>
      <PageHero
        kicker={
          <>
            <span className="dot" aria-hidden="true" />
            {t('kicker')} · {total}
          </>
        }
        title={t('title')}
        lead={t('lead')}
      />

      <section className="pb-[clamp(4rem,10vw,7rem)]" aria-label={t('kicker')}>
        <CasesRail caseStudies={items} locale={typedLocale} />
      </section>

      <section className="section wrap border-t border-[color:var(--line)]" aria-labelledby="matrix-title">
        <div className="section-head" data-reveal>
          <p className="kicker">{t('matrixKicker')}</p>
          <h2 id="matrix-title">{t('matrixTitle')}</h2>
          <p className="lead">{t('matrixLead')}</p>
        </div>
        <div data-reveal>
          <PillarMatrix locale={typedLocale} projectLabel={t('project')} />
        </div>
      </section>

      <ClosingCta locale={typedLocale} />
    </>
  );
}
