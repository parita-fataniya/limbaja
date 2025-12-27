"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, Clock, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Our Services", href: "/service" },
    { name: "Our Instruments", href: "/instrument" },
    { name: "Our Clients", href: "/clients" },
    { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 120);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path: string) => path === "/" ? pathname === "/" : pathname.startsWith(path);

    return (
        <header className="fixed w-full z-50 transition-all duration-600">

            {/* Top Bar - Contact Details */}
            <div className={`bg-[#0f172a] text-white transition-all duration-600 overflow-hidden ${isScrolled ? "h-0 opacity-0" : "h-auto py-2 border-b border-white/10"}`}>
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm gap-2">
                    <div className="flex md:hidden items-center gap-4">
                        {/* Mobile View: Contact Info */}
                        <a href="tel:+919274421388" className="flex items-center gap-2 hover:text-[#22c55e] transition-colors"><Phone size={14} /> +91 97142 53756</a>
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        <a href="mailto:limbajaenergy@gmail.com" className="flex items-center gap-2 hover:text-[#22c55e] transition-colors">
                            <Mail size={14} />
                            <span>limbajaenergy@gmail.com</span>
                        </a>
                        <a href="tel:+919274421388" className="flex items-center gap-2 hover:text-[#22c55e] transition-colors">
                            <Phone size={14} />
                            <span>+91 97142 53756</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className={`w-full transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-2" : "bg-white py-4"}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 relative z-50">
                        {/* Using Next.js Image for optimization, assuming logo.png is in public folder */}
                        <img src="/logo.png" alt="Limbaja Energy" className="h-16 w-auto object-contain" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${isActive(link.href)
                                    ? "bg-[#0ea5e9]/10 text-[#0ea5e9]"
                                    : "text-slate-600 hover:text-[#0ea5e9] hover:bg-slate-50"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-slate-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`px-4 py-3 rounded-lg font-medium transition-colors ${isActive(link.href)
                                        ? "bg-[#0ea5e9]/10 text-[#0ea5e9]"
                                        : "text-slate-600 hover:bg-slate-50"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </header>
    );
}
