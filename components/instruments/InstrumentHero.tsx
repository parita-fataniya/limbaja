"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function InstrumentHero() {
    return (
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-section/hero-1.jpeg"
                    alt="Instruments Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/60 to-slate-900 z-10" />
            </div>

            <div className="container mx-auto px-6 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Our Instruments
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-200 font-light max-w-3xl mx-auto leading-relaxed">
                        Precision Tools for Accurate Energy Audit & Performance Measurement
                    </p>
                    <div className="w-24 h-1 bg-[#0ea5e9] mx-auto mt-8 rounded-full shadow-[0_0_20px_rgba(14,165,233,0.5)]" />
                </motion.div>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-8 text-slate-300 max-w-2xl mx-auto"
                >
                    We are a leading Service provider in the field of "Energy Audit & Efficiency Measurement".
                </motion.p>
            </div>
        </section>
    );
}
