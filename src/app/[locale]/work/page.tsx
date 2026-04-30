import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import type { Locale } from '@/data/types';
import { FeaturedCaseStudies } from '@/components/featured-case-studies';

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
  const title =
    typedLocale === 'it' ? 'Lavori selezionati' : 'Selected Work';
  const description =
    typedLocale === 'it'
      ? 'Una selezione di case study end-to-end attraverso domini diversi.'
      : 'A selection of end-to-end case studies across multiple domains.';

  return (
    <main className="container mx-auto px-4 max-w-6xl">
      <header className="py-12 md:py-20">
        <h1 className="text-display text-[color:var(--text-primary)] mb-4">
          {title}
        </h1>
        <p className="text-body text-[color:var(--text-secondary)] max-w-2xl">
          {description}
        </p>
      </header>

      <FeaturedCaseStudies locale={typedLocale} />
    </main>
  );
}
