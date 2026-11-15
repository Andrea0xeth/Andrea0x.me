'use client';

import { useEffect, useId, useRef, useState } from 'react';
import {
  CAL_EMBED_LINK,
  CAL_EMBED_SCRIPT,
  CAL_ORIGIN,
  calEmbedConfig,
} from '@/lib/booking';
import { cn } from '@/lib/utils';

type CalApi = ((...args: unknown[]) => void) & {
  loaded?: boolean;
  ns?: Record<string, CalApi>;
  q?: unknown[];
};

declare global {
  interface Window {
    Cal?: CalApi;
  }
}

interface CalEmbedProps {
  className?: string;
  title?: string;
  /** Cal path without leading slash, e.g. `book` or `book/introduction-call`. */
  calLink?: string;
}

/**
 * Cal embed.js requires `window.Cal` + `.q` to exist *before* the script runs
 * (it throws otherwise). This mirrors the official snippet’s queueing stub.
 */
function ensureCalBootstrap(): CalApi {
  const w = window;
  if (w.Cal) return w.Cal;

  const push = (target: CalApi, args: unknown[]) => {
    target.q = target.q || [];
    target.q.push(args);
  };

  const Cal = function (...args: unknown[]) {
    if (!Cal.loaded) {
      Cal.ns = Cal.ns || {};
      Cal.q = Cal.q || [];
      const script = document.createElement('script');
      script.src = CAL_EMBED_SCRIPT;
      script.async = true;
      document.head.appendChild(script);
      Cal.loaded = true;
    }

    if (args[0] === 'init') {
      const namespace = args[1];
      if (typeof namespace === 'string') {
        const api = function (...inner: unknown[]) {
          push(api as CalApi, inner);
        } as CalApi;
        api.q = api.q || [];
        Cal.ns = Cal.ns || {};
        Cal.ns[namespace] = Cal.ns[namespace] || api;
        push(Cal.ns[namespace]!, args);
        push(Cal, ['initNamespace', namespace]);
        return;
      }
    }
    push(Cal, args);
  } as CalApi;

  Cal.q = [];
  Cal.ns = {};
  w.Cal = Cal;
  return Cal;
}

function whenCalReady(): Promise<void> {
  return new Promise((resolve, reject) => {
    ensureCalBootstrap();
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${CAL_EMBED_SCRIPT}"]`,
    );

    const done = () => {
      // embed.js sets version after bootstrapping the real API
      if (window.Cal && 'version' in window.Cal) {
        resolve();
        return;
      }
      // Script tag present but not finished — poll briefly
      const start = Date.now();
      const tick = () => {
        if (window.Cal && 'version' in window.Cal) {
          resolve();
        } else if (Date.now() - start > 10000) {
          reject(new Error('Cal embed.js timed out'));
        } else {
          requestAnimationFrame(tick);
        }
      };
      tick();
    };

    if (existing) {
      if (window.Cal && 'version' in window.Cal) {
        resolve();
      } else {
        existing.addEventListener('load', done, { once: true });
        existing.addEventListener(
          'error',
          () => reject(new Error('Failed to load Cal embed.js')),
          { once: true },
        );
        // Already loading / loaded without firing load for us
        done();
      }
      return;
    }

    // Trigger stub so it injects the script
    window.Cal?.('init', { origin: CAL_ORIGIN });
    const script = document.querySelector<HTMLScriptElement>(
      `script[src="${CAL_EMBED_SCRIPT}"]`,
    );
    if (!script) {
      reject(new Error('Cal embed.js script missing'));
      return;
    }
    script.addEventListener('load', done, { once: true });
    script.addEventListener(
      'error',
      () => reject(new Error('Failed to load Cal embed.js')),
      { once: true },
    );
  });
}

/**
 * Same protections that made the duration → inline mount usable on mobile.
 * Calendar, time slots, and the confirm form all live in this iframe; embed.js
 * re-applies `data-cal-link` on route updates inside it, so this must run for
 * the full lifetime of the mount — not only once at first paint.
 */
function hardenInlineEmbed(host: HTMLElement, title?: string) {
  host.querySelectorAll<HTMLIFrameElement>('iframe').forEach((iframe) => {
    if (iframe.hasAttribute('data-cal-link')) {
      iframe.removeAttribute('data-cal-link');
    }
    iframe.style.pointerEvents = 'auto';
    iframe.style.touchAction = 'manipulation';
    if (title) iframe.title = title;
  });

  // Also strip any sibling/stray inline iframes embed.js may have tagged.
  document.querySelectorAll<HTMLIFrameElement>('iframe[data-cal-link]').forEach((iframe) => {
    if (host.contains(iframe) || iframe.closest('cal-inline, .cal-embed-host')) {
      iframe.removeAttribute('data-cal-link');
    }
  });

  const modals = document.querySelectorAll('cal-modal-box');
  if (modals.length) {
    modals.forEach((modal) => modal.remove());
    document.body.style.overflow = '';
  }
}

export function CalEmbed({
  className,
  title = 'Book a call',
  calLink = CAL_EMBED_LINK,
}: CalEmbedProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const reactId = useId().replace(/:/g, '');
  const [notes, setNotes] = useState<string | undefined>();

  useEffect(() => {
    const value =
      new URLSearchParams(window.location.search).get('notes')?.slice(0, 500) ||
      undefined;
    if (value) setNotes(value);
  }, []);

  // Soften iOS iframe touch quirks while an inline embed is mounted.
  useEffect(() => {
    document.documentElement.classList.add('cal-inline-active');
    return () => document.documentElement.classList.remove('cal-inline-active');
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let cancelled = false;
    const namespace = `book_${reactId}`;
    const cleanups: Array<() => void> = [];

    (async () => {
      try {
        await whenCalReady();
        if (cancelled || !hostRef.current) return;

        const Cal = window.Cal!;
        Cal('init', namespace, { origin: CAL_ORIGIN });

        host.replaceChildren();
        const api = Cal.ns?.[namespace];
        if (!api) return;

        api('inline', {
          elementOrSelector: host,
          calLink,
          config: calEmbedConfig('dark', notes),
        });

        hardenInlineEmbed(host, title);

        api('ui', {
          theme: 'dark',
          styles: { body: { background: 'transparent' } },
        });

        if (cancelled) return;

        // Keep hardening across calendar → time → confirm (attr + DOM churn).
        const hostObserver = new MutationObserver(() => {
          hardenInlineEmbed(host, title);
        });
        hostObserver.observe(host, {
          subtree: true,
          childList: true,
          attributes: true,
          attributeFilter: ['data-cal-link', 'style', 'src'],
        });
        cleanups.push(() => hostObserver.disconnect());

        // Tear down misfired modal backdrops immediately (blocks all taps).
        const modalObserver = new MutationObserver((mutations) => {
          for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
              if (
                node instanceof HTMLElement &&
                (node.tagName === 'CAL-MODAL-BOX' ||
                  node.querySelector?.('cal-modal-box'))
              ) {
                hardenInlineEmbed(host, title);
                return;
              }
            }
          }
        });
        modalObserver.observe(document.body, { childList: true, subtree: true });
        cleanups.push(() => modalObserver.disconnect());

        // iOS fires touch before click — strip before embed.js can open a modal
        // on day/time/form taps that mis-hit the iframe chrome.
        const onPointerCapture = () => {
          hardenInlineEmbed(host, title);
        };
        for (const type of ['pointerdown', 'touchstart', 'click'] as const) {
          document.addEventListener(type, onPointerCapture, true);
          cleanups.push(() =>
            document.removeEventListener(type, onPointerCapture, true),
          );
        }

        // Belt: re-harden while Cal rewrites the iframe during step changes.
        const pulse = window.setInterval(() => {
          if (!cancelled) hardenInlineEmbed(host, title);
        }, 1000);
        cleanups.push(() => window.clearInterval(pulse));

        if (cancelled) cleanups.splice(0).forEach((fn) => fn());
      } catch {
        // Page keeps the “open direct” fallback link.
      }
    })();

    return () => {
      cancelled = true;
      cleanups.splice(0).forEach((fn) => fn());
      host.replaceChildren();
    };
  }, [calLink, notes, reactId, title]);

  return (
    <div
      ref={hostRef}
      className={cn(
        'cal-embed-host block h-full w-full min-h-[32rem] [&_iframe]:block [&_iframe]:h-full [&_iframe]:min-h-[inherit] [&_iframe]:w-full',
        className,
      )}
      aria-label={title}
    />
  );
}
