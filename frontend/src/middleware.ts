import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["ru", "en", "kg"],
  defaultLocale: "ru",
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)",
  ],
};
