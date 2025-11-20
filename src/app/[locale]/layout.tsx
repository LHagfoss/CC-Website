

import { Locale } from "@/lib/intl";

import { i18n } from "../../../i18n-config";

import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Next.js i18n Dashboard Template",
  description: "How to create internationalized dasboard with Next.js",
};

export default async function Root({
  params: paramsPromise,
  children,
}: {
  params: Promise<{ locale: Locale }>;
  children: React.ReactNode;
}) {
  const params = await paramsPromise;

  return (
    <html lang={params.locale}>
      <body className="pt-8 relative">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale: locale }));
}