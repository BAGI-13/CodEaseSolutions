// File: components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation'; // --- NAYA: Current path ke liye hook import kiya ---

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname(); // --- NAYA: Current path haasil kiya ---

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { name: "Hub", href: "/" },
        { name: "Meet Codease", href: "/meet-codease" },
        { name: "Solutions & Services", href: "/solutions" },
        { name: "Our Creations", href: "/creations" },
        { name: "Innovation", href: "/innovation" },
        { name: "Innovation Lab", href: "/lab" },
    ];

    return (
        <header
            className={`
                w-full sticky top-0 z-50 transition-all duration-300 ease-in-out
                ${isScrolled ? 'py-2' : 'py-0'}
            `}
        >
            <nav
                className={`
                    container mx-auto px-4 sm:px-6 lg:px-8 bg-white
                    transition-all duration-300 ease-in-out
                    shadow-md
                    ${isScrolled ? 'md:rounded-full md:shadow-lg' : 'rounded-none'}
                `}
            >
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-blue-600">
                            Codease<span className="text-gray-800">Solutions</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <ul className="flex items-center space-x-6">
                            {navLinks.map((link) => {
                                // --- NAYA: Active link check ---
                                const isActive = pathname === link.href;
                                return (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            // --- UPDATE: Active link styling ---
                                            className={`
                                                pb-1 transition-colors duration-200 font-medium
                                                ${isActive
                                                    ? 'text-blue-600 border-b-2 border-blue-600' // Active style
                                                    : 'text-gray-700 hover:text-blue-600' // Normal style
                                                }
                                            `}
                                        >
                                            {link.name.replace("_", " ")}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Contact Us Button (Desktop) */}
                    <div className="hidden md:block">
                        {/* --- UPDATE: Button ko Link se wrap kiya --- */}
                        <Link href="/contact">
                            <button
                                // --- UPDATE: Scroll ke hisaab se rounding change ki ---
                                className={`
                                    px-5 py-2 bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 cursor-pointer
                                    transition-all duration-300 ease-in-out hover:scale-105
                                    ${isScrolled ? 'rounded-full' : 'rounded-lg'}
                                `}
                            >
                                Contact Us
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-800 hover:text-blue-600 focus:outline-none cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 p-2 -mr-2"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg py-4 z-40 rounded-b-lg">
                        <ul className="flex flex-col items-center space-y-4">
                            {navLinks.map((link) => {
                                // --- NAYA: Active link check (mobile) ---
                                const isActive = pathname === link.href;
                                return (
                                    <li key={link.name} className="w-full">
                                        <Link
                                            href={link.href}
                                            // --- UPDATE: Active link styling (mobile) ---
                                            className={`
                                                block w-full text-center transition-colors duration-200 font-medium py-2
                                                ${isActive
                                                    ? 'text-blue-600 font-bold' // Active style (simple bold)
                                                    : 'text-gray-700 hover:text-blue-600' // Normal style
                                                }
                                            `}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.name.replace("_", " ")}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        {/* Contact Us Button (Mobile) */}
                        <div className="mt-4 text-center px-4">
                             {/* --- UPDATE: Button ko Link se wrap kiya --- */}
                             <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                                <button className="w-full px-5 py-2 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
                                    Contact Us
                                </button>
                             </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}