"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, Clock, Menu, X, ChevronDown, MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useHeaderControl } from "@/context/HeaderControlContext";
import { services } from "@/app/service/ServiceData";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Our Services", href: "/service" },
    { name: "Our Instruments", href: "/instrument" },
    { name: "Our Clients", href: "/clients" },
    { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
    const { isHeaderHidden } = useHeaderControl();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 120);
        };
        handleScroll(); // Check on mount
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path: string) => path === "/" ? pathname === "/" : pathname.startsWith(path);

    // Completely hide header if controlled by StoryHero
    if (isHeaderHidden) return null;

    return (
        <header className="fixed w-full z-50 transition-all duration-600">
            {/* Top Bar - Contact Details */}
            <div className={`bg-[#0f172a] text-white transition-all duration-600 overflow-hidden ${isScrolled ? "h-0 opacity-0" : "h-auto py-2 border-b border-white/10"}`}>
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm gap-2">
                    <div className="flex md:hidden items-center gap-4">
                        {/* Mobile View: Contact Info */}
                        <a href="tel:+919274421388" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone size={14} /> +91 97142 53756</a>
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        <a href="mailto:limbajaenergy@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                            <Mail size={14} />
                            <span>limbajaenergy@gmail.com</span>
                        </a>
                        <a href="tel:+919274421388" className="flex items-center gap-2 hover:text-primary transition-colors">
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
                        {navLinks.map((link) => {
                            if (link.name === "Our Services") {
                                return (
                                    <div key={link.name} className="relative group">
                                        <Link
                                            href={link.href}
                                            className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-bold transition-all ${isActive(link.href)
                                                ? "bg-primary/10 text-primary"
                                                : "text-slate-600 hover:text-primary hover:bg-slate-50"
                                                }`}
                                        >
                                            {link.name}
                                            <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                                        </Link>

                                        {/* Dropdown Menu */}
                                        <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 p-2">
                                            <div className="flex flex-col gap-1">
                                                {services.slice(0, 3).map((service) => (
                                                    <Link
                                                        key={service.id}
                                                        href={`/service/${service.id}`}
                                                        className="block px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
                                                    >
                                                        <div className="font-bold text-slate-800 text-sm group-hover/item:text-primary transition-colors">{service.title}</div>
                                                        <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">{service.description}</div>
                                                    </Link>
                                                ))}
                                                <div className="h-px bg-slate-100 my-1"></div>
                                                <Link
                                                    href="/service"
                                                    className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-primary/5 text-primary text-sm font-bold transition-colors group/item"
                                                >
                                                    <span>View All Services</span>
                                                    <MoveRight size={16} className="group-hover/item:translate-x-1 transition-transform" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${isActive(link.href)
                                        ? "bg-primary/10 text-primary"
                                        : "text-slate-600 hover:text-primary hover:bg-slate-50"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
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
                                        ? "bg-primary/10 text-primary"
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
