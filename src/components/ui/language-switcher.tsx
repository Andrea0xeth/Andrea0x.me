'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { routing, type Locale } from '@/i18n/routing';

const LOCALES = routing.locales;
const COOKIE_NAME = 'NEXT_LOCALE';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleSwitch = (next: Locale) => {
    if (next === locale || isPending) return;

    // Persist the user's choice in the NEXT_LOCALE cookie
    document.cookie = `${COOKIE_NAME}=${next}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;

    // Replace (or insert) the locale segment in the current pathname
    const segments = pathname.split('/');
    if (segments.length > 1 && (LOCALES as readonly string[]).includes(segments[1])) {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    const nextPath = segments.join('/') || `/${next}`;

    startTransition(() => {
      router.replace(nextPath);
      router.refresh();
    });
  };

  return (
    <div
      className="flex items-center rounded-lg backdrop-blur-sm overflow-hidden"
      style={{
        backgroundColor: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
      }}
      role="group"
      aria-label="Language switcher"
    >
      {LOCALES.map((loc, index) => {
        const isActive = loc === locale;
        return (
          <div key={loc} className="flex items-center">
            {index > 0 && (
              <span
                aria-hidden="true"
                className="text-[var(--text-tertiary)] opacity-40 select-none"
              >
                |
              </span>
            )}
            <motion.button
              type="button"
              onClick={() => handleSwitch(loc)}
              whileHover={{ scale: isActive ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-pressed={isActive}
              aria-label={`Switch language to ${loc.toUpperCase()}`}
              disabled={isPending}
              className={`px-2 py-2 md:px-3 md:py-2 text-xs md:text-sm font-medium transition-colors duration-200 cursor-pointer ${
                isActive
                  ? 'text-[var(--text-primary)]'
                  : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {loc.toUpperCase()}
            </motion.button>
          </div>
        );
      })}
    </div>
  );
}
