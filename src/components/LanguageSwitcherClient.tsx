// LanguageSwitcherClient.tsx
'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import norwayflag from "../../public/images/Flag_of_Norway.svg";
import englishflag from "../../public/images/Flag_of_the_United_Kingdom_(3-5).svg";

// Definer hva denne komponenten trenger av data
interface Props {
  translations: {
    english: string;
    norwegian: string;
  };
}

export default function LanguageSwitcherClient({ translations }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.replace(newPathname);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors text-sm font-medium text-gray-700"
      >
        {locale === 'en' ? (
          <><Image src={englishflag} alt='english' className="w-6 h-auto"/> {translations.english}</>
        ) : (
          <><Image src={norwayflag} alt='norsk' className="w-6 h-auto"/> {translations.norwegian}</>
        )}
        <FaChevronDown className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} size={12} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-100 z-50 py-1">
          <button onClick={() => switchLanguage('no')} className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-50 text-left gap-3">
             <Image src={norwayflag} alt='no' className="w-6 h-auto"/> {translations.norwegian}
          </button>
          <button onClick={() => switchLanguage('en')} className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-50 text-left gap-3">
             <Image src={englishflag} alt='en' className="w-6 h-auto"/> {translations.english}
          </button>
        </div>
      )}
    </div>
  );
}