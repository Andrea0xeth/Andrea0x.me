'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import type { MouseEvent } from 'react';
import { routing, type Locale } from '@/i18n/routing';

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/** Swap the locale segment of a pathname, keeping the rest of the route. */
export function localizedPath(pathname: string, next: Locale): string {
  const segments = pathname.split('/');
  if ((routing.locales as readonly string[]).includes(segments[1] ?? '')) {
    segments[1] = next;
  } else {
    segments.splice(1, 0, next);
  }
  return segments.join('/') || `/${next}`;
}

export function SiteNav() {
  const locale = useLocale() as Locale;
  const t = useTranslations('shell');
  const pathname = usePathname() ?? `/${locale}`;
  const other: Locale = locale === 'it' ? 'en' : 'it';
  const otherHref = localizedPath(pathname, other);

  // The home is a static landing served via a middleware rewrite, so links
  // into it must be full navigations (plain <a>), not client transitions.
  const sections = [
    { href: `/${locale}#work`, label: t('nav.work') },
    { href: `/${locale}#method`, label: t('nav.method') },
    { href: `/${locale}#domains`, label: t('nav.domains') },
  ];
  const pages = [
    { href: `/${locale}/services`, label: t('nav.services') },
    { href: `/${locale}/about`, label: t('nav.about') },
  ];

  const switchLocale = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.cookie = `NEXT_LOCALE=${other}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
    window.location.assign(`${otherHref}${window.location.search}${window.location.hash}`);
  };

  const isBook = pathname.startsWith(`/${locale}/book`);

  const langLinks = (
    <span className="lang" aria-label={t('language')} role="group">
      {locale === 'it' ? (
        <>
          <b aria-current="true">IT</b>&nbsp;/&nbsp;
          <a href={otherHref} hrefLang="en" lang="en" onClick={switchLocale} aria-label={t('switchTo')}>
            EN
          </a>
        </>
      ) : (
        <>
          <a href={otherHref} hrefLang="it" lang="it" onClick={switchLocale} aria-label={t('switchTo')}>
            IT
          </a>
          &nbsp;/&nbsp;<b aria-current="true">EN</b>
        </>
      )}
    </span>
  );

  return (
    <header className="nav" data-nav>
      <a className="brand" href={`/${locale}`} aria-label={t('homeLabel')}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/me.jpg" alt="" width={29} height={29} />
        <span>
          Andrea Ritondale <small>· andrea0x.eth</small>
        </span>
      </a>
      <nav className="nav-links" aria-label={t('sections')}>
        {sections.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        {pages.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname.startsWith(item.href) ? 'page' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="nav-end">
        {langLinks}
        <Link
          className="btn btn-ring"
          href={`/${locale}/book`}
          aria-current={isBook ? 'page' : undefined}
        >
          <span>
            {t('nav.book')}
            <span className="nav-long">&nbsp;{t('nav.bookLong')}</span>
          </span>
        </Link>
      </div>
    </header>
  );
}
