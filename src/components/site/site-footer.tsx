import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/data/types';
import { SocialIcons } from '@/components/site/socials';

export async function SiteFooter({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'shell' });
  const year = new Date().getFullYear();

  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <p>© {year} Andrea Ritondale · andrea0x.eth</p>
        <nav aria-label={t('pages')}>
          <a href={`/${locale}`}>Home</a>
          <Link href={`/${locale}/work`}>{t('nav.caseStudies')}</Link>
          <Link href={`/${locale}/services`}>{t('nav.services')}</Link>
          <Link href={`/${locale}/about`}>{t('nav.about')}</Link>
          <Link href={`/${locale}/book`}>{t('nav.bookFooter')}</Link>
        </nav>
        <SocialIcons label={t('social')} />
      </div>
    </footer>
  );
}
