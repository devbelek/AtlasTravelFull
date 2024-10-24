import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

const locales = ["ru", "en", "kg"];
export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});


// import { getRequestConfig } from 'next-intl/server';

// export default getRequestConfig(async ({ locale }: { locale: string }) => ({
//   messages: (await import(`./messages/${locale}.json`)).default
// }));
