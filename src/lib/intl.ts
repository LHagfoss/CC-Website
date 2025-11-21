import "server-only";

import { createIntl } from "@formatjs/intl";
import { i18n } from "../../i18n-config";

export type Locale = (typeof i18n)["locales"][number];

export async function getIntl(locale: Locale) {
  return createIntl({
    locale: locale,
    messages: (await import(`../lang/${locale}.json`)).default,
  });
}
