import LanguageSwitcher from '@/components/LanguageSwitcher';
import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations('common');

  return (
    <div>
      <p className="">{t('test')}</p>

      <LanguageSwitcher/>
    </div>
  );
}