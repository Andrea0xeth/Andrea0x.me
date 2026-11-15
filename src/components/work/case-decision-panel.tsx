import { getTranslations } from 'next-intl/server';
import type { CaseStudy, Locale } from '@/data/types';

interface CaseDecisionPanelProps {
  caseStudy: CaseStudy;
  locale: Locale;
}

/** Compact Decision-at-a-glance aside. Facts only from case study fields. */
export async function CaseDecisionPanel({ caseStudy, locale }: CaseDecisionPanelProps) {
  const t = await getTranslations({ locale, namespace: 'caseStudyPage' });
  const tCs = await getTranslations({ locale, namespace: 'caseStudy' });

  const stack = caseStudy.techStack.slice(0, 4).join(' · ');
  const key = caseStudy.results[0];
  const rows: { label: string; value: string }[] = [
    { label: tCs('role'), value: caseStudy.role[locale] },
    ...(caseStudy.clients?.length
      ? [{ label: tCs('clients'), value: caseStudy.clients.join(' · ') }]
      : []),
    { label: t('glanceStack'), value: stack },
    ...(key
      ? [{ label: t('glanceKeyNumber'), value: `${key.value} ${key.label[locale]}` }]
      : []),
  ];

  return (
    <aside className="case-glance" aria-label={t('decisionGlance')}>
      <p className="case-glance-label">{t('decisionGlance')}</p>
      <dl className="glance">
        {rows.map((row) => (
          <div key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
