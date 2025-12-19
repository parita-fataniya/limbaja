"use client";

import { motion } from "framer-motion";
import { Zap, Wind, Settings, Camera, Activity, Droplets, Thermometer, Gauge } from "lucide-react";
import Image from "next/image";

// Data Structure
const instrumentsData = [
    {
        id: "electrical",
        title: "Electrical Measurement Instruments",
        icon: Zap,
        color: "text-amber-500",
        items: [
            { name: "Power Quality Analyzer", make: "ALM 31" },
            { name: "Three Phase Balance Load Meter", make: "Nano Vip One and Two" },
            { name: "Digital Pressure Gauge", make: "Testo" },
            { name: "Digital Tachometer", make: "Kusum Meco (Non-contact Type)" },
            { name: "Lux Meter", make: "HTC" },
            { name: "Earth Tester", make: "Metravi" },
            { name: "Clamp on type Earth Tester", make: "Meco" },
            { name: "Insulation Tester", make: "Megger: 5kV" },
        ]
    },
    {
        id: "flowAirThermal",
        title: "Flow, Air & Thermal Measurement Instruments",
        icon: Wind,
        color: "text-blue-500",
        items: [
            { name: "Inserted type Compressed Air flow meter", make: "CS" },
            { name: "Compressed Air Leak Detector", make: "CS" },
            { name: "Ultra Sonic Compressed Air Flow Meter", make: "Flexim | Emerson" },
            { name: "Ultra Sonic Thermic Fluid Heater Flow Meter", make: "Flexim | Emerson (up to 240℃)" },
            { name: "Ultra Sonic Steam Flow Meter", make: "Flexim | Emerson (Up to 180 ℃)" },
            { name: "Ultra sonic Water Flow Meter", make: "TDS 100" },
            { name: "Compressed Air Dew Point Meter", make: "CS" },
        ]
    },
    {
        id: "environment",
        title: "Environment, Process & Safety Instruments",
        icon: Settings,
        color: "text-green-500",
        items: [
            { name: "Flue Gas Analyser", make: "Testo 300" },
            { name: "Thermography", make: "Testo 868" },
            { name: "Digital Temperature meter", make: "Testo" },
            { name: "Anemometer", make: "Lutron" },
            { name: "Manometer", make: "HTC" },
            { name: "S type Pitot Tube", make: "3m, 1m, 0.5m" },
            { name: "TDS Meter", make: "" },
            { name: "Hygro Meter", make: "Testo" },
            { name: "IR Temperature Meter Non-Contact Type", make: "HTC" },
            { name: "Ultrasonic Thickness Tester", make: "UTM-9" },
        ]
    }
];

export default function InstrumentList() {
    return (
        <section className="py-24 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6">

                {instrumentsData.map((section, sectionIndex) => (
                    <div key={section.id} className="mb-24 last:mb-0">

                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-12 border-b border-slate-200 pb-4"
                        >
                            <div className="p-3 bg-white rounded-xl shadow-sm">
                                <section.icon size={32} className={section.color} />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-800">{section.title}</h2>
                        </motion.div>

                        {/* Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {section.items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col"
                                >
                                    {/* Image Container */}
                                    <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
                                        {/* Placeholder logic kept for future real images */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400 group-hover:bg-slate-200 transition-colors duration-500">
                                            <div className="text-center group-hover:scale-110 transition-transform duration-700">
                                                <Camera size={48} className="mx-auto mb-2 opacity-50" />
                                                <span className="text-xs font-semibold uppercase tracking-widest opacity-70">Image Coming Soon</span>
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col grow">
                                        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#0ea5e9] transition-colors line-clamp-2">
                                            {item.name}
                                        </h3>

                                        <div className="mt-auto">
                                            <div className="inline-block bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
                                                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">Make / Model</span>
                                                <span className="text-slate-700 font-semibold text-sm">{item.make ? item.make : "N/A"}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
