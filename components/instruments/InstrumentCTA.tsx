"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InstrumentCTA() {
    return (
        <section className="py-24 bg-[#0f172a] text-center relative overflow-hidden">
             {/* Abstract blobs */}
             <div className="absolute top-0 left-0 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#22c55e]/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
                    Want an Accurate Energy Audit Backed by Advanced Instruments?
                </h2>
                <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-[#0ea5e9] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#0284c7] hover:scale-105 transition-all shadow-xl shadow-blue-500/20 group"
                >
                    Schedule an Energy Audit
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </section>
    );
}
