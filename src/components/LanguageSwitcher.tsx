// LanguageSwitcher.tsx (Dette er en Server Component som standard)
import { getTranslations } from 'next-intl/server';
import LanguageSwitcherClient from './LanguageSwitcherClient'; // Importer klient-delen

export default async function LanguageSwitcher() {
  // HER kan du bruke await
  const t = await getTranslations('navbar');

  // Pakk oversettelsene inn i et objekt
  const translations = {
    english: t('english'),
    norwegian: t('norwegian'),
  };

  // Send dataene videre til klient-komponenten
  return <LanguageSwitcherClient translations={translations} />;
}