import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

import { routing } from '@/i18n/routing';
import type { Locale } from '@/data/types';
import { CalEmbed } from '@/components/booking/cal-embed';
import { SiteHeader } from '@/components/site-header';

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

  const title =
    locale === 'it' ? 'Prenota una chiamata' : 'Book a call';

  return (
    <div className="min-h-screen pb-24 md:pb-0 bg-[color:var(--bg-primary)]">
      <SiteHeader locale={locale} showBookCta={false} />

      <main className="relative md:pt-20">
        <div className="container mx-auto px-4 pt-6 pb-2 md:pt-2">
          <h1 className="text-h2 text-[color:var(--text-primary)] mb-1">
            {title}
          </h1>
          <p className="text-body text-[color:var(--text-secondary)] mb-4 max-w-2xl">
            {locale === 'it'
              ? 'Scegli durata e orario — conferma in pochi click.'
              : 'Pick a duration and time — confirm in a few clicks.'}
          </p>
        </div>
        <div className="container mx-auto px-4 pb-8">
          <div className="overflow-hidden rounded-2xl border border-[color:var(--border-primary)] bg-[color:var(--bg-secondary)] min-h-[70dvh] md:min-h-[calc(100dvh-11rem)]">
            <CalEmbed title={title} className="min-h-[70dvh] md:min-h-[calc(100dvh-11rem)]" />
          </div>
        </div>
      </main>
    </div>
  );
}
