import { getLocale, getTranslations } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { AnimatedButton } from '@/components/ui/animated-button';
import { routing } from '@/i18n/routing';

/**
 * Bilingual 404 page rendered when `notFound()` is called from any
 * route under `[locale]/...`. Note: Next.js does NOT pass `params`
 * to `not-found.tsx`, so we read the locale via next-intl's
 * `getLocale()` (which reads it from the request context).
 */
export default async function NotFound() {
  const detected = await getLocale();
  const locale = hasLocale(routing.locales, detected)
    ? detected
    : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: 'notFound' });

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="metric text-6xl text-[var(--text-tertiary)] mb-4">
          404
        </div>
        <h1 className="text-h1 mb-3 text-[var(--text-primary)]">
          {t('title')}
        </h1>
        <p className="text-body text-[var(--text-secondary)] mb-8">
          {t('body')}
        </p>
        <AnimatedButton href={`/${locale}`} variant="primary">
          {t('cta')}
        </AnimatedButton>
      </div>
    </main>
  );
}
