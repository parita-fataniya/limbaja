"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { services } from "../ServiceData";

export default function ServiceDetailClient({ id }: { id: string }) {
    const service = services.find((s) => s.id === id);
    const [activeSubTab, setActiveSubTab] = useState(0);

    if (!service) {
        return (
            <div className="min-h-screen grid place-items-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-900">Service Not Found</h1>
                    <Link href="/service" className="text-[var(--primary)] hover:underline mt-4 inline-block">
                        Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 min-h-screen pb-20 font-sans">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] bg-slate-900 overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full z-10">
                    <div className="container mx-auto px-6 pb-12">
                        <Link
                            href="/service"
                            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors backdrop-blur-md bg-white/10 px-4 py-2 rounded-full border border-white/10"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Services
                        </Link>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-[var(--primary)] text-white rounded-xl shadow-lg shadow-[var(--primary)]/30">
                                <service.icon className="w-8 h-8 md:w-10 md:h-10" />
                            </div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
                            >
                                {service.title}
                            </motion.h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-10 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="grid md:grid-cols-3 gap-0">

                        {/* Main Content Area */}
                        <div className="md:col-span-2 p-8 md:p-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                Overview
                                <div className="h-px flex-grow bg-slate-100 ml-4"></div>
                            </h2>

                            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                                {service.description}
                            </p>

                            {/* Dynamic Content Switching */}
                            {service.sections ? (
                                <div className="space-y-12">
                                    {service.sections.map((section: any, idx: number) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            {section.title && (
                                                <h3 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-[var(--primary)] pl-4">
                                                    {section.title}
                                                </h3>
                                            )}

                                            {/* TEXT TYPE */}
                                            {section.type === "text" && (
                                                <div className="space-y-4">
                                                    {section.content.map((text: string, i: number) => (
                                                        <p key={i} className="text-slate-600 leading-relaxed text-lg">
                                                            {text}
                                                        </p>
                                                    ))}
                                                </div>
                                            )}

                                            {/* LIST TYPE */}
                                            {section.type === "list" && (
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    {section.items.map((item: string, i: number) => (
                                                        <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                            <div className="p-1 mt-0.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                                                                <CheckCircle2 className="w-5 h-5" />
                                                            </div>
                                                            <span className="font-medium text-slate-700">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* DIAGRAM CENTER TYPE */}
                                            {section.type === "diagram-center" && (
                                                <div className="relative py-12 flex justify-center items-center">
                                                    {/* Center Circle */}
                                                    <div className="relative z-10 w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4 text-center shadow-xl border-4 border-white ring-4 ring-slate-100">
                                                        <h4 className="text-white font-bold text-lg md:text-xl leading-tight">
                                                            {section.centerText}
                                                        </h4>
                                                    </div>

                                                    {/* Radiating Items */}
                                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                        {section.items.map((item: string, i: number) => {
                                                            const total = section.items.length;
                                                            const angle = (i * (360 / total) - 90) * (Math.PI / 180); // Start from top
                                                            const radius = 160; // Distance from center
                                                            const x = Math.cos(angle) * radius;
                                                            const y = Math.sin(angle) * radius;

                                                            // CSS variables for positioning would be ideal, but inline style works for dynamic calculation
                                                            return (
                                                                <motion.div
                                                                    key={i}
                                                                    initial={{ opacity: 0, scale: 0 }}
                                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                                    transition={{ delay: 0.2 + (i * 0.05) }}
                                                                    className="absolute w-32 md:w-40"
                                                                    style={{
                                                                        transform: `translate(${x}px, ${y}px)`,
                                                                    }}
                                                                >
                                                                    <div className="bg-white p-3 rounded-lg shadow-md border border-slate-200 text-center text-sm font-semibold text-slate-800 relative group cursor-default hover:-translate-y-1 transition-transform pointer-events-auto">
                                                                        {item}
                                                                        {/* Connector Line (pseudo-element in simplified inline style concept) */}
                                                                        <div
                                                                            className="absolute bg-slate-200 -z-10"
                                                                            style={{
                                                                                // Simple manual positioning is tricky without trig for lines. 
                                                                                // Alternative: Use a subtle grid or just let them float.
                                                                                // Let's rely on the circular arrangement visual.
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </motion.div>
                                                            );
                                                        })}
                                                    </div>
                                                    {/* Background Decoration */}
                                                    <div className="absolute inset-0 m-auto w-[350px] h-[350px] rounded-full border border-dashed border-slate-200 animate-spin-slow opacity-50" style={{ animationDuration: "20s" }}></div>
                                                </div>
                                            )}

                                            {/* KEY-VALUE TYPE */}
                                            {section.type === "key-value" && (
                                                <div className="grid gap-4">
                                                    {section.items.map((item: any, i: number) => (
                                                        <div key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md transition-all">
                                                            <div className="font-bold text-[var(--primary)] min-w-[150px] uppercase tracking-wider text-sm">
                                                                {item.key}
                                                            </div>
                                                            <div className="hidden md:block w-px h-8 bg-slate-200"></div>
                                                            <div className="text-slate-600 font-medium">
                                                                {item.value}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* NESTED CONTENT TYPE */}
                                            {section.type === "nested-content" && (
                                                <div className="space-y-8">
                                                    {section.sections.map((sub: any, i: number) => (
                                                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                                            <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                                                <span className="w-2 h-8 bg-[var(--secondary)] rounded-full"></span>
                                                                {sub.subtitle}
                                                            </h4>
                                                            <ul className="space-y-3 pl-4">
                                                                {sub.items.map((item: string, j: number) => (
                                                                    <li key={j} className="flex items-start gap-3 text-slate-600">
                                                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0"></span>
                                                                        <span className="leading-relaxed">{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            ) : service.hasSubTabs && service.subTabs ? (
                                <div className="bg-slate-50 rounded-2xl p-2 border border-slate-100">
                                    <div className="flex overflow-x-auto gap-2 pb-2 md:pb-0 mb-6 px-2 pt-2 scrollbar-none">
                                        {service.subTabs.map((tab, idx) => (
                                            <button
                                                key={tab.id}
                                                onClick={() => setActiveSubTab(idx)}
                                                className={`px-5 py-2.5 whitespace-nowrap rounded-xl text-sm font-bold transition-all ${activeSubTab === idx
                                                        ? "bg-white text-[var(--primary)] shadow-md"
                                                        : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                                                    }`}
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="bg-white rounded-xl p-8 shadow-sm min-h-[300px] border border-slate-100 flex flex-col md:flex-row gap-8 items-start">
                                        <div className="w-full md:w-1/2 relative h-48 md:h-64 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                                            <Image
                                                src={service.subTabs[activeSubTab].image || service.image}
                                                alt={service.subTabs[activeSubTab].label}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.subTabs[activeSubTab].label}</h3>
                                            <p className="text-slate-600 leading-relaxed">{service.subTabs[activeSubTab].content}</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid gap-4">
                                    {service.content?.map((item, idx) => (
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            key={idx}
                                            className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-white hover:shadow-md transition-all border border-slate-100"
                                        >
                                            <div className="p-2 bg-[var(--secondary)]/10 rounded-full text-[var(--secondary)] shrink-0 mt-0.5">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Sidebar / Call to Action */}
                        <div className="bg-slate-50 border-l border-slate-100 p-8 md:p-12 flex flex-col">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8">
                                <h3 className="font-bold text-slate-900 mb-2">Need Expert Advice?</h3>
                                <p className="text-sm text-slate-500 mb-6">Our energy engineers are ready to help you optimize this system.</p>
                                <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
                                    Book Consultation
                                </button>
                            </div>

                            <div className="mt-auto">
                                <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Related Services</div>
                                <div className="space-y-4">
                                    {services.filter(s => s.id !== service.id).slice(0, 3).map(s => (
                                        <Link
                                            href={`/service/${s.id}`}
                                            key={s.id}
                                            className="flex items-center gap-3 group"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-[var(--primary)] group-hover:border-[var(--primary)] transition-colors">
                                                <s.icon className="w-5 h-5" />
                                            </div>
                                            <div className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                                                {s.title}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
