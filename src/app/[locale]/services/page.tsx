import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { ServicesSection } from '@/components/services-section';
import type { Locale } from '@/data/types';

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

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return <ServicesSection locale={locale as Locale} />;
}
