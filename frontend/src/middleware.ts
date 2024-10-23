import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ['ru', 'en', 'kg'],
    defaultLocale: 'ru',
    localePrefix: 'always',
    localeDetection: true
});

export const config = {
    matcher: ['/', '/(ru|en|kg)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};