import React from 'react';
import TextDivider from './TextDivider';

interface PlanCardProps {
    level: string;
    title: string;
    description: string;
    features: string[];
    divider: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
    level,
    title,
    description,
    features,
    divider
}) => (
    <div className="bg-white rounded-[2.5rem] border-2 border-accent flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 overflow-hidden p-8 md:p-10">
        <p className="text-center text-xl font-medium text-accent mb-3">{level}</p>
        <h5 className="text-center text-3xl font-bold text-primary-text mb-6">{title}</h5>
        <p className="text-center text-secondary-text text-base leading-relaxed mb-10 grow px-2">{description}</p>

        {/* Intern "Bli med" skilledeler - bruker 'small' */}
        <div className="w-full mb-8">
            <TextDivider text={divider} size="small" />
        </div>

        <ul className="space-y-4 text-secondary-text text-base pl-2">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                    <span className="block w-2 h-2 mt-2 rounded-full bg-secondary-text/40 shrink-0" />
                    {feature}
                </li>
            ))}
        </ul>
    </div>
);

export default PlanCard;