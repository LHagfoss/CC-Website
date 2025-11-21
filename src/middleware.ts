import createMiddleware from 'next-intl/middleware';
import { i18n } from '../i18n-config'; // Pass på at denne stien stemmer med din struktur

export default createMiddleware({
  locales: i18n.locales,
  defaultLocale: i18n.defaultLocale
});

export const config = {
  // Ignorerer api, _next, studio og filer med extensions (f.eks. bilder/favicon)
  matcher: ['/((?!api|_next|studio|.*\\..*).*)']
};