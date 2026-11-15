/** Self-hosted Cal.com booking — replaces Calendly. */
export const CAL_ORIGIN = 'https://call.andrea0x.me';
export const CAL_BOOKING_PATH = '/book';
/** Username/slug segment used by Cal embed.js `calLink` (no leading slash). */
export const CAL_EMBED_LINK = 'book';
export const CAL_BOOKING_URL = `${CAL_ORIGIN}${CAL_BOOKING_PATH}`;
export const CAL_EMBED_SCRIPT = `${CAL_ORIGIN}/embed/embed.js`;

/** Public portfolio path (locale-prefixed by next-intl). */
export const SITE_BOOK_PATH = '/book';

/** Event types on the `book` Cal user — pick here so the parent owns step 1. */
export const CAL_EVENT_TYPES = [
  {
    slug: 'introduction-call',
    minutes: 15,
    title: { en: 'Introduction call', it: 'Introduction call' },
  },
  {
    slug: 'work-meeting',
    minutes: 60,
    title: { en: 'Work meeting', it: 'Work meeting' },
  },
  {
    slug: 'stand-up-call',
    minutes: 30,
    title: { en: 'Stand-up call', it: 'Stand-up call' },
  },
] as const;

export type CalEventSlug = (typeof CAL_EVENT_TYPES)[number]['slug'];

export function calEventLink(slug: CalEventSlug): string {
  return `${CAL_EMBED_LINK}/${slug}`;
}

/** Absolute Cal event URL (fallback / mobile plain iframe). */
export function calEventUrl(
  slug: CalEventSlug,
  opts?: { theme?: 'light' | 'dark'; notes?: string; embed?: boolean },
): string {
  const params = new URLSearchParams({
    theme: opts?.theme ?? 'dark',
    layout: 'month_view',
  });
  if (opts?.notes) params.set('notes', opts.notes.slice(0, 500));
  if (opts?.embed) params.set('embed', 'true');
  return `${CAL_ORIGIN}/${calEventLink(slug)}?${params.toString()}`;
}

/** `notes` prefills the booking form's additional-notes field. */
export function calEmbedConfig(theme: 'light' | 'dark' = 'dark', notes?: string) {
  const config: Record<string, string> = {
    theme,
    // Applied after an event is chosen; ignored on the profile list.
    layout: 'month_view',
  };
  if (notes) config.notes = notes;
  return config;
}

/**
 * Mobile / touch / narrow preview — any Cal iframe (embed.js or raw) still
 * fails date/time taps on iOS. Navigate to the native Cal event page instead.
 * `max-width` covers device-mode previews that still report fine pointer.
 */
export function prefersNativeCalBooking(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(
    '(max-width: 979px), (hover: none), (pointer: coarse)',
  ).matches;
}

/** Fallback raw iframe URL for the profile list (prefer event-level URLs). */
export function calEmbedSrc(theme: 'light' | 'dark' = 'dark', notes?: string): string {
  const params = new URLSearchParams({
    embed: 'true',
    ...calEmbedConfig(theme, notes),
  });
  return `${CAL_BOOKING_URL}?${params.toString()}`;
}
