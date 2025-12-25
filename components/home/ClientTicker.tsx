"use client";

import React, { useState, useEffect } from "react";
import { motion, animate } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { clients as allClients } from "@/lib/ClientData";

const Counter = ({ value, suffix = "", delay = 0 }: { value: number, suffix?: string, delay?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            const controls = animate(0, value, {
                duration: 2,
                onUpdate(value) {
                    setCount(Math.floor(value));
                },
                ease: "easeOut"
            });
            return () => controls.stop();
        }, delay * 1000);
        return () => clearTimeout(timer);
    }, [value, delay]);

    return (
        <span className="font-black text-white tracking-tighter tabular-nums">
            {count}{suffix}
        </span>
    );
};

export default function ClientTicker() {
    const [row1, setRow1] = useState<string[]>([]);
    const [row2, setRow2] = useState<string[]>([]);

    useEffect(() => {
        const shuffled = [...allClients].sort(() => 0.5 - Math.random());
        // Reduce count for mobile to save memory and CPU
        const isMobile = window.innerWidth < 768;
        const count = isMobile ? 6 : 10;
        setRow1(shuffled.slice(0, count));
        setRow2(shuffled.slice(count, count * 2));
    }, []);

    if (row1.length === 0) return null;

    return (
        <section className="py-24 bg-slate-950 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_10%,rgba(14,165,233,0.05)_0%,transparent_50%)]" />

            <div className="container mx-auto px-6 text-center mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
                >
                    <Star size={14} className="text-[#0ea5e9]" fill="currentColor" />
                    <span className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Global Network</span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter">
                    Trusted By <span className="text-[#0ea5e9]">Industry Leaders</span>
                </h2>
                <div className="w-24 h-1.5 bg-[#0ea5e9]/20 rounded-full mx-auto" />
            </div>

            <div className="flex flex-col gap-10 mb-24 relative z-10">
                {/* Row 1: Left to Right */}
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-10 whitespace-nowrap will-change-transform"
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                    >
                        {[...row1, ...row1, ...row1, ...row1].map((logo, index) => (
                            <div key={index} className="flex items-center justify-center w-32 h-20 lg:w-40 lg:h-22 xl:w-48 xl:h-24 bg-white rounded-xl md:rounded-2xl border border-white/10 hover:border-[#0ea5e9]/30 transition-all group overflow-hidden p-4 lg:p-5 xl:p-6 hover:shadow-xl hover:shadow-[#0ea5e9]/20">
                                <div className="relative w-full h-full transition-all duration-500 transform group-hover:scale-110">
                                    <Image
                                        src={`/clients/${logo}`}
                                        alt="Client Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-10 whitespace-nowrap will-change-transform"
                        animate={{ x: [-1000, 0] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
                    >
                        {[...row2, ...row2, ...row2, ...row2].map((logo, index) => (
                            <div key={index} className="flex items-center justify-center w-32 h-20 lg:w-40 lg:h-22 xl:w-48 xl:h-24 bg-white rounded-xl md:rounded-2xl border border-white/10 hover:border-[#0ea5e9]/30 transition-all group overflow-hidden p-4 lg:p-5 xl:p-6 hover:shadow-xl hover:shadow-[#0ea5e9]/20">
                                <div className="relative w-full h-full transition-all duration-500 transform group-hover:scale-110">
                                    <Image
                                        src={`/clients/${logo}`}
                                        alt="Client Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20">
                    {/* Projects Completed */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="py-12 px-4 rounded-[2.5rem] bg-white/5 border border-white/10 text-center group hover:bg-[#0ea5e9] hover:border-[#0ea5e9] transition-all duration-500 shadow-2xl"
                    >
                        <div className="text-4xl lg:text-5xl xl:text-7xl font-black text-white mb-4 flex justify-center tracking-tighter">
                            <Counter value={500} suffix="+" />
                        </div>
                        <p className="text-[#0ea5e9] group-hover:text-white font-black uppercase tracking-widest text-[10px] md:text-xs transition-colors">Projects Completed</p>
                    </motion.div>

                    {/* Average Savings */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="py-12 px-4 rounded-[2.5rem] bg-white/5 border border-white/10 text-center group hover:bg-[#0ea5e9] hover:border-[#0ea5e9] transition-all duration-500 shadow-2xl"
                    >
                        <div className="text-4xl lg:text-5xl xl:text-7xl font-black text-white mb-4 flex justify-center tracking-tighter">
                            <Counter value={30} suffix="%" />
                        </div>
                        <p className="text-[#0ea5e9] group-hover:text-white font-black uppercase tracking-widest text-[10px] md:text-xs transition-colors">Average Savings</p>
                    </motion.div>

                    {/* Client Satisfaction */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="py-12 px-4 rounded-[2.5rem] bg-white/5 border border-white/10 text-center group hover:bg-[#0ea5e9] hover:border-[#0ea5e9] transition-all duration-500 shadow-2xl"
                    >
                        <div className="text-4xl lg:text-5xl xl:text-7xl font-black text-white mb-4 flex justify-center tracking-tighter">
                            <Counter value={100} suffix="%" />
                        </div>
                        <p className="text-[#0ea5e9] group-hover:text-white font-black uppercase tracking-widest text-[10px] md:text-xs transition-colors">Client Satisfaction</p>
                    </motion.div>

                    {/* Expert Support */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="py-12 px-4 rounded-[2.5rem] bg-white/5 border border-white/10 text-center group hover:bg-[#0ea5e9] hover:border-[#0ea5e9] transition-all duration-500 shadow-2xl"
                    >
                        <div className="text-4xl lg:text-5xl xl:text-7xl font-black text-white mb-4 flex justify-center tracking-tighter">
                            <span className="font-black text-white tracking-tighter">24/7</span>
                        </div>
                        <p className="text-[#0ea5e9] group-hover:text-white font-black uppercase tracking-widest text-[10px] md:text-xs transition-colors">Expert Support</p>
                    </motion.div>
                </div>

                <div className="flex justify-center">
                    <Link href="/clients" className="group relative inline-flex items-center gap-5 bg-white text-slate-900 border-2 border-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-transparent hover:text-white transition-all shadow-xl active:scale-95">
                        <span>View All Clients</span>
                        <ArrowRight className="group-hover:translate-x-3 transition-transform duration-500" size={22} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
