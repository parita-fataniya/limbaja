"use client";

import { motion } from "framer-motion";
import { Zap, Activity, Wind, Gauge, Search, Scale } from "lucide-react";

const instruments = [
    { name: "Power Quality Analyzer", icon: Zap, category: "Electrical" },
    { name: "Ultrasonic Flow Meter", icon: Activity, category: "Flow" },
    { name: "Thermal Imager", icon: Search, category: "Thermal" },
    { name: "Flue Gas Analyzer", icon: Wind, category: "Thermal" },
    { name: "Anemometer", icon: Gauge, category: "Flow" },
    { name: "Precision Balance", icon: Scale, category: "Mechanical" }
];

export default function InstrumentGrid() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Our <span className="text-primary">Instruments</span></h2>
                <p className="text-slate-600 max-w-2xl mx-auto">High-precision tools for accurate measurement and analysis.</p>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {instruments.map((inst, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="relative group h-48 md:h-64 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 cursor-pointer"
                        >
                            {/* This div simulates the image interaction */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-110">
                                <inst.icon size={48} className="text-slate-300 group-hover:text-primary transition-colors duration-300" />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">{inst.category}</span>
                                <h3 className="text-lg md:text-xl font-bold text-white">{inst.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
