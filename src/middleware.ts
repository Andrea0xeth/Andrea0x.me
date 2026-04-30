import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except:
  // - /api, /trpc (API routes)
  // - /_next, /_vercel (Next.js internals)
  // - Static files (anything containing a dot, e.g. favicon.ico)
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
