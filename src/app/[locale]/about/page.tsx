import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { AboutSection } from '@/components/about-section';
import type { Locale } from '@/data/types';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'it' ? 'Chi sono' : 'About — Andrea Ritondale';
  const description =
    locale === 'it'
      ? 'Andrea Ritondale (Andrea0x.eth) — Principal Engineer, IT Architect e AI Builder. Profilo, formazione e lingue.'
      : 'Andrea Ritondale (Andrea0x.eth) — Principal Engineer, IT Architect and AI Builder. Bio, education and languages.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        it: '/it/about',
        en: '/en/about',
      },
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return <AboutSection locale={locale as Locale} />;
}
