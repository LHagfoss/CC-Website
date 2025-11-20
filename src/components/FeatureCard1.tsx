import React from 'react';
import Image from 'next/image';

interface FeatureCard1Props {
    icon: string;
    iconAlt: string;
    title: string;
    description: string;
}

const FeatureCard1: React.FC<FeatureCard1Props> = ({ icon, iconAlt, title, description }) => (
    <div className="bg-white p-8 rounded-[2rem] border-2 border-accent h-full flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.02]">
        <div className="mb-8 h-20 flex items-center justify-center">
            <Image src={icon} alt={iconAlt} width={80} height={80} className="object-contain" />
        </div>
        <div className="w-full border-t border-gray-100 mb-6"></div>
        <h5 className="text-xl md:text-2xl font-normal text-accent mb-6 leading-tight px-2">{title}</h5>
        <div className="w-full border-t border-gray-100 mb-6"></div>
        <p className="text-secondary-text text-sm md:text-base leading-relaxed">{description}</p>
    </div>
);

export default FeatureCard1;