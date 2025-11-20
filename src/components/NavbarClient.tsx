"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/CoreCapacity_logo_uten_motto-24.febr-2025-1-1.png";

export default function NavbarClient({ text, children }: { text: any, children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 right-0 left-0 bg-white w-full z-50 shadow-sm">
            {/* 
               CHANGE 1: Removed "container mx-auto". 
               Added "w-full px-6 md:px-12" to push content to the edges.
            */}
            <div className="w-full px-6 md:px-12">
                
                {/* CHANGE 2: Increased height from h-24 to h-32 to fit the bigger logo */}
                <div className="flex justify-between items-center h-24 md:h-32">
                    
                    {/* Logo */}
                    <Link href={"/"} onClick={() => setIsOpen(false)}>
                        {/* 
                           CHANGE 3: Made logo bigger. 
                           "h-16" on mobile, "md:h-24" (approx 96px) on desktop.
                        */}
                        <Image 
                            className="h-16 md:h-24 w-auto object-contain" 
                            src={logo} 
                            alt="logo" 
                            priority 
                        />
                    </Link>

                    {/* Desktop Menu */}
                    {/* Added gap-8 to space out the links a bit more */}
                    <div className="hidden md:flex gap-8 font-bold items-center text-gray-700 text-lg">
                        {children}
                        
                        <Link href={"/"} className="hover:text-accent">{text.home}</Link>
                        <Link href={"/om-oss"} className="hover:text-accent">{text.about_us}</Link>
                        <Link href={"/kontakt-oss"} className="hover:text-accent">{text.contact}</Link>
                        <Link className="bg-accent hover:bg-accent/80 transition shadow-lg rounded-lg text-white py-3 px-6" href={"/last-ned"}>
                            {text.download}
                        </Link>
                    </div>

                    {/* Hamburger Button */}
                    <button 
                        className="md:hidden text-gray-700 focus:outline-none p-2" 
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t absolute w-full left-0 top-24 md:top-32 flex flex-col p-8 gap-8 font-bold text-xl shadow-lg h-screen z-40">
                    <div className="flex justify-center mb-4">
                        {children}
                    </div>
                    <Link href={"/"} onClick={() => setIsOpen(false)} className="hover:text-accent">{text.home}</Link>
                    <Link href={"/om-oss"} onClick={() => setIsOpen(false)} className="hover:text-accent">{text.about_us}</Link>
                    <Link href={"/kontakt-oss"} onClick={() => setIsOpen(false)} className="hover:text-accent">{text.contact}</Link>
                    <Link className="bg-accent text-center text-white py-4 rounded-lg shadow-md" href={"/last-ned"} onClick={() => setIsOpen(false)}>
                        {text.download}
                    </Link>
                </div>
            )}
        </nav>
    );
}