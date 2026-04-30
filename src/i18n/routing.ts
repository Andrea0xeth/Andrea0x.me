import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Supported locales
  locales: ['it', 'en'],

  // Default locale (used as fallback)
  defaultLocale: 'it',

  // Always show the locale prefix in the URL (so `/` redirects to `/it` or `/en`)
  localePrefix: 'always',

  // Auto-detect the locale from the Accept-Language header on the first visit;
  // the user's choice is persisted in the default `NEXT_LOCALE` cookie.
  localeDetection: true,
});

export type Locale = (typeof routing.locales)[number];
