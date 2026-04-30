'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, ExternalLink } from 'lucide-react';
import type { CaseStudy, Locale } from '@/data/types';
import { portfolioData } from '@/data/portfolio';
import { Surface } from '@/components/ui/surface';
import { TagPill } from '@/components/ui/tag-pill';
import { MetricNumber } from '@/components/ui/metric-number';
import { SectionHeader } from '@/components/ui/section-header';
import { motionPresets } from '@/lib/motion-presets';
import { useReducedMotion, getMotionProps } from '@/lib/use-reduced-motion';

interface FeaturedCaseStudiesProps {
  locale: Locale;
  max?: number;
}

function firstSentence(text: string): string {
  // Match up to the first period followed by a space or end of string.
  const match = text.match(/^[^.!?]*[.!?]/);
  return match ? match[0].trim() : text;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  locale: Locale;
  index: number;
  reduceMotion: boolean | null;
}

function CaseStudyCard({ caseStudy, locale, index, reduceMotion }: CaseStudyCardProps) {
  const t = useTranslations('caseStudy');
  const summary = firstSentence(caseStudy.architecture[locale]);
  const topMetrics = caseStudy.results.slice(0, 2);

  const fadeIn = getMotionProps(motionPresets.fadeInUpSlow, reduceMotion);
  const hover = getMotionProps(motionPresets.cardHover, reduceMotion);

  return (
    <motion.div
      {...fadeIn}
      transition={
        reduceMotion
          ? undefined
          : {
              ...motionPresets.fadeInUpSlow.transition,
              delay: index * 0.08,
            }
      }
      {...hover}
      className="h-full"
    >
      <Link
        href={`/${locale}/work/${caseStudy.slug}`}
        className="group block h-full"
      >
        <Surface
          variant="bordered"
          padding="md"
          className="h-full flex flex-col gap-4 transition-colors group-hover:border-[color:var(--accent-primary)]/40"
        >
          {caseStudy.image && (
            <div
              className="relative w-full aspect-[16/10] rounded-xl overflow-hidden"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-primary)',
              }}
            >
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
          )}

          <div className="flex items-center gap-2">
            <TagPill variant="accent" size="sm">
              {caseStudy.domain[locale]}
            </TagPill>
          </div>

          <div className="flex items-start justify-between gap-2">
            <h3 className="text-h3 text-[color:var(--text-primary)] group-hover:text-[color:var(--accent-primary)] transition-colors">
              {caseStudy.title}
            </h3>
            {caseStudy.link && (
              <a
                href={caseStudy.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Visit ${caseStudy.title}`}
                className="shrink-0 mt-1 text-[color:var(--text-tertiary)] hover:text-[color:var(--accent-primary)] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <p className="text-body text-[color:var(--text-secondary)] line-clamp-3">
            {summary}
          </p>

          {topMetrics.length > 0 && (
            <div className="grid grid-cols-2 gap-3 pt-2">
              {topMetrics.map((metric, idx) => (
                <MetricNumber
                  key={`${metric.label.en}-${idx}`}
                  value={metric.value}
                  label={metric.label[locale]}
                  size="md"
                />
              ))}
            </div>
          )}

          <div className="mt-auto pt-2">
            <span className="inline-flex items-center gap-2 text-tag text-[color:var(--accent-primary)]">
              {t('readMore')}
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </Surface>
      </Link>
    </motion.div>
  );
}

export function FeaturedCaseStudies({ locale, max }: FeaturedCaseStudiesProps) {
  const t = useTranslations('caseStudy');
  const reduceMotion = useReducedMotion();

  const featured = portfolioData.caseStudies.filter((cs) => cs.featured);
  const items = typeof max === 'number' ? featured.slice(0, max) : featured;

  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <SectionHeader
        number="03"
        title={t('featured.title')}
        align="left"
        className="mb-8 md:mb-10"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((cs, idx) => (
          <CaseStudyCard
            key={cs.slug}
            caseStudy={cs}
            locale={locale}
            index={idx}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>
    </section>
  );
}
