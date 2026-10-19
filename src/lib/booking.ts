/** Self-hosted Cal.com booking — replaces Calendly. */
export const CAL_ORIGIN = 'https://call.andrea0x.me';
export const CAL_BOOKING_PATH = '/book';
export const CAL_BOOKING_URL = `${CAL_ORIGIN}${CAL_BOOKING_PATH}`;

/** Public portfolio path (locale-prefixed by next-intl). */
export const SITE_BOOK_PATH = '/book';

export function calEmbedSrc(theme: 'light' | 'dark' = 'dark'): string {
  const params = new URLSearchParams({
    embed: 'true',
    theme,
    layout: 'month_view',
  });
  return `${CAL_BOOKING_URL}?${params.toString()}`;
}
