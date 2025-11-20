import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaDownload } from 'react-icons/fa6';

interface DownloadButtonProps {
    text: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ text }) => (
    <Link
        href="#" // TODO: Oppdater denne lenken
        className="group inline-flex items-center bg-white rounded-full pl-1 pr-4 py-1 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 gap-1 border border-gray-100"
    >
        <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden">
            <Image
                src="/images/CoreCapacity_logo-24.febr-2025-1-1.png" 
                alt="Logo"
                width={64}
                height={64}
                className="object-contain"
            />
        </div>
        <span className="text-lg font-bold text-primary-text group-hover:text-accent transition-colors">
            {text}
        </span>
        <FaDownload className="text-accent ml-2 " size={18} />
    </Link>
);

export default DownloadButton;