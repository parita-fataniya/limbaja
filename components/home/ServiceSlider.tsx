"use client";

import { useRef } from "react";
import { ArrowRight, FileText, Zap, Activity, Wind, Thermometer, Settings } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        icon: FileText,
        title: "Detailed Energy Audit",
        desc: "Comprehensive analysis of energy use to identify savings.",
        link: "/service#detailed-energy-audit"
    },
    {
        icon: Zap,
        title: "Energy Conservation",
        desc: "Strategies to reduce consumption and carbon footprint.",
        link: "/service#energy-conservation"
    },
    {
        icon: Activity,
        title: "Harmonic Analysis",
        desc: "Study power quality and mitigate harmonic distortion.",
        link: "/service#harmonic-analysis"
    },
    {
        icon: Wind,
        title: "Compressor Audit",
        desc: "Air flow efficiency and leakage detection.",
        link: "/service#compressor-audit"
    },
    {
        icon: Thermometer,
        title: "Thermography",
        desc: "Non-contact thermal inspection of systems.",
        link: "/service#thermography"
    },
    {
        icon: Settings,
        title: "Motor Efficiency",
        desc: "Analysis of electrical motor performance.",
        link: "/service#motor"
    }
];

export default function ServiceSlider() {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 mb-10 flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">Our <span className="text-[#0ea5e9]">Services</span></h2>
                    <p className="text-slate-600">Expert solutions for every energy need.</p>
                </div>
                <div className="hidden md:flex gap-2">
                    <button
                        onClick={() => scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
                        className="p-2 border border-slate-300 rounded-full hover:bg-white transition-colors"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
                        className="p-2 border border-slate-300 rounded-full hover:bg-white transition-colors"
                    >
                        →
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 pb-8 px-6 container mx-auto snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all snap-center group"
                    >
                        <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-[#0ea5e9] mb-6 group-hover:bg-[#0ea5e9] group-hover:text-white transition-colors duration-300">
                            <service.icon size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#0ea5e9] transition-colors">{service.title}</h3>
                        <p className="text-slate-500 mb-6 text-sm leading-relaxed">{service.desc}</p>
                        <Link href={service.link} className="inline-flex items-center text-sm font-bold text-slate-700 hover:text-[#0ea5e9] transition-colors gap-2">
                            Read More <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
