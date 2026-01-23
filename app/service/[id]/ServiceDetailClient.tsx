"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Zap } from "lucide-react";
import { services } from "../ServiceData";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { AnimatedSectionHeader } from "@/components/ui/AnimatedSectionHeader";

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
        <div className="bg-slate-50 min-h-screen pb-20 font-sans selection:bg-[var(--primary)]/30 relative overflow-hidden">
            {/* Premium Background Pattern */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            {/* Scroll Progress Indicator */}
            <ScrollProgress />

            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] bg-slate-900 overflow-hidden z-20">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                {/* Optional Hero Background Image if available, or abstract pattern */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-6 font-medium animate-fade-in-up">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>&gt;</span>
                        <Link href="/service" className="hover:text-white transition-colors">Our Services</Link>
                        <span>&gt;</span>
                        <span className="text-white">{service.title}</span>
                    </nav>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in-up delay-100">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-sm"
                        >
                            {service.title}
                        </motion.h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-10 relative z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-100/50 overflow-hidden">


                    {/* Main Content Area */}
                    <div className="p-8 md:p-12 lg:p-16">
                        <div className="flex flex-col md:flex-row gap-10 items-stretch mb-16">
                            {/* Service Image (Left Side) - Parallax/Scale Effect */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, x: -20 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative w-full md:w-[480px] h-[300px] md:h-auto min-h-[300px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 shrink-0 group"
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    quality={100}
                                    priority
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="flex-1 flex flex-col justify-center"
                            >
                                <AnimatedSectionHeader title="Overview" icon={Zap} className="mb-6" />
                                <p className="text-lg text-slate-600 leading-8 font-medium text-left whitespace-pre-line">
                                    {service.description}
                                </p>
                            </motion.div>
                        </div>

                        {/* Dynamic Content Switching */}
                        {service.sections ? (
                            <div className="space-y-16">
                                {service.sections.map((section: any, idx: number) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                    >
                                        {section.title && (
                                            <div className="max-w-4xl mx-auto">
                                                <AnimatedSectionHeader title={section.title} className="mb-8" />
                                            </div>
                                        )}

                                        {/* IMAGE TYPE */}
                                        {section.type === "image" && (
                                            <div className={`w-full ${section.variant === 'logo' ? 'max-w-[200px]' : 'max-w-4xl'} mx-auto my-8 group`}>
                                                <div className={`relative w-full ${section.variant === 'logo' ? 'aspect-square' : 'aspect-video'} rounded-2xl overflow-hidden shadow-lg border border-slate-100`}>
                                                    <Image
                                                        src={section.image}
                                                        alt={section.alt || section.title || "Service Image"}
                                                        fill
                                                        className="object-contain bg-slate-50 transition-transform duration-700 group-hover:scale-[1.02]"
                                                    />
                                                </div>
                                                {section.title && (
                                                    <div className="mt-4 text-center">
                                                        <p className="text-sm font-medium text-slate-500 italic">{section.title}</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* IMAGE ROW TYPE */}
                                        {section.type === "image-row" && section.images && (
                                            <div className="grid md:grid-cols-2 gap-8 my-8">
                                                {section.images.map((img: any, i: number) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: i * 0.2 }}
                                                        className="flex flex-col items-center group"
                                                    >
                                                        <div className={`relative w-full ${img.variant === 'logo' ? 'aspect-square max-w-[200px] mx-auto' : 'aspect-video'} rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-500`}>
                                                            <Image
                                                                src={img.url}
                                                                alt={img.alt || img.title || "Service Image"}
                                                                fill
                                                                className="object-contain transition-transform duration-700 group-hover:scale-105"
                                                            />
                                                        </div>
                                                        {img.title && (
                                                            <div className="mt-4 text-center">
                                                                <p className="text-base font-bold text-slate-700 group-hover:text-[var(--primary)] transition-colors">{img.title}</p>
                                                            </div>
                                                        )}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}

                                        {/* TEXT TYPE */}
                                        {section.type === "text" && (
                                            <div className="space-y-6 max-w-4xl mx-auto">
                                                {section.content.map((text: string, i: number) => (
                                                    <p key={i} className="text-slate-600 leading-8 text-lg">
                                                        {text}
                                                    </p>
                                                ))}
                                            </div>
                                        )}

                                        {/* LIST TYPE */}
                                        {section.type === "list" && (
                                            <div className="grid md:grid-cols-2 gap-5 my-8">
                                                {section.items.map((item: string, i: number) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: i * 0.05 }}
                                                        className="flex items-start gap-4 bg-slate-50/50 p-5 rounded-xl border border-slate-100 hover:bg-white hover:shadow-lg hover:border-[var(--primary)]/30 hover:-translate-y-1 transition-all duration-300 group"
                                                    >
                                                        <div className="p-1.5 mt-0.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] shrink-0 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                                                            <CheckCircle2 className="w-5 h-5" />
                                                        </div>
                                                        <span className="font-medium text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">{item}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}

                                        {/* DIAGRAM CENTER TYPE */}
                                        {section.type === "diagram-center" && (
                                            <div className="relative py-20 flex justify-center items-center my-10 overflow-hidden">
                                                {/* Center Circle */}
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                                                    className="relative z-10 w-48 h-48 md:w-56 md:h-56 rounded-full bg-slate-900 flex items-center justify-center p-6 text-center shadow-2xl border-4 border-white ring-4 ring-slate-100"
                                                >
                                                    <h4 className="text-white font-bold text-xl md:text-2xl leading-tight">
                                                        {section.centerText}
                                                    </h4>
                                                </motion.div>

                                                {/* Radiating Items */}
                                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                    {section.items.map((item: string, i: number) => {
                                                        const total = section.items.length;
                                                        const angle = (i * (360 / total) - 90) * (Math.PI / 180);
                                                        const radius = 200;
                                                        const x = Math.cos(angle) * radius;
                                                        const y = Math.sin(angle) * radius;

                                                        return (
                                                            <motion.div
                                                                key={i}
                                                                initial={{ opacity: 0, scale: 0 }}
                                                                whileInView={{ opacity: 1, scale: 1 }}
                                                                transition={{ delay: 0.4 + (i * 0.1), type: "spring" }}
                                                                className="absolute w-40 md:w-48 hidden md:block"
                                                                style={{
                                                                    transform: `translate(${x}px, ${y}px)`,
                                                                }}
                                                            >
                                                                <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 text-center text-sm font-bold text-slate-800 relative group cursor-pointer hover:-translate-y-2 hover:shadow-xl hover:border-[var(--primary)] transition-all pointer-events-auto z-20">
                                                                    {item}
                                                                </div>
                                                            </motion.div>
                                                        );
                                                    })}
                                                </div>

                                                {/* Mobile Fallback List */}
                                                <div className="md:hidden mt-8 grid gap-3 w-full max-w-sm">
                                                    {section.items.map((item: string, i: number) => (
                                                        <div key={i} className="bg-white border border-slate-200 p-3 rounded-lg text-center font-medium shadow-sm">
                                                            {item}
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Background Decoration */}
                                                <div className="absolute inset-0 m-auto w-[450px] h-[450px] rounded-full border border-dashed border-slate-300 animate-spin-slow opacity-30 pointer-events-none" style={{ animationDuration: "30s" }}></div>
                                                <div className="absolute inset-0 m-auto w-[350px] h-[350px] rounded-full border border-slate-100 opacity-60 pointer-events-none"></div>
                                            </div>
                                        )}

                                        {/* KEY-VALUE TYPE */}
                                        {section.type === "key-value" && (
                                            <div className="grid gap-4 md:grid-cols-2">
                                                {section.items.map((item: any, i: number) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: i * 0.1 }}
                                                        className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-6 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg hover:border-[var(--primary)]/20 transition-all group"
                                                    >
                                                        <div className="font-bold text-[var(--primary)] min-w-[140px] uppercase tracking-wider text-xs sm:text-sm">
                                                            {item.key}
                                                        </div>
                                                        <div className="hidden sm:block w-px h-8 bg-slate-200 group-hover:bg-[var(--primary)]/30 transition-colors"></div>
                                                        <div className="text-slate-700 font-medium text-lg">
                                                            {item.value}
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}

                                        {/* TABLE TYPE */}
                                        {section.type === "table" && (
                                            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl my-8 bg-white ring-1 ring-slate-100">
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-left text-sm text-slate-600">
                                                        <thead className="bg-slate-50 text-slate-900 font-bold uppercase tracking-wider border-b border-slate-200">
                                                            <tr>
                                                                {section.headers.map((header: string, i: number) => (
                                                                    <th key={i} className="px-6 py-5 whitespace-nowrap">
                                                                        {header}
                                                                    </th>
                                                                ))}
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-slate-100 bg-white">
                                                            {section.rows.map((row: string[], i: number) => (
                                                                <motion.tr
                                                                    key={i}
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    whileInView={{ opacity: 1, x: 0 }}
                                                                    viewport={{ once: true }}
                                                                    transition={{ delay: i * 0.05 }}
                                                                    className="hover:bg-[var(--primary)]/5 hover:relative hover:z-10 transition-colors group"
                                                                >
                                                                    {row.map((cell: string, j: number) => (
                                                                        <td key={j} className="px-6 py-4 font-medium whitespace-pre-wrap group-hover:text-slate-900 transition-colors">
                                                                            {cell}
                                                                        </td>
                                                                    ))}
                                                                </motion.tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        )}

                                        {/* NESTED CONTENT TYPE */}
                                        {section.type === "nested-content" && (
                                            <div className={section.grid ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-10"}>
                                                {section.sections.map((sub: any, i: number) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, y: 30 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: i * 0.2 }}
                                                        viewport={{ once: true }}
                                                        className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
                                                    >
                                                        <h4 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                                            <span className="w-1.5 h-8 bg-[var(--secondary)] rounded-full"></span>
                                                            {sub.subtitle}
                                                        </h4>
                                                        {sub.items && (
                                                            <ul className="space-y-4 pl-2 mb-8">
                                                                {sub.items.map((item: string, j: number) => (
                                                                    <li key={j} className="flex items-start gap-4 text-slate-600 group">
                                                                        <span className="mt-2.5 w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[var(--secondary)] transition-colors flex-shrink-0"></span>
                                                                        <span className="leading-relaxed group-hover:text-slate-900 transition-colors text-lg">{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {sub.image && (
                                                            <div className="mt-6 rounded-2xl overflow-hidden shadow-inner border border-slate-100">
                                                                <Image
                                                                    src={sub.image}
                                                                    alt={sub.subtitle}
                                                                    width={800}
                                                                    height={500}
                                                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                                                />
                                                            </div>
                                                        )}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        ) : service.hasSubTabs && service.subTabs ? (
                            <div className="bg-slate-50 rounded-3xl p-3 border border-slate-100">
                                <div className="flex overflow-x-auto gap-3 pb-2 mb-6 px-1 pt-1 scrollbar-none">
                                    {service.subTabs.map((tab, idx) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveSubTab(idx)}
                                            className={`px-6 py-3 whitespace-nowrap rounded-2xl text-sm font-bold transition-all shadow-sm ${activeSubTab === idx
                                                ? "bg-white text-[var(--primary)] shadow-md translate-y-[-2px]"
                                                : "text-slate-500 hover:text-slate-700 hover:bg-white/60"
                                                }`}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>

                                <motion.div
                                    key={activeSubTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="bg-white rounded-2xl p-8 md:p-12 shadow-sm min-h-[400px] border border-slate-100 flex flex-col md:flex-row gap-10 items-start"
                                >
                                    <div className="w-full md:w-1/2 relative h-56 md:h-72 rounded-xl overflow-hidden bg-slate-100 shrink-0 shadow-md">
                                        <Image
                                            src={service.subTabs[activeSubTab].image || service.image}
                                            alt={service.subTabs[activeSubTab].label}
                                            fill
                                            className="object-cover hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.subTabs[activeSubTab].label}</h3>
                                        <p className="text-slate-600 leading-relaxed text-lg">{service.subTabs[activeSubTab].content}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ) : (
                            <div className="grid gap-4">
                                {service.content?.map((item, idx) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        key={idx}
                                        className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg transition-all border border-slate-100 group"
                                    >
                                        <div className="p-2 bg-[var(--secondary)]/10 rounded-full text-[var(--secondary)] shrink-0 mt-0.5 group-hover:bg-[var(--secondary)] group-hover:text-white transition-colors">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <span className="text-slate-700 font-medium leading-relaxed text-lg group-hover:text-slate-900 transition-colors">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Related Services Footer Section */}
                    <div className="bg-slate-50/80 border-t border-slate-100 p-8 md:p-12 backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
                            <h3 className="text-2xl font-bold text-slate-900 border-l-4 border-[var(--primary)] pl-4">Explore Related Services</h3>
                            <Link href="/service" className="hidden md:block text-slate-500 hover:text-[var(--primary)] font-medium transition-colors">
                                View All Services &rarr;
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.filter(s => s.id !== service.id).slice(0, 4).map((s, idx) => (
                                <Link
                                    href={`/service/${s.id}`}
                                    key={s.id}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:border-[var(--primary)]/30 hover:-translate-y-2 transition-all duration-300 relative"
                                >
                                    <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                                        <Image
                                            src={s.image}
                                            alt={s.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                            quality={100}
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                            <span className="text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Details</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-lg font-bold text-slate-800 group-hover:text-[var(--primary)] transition-colors mb-3 line-clamp-2 leading-tight">
                                            {s.title}
                                        </div>
                                        <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                                            {s.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <Link href="/service" className="md:hidden block w-full mt-8 py-4 text-center border border-slate-200 bg-white rounded-xl text-slate-600 font-bold shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-colors">
                            View All Services
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
