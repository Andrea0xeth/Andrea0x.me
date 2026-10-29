import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { portfolioData } from '@/data/portfolio';
import type { Locale } from '@/data/types';
import { PageHero } from '@/components/site/page-hero';
import { PillLink } from '@/components/site/buttons';
import { ClosingCta } from '@/components/site/closing-cta';

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale === 'it'
      ? 'Servizi Fractional CTO'
      : 'Fractional CTO & Technical Architect Services';
  const description =
    locale === 'it'
      ? 'Servizi di Fractional CTO, Technical Architect e AI Engineering per sistemi in produzione.'
      : 'Fractional CTO, Technical Architect and AI Engineering services for production systems.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/services`,
      languages: {
        it: '/it/services',
        en: '/en/services',
      },
    },
  };
}

const STEP_BADGES: Record<Locale, string[]> = {
  it: ['30 min', 'per iscritto', 'ogni settimana'],
  en: ['30 min', 'in writing', 'every week'],
};

/** "Discovery call — 30 minutes…" → ["Discovery call", "30 minutes…"] */
function splitStep(text: string): [string, string] {
  const [head, ...rest] = text.split(' — ');
  return rest.length ? [head, rest.join(' — ')] : ['', text];
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const l = locale as Locale;
  const t = await getTranslations({ locale, namespace: 'services' });
  const tPage = await getTranslations({ locale, namespace: 'servicesPage' });
  const { personal, services, social } = portfolioData;

  return (
    <>
      <PageHero
        kicker={
          <>
            <span className="dot" aria-hidden="true" />
            {tPage('kicker')}
          </>
        }
        title={t('heroTitle')}
        lead={personal.shortBio[l]}
      >
        <p className="mt-5 font-mono text-[0.8rem] text-[color:var(--paper-3)]">{t('heroSubtitle')}</p>
        <div className="cta-row">
          <PillLink href={`/${l}/book`}>{t('cta.book')}</PillLink>
          <PillLink href={`mailto:${social.email}`} variant="glass" native>
            {t('cta.email')}
          </PillLink>
        </div>
      </PageHero>

      <section className="section wrap border-t border-[color:var(--line)]" aria-labelledby="offer-title">
        <div className="section-head" data-reveal>
          <p className="kicker"><span className="num">01</span> · {tPage('offerKicker')}</p>
          <h2 id="offer-title">{tPage('offerTitle')}</h2>
          <p className="lead !text-[0.95rem] font-mono !text-[color:var(--paper-3)]">* {tPage('ratesNote')}</p>
        </div>
        <ul className="grid-cards cols-2" data-spot>
          {services.map((service, i) => (
            <li key={service.id} className="spot !gap-3 !p-7" data-reveal>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-[0.78rem] text-[color:var(--paper-3)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {service.rateRange ? (
                  <span className="tag warm">
                    <span className="sr-only">{tPage('rate')}: </span>
                    {service.rateRange}
                  </span>
                ) : null}
              </div>
              <h3 className="mt-2 !text-[clamp(1.4rem,1rem+0.9vw,1.8rem)]">{service.title[l]}</h3>
              <p className="!text-[0.98rem] !text-[color:var(--paper-2)]">{service.description[l]}</p>
              <ul className="bullets">
                {service.bulletPoints[l].map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="section wrap" aria-labelledby="process-title">
        <div className="section-head" data-reveal>
          <p className="kicker"><span className="num">02</span> · {tPage('processKicker')}</p>
          <h2 id="process-title">{t('howWeEngage.title')}</h2>
        </div>
        <ol className="grid gap-4 md:grid-cols-3">
          {(['step1', 'step2', 'step3'] as const).map((key, i) => {
            const [head, body] = splitStep(t(`howWeEngage.${key}`));
            return (
              <li key={key} className="card" data-reveal>
                <div className="flex items-center gap-3">
                  <span className="grid h-9 min-w-9 place-items-center rounded-full border border-[color:var(--line-2)] px-3 font-mono text-[0.8rem] text-[color:var(--paper-2)]">
                    {STEP_BADGES[l][i]}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-[color:var(--signal)] to-transparent opacity-60" aria-hidden="true" />
                  <span className="font-mono text-[0.78rem] text-[color:var(--signal)]">0{i + 1}</span>
                </div>
                {head ? <h3 className="mt-6 !text-[1.5rem] !tracking-[-0.035em]">{head}</h3> : null}
                <p className="mt-2 text-[color:var(--paper-2)]">{body}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <ClosingCta locale={l} />
    </>
  );
}
