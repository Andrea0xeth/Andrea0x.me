'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
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

type LogoItem = {
  name: string;
  logo: string;
  logoLight?: string;
  url: string;
  textOnly?: boolean;
};

interface LogoProps {
  item: LogoItem;
  size?: 'sm' | 'md';
}

function Logo({ item, size = 'md' }: LogoProps) {
  const heightClass = size === 'sm' ? 'h-12' : 'h-14';

  if (item.textOnly) {
    return (
      <span
        className={`inline-flex items-center ${heightClass} px-3 text-caption text-[color:var(--text-tertiary)] whitespace-nowrap logo-tooltip`}
        data-tooltip={item.name}
      >
        {item.name}
      </span>
    );
  }

  const baseImg =
    `${heightClass} w-auto max-w-[180px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-200`;

  return (
    <span className="logo-tooltip inline-block" data-tooltip={item.name}>
      {item.logoLight ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.logo}
            alt={item.name}
            className={`theme-dark-only ${baseImg}`}
            loading="lazy"
            decoding="async"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.logoLight}
            alt={item.name}
            className={`theme-light-only ${baseImg}`}
            loading="lazy"
            decoding="async"
          />
        </>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.logo}
          alt={item.name}
          className={baseImg}
          loading="lazy"
          decoding="async"
        />
      )}
    </span>
  );
}

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

  const tools: LogoItem[] = techStack.map((t) => ({
    name: t.name,
    logo: t.logo ?? '',
    logoLight: t.logoLight,
    url: t.url ?? '',
    textOnly: !t.logo,
  }));

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div {...headerMotion} className="text-center mb-12 md:mb-16">
        <h2 className="text-h2 text-[color:var(--text-primary)] mb-2">{title}</h2>
        <p className="text-caption text-[color:var(--text-tertiary)] max-w-xl mx-auto">
          {summary}
        </p>
      </motion.div>

      <div className="space-y-14 md:space-y-16">
        {/* Enterprise Clients — flat row, generous spacing */}
        <motion.div {...headerMotion}>
          <h3 className="text-tag text-[color:var(--text-tertiary)] text-center mb-8 font-semibold">
            {groupTitles[locale].enterprise}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
            {trustedBy.enterprise.map((item) =>
              item.url ? (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="inline-flex items-center"
                >
                  <Logo item={item} />
                </a>
              ) : (
                <span key={item.name} className="inline-flex items-center" aria-label={item.name}>
                  <Logo item={item} />
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* Public Sector & Institutions */}
        <motion.div {...headerMotion}>
          <h3 className="text-tag text-[color:var(--text-tertiary)] text-center mb-8 font-semibold">
            {groupTitles[locale].institutions}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
            {trustedBy.institutions.map((item) =>
              item.url ? (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="inline-flex items-center"
                >
                  <Logo item={item} />
                </a>
              ) : (
                <span key={item.name} className="inline-flex items-center" aria-label={item.name}>
                  <Logo item={item} />
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* Built With — infinite marquee, single row, dense */}
        <motion.div {...headerMotion}>
          <h3 className="text-tag text-[color:var(--text-tertiary)] text-center mb-8 font-semibold">
            {groupTitles[locale].tools}
          </h3>
          <div
            className="relative"
            style={{
              paddingTop: 32,
              paddingBottom: 12,
            }}
          >
            <div
              className="relative"
              style={{
                overflowX: 'hidden',
                overflowY: 'visible',
              }}
            >
              <div
                className="flex items-center gap-14 animate-marquee"
                style={{ width: 'max-content' }}
              >
                {[...tools, ...tools].map((item, idx) => {
                  const dup = idx >= tools.length;
                  return item.url ? (
                    <a
                      key={`${item.name}-${idx}`}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      aria-hidden={dup}
                      tabIndex={dup ? -1 : 0}
                      className="shrink-0 inline-flex items-center"
                    >
                      <Logo item={item} size="sm" />
                    </a>
                  ) : (
                    <span
                      key={`${item.name}-${idx}`}
                      aria-label={item.name}
                      aria-hidden={dup}
                      className="shrink-0 inline-flex items-center"
                    >
                      <Logo item={item} size="sm" />
                    </span>
                  );
                })}
              </div>
            </div>
            {/* Edge fade overlays — don't use mask-image (would clip tooltip) */}
            <div
              aria-hidden="true"
              className="absolute top-0 bottom-0 left-0 w-16 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to right, var(--bg-primary), transparent)',
              }}
            />
            <div
              aria-hidden="true"
              className="absolute top-0 bottom-0 right-0 w-16 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to left, var(--bg-primary), transparent)',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
