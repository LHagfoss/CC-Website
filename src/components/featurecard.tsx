import Image, { StaticImageData } from "next/image";

interface FeatureCardProps {
    titleKey: string;
    descriptionKey: string;
    imagePath: StaticImageData;
    t: (key: string) => string;
}

export default function FeatureCard({ titleKey, descriptionKey, imagePath, t }: FeatureCardProps) {
    return (
        <div className="relative flex-1 rounded-4xl overflow-hidden shadow-xl h-72 max-h-72">
            <Image
                src={imagePath}
                alt={t(titleKey)}
                className="w-full h-full object-cover opacity-70 hover:opacity-100 transition duration-300"
            />
            <div className="absolute inset-0 p-5 text-white flex flex-col justify-end 
                      bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-2xl font-semibold mb-1">{t(titleKey)}</h3>
                <p className="text-sm">{t(descriptionKey)}</p>
            </div>
        </div>
    );
}