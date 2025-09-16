import { clerkMiddleware } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './lib/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default clerkMiddleware((auth, req) => {
  return intlMiddleware(req);
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
