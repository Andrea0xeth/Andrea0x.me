'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { CaseStudy, Locale } from '@/data/types';

interface CaseStudyFooterProps {
  prev?: CaseStudy;
  next?: CaseStudy;
  locale: Locale;
}

export function CaseStudyFooter({ prev, next, locale }: CaseStudyFooterProps) {
  const t = useTranslations('caseStudy');

  return (
    <footer
      className="py-10 md:py-14 border-t"
      style={{ borderColor: 'var(--border-primary)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div className="flex flex-col items-start">
          {prev ? (
            <Link
              href={`/${locale}/work/${prev.slug}`}
              className="group inline-flex flex-col gap-1 transition-colors"
            >
              <span
                className="inline-flex items-center gap-2 text-tag"
                style={{ color: 'var(--text-tertiary)' }}
              >
                <ArrowLeft
                  className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5"
                  aria-hidden="true"
                />
                {t('previous')}
              </span>
              <span className="text-h3 text-[color:var(--text-primary)] group-hover:text-[color:var(--accent-primary)] transition-colors">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span aria-hidden="true" />
          )}
        </div>

        <div className="flex flex-col items-start md:items-end">
          {next ? (
            <Link
              href={`/${locale}/work/${next.slug}`}
              className="group inline-flex flex-col gap-1 md:items-end transition-colors"
            >
              <span
                className="inline-flex items-center gap-2 text-tag"
                style={{ color: 'var(--text-tertiary)' }}
              >
                {t('next')}
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
              <span className="text-h3 text-[color:var(--text-primary)] group-hover:text-[color:var(--accent-primary)] transition-colors md:text-right">
                {next.title}
              </span>
            </Link>
          ) : (
            <span aria-hidden="true" />
          )}
        </div>
      </div>

      <div className="mt-10 pt-6 border-t" style={{ borderColor: 'var(--border-primary)' }}>
        <Link
          href={`/${locale}/work`}
          className="inline-flex items-center gap-2 text-caption hover:text-[color:var(--accent-primary)] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          {t('allCaseStudies')}
        </Link>
      </div>
    </footer>
  );
}
