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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

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
                            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                        >
                            {service.title}
                        </motion.h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-10 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">


                    {/* Main Content Area */}
                    <div className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row gap-8 items-stretch mb-10">
                            {/* Service Image (Left Side) */}
                            <div className="relative w-full md:w-[450px] h-[220px] md:h-auto min-h-[220px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 shrink-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-contain"
                                    quality={100}
                                    priority
                                    unoptimized
                                />
                            </div>

                            <div className="flex-1">
                                <p className="text-lg text-slate-600 leading-relaxed font-medium text-left whitespace-pre-line">
                                    {service.description}
                                </p>
                            </div>
                        </div>

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

                                        {/* IMAGE TYPE */}
                                        {section.type === "image" && (
                                            <div className="w-full max-w-4xl mx-auto my-8">
                                                <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                                                    <Image
                                                        src={section.image}
                                                        alt={section.alt || section.title || "Service Image"}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                                {section.title && (
                                                    <div className="mt-2 text-center">
                                                        <p className="text-sm font-medium text-slate-600">{section.title}</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* IMAGE ROW TYPE */}
                                        {section.type === "image-row" && section.images && (
                                            <div className="grid md:grid-cols-2 gap-8 my-8">
                                                {section.images.map((img: any, i: number) => (
                                                    <div key={i} className="flex flex-col items-center">
                                                        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                                                            <Image
                                                                src={img.url}
                                                                alt={img.alt || img.title || "Service Image"}
                                                                fill
                                                                className="object-contain"
                                                            />
                                                        </div>
                                                        {img.title && (
                                                            <div className="mt-3 text-center">
                                                                <p className="text-sm font-bold text-slate-700">{img.title}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
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

                                        {/* TABLE TYPE */}
                                        {section.type === "table" && (
                                            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm my-6">
                                                <table className="w-full text-left text-sm text-slate-600">
                                                    <thead className="bg-slate-50 text-slate-900 font-bold uppercase tracking-wider">
                                                        <tr>
                                                            {section.headers.map((header: string, i: number) => (
                                                                <th key={i} className="px-6 py-4 border-b border-slate-200 whitespace-nowrap">
                                                                    {header}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-slate-100 bg-white">
                                                        {section.rows.map((row: string[], i: number) => (
                                                            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                                                {row.map((cell: string, j: number) => (
                                                                    <td key={j} className="px-6 py-4 font-medium whitespace-pre-wrap">
                                                                        {cell}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
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
                                                        {sub.image && (
                                                            <div className="mt-6 rounded-xl overflow-hidden">
                                                                <Image
                                                                    src={sub.image}
                                                                    alt={sub.subtitle}
                                                                    width={800}
                                                                    height={500}
                                                                    className="w-full h-auto object-contain"
                                                                />
                                                            </div>
                                                        )}
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

                    {/* Related Services Footer Section */}
                    <div className="bg-slate-50 border-t border-slate-100 p-8 md:p-12">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-slate-900">Explore Related Services</h3>
                            <Link href="/service" className="hidden md:block text-slate-500 hover:text-[var(--primary)] font-medium transition-colors">
                                View All Services &rarr;
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {services.filter(s => s.id !== service.id).slice(0, 4).map(s => (
                                <Link
                                    href={`/service/${s.id}`}
                                    key={s.id}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:border-[var(--primary)]/30 transition-all duration-300"
                                >
                                    <div className="relative h-40 w-full bg-slate-100 overflow-hidden">
                                        <Image
                                            src={s.image}
                                            alt={s.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                            quality={100}
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="p-5">
                                        <div className="text-base font-bold text-slate-800 group-hover:text-[var(--primary)] transition-colors mb-2 line-clamp-2">
                                            {s.title}
                                        </div>
                                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                                            {s.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <Link href="/service" className="md:hidden block w-full mt-6 py-3 text-center border border-slate-200 bg-white rounded-xl text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors">
                            View All Services
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
