"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background - using a placeholder pattern or gradient for now */}
            <div className="absolute inset-0 bg-[url('/hero-section/hero-1.jpeg')] bg-cover bg-center opacity-30 blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        About <span className="text-[#0ea5e9]">Limbaja Energy</span>
                    </h1>
                    <h2 className="text-xl md:text-3xl text-[#22c55e] font-medium mb-6">
                        Driving Energy Efficiency. Powering Sustainable Growth.
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto text-balance">
                        Limbaja Energy is committed to helping industries reduce energy costs and optimize electrical and thermal energy usage through expert audits and implementation support.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
