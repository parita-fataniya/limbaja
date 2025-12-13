"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Service", href: "/service" },
        { name: "Clients", href: "/clients" },
        { name: "Scope", href: "/scope" },
        { name: "Instrument", href: "/instrument" },
        { name: "Contact Us", href: "/contact-us" },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50 font-sans">
            {/* Top Bar - Contact Info */}
            <div className="bg-[#3154a5] text-white py-2 text-xs md:text-sm">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                        <span className="flex items-center gap-2"><Phone size={14} /> 9714253756</span>
                        <span className="flex items-center gap-2"><Mail size={14} /> limbajaenergy@gmail.com</span>
                    </div>
                    <div className="hidden md:block opacity-90">
                        Sustainable Energy Solutions
                    </div>
                </div>
            </div>

            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-[200px] h-[70px]">
                            <Image
                                src="/logo.png"
                                alt="Limbaja Energy"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-[15px] font-bold text-slate-700 hover:text-[#0ea5e9] uppercase tracking-wide transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-slate-700 p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 flex flex-col animate-in slide-in-from-top-2 duration-200">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-6 py-4 text-slate-700 font-bold uppercase hover:bg-slate-50 hover:text-[#0ea5e9] border-b border-slate-100 last:border-0"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}
