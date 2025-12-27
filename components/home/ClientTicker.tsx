"use client";

import React, { useState, useEffect } from "react";
import { motion, animate, useInView } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { clients as allClients } from "@/lib/ClientData";

const Counter = ({ value, suffix = "", delay = 0 }: { value: number, suffix?: string, delay?: number }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                const controls = animate(0, value, {
                    duration: 2.5,
                    onUpdate(val) {
                        setCount(Math.floor(val));
                    },
                    ease: [0.22, 1, 0.36, 1]
                });
                return () => controls.stop();
            }, delay * 1000);
            return () => clearTimeout(timer);
        }
    }, [value, delay, isInView]);

    return (
        <span ref={ref} className="font-black tracking-tighter tabular-nums text-inherit">
            {count}{suffix}
        </span>
    );
};

export default function ClientTicker() {
    const [row1, setRow1] = useState<string[]>([]);
    const [row2, setRow2] = useState<string[]>([]);

    useEffect(() => {
        // Distribute ALL clients across two rows
        const half = Math.ceil(allClients.length / 2);
        setRow1(allClients.slice(0, half));
        setRow2(allClients.slice(half));
    }, []);

    if (row1.length === 0) return null;

    return (
        <section className="py-24 bg-slate-200 overflow-hidden relative border-y border-slate-300/50">
            {/* Background elements - Subtle Technical Feel */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `radial-gradient(#305196 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }}></div>

            <div className="container mx-auto px-6 text-center mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-300 shadow-sm mb-6"
                >
                    <Star size={14} className="text-secondary" fill="currentColor" />
                    <span className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">Global Network</span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
                    Trusted By <span className="text-primary">Industry Leaders</span>
                </h2>
                <div className="w-24 h-1.5 bg-primary rounded-full mx-auto" />
            </div>

            <div className="flex flex-col gap-10 mb-24 relative z-10">
                {/* Row 1: Left to Right */}
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-10 whitespace-nowrap will-change-transform"
                        animate={{ x: [0, -1500] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                    >
                        {[...row1, ...row1, ...row1, ...row1].map((logo, index) => (
                            <div key={index} className="flex items-center justify-center w-32 h-20 lg:w-40 lg:h-22 xl:w-48 xl:h-24 bg-white rounded-xl md:rounded-2xl border border-slate-300 shadow-md hover:border-primary/50 transition-all group overflow-hidden p-4 lg:p-5 xl:p-6 hover:shadow-xl hover:shadow-primary/10">
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
                        animate={{ x: [-1500, 0] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
                    >
                        {[...row2, ...row2, ...row2, ...row2].map((logo, index) => (
                            <div key={index} className="flex items-center justify-center w-32 h-20 lg:w-40 lg:h-22 xl:w-48 xl:h-24 bg-white rounded-xl md:rounded-2xl border border-slate-300 shadow-md hover:border-primary/50 transition-all group overflow-hidden p-4 lg:p-5 xl:p-6 hover:shadow-xl hover:shadow-primary/10">
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
                        className="py-12 px-4 rounded-[2.5rem] bg-white border border-slate-300 text-center group hover:bg-primary hover:border-primary transition-all duration-500 shadow-lg hover:shadow-2xl"
                    >
                        <div className="text-4xl lg:text-5xl xl:text-7xl font-black text-slate-900 group-hover:text-white mb-4 flex justify-center tracking-tighter transition-colors">
                            <Counter value={500} suffix="+" />
                        </div>
                        <p className="text-slate-500 group-hover:text-white font-black uppercase tracking-widest text-[10px] md:text-xs transition-colors">Projects Completed</p>
                    </motion.div>

                    {/* Average Savings */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="py-12 px-4 rounded-[2.5rem] bg-white border border-slate-300 text-center group hover:bg-primary hover:border-primary transition-all duration-500 shadow-lg hover:shadow-2xl"
                    >
                        <div className="text-4xl lg:text-5xl xl:text-7xl font-black text-slate-900 group-hover:text-white mb-4 flex justify-center tracking-tighter transition-colors">
                            <Counter value={30} suffix="%" />
                        </div>
                        <p className="text-slate-500 group-hover:text-white font-black uppercase tracking-widest text-[10px] md:text-xs transition-colors">Average Savings</p>
                    </motion.div>

                    {/* Client Satisfaction */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="py-12 px-4 rounded-[2.5rem] bg-white border border-slate-300 text-center group hover:bg-primary hover:border-primary transition-all duration-500 shadow-lg hover:shadow-2xl"
                    >
                        <div className="text-4xl lg:text-5xl xl:text-7xl font-black text-slate-900 group-hover:text-white mb-4 flex justify-center tracking-tighter transition-colors">
                            <Counter value={100} suffix="%" />
                        </div>
                        <p className="text-slate-500 group-hover:text-white font-black uppercase tracking-widest text-[10px] md:text-xs transition-colors">Client Satisfaction</p>
                    </motion.div>

                    {/* Expert Support */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="py-12 px-4 rounded-[2.5rem] bg-white border border-slate-300 text-center group hover:bg-primary hover:border-primary transition-all duration-500 shadow-lg hover:shadow-2xl"
                    >
                        <div className="text-4xl lg:text-5xl xl:text-7xl font-black text-slate-900 group-hover:text-white mb-4 flex justify-center tracking-tighter transition-colors">
                            <span className="font-black tracking-tighter">24/7</span>
                        </div>
                        <p className="text-slate-500 group-hover:text-white font-black uppercase tracking-widest text-[10px] md:text-xs transition-colors">Expert Support</p>
                    </motion.div>
                </div>

                <div className="flex justify-center">
                    <Link href="/clients" className="group relative inline-flex items-center gap-5 bg-slate-900 text-white border-2 border-slate-900 px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-slate-900 transition-all shadow-xl active:scale-95">
                        <span>View All Clients</span>
                        <ArrowRight className="group-hover:translate-x-3 transition-transform duration-500" size={22} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
