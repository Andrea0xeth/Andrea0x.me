import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intl = createMiddleware(routing);

// The home page is a static vanilla landing in /public/landing/{locale}/.
const HOME = /^\/(it|en)\/?$/;

export default function middleware(request: NextRequest) {
  const home = request.nextUrl.pathname.match(HOME);
  if (home) {
    return NextResponse.rewrite(new URL(`/landing/${home[1]}/index.html`, request.url));
  }
  return intl(request);
}

export const config = {
  // Match all pathnames except:
  // - /api, /trpc (API routes)
  // - /_next, /_vercel (Next.js internals)
  // - Static files (anything containing a dot, e.g. favicon.ico)
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
