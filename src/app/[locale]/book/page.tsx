import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { ArrowLeft } from 'lucide-react';

import { routing } from '@/i18n/routing';
import type { Locale } from '@/data/types';
import { portfolioData } from '@/data/portfolio';
import { CalEmbed } from '@/components/booking/cal-embed';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import { LanguageSwitcher } from '@/components/ui/language-switcher';

interface BookPageProps {
  params: Promise<{ locale: string }>;
}

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
      ? 'Scegli uno slot e prenota una discovery call con Andrea Ritondale.'
      : 'Pick a slot and book a discovery call with Andrea Ritondale.';

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
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { locale: rawLocale } = await params;
  if (!hasLocale(routing.locales, rawLocale)) {
    notFound();
  }
  setRequestLocale(rawLocale);
  const locale = rawLocale as Locale;
  const { personal } = portfolioData;

  const backLabel = locale === 'it' ? 'Torna al sito' : 'Back to site';
  const title =
    locale === 'it' ? 'Prenota una chiamata' : 'Book a call';

  return (
    <div className="flex min-h-screen flex-col bg-[color:var(--bg-primary)]">
      <header className="shrink-0 border-b border-[color:var(--border-primary)]">
        <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3 min-w-0">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-caption text-[color:var(--text-secondary)] transition-colors hover:bg-[color:var(--bg-tertiary)] hover:text-[color:var(--text-primary)]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{backLabel}</span>
            </Link>
            <div className="min-w-0 leading-tight">
              <p className="truncate text-body font-medium text-[color:var(--text-primary)]">
                {title}
              </p>
              <p className="truncate font-mono text-tag text-[color:var(--text-tertiary)]">
                {personal.name}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <main className="min-h-0 flex-1">
        <CalEmbed
          title={title}
          className="min-h-[calc(100dvh-3.5rem)]"
        />
      </main>
    </div>
  );
}
