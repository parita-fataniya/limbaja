"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Vision() {
    return (
        <section className="py-24 bg-[#0f172a] relative overflow-hidden flex items-center justify-center text-center">
            {/* Abstract blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#0ea5e9]/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#22c55e]/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <span className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-4 block">Our Vision</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
                    "To enable industries to grow profitably while conserving energy resources and contributing to a sustainable future."
                </h2>
            </div>
        </section>
    );
}

export function AboutCTA() {
    return (
        <section className="py-20 bg-[#0ea5e9] text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to optimize your energy consumption?</h2>
                <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-white text-[#0ea5e9] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
                >
                    Request an Energy Audit <ArrowRight size={20} />
                </Link>
            </div>
        </section>
    );
}
