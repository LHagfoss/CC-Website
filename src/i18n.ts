import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { i18n } from '../i18n-config';

export default getRequestConfig(async ({ locale }) => {
  if (!i18n.locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./lang/${locale}.json`)).default
  };

});
