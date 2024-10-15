import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ['ru', 'en', 'kg'],
    defaultLocale: 'ru'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ru|en|kg)/:path*"],
};
