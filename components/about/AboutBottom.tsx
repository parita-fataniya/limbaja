"use client";

import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

export function Vision() {
    return (
        <section className="py-24 bg-[#0f172a] relative overflow-hidden flex items-center justify-center text-center">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800/50 via-slate-900 to-slate-900"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <Quote className="text-[#0ea5e9]/20 w-20 h-20 mx-auto mb-6" />
                    <span className="text-sm font-bold tracking-[0.3em] text-[#22c55e] uppercase mb-6 block">Our Vision</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight tracking-wide font-sans">
                        "To enable industries to grow <span className="font-bold text-white">profitably</span> while conserving energy resources and contributing to a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#0ea5e9]">sustainable future</span>."
                    </h2>
                </motion.div>
            </div>
        </section>
    );
}

export function AboutCTA() {
    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="relative overflow-hidden rounded-3xl bg-[#0ea5e9] shadow-2xl">

                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-black/10 blur-3xl"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-12 md:p-16 gap-8 text-center md:text-left">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Ready to optimize your energy consumption?
                            </h2>
                            <p className="text-blue-100 text-lg">
                                Join hundreds of industries saving millions in energy costs. Let's start with a comprehensive audit.
                            </p>
                        </div>
                        <div className="shrink-0">
                            <Link
                                href="/contact-us"
                                className="group inline-flex items-center gap-2 bg-white text-[#0ea5e9] px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                Request Energy Audit
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
