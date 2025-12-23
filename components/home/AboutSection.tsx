"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Zap, Factory, Leaf, TrendingUp, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const InfoCard = ({ icon: Icon, title, desc, index }: { icon: any, title: string, desc: string, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
        >
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#0ea5e9] mb-4 shadow-sm group-hover:bg-[#0ea5e9] group-hover:text-white transition-all duration-500">
                <Icon size={24} strokeWidth={2} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
        </motion.div>
    );
};

export default function AboutSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle Professional Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/30 -skew-x-6 translate-x-1/4 -z-10 border-l border-slate-100"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Column: Visual Grid of Features */}
                    <div className="w-full lg:w-5/12 order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-4">
                            <InfoCard
                                icon={Zap}
                                title="Optimization"
                                desc="Maximizing electrical and thermal efficiency across all systems."
                                index={0}
                            />
                            <div className="pt-8">
                                <InfoCard
                                    icon={Factory}
                                    title="Industrial"
                                    desc="Deep expertise in diverse industrial processes and large facilities."
                                    index={1}
                                />
                            </div>
                            <InfoCard
                                icon={Leaf}
                                title="Sustainability"
                                desc="Reducing footprint while increasing operational yields and savings."
                                index={2}
                            />
                            <div className="pt-8">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="h-full p-8 rounded-3xl bg-slate-900 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/20 to-transparent"></div>
                                    <TrendingUp className="text-[#0ea5e9] mb-4 relative z-10 group-hover:scale-110 transition-transform duration-500" size={32} />
                                    <span className="text-5xl font-black text-white mb-1 relative z-10 leading-none">10+</span>
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 relative z-10">Years of Impact</p>

                                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#0ea5e9]/10 blur-xl rounded-full"></div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Narrative Corporate Content */}
                    <div className="w-full lg:w-7/12 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-px w-10 bg-[#0ea5e9] rounded-full"></span>
                                <span className="text-[#0ea5e9] font-black text-[12px] uppercase tracking-[0.5em]">Who We Are</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                                Delivering Excellence via <span className="text-[#0ea5e9] relative">
                                    Strategic
                                    <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                                        <path d="M0 7C30 7 70 2 100 2" stroke="#0ea5e9" strokeWidth="4" fill="transparent" strokeLinecap="round" opacity="0.2" />
                                    </svg>
                                </span> Energy Audit.
                            </h2>

                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-12 border-l-4 border-slate-100 pl-8">
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="font-bold text-slate-800 text-xl italic leading-snug"
                                >
                                    "Limbaja Energy is committed to helping clients achieve energy savings through precision measurement and expert analysis."
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    As energy costs rise and natural resources diminish, prudent energy usage has become a critical business imperative. We provide complete end-to-end solutions—from conceptualization and measurement to feasibility analysis and implementation support for energy saving.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    Our qualified team of certified Energy Auditors and Engineers has extensive experience across various industries and facilities, identifying where energy cost reduction potential is highest.
                                </motion.p>
                            </div>

                            <div className="flex flex-wrap gap-8 items-center pt-2">
                                <Link href="/about-us" className="group relative inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#0ea5e9] transition-all shadow-xl hover:shadow-[#0ea5e9]/20">
                                    <span>Learn More</span>
                                    <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" size={18} />
                                </Link>

                                <div className="flex items-center gap-4 py-3 border-b-2 border-slate-50">
                                    <div className="w-10 h-10 bg-[#0ea5e9]/10 rounded-full flex items-center justify-center">
                                        <ShieldCheck className="text-[#0ea5e9]" size={22} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-slate-900 text-[10px] font-black uppercase tracking-widest">Certified Team</span>
                                        <span className="text-slate-400 text-[9px] uppercase font-bold tracking-wider">Expert Auditing Auditors</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
