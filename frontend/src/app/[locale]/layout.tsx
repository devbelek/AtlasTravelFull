import type { Metadata } from "next";
import { Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import GlobalLayout from "./components/layout/Layout";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atlas Travel",
  description: "Atlas Travel description",
};

export const viewport: Viewport = {
  themeColor: "#fff",
  colorScheme: "light",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <GlobalLayout>{children}</GlobalLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
