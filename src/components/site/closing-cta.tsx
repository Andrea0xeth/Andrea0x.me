import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/data/types';
import { portfolioData } from '@/data/portfolio';
import { PillLink } from '@/components/site/buttons';

interface ClosingCtaProps {
  locale: Locale;
  title?: string;
  body?: string;
  kicker?: string;
}

export async function ClosingCta({ locale, title, body, kicker }: ClosingCtaProps) {
  const t = await getTranslations({ locale, namespace: 'shell.closing' });
  const { social } = portfolioData;

  return (
    <section className="closing" aria-labelledby="closing-title">
      <div className="wrap" data-reveal>
        <p className="kicker">
          <span className="dot" aria-hidden="true" />
          {kicker ?? t('kicker')}
        </p>
        <h2 id="closing-title">{title ?? t('title')}</h2>
        <p className="lead">{body ?? t('body')}</p>
        <div className="cta-row">
          <PillLink href={`/${locale}/book`}>{t('book')}</PillLink>
          <PillLink href={`/api/cv?lang=${locale}`} variant="glass" icon="download" download>
            {t('cv')}
          </PillLink>
          <PillLink href={`mailto:${social.email}`} variant="glass" native>
            Email
          </PillLink>
        </div>
        <p className="mt-6 font-mono text-[0.78rem] text-[color:var(--paper-3)]">
          {social.email} · @andrea0x_eth
        </p>
      </div>
    </section>
  );
}
