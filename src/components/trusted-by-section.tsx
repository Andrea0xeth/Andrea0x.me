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
  logoLight?: string;
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
    logoLight: t.logoLight,
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

      <div className="space-y-10">
        {groups.map((g) => {
          const items = itemsByGroup[g.key];
          const groupLabel = groupTitles[locale][g.key];
          const isTools = g.key === 'tools';

          return (
            <div key={g.key}>
              <h3 className="text-tag text-[color:var(--text-secondary)] mb-5 text-center font-semibold">
                {groupLabel}
              </h3>

              {isTools ? (
                // Infinite-scroll marquee for the (many) techStack tools.
                // Items duplicated to enable seamless -50% translation.
                <div
                  className="relative"
                  style={{
                    overflowX: 'hidden',
                    overflowY: 'visible',
                    paddingTop: 28, // room for tooltip popup
                    paddingBottom: 8,
                    maskImage:
                      'linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)',
                    WebkitMaskImage:
                      'linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)',
                  }}
                >
                  <div
                    className="flex items-center gap-10 animate-marquee"
                    style={{ width: 'max-content' }}
                  >
                    {[...items, ...items].map((item, idx) => {
                      const cell = item.textOnly ? (
                        <span
                          className="inline-flex items-center h-12 px-3 rounded-md border border-[color:var(--border-primary)] text-caption text-[color:var(--text-tertiary)] whitespace-nowrap logo-tooltip"
                          data-tooltip={item.name}
                        >
                          {item.name}
                        </span>
                      ) : (
                        <div
                          className="relative h-12 w-28 shrink-0 logo-tile logo-tooltip flex items-center justify-center px-3 py-2"
                          data-tooltip={item.name}
                        >
                          {item.logoLight ? (
                            <>
                              <Image
                                src={item.logo}
                                alt={item.name}
                                fill
                                className="object-contain theme-dark-only"
                                sizes="96px"
                              />
                              <Image
                                src={item.logoLight}
                                alt={item.name}
                                fill
                                className="object-contain theme-light-only"
                                sizes="96px"
                              />
                            </>
                          ) : (
                            <Image
                              src={item.logo}
                              alt={item.name}
                              fill
                              className="object-contain"
                              sizes="96px"
                            />
                          )}
                        </div>
                      );

                      return item.url ? (
                        <a
                          key={`${item.name}-${idx}`}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={item.name}
                          aria-hidden={idx >= items.length}
                          className="shrink-0 hover:opacity-80 transition-opacity"
                          tabIndex={idx >= items.length ? -1 : 0}
                        >
                          {cell}
                        </a>
                      ) : (
                        <span
                          key={`${item.name}-${idx}`}
                          aria-label={item.name}
                          aria-hidden={idx >= items.length}
                          className="shrink-0"
                        >
                          {cell}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
                  {items.map((item) => {
                    const inner = item.textOnly ? (
                      <span
                        className="inline-flex items-center px-3 py-2 rounded-md border border-[color:var(--border-primary)] bg-transparent text-caption text-[color:var(--text-secondary)] hover:opacity-90 transition-opacity logo-tooltip"
                        data-tooltip={item.name}
                      >
                        {item.name}
                      </span>
                    ) : (
                      <div
                        className="relative h-14 w-32 hover:scale-[1.04] transition-transform duration-300 logo-tile logo-tooltip flex items-center justify-center px-4 py-2.5"
                        data-tooltip={item.name}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={item.logo}
                            alt={item.name}
                            fill
                            className="object-contain"
                            sizes="128px"
                          />
                        </div>
                      </div>
                    );

                    return item.url ? (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.name}
                        className="block"
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
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
