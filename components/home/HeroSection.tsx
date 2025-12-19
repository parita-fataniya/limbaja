"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const slides = [
    {
        id: 1,
        image: "/hero-section/hero-1.jpeg",
        color: "bg-slate-800",
        title: "Industrial Plants",
    },
    {
        id: 2,
        // Using the same image placeholder for now as requested
        image: "/hero-section/hero-1.jpeg",
        color: "bg-blue-900",
        title: "Energy Systems",
    },
    {
        id: 3,
        image: "/hero-section/hero-1.jpeg",
        color: "bg-green-900",
        title: "Audit Activities",
    },
    {
        id: 4,
        image: "/hero-section/hero-1.jpeg",
        color: "bg-indigo-900",
        title: "Measurement Instruments",
    },
    {
        id: 5,
        image: "/hero-section/hero-1.jpeg",
        color: "bg-cyan-900",
        title: "Sustainable Solutions",
    },
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);

    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-slate-900">
            {/* Slides */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src={slides[current].image}
                            alt={slides[current].title}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Dark Overlay for text readability */}
                        <div className="absolute inset-0 bg-black/60 z-10" />
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
                <motion.div
                    key={`text-${current}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="inline-block px-4 py-1.5 mb-6 border border-[#22c55e] rounded-full bg-[#22c55e]/10 backdrop-blur-sm">
                        <span className="text-[#22c55e] font-semibold tracking-wider text-sm uppercase">Powering the Future</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                        Energy Audit & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#0ea5e9] drop-shadow-none filter brightness-110">
                            Energy Conservation
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-200 font-light italic tracking-wide mb-10 drop-shadow-md">
                        "You can’t manage what you don’t measure"
                    </p>

                    <div className="flex gap-4 justify-center">
                        <Link href="/service" className="px-8 py-3 bg-[#0ea5e9] hover:bg-blue-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-500/30">
                            Our Services
                        </Link>
                        <Link href="/contact-us" className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold rounded-lg transition-all">
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors hidden md:block"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors hidden md:block"
            >
                <ChevronRight size={32} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? "bg-[#22c55e] w-8" : "bg-white/50 hover:bg-white"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
