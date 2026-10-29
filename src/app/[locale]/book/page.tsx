import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { routing } from '@/i18n/routing';
import type { Locale } from '@/data/types';
import { CalEmbed } from '@/components/booking/cal-embed';
import { portfolioData } from '@/data/portfolio';
import { CAL_BOOKING_URL } from '@/lib/booking';

interface BookPageProps {
  params: Promise<{ locale: string }>;
}

const BASE = 'https://andrea0x.me';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: BookPageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === 'it' ? 'it' : 'en';
  const title =
    locale === 'it' ? 'Prenota una chiamata' : 'Book a call';
  const description =
    locale === 'it'
      ? 'Scegli uno slot e prenota una discovery call con Andrea Ritondale — Principal Engineer, IT Architect, AI Builder.'
      : 'Pick a slot and book a discovery call with Andrea Ritondale — Principal Engineer, IT Architect, AI Builder.';
  const url = `${BASE}/${locale}/book`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/book`,
      languages: {
        it: '/it/book',
        en: '/en/book',
      },
    },
    openGraph: {
      title: `${title} · Andrea Ritondale`,
      description,
      url,
      siteName: 'Andrea Ritondale',
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      type: 'website',
      images: [
        {
          url: `/${locale}/book/opengraph-image`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} · Andrea Ritondale`,
      description,
      creator: '@andrea0x_eth',
      images: [`/${locale}/book/opengraph-image`],
    },
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { locale: rawLocale } = await params;
  if (!hasLocale(routing.locales, rawLocale)) {
    notFound();
  }
  setRequestLocale(rawLocale);
  const locale = rawLocale as Locale;
  const t = await getTranslations({ locale, namespace: 'bookPage' });
  const { social } = portfolioData;

  return (
    <>
      <section className="wrap pb-8 pt-[clamp(7.5rem,15vh,9.5rem)]" aria-labelledby="page-title">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <div>
            <p className="kicker">
              <span className="dot" aria-hidden="true" />
              {t('kicker')}
            </p>
            <h1 id="page-title" className="page-title !text-[clamp(2.4rem,1rem+3.4vw,4.2rem)]">
              {t('title')}
            </h1>
            <p className="lead">{t('lead')}</p>
          </div>
          <ul className="pills" aria-label={t('kicker')}>
            <li>
              <span className="dot" aria-hidden="true" />
              {t('facts.remote')}
            </li>
            <li>{t('facts.tz')}</li>
          </ul>
        </div>
      </section>

      <section className="wrap pb-[clamp(4rem,9vw,6rem)]" aria-label={t('title')}>
        <div className="overflow-hidden rounded-[24px] border border-[color:var(--line-2)] bg-[#0f0e0d] shadow-[0_50px_100px_-40px_rgba(0,0,0,0.95)]">
          <CalEmbed title={t('title')} className="block min-h-[80dvh] md:min-h-[calc(100dvh-12rem)]" />
        </div>
        <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-[0.8rem] text-[color:var(--paper-3)]">
          <span>{t('fallback')}</span>
          <a className="inline-flex min-h-[44px] items-center underline decoration-[color:var(--line-2)] underline-offset-4 hover:text-[color:var(--paper)]" href={CAL_BOOKING_URL} target="_blank" rel="noopener noreferrer">
            {t('openDirect')}
          </a>
          <a className="inline-flex min-h-[44px] items-center underline decoration-[color:var(--line-2)] underline-offset-4 hover:text-[color:var(--paper)]" href={`mailto:${social.email}`}>
            {social.email}
          </a>
        </p>
      </section>
    </>
  );
}
