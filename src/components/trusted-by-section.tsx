'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolio';

const groups = [
  { key: 'enterprise',   title: 'Enterprise Clients' },
  { key: 'institutions', title: 'Public Sector & Institutions' },
  { key: 'tools',        title: 'Built With' },
] as const;

type LogoItem = {
  name: string;
  logo: string;
  url: string;
  textOnly?: boolean;
};

export function TrustedBySection() {
  const { trustedBy } = portfolioData;

  return (
    <section className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <h2 className="text-xl lg:text-2xl font-bold text-[var(--text-primary)] mb-2">
          Trusted <span className="text-[var(--accent-primary)]">by</span>
        </h2>
        <p className="text-xs text-[var(--text-tertiary)] max-w-xl mx-auto">
          Selected clients, institutions, and tools across pharma, public sector and Web3.
        </p>
      </motion.div>

      <div className="space-y-6">
        {groups.map((g) => {
          const items = trustedBy[g.key] as LogoItem[];
          return (
            <div key={g.key}>
              <h3 className="text-xs uppercase tracking-wider text-[var(--text-tertiary)] mb-3 text-center">
                {g.title}
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {items.map((item) => {
                  const inner = item.textOnly ? (
                    <span
                      className="inline-block px-3 py-2 rounded-md border border-[var(--glass-border)] bg-[var(--glass-bg)] text-xs text-[var(--text-secondary)] opacity-70 hover:opacity-100 transition-opacity duration-300"
                      title={item.name}
                    >
                      {item.name}
                    </span>
                  ) : (
                    <div
                      className="relative h-10 w-28 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
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
