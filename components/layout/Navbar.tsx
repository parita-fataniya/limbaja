"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 40);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Service", href: "/service" },
        { name: "Clients", href: "/clients" },
        { name: "Scope", href: "/scope" },
        { name: "Instrument", href: "/instrument" },
        { name: "Contact Us", href: "/contact-us" },
    ];

    const isActive = (path: string) => {
        if (path === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(path);
    };

    return (
        <>


            {/* Main Navigation - Fixed */}
            <header
                className={`fixed w-full top-0 z-50 font-sans transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white shadow-sm"
                    }`}
            >
                <nav
                    className={`container mx-auto px-4 transition-all duration-300 ${isScrolled ? "py-2" : "py-3"
                        }`}
                >
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div
                                className={`relative transition-all duration-500 ease-in-out ${isScrolled ? "w-[140px] h-[45px]" : "w-[200px] h-[65px]"
                                    }`}
                            >
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
                                    className={`px-4 py-2 text-[15px] font-bold uppercase tracking-wide transition-colors ${isActive(link.href)
                                        ? "text-[#0ea5e9]"
                                        : "text-slate-700 hover:text-[#0ea5e9]"
                                        }`}
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
                                    className={`block px-6 py-4 font-bold uppercase border-b border-slate-100 last:border-0 ${isActive(link.href)
                                        ? "text-[#0ea5e9] bg-slate-50"
                                        : "text-slate-700 hover:bg-slate-50 hover:text-[#0ea5e9]"
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </nav>
            </header>
        </>
    );
}
