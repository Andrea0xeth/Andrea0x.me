import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { portfolioData } from '@/data/portfolio';
import type { Locale } from '@/data/types';
import { PageHero } from '@/components/site/page-hero';
import { ClosingCta } from '@/components/site/closing-cta';
import { ArrowRightIcon } from '@/components/site/icons';
import { CaseStudyPreview } from '@/components/work/case-study-preview';
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

/** First sentence, skipping dotted names like "Mandate.Finance". */
function firstSentence(text: string, max = 240): string {
  const m = text.match(/^.+?[.!?](?=\s|$)/);
  const sentence = m ? m[0].trim() : text;
  return sentence.length > max ? `${sentence.slice(0, max - 1).trimEnd()}…` : sentence;
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
  const tCase = await getTranslations({ locale, namespace: 'caseStudy' });
  const tPage = await getTranslations({ locale, namespace: 'caseStudyPage' });

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

      <section className="wrap pb-[clamp(4rem,10vw,7rem)]" aria-label={t('kicker')}>
        <ol className="grid grid-cols-1 gap-[clamp(4rem,9vw,7rem)]">
          {items.map((cs, idx) => {
            const flip = idx % 2 === 1;
            return (
              <li key={cs.slug} data-reveal>
                <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  <Link
                    href={`/${typedLocale}/work/${cs.slug}`}
                    className={`group block ${flip ? 'lg:order-2' : ''}`}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <CaseStudyPreview caseStudy={cs} alt={`${tPage('preview')} ${cs.title}`} />
                  </Link>
                  <div>
                    <p className="kicker !mb-3">
                      <span className="num">
                        {String(idx + 1).padStart(2, '0')} / {total}
                      </span>
                      · {tPage(`status.${cs.status}`)}
                    </p>
                    <p className="font-mono text-[0.78rem] text-[color:var(--paper-3)]">
                      {cs.domain[typedLocale]}
                    </p>
                    <h2 className="mt-3 text-[clamp(2rem,1rem+2.4vw,3rem)]">
                      <Link href={`/${typedLocale}/work/${cs.slug}`} className="hover:text-[color:var(--signal)]">
                        {cs.title}
                      </Link>
                    </h2>
                    <p className="mt-2 text-[0.95rem] text-[color:var(--paper-3)]">
                      {cs.role[typedLocale]} · <span className="font-mono">{cs.period}</span>
                    </p>
                    <p className="mt-4 max-w-[36rem] text-[color:var(--paper-2)]">
                      {firstSentence(cs.problem[typedLocale])}
                    </p>
                    <ul className="metrics">
                      {cs.results.slice(0, 3).map((r) => (
                        <li key={r.label.en}>
                          <b>{r.value}</b>
                          {r.label[typedLocale]}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/${typedLocale}/work/${cs.slug}`} className="read mt-4">
                      {tCase('readMore')}
                      <ArrowRightIcon />
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
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
