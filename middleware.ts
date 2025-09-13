import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
} from '@convex-dev/auth/nextjs/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './lib/i18n/routing';

const isSignInPage = createRouteMatcher(['/login']);
const isProtectedRoute = createRouteMatcher(['/', '/server', '/dashboard']);

const intlMiddleware = createMiddleware(routing);

export default convexAuthNextjsMiddleware(async (request, { convexAuth }) => {
  if (isSignInPage(request) && (await convexAuth.isAuthenticated())) {
    return nextjsMiddlewareRedirect(request, '/');
  }

  if (isProtectedRoute(request) && !(await convexAuth.isAuthenticated())) {
    return nextjsMiddlewareRedirect(request, '/login');
  }

  return intlMiddleware(request);
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
