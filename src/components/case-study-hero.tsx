import { ExternalLink } from 'lucide-react';
import type { CaseStudy, Locale, CaseStudyStatus } from '@/data/types';
import { TagPill } from '@/components/ui/tag-pill';

interface CaseStudyHeroProps {
  caseStudy: CaseStudy;
  locale: Locale;
}

const statusLabels: Record<CaseStudyStatus, { it: string; en: string }> = {
  production: { it: 'In produzione', en: 'In production' },
  'pre-launch': { it: 'Pre-lancio', en: 'Pre-launch' },
  completed: { it: 'Completato', en: 'Completed' },
  active: { it: 'Attivo', en: 'Active' },
};

const clientsLabel: Record<Locale, string> = {
  it: 'Clienti',
  en: 'Clients',
};

export function CaseStudyHero({ caseStudy, locale }: CaseStudyHeroProps) {
  const status = statusLabels[caseStudy.status][locale];

  return (
    <header
      className="py-10 md:py-16 border-b"
      style={{ borderColor: 'var(--border-primary)' }}
    >
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <TagPill variant="accent" size="md">
          {caseStudy.domain[locale]}
        </TagPill>
        <span
          className="text-tag"
          style={{ color: 'var(--text-tertiary)' }}
        >
          {status}
        </span>
      </div>

      <h1 className="text-display text-[color:var(--text-primary)] mb-4">
        {caseStudy.title}
      </h1>

      <p className="text-body text-[color:var(--text-secondary)]">
        {caseStudy.role[locale]} · {caseStudy.period}
      </p>

      {caseStudy.clients && caseStudy.clients.length > 0 && (
        <p className="text-caption mt-3">
          {clientsLabel[locale]}: {caseStudy.clients.join(', ')}
        </p>
      )}

      {caseStudy.link && (
        <a
          href={caseStudy.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-4 text-caption text-[color:var(--accent-primary)] hover:underline"
        >
          {locale === 'it' ? 'Visita il sito' : 'Visit website'}
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      )}
    </header>
  );
}
