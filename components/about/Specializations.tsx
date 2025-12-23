"use client";

import { motion } from "framer-motion";
import { Cog, Wind, Flame, Thermometer, FileSearch, ClipboardCheck } from "lucide-react";

const specs = [
    { name: "Pumping Systems", icon: Cog },
    { name: "Compressors", icon: Wind },
    { name: "Boilers", icon: Flame },
    { name: "Heat Exchangers", icon: Thermometer },
    { name: "Process & Utility Studies", icon: FileSearch },
    { name: "Energy Audit & Implementation", icon: ClipboardCheck },
];

export default function Specializations() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">Our Core Specializations</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {specs.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg hover:border-[#0ea5e9]/30 transition-all group"
                        >
                            <item.icon className="w-12 h-12 mx-auto mb-4 text-slate-400 group-hover:text-[#0ea5e9] transition-colors" />
                            <h3 className="font-bold text-slate-700 text-lg">{item.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
