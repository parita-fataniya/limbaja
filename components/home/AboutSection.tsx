"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Text Content */}
                    <div className="w-full md:w-1/2">
                        <div className="inline-block px-3 py-1 mb-4 border border-blue-100 rounded-full bg-blue-50">
                            <span className="text-[#3154a5] text-xs font-bold tracking-widest uppercase">Who We Are</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                            Leading Energy <span className="text-[#75b745]">Efficiency</span> Solutions
                        </h2>
                        <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                            Limbaja Energy is a BEE Certified & Govt. Authorized Energy Auditor firm. We specialize in identifying energy wastage and providing actionable solutions to reduce costs and carbon footprint.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="text-[#75b745] mt-1 shrink-0 px-0" size={20} />
                                <span className="text-slate-700">Experienced BEE Certified Energy Auditors</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="text-[#75b745] mt-1 shrink-0" size={20} />
                                <span className="text-slate-700">Advanced Power Quality Analyzers & Instruments</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="text-[#75b745] mt-1 shrink-0" size={20} />
                                <span className="text-slate-700">Comprehensive audit reports with ROI analysis</span>
                            </div>
                        </div>

                        <Link href="/about-us" className="inline-flex items-center gap-2 text-[#3154a5] font-bold hover:gap-3 transition-all">
                            Read More About Us <ArrowRight size={20} />
                        </Link>
                    </div>

                    {/* Image / Visual - Simple Placeholder for consistency */}
                    <div className="w-full md:w-1/2">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
                            {/* Placeholder for About Image */}
                            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                                <span className="text-slate-400 font-medium">About Us Image</span>
                            </div>
                            {/* Styling decoration */}
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#0ea5e9]/10 rounded-full blur-2xl"></div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#22c55e]/10 rounded-full blur-2xl"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
