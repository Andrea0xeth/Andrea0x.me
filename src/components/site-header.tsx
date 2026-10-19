import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import { portfolioData } from '@/data/portfolio';
import type { Locale } from '@/data/types';
import { BookCallButton } from '@/components/booking/book-call-button';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';

const glassStyle = {
  backgroundColor: 'color-mix(in srgb, var(--bg-secondary) 70%, transparent)',
  borderColor: 'color-mix(in srgb, var(--border-primary) 70%, transparent)',
  backdropFilter: 'saturate(180%) blur(20px)',
  WebkitBackdropFilter: 'saturate(180%) blur(20px)',
  boxShadow:
    '0 1px 0 0 color-mix(in srgb, var(--text-primary) 6%, transparent) inset, 0 12px 32px -16px rgba(0,0,0,0.45)',
} as const;

interface SiteHeaderProps {
  locale: Locale;
  /** Hide book CTA when already on /book */
  showBookCta?: boolean;
}

export async function SiteHeader({ locale, showBookCta = true }: SiteHeaderProps) {
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const { personal } = portfolioData;

  const nav = [
    { href: `/${locale}/work`, label: locale === 'it' ? 'Lavori' : 'Work' },
    { href: `/${locale}/about`, label: locale === 'it' ? 'Chi sono' : 'About' },
    { href: `/${locale}/services`, label: locale === 'it' ? 'Servizi' : 'Services' },
  ];

  return (
    <>
      {/* Desktop floating liquid-glass header */}
      <header className="hidden md:block fixed top-3 left-0 right-0 z-50 px-4 pointer-events-none">
        <div
          className="container mx-auto pointer-events-auto rounded-2xl border shadow-lg"
          style={glassStyle}
        >
          <div className="px-5 py-2.5 flex items-center justify-between gap-4">
            <Link href={`/${locale}`} className="flex flex-col leading-tight min-w-0">
              <span className="text-body font-medium text-[color:var(--text-primary)]">
                {personal.name}
              </span>
              <span className="font-mono text-tag text-[color:var(--text-tertiary)]">
                · {personal.handle}
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 rounded-full text-caption text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-[color:var(--bg-tertiary)]/60 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <ThemeSwitcher />
              {showBookCta ? (
                <BookCallButton
                  variant="primary"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{tNav('bookCall')}</span>
                </BookCallButton>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile floating liquid-glass bottom bar */}
      <div className="fixed bottom-3 left-3 right-3 md:hidden z-50">
        <div
          className="px-4 py-2.5 rounded-2xl border shadow-lg"
          style={{
            ...glassStyle,
            backgroundColor: 'color-mix(in srgb, var(--bg-secondary) 75%, transparent)',
            boxShadow:
              '0 1px 0 0 color-mix(in srgb, var(--text-primary) 6%, transparent) inset, 0 12px 32px -16px rgba(0,0,0,0.5)',
          }}
        >
          <div className="flex items-center justify-between gap-3">
            <Link
              href={`/${locale}`}
              className="min-w-0 truncate text-caption font-medium text-[color:var(--text-primary)]"
            >
              {personal.handle}
            </Link>
            <div className="flex items-center gap-3 shrink-0">
              <LanguageSwitcher />
              <ThemeSwitcher />
              {showBookCta ? (
                <BookCallButton
                  variant="primary"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{tNav('bookCall')}</span>
                </BookCallButton>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
