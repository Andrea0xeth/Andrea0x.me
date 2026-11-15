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
import { ServicesRail } from '@/components/work/services-rail';

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

/** "Discovery call: 30 minutes…" → ["Discovery call", "30 minutes…"] */
function splitStep(text: string): [string, string] {
  const idx = text.indexOf(': ');
  if (idx === -1) return ['', text];
  return [text.slice(0, idx), text.slice(idx + 2)];
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
  const total = String(services.length).padStart(2, '0');

  return (
    <>
      <PageHero
        kicker={
          <>
            <span className="dot" aria-hidden="true" />
            {tPage('kicker')} · {total}
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

      <section className="pb-[clamp(3rem,8vw,5rem)]" aria-labelledby="offer-title">
        <div className="section-head wrap" data-reveal>
          <p className="kicker">
            <span className="num">01</span> · {tPage('offerKicker')}
          </p>
          <h2 id="offer-title">{tPage('offerTitle')}</h2>
          <p className="lead !text-[0.95rem] font-mono !text-[color:var(--paper-3)]">
            * {tPage('ratesNote')}
          </p>
        </div>
        <ServicesRail services={services} locale={l} />
      </section>

      <section className="section wrap border-t border-[color:var(--line)]" aria-labelledby="process-title">
        <div className="section-head" data-reveal>
          <p className="kicker">
            <span className="num">02</span> · {tPage('processKicker')}
          </p>
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
                  <span
                    className="h-px flex-1 bg-gradient-to-r from-[color:var(--signal)] to-transparent opacity-60"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[0.78rem] text-[color:var(--signal)]">0{i + 1}</span>
                </div>
                {head ? (
                  <h3 className="mt-6 !text-[1.5rem] !tracking-[-0.035em]">{head}</h3>
                ) : null}
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
