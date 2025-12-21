"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { services } from "./ServiceData";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServiceDashboard() {
    const [activeId, setActiveId] = useState(services[0].id);
    const [activeSubTab, setActiveSubTab] = useState(0);

    const activeService = services.find(s => s.id === activeId) || services[0];

    return (
        <div className="flex flex-col lg:flex-row gap-8 min-h-[800px]">
            {/* LEFT SIDEBAR: Navigation Deck */}
            <div className="lg:w-1/3 flex flex-col gap-2 relative z-10">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200 p-2 shadow-sm sticky top-24 max-h-[85vh] overflow-y-auto scrollbar-hide">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-4 py-3 mb-2">Service Modules</h3>
                    <div className="space-y-1">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => {
                                    setActiveId(service.id);
                                    setActiveSubTab(0); // Reset subtab on switch
                                }}
                                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 relative group flex items-center justify-between ${activeId === service.id ? "text-white shadow-md shadow-primary/25" : "text-slate-600 hover:bg-slate-50"
                                    }`}
                            >
                                {/* Animated Background for Active State */}
                                {activeId === service.id && (
                                    <motion.div
                                        layoutId="activeServiceBg"
                                        className="absolute inset-0 bg-primary rounded-xl"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                <span className="relative z-10 font-medium truncate pr-4">{service.title}</span>
                                {activeId === service.id && (
                                    <motion.span
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="relative z-10"
                                    >
                                        <ArrowRight size={16} />
                                    </motion.span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT PANEL: Sticky Detail Deck */}
            <div className="lg:w-2/3">
                <div className="sticky top-24">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeService.id}
                            initial={{ opacity: 0, x: 20, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -20, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative min-h-[600px] flex flex-col"
                        >
                            {/* Hero Image Section */}
                            <div className="relative h-64 md:h-80 w-full shrink-0">
                                {activeService.hasSubTabs ? (
                                    // Dynamic Image for Flow Measurement based on sub-tab
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeSubTab}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={activeService.subTabs![activeSubTab].image || activeService.image}
                                                alt={activeService.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                ) : (
                                    <Image
                                        src={activeService.image}
                                        alt={activeService.title}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

                                {/* Floating Icon & Title Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="flex items-center gap-4 mb-4"
                                    >
                                        <div className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white">
                                            <activeService.icon size={32} />
                                        </div>
                                        <div className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent"></div>
                                    </motion.div>
                                    <motion.h2
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-3xl md:text-5xl font-bold text-white mb-2"
                                    >
                                        {activeService.title}
                                    </motion.h2>
                                    <motion.p
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-slate-300 text-lg md:text-xl font-light"
                                    >
                                        {activeService.description}
                                    </motion.p>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 md:p-10 flex-1 bg-white">
                                {activeService.hasSubTabs ? (
                                    // Render Sub Tabs for Flow Measurement
                                    <div className="flex flex-col h-full">
                                        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 border-b border-slate-100">
                                            {activeService.subTabs?.map((tab, index) => (
                                                <button
                                                    key={tab.id}
                                                    onClick={() => setActiveSubTab(index)}
                                                    className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeSubTab === index
                                                            ? "bg-secondary text-white shadow-lg shadow-secondary/25"
                                                            : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                                                        }`}
                                                >
                                                    {tab.label}
                                                </button>
                                            ))}
                                        </div>
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={activeSubTab}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="prose prose-slate max-w-none"
                                            >
                                                <h3 className="text-2xl font-bold text-slate-800 mb-4">{activeService.subTabs![activeSubTab].label}</h3>
                                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                                    {activeService.subTabs![activeSubTab].content}
                                                </p>
                                                <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-xl flex items-start gap-3">
                                                    <CheckCircle2 className="text-secondary shrink-0 mt-1" />
                                                    <span className="text-secondary-foreground font-medium">Precision measurement using ultrasonic non-invasive technology.</span>
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    // Render Standard Content
                                    <div className="space-y-6">
                                        {activeService.content?.map((point, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 + (i * 0.1) }}
                                                className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                                            >
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                                                    <CheckCircle2 size={16} />
                                                </div>
                                                <p className="text-slate-600 text-lg leading-relaxed">{point}</p>
                                            </motion.div>
                                        ))}

                                        {/* Call to Action for Audit */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.8 }}
                                            className="mt-8 pt-8 border-t border-slate-100"
                                        >
                                            <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-primary transition-colors duration-300 flex items-center justify-center gap-2 group">
                                                Request This Service
                                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </motion.div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
