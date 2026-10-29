import { getLocale, getTranslations } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { PillLink } from '@/components/site/buttons';

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
  const tPage = await getTranslations({ locale, namespace: 'notFoundPage' });

  return (
    <section
      className="wrap grid min-h-[80svh] place-items-center pb-16 pt-[clamp(8rem,18vh,11rem)] text-center"
      aria-labelledby="nf-title"
    >
      <div className="grid justify-items-center">
        <p className="kicker">
          <span className="dot warm" aria-hidden="true" />
          {tPage('kicker')}
        </p>
        <p
          className="font-mono text-[clamp(5rem,3rem+10vw,10rem)] leading-none tracking-[-0.06em] text-[color:var(--paper-4)]"
          aria-hidden="true"
        >
          404
        </p>
        <h1 id="nf-title" className="mt-6 text-[clamp(2rem,1rem+2.6vw,3.2rem)]">
          {t('title')}
        </h1>
        <p className="lead !mx-auto">{t('body')}</p>
        <div className="cta-row justify-center">
          <PillLink href={`/${locale}`} native>
            {t('cta')}
          </PillLink>
          <PillLink href={`/${locale}/work`} variant="glass">
            {tPage('work')}
          </PillLink>
        </div>
      </div>
    </section>
  );
}
