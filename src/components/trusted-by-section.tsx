'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { SectionHeader } from '@/components/ui/section-header';
import { portfolioData } from '@/data/portfolio';
import { motionPresets } from '@/lib/motion-presets';
import { getMotionProps, useReducedMotion } from '@/lib/use-reduced-motion';

const groupTitles = {
  en: {
    enterprise: 'Enterprise Clients',
    institutions: 'Public Sector & Institutions',
    tools: 'Built With',
  },
  it: {
    enterprise: 'Clienti Enterprise',
    institutions: 'Settore Pubblico & Istituzioni',
    tools: 'Tecnologie',
  },
} as const;

const groups = [
  { key: 'enterprise' as const },
  { key: 'institutions' as const },
  { key: 'tools' as const },
];

type LogoItem = {
  name: string;
  logo: string;
  url: string;
  textOnly?: boolean;
};

export function TrustedBySection() {
  const { trustedBy, techStack } = portfolioData;
  const locale = useLocale() as 'it' | 'en';
  const prefersReduced = useReducedMotion();
  const headerMotion = getMotionProps(motionPresets.fadeInUpSlow, prefersReduced);

  const title = locale === 'it' ? 'Lavoro con' : 'Trusted by';
  const summary =
    locale === 'it'
      ? 'Clienti, istituzioni e strumenti selezionati tra pharma, settore pubblico e Web3.'
      : 'Selected clients, institutions, and tools across pharma, public sector and Web3.';

  // The "tools" group is derived from the canonical techStack list — every
  // tool that has a logo appears here as a logo, the rest as text chips.
  const toolsFromTechStack: LogoItem[] = techStack.map((t) => ({
    name: t.name,
    logo: t.logo ?? '',
    url: t.url ?? '',
    textOnly: !t.logo,
  }));

  const itemsByGroup: Record<typeof groups[number]['key'], LogoItem[]> = {
    enterprise: trustedBy.enterprise,
    institutions: trustedBy.institutions,
    tools: toolsFromTechStack,
  };

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <motion.div {...headerMotion} className="mb-8 md:mb-10">
        <SectionHeader title={title} summary={summary} align="center" className="mx-auto" />
      </motion.div>

      <div className="space-y-8">
        {groups.map((g) => {
          const items = itemsByGroup[g.key];
          const groupLabel = groupTitles[locale][g.key];
          return (
            <div key={g.key}>
              <h3 className="text-tag text-[color:var(--text-tertiary)] mb-4 text-center">
                {groupLabel}
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {items.map((item) => {
                  const inner = item.textOnly ? (
                    <span
                      className="inline-block px-3 py-2 rounded-md border border-[color:var(--border-primary)] bg-transparent text-caption text-[color:var(--text-secondary)] hover:opacity-90 transition-opacity duration-300"
                      title={item.name}
                    >
                      {item.name}
                    </span>
                  ) : (
                    <div
                      className="relative h-10 w-28 hover:scale-[1.04] transition-transform duration-300"
                      title={item.name}
                    >
                      <Image
                        src={item.logo}
                        alt={item.name}
                        fill
                        className="object-contain"
                        sizes="112px"
                      />
                    </div>
                  );

                  return item.url ? (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={item.name} aria-label={item.name}>
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
