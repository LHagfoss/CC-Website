'use client';

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLanguage = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.replace(newPathname);
  };

  return (
    <div>
      <button onClick={() => switchLanguage('en')} disabled={locale === 'en'}>
        English
      </button>
      <button onClick={() => switchLanguage('no')} disabled={locale === 'no'}>
        Norsk
      </button>
    </div>
  );
}
