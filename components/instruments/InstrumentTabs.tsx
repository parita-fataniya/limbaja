"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import Image from "next/image";

import { instruments } from "@/app/instrument/InstrumentData";

export default function InstrumentTabs() {
    return (
        <section className="py-24 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6">
                {/* Content Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {instruments.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[11/10]"
                        >
                            {/* Image Container */}
                            <div className="absolute inset-0 bg-slate-800">
                                {item.image ? (
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center bg-slate-800 text-slate-600 group-hover:bg-slate-700 transition-colors duration-500">
                                        <div className="text-center group-hover:scale-110 transition-transform duration-700">
                                            <Camera size={48} className="mx-auto mb-2 opacity-30" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300"></div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="mb-1">
                                    <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                                        {item.make ? item.make : "Limbaja Energy"}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight tracking-wide group-hover:text-blue-400 transition-colors">
                                    {item.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
