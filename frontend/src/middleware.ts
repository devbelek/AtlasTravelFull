import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ['ru', 'en', 'kg'],
    defaultLocale: 'ru'
});

export const config = {
  matcher: ["/", "/(ru|en|kg)/:path*"],
};

// import createMiddleware from 'next-intl/middleware';
// import { localePrefix, locales } from './navigation';

// export default createMiddleware({
//   locales,
//   localePrefix,
//   defaultLocale: 'ru'
// });

// export const config: { matcher: string[] } = {
//   matcher: ['/((?!api|_next|.*\\..*).*)']
// };

