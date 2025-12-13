"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative h-[650px] flex items-center justify-center text-white overflow-hidden bg-[#0f172a]">
            {/* Animated Background */}
            <motion.div
                className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#3154a5]"
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    backgroundSize: "400% 400%"
                }}
            />

            {/* Floating Particles/Shapes */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white/5"
                        style={{
                            width: Math.random() * 300 + 50,
                            height: Math.random() * 300 + 50,
                            top: Math.random() * 100 + "%",
                            left: Math.random() * 100 + "%",
                        }}
                        animate={{
                            y: [0, -100, 0],
                            x: [0, 50, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className="relative z-20 container mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
                        Welcome To <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#75b745] to-[#fcc017]">
                            Limbaja Energy
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Your strategic partner in sustainable energy solutions. We optimize consumption, reduce carbon footprint, and drive efficiency through expert auditing.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Link
                        href="/contact-us"
                        className="group bg-[#75b745] hover:bg-green-600 text-white text-lg px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-green-500/40 flex items-center justify-center gap-3"
                    >
                        Get a Free Consultation
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/about-us"
                        className="group bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg px-10 py-4 rounded-full font-bold transition-all hover:border-[#3154a5]"
                    >
                        Learn More
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
