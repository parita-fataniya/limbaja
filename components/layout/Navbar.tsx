"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    // Transform scrollY into height and opacity values for smooth animation
    // 0-20px scroll: Full height/opacity
    // 20-50px scroll: Fading out/Shrinking
    const topBarHeight = useTransform(scrollY, [0, 50], ["48px", "0px"]);
    const topBarOpacity = useTransform(scrollY, [0, 30], [1, 0]);
    const navPadding = useTransform(scrollY, [0, 50], ["16px", "8px"]);
    const logoWidth = useTransform(scrollY, [0, 50], ["200px", "150px"]);
    const logoHeight = useTransform(scrollY, [0, 50], ["70px", "50px"]);

    // For background blur/transparency
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

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
        <motion.header
            className={`sticky top-0 z-50 font-sans transition-colors duration-300 ${isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-lg"
                : "bg-white shadow-md"
                }`}
        >
            {/* Top Bar - Contact Info */}
            <motion.div
                className="bg-[#3154a5] text-white overflow-hidden"
                style={{
                    height: topBarHeight,
                    opacity: topBarOpacity
                }}
            >
                <div className="container mx-auto px-4 flex justify-between items-center h-full text-xs md:text-sm">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                        <span className="flex items-center gap-2"><Phone size={14} /> 9714253756</span>
                        <span className="flex items-center gap-2"><Mail size={14} /> limbajaenergy@gmail.com</span>
                    </div>
                    <div className="hidden md:block opacity-90">
                        Sustainable Energy Solutions
                    </div>
                </div>
            </motion.div>

            <motion.nav
                className="container mx-auto px-4"
                style={{ paddingTop: navPadding, paddingBottom: navPadding }}
            >
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <motion.div
                            className="relative"
                            style={{ width: logoWidth, height: logoHeight }}
                        >
                            <Image
                                src="/logo.png"
                                alt="Limbaja Energy"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </motion.div>
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
            </motion.nav>
        </motion.header>
    );
}
