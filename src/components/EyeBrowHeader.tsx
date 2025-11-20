interface EyebrowHeaderProps {
    text: string;
}

export default function EyebrowHeader({ text }: EyebrowHeaderProps) {
    return (
        <div className="text-center mb-2">
            <h3 className="text-sm md:text-base font-bold tracking-[0.2em] text-gray-500 uppercase font-sans">
                {text}
            </h3>
        </div>
    )
};