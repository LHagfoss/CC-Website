import React from 'react';

interface TextDividerProps {
    text: string;
    size?: 'small' | 'medium' | 'large';
}

const TextDivider: React.FC<TextDividerProps> = ({ text, size = 'medium' }) => {
    let textClass = "text-3xl md:text-4xl"; 
    if (size === 'large') textClass = "text-5xl md:text-7xl"; 
    if (size === 'small') textClass = "text-xl md:text-2xl"; 

    return (
        <div className="flex items-center justify-center w-full my-6">
            {/* Venstre linje - Alltid grønn */}
            <div className="flex-grow border-t-2 border-accent"></div>
            
            {/* Tekst - Alltid grønn, størrelse varierer, linjeskift tillatt */}
            <h3 className={`px-6 font-bold text-accent text-center ${textClass}`}>
                {text}
            </h3>
            
            {/* Høyre linje - Alltid grønn */}
            <div className="flex-grow border-t-2 border-accent"></div>
        </div>
    );
}

export default TextDivider;