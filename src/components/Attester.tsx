import Image, { StaticImageData } from 'next/image';
import { RiDoubleQuotesR } from "react-icons/ri";

interface AttesterProps {
    t: (key: string) => string;
    src?: StaticImageData;
    title: string;
    quote: string;
    name: string;
}

export default function Attester({ t, src, name, quote, title }: AttesterProps) {
    return (
        <div className="bg-gray-100  p-8 justify-between flex flex-col">
            <div className="">
                <div className="flex justify-center items-center mb-6 relative">
                    {src && (<Image
                        src={src}
                        alt={t('omOss.testimonials.t3.imageAlt')}
                        className="w-16 h-16 rounded-full object-cover"
                        width={64}
                        height={64}
                    />)}
                    <div className=" absolute -top-6 left-1/2 -translate-1/2 border-2 rounded-full p-1 ">
                        <RiDoubleQuotesR size={24} />
                    </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                    {t(quote)}
                </p>
            </div>
            <div className="text-sm text-gray-600">
                <p className="font-semibold">{t(name)}</p>
                <p>{t(title)}</p>
            </div>
        </div>
    )
}