"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const slides = [
    {
        id: 1,
        image: "/hero-section/hero-1.jpeg",
        title: "Precision Energy Auditing",
        subtitle: "Unlocking efficiency through detailed analysis and state-of-the-art measurement.",
    },
    {
        id: 2,
        image: "/hero-section/hero-2.jpeg",
        title: "Industrial Performance",
        subtitle: "Optimizing large-scale industrial plants with sustainable energy solutions.",
    },
    {
        id: 3,
        image: "/hero-section/hero-3.jpeg",
        title: "Advanced Conservation",
        subtitle: "Reducing carbon footprints while maximizing operational cost savings.",
    },
    {
        id: 4,
        image: "/hero-section/hero-4.jpeg",
        title: "Expert Measurement",
        subtitle: "High-precision diagnostic tools for accurate energy performance indicators.",
    },
    {
        id: 5,
        image: "/hero-section/hero-5.jpeg",
        title: "Sustainable Future",
        subtitle: "Leading the way in energy management and environmental stewardship.",
    },
];

const SLIDE_DURATION = 6000; // 6 seconds

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const startTime = Date.now();
        const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
            setProgress(newProgress);

            if (newProgress >= 100) {
                setCurrent((prev) => (prev + 1) % slides.length);
                setProgress(0);
                clearInterval(timer);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [current]);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setProgress(0);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
        setProgress(0);
    };

    return (
        <section className="relative h-screen w-full overflow-hidden bg-slate-950">
            {/* Slides - No mode="wait" to allow direct cross-fade without showing background */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[current].image}
                        alt={slides[current].title}
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Cinematic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/40 to-transparent z-10" />
                    <div className="absolute inset-0 bg-black/20 z-10" />
                </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-8 md:px-20 lg:px-32">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "80px" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-1 bg-[#22c55e] mb-8"
                        />

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
                            {slides[current].title.split(" ").slice(0, -1).join(" ")} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#0ea5e9]">
                                {slides[current].title.split(" ").slice(-1)}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-10 font-medium leading-relaxed">
                            {slides[current].subtitle}
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <Link href="/service" className="group relative inline-flex items-center gap-3 bg-[#22c55e] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[#16a34a] transition-all shadow-xl shadow-[#22c55e]/20">
                                <span>Explore Services</span>
                                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
                            </Link>
                            <Link href="/contact-us" className="group px-8 py-4 bg-white/5 border border-white/20 text-white hover:bg-white hover:text-slate-900 font-bold rounded-xl transition-all backdrop-blur-md uppercase tracking-widest text-sm">
                                Get In Touch
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute right-8 md:right-20 bottom-32 z-30 flex gap-4">
                <button
                    onClick={prevSlide}
                    className="group p-4 rounded-full border border-white/20 text-white hover:bg-[#22c55e] hover:border-[#22c55e] transition-all backdrop-blur-sm"
                >
                    <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button
                    onClick={nextSlide}
                    className="group p-4 rounded-full border border-white/20 text-white hover:bg-[#22c55e] hover:border-[#22c55e] transition-all backdrop-blur-sm"
                >
                    <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Progress Bars (Growing Lines) */}
            <div className="absolute bottom-12 left-8 md:left-20 lg:left-32 right-8 md:right-20 lg:right-32 z-30 grid grid-cols-5 gap-4">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className="relative h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer group"
                        onClick={() => {
                            setCurrent(index);
                            setProgress(0);
                        }}
                    >
                        {/* Static Bar for non-active or past */}
                        <div
                            className={`absolute inset-0 transition-colors duration-500 ${index < current ? "bg-white/60" : "bg-transparent"
                                }`}
                        />

                        {/* Active Growing Bar */}
                        {current === index && (
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-[#22c55e]"
                                style={{ width: `${progress}%` }}
                            />
                        )}

                        {/* Slide Number / Indicator */}
                        <div className="absolute -top-6 left-0 text-[10px] font-black text-white/40 group-hover:text-white transition-colors uppercase tracking-tighter">
                            0{index + 1}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
