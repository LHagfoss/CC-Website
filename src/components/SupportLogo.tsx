import { getTranslations } from 'next-intl/server';
import Image, { StaticImageData } from 'next/image';

interface LogoProps {
    src: StaticImageData;
    alt: string;
    labelKey: string;
    className?: string;
   
}

export  default async function SupporterLogo({ src, alt, labelKey, className}: LogoProps) {
    const t = await getTranslations();
    return (
        <div className={`flex flex-col items-center p-4 ${className}`}>
            {/* Tekst over bildet (label) */}
            < p className="text-sm text-gray-700 mb-2 text-center h-10" > {t(labelKey)}</p >

            {/* Beholder for bildet */}
            < div className="bg-white p-4 rounded-lg shadow-md w-48 h-48 flex items-center justify-center" >
                <Image
                    width={720}
                    height={480}
                    src={src}
                    alt={alt}
                    className="max-w-full max-h-full object-contain" 
                    />
            </div >
        </div >
    );
}