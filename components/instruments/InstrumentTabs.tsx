"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Wind, Settings, Camera, Activity, Droplets, Thermometer, Gauge } from "lucide-react";
import Image from "next/image";

// Data Structure
const instrumentsData = {
    electrical: [
        { name: "Power Quality Analyzer", make: "ALM 31" },
        { name: "Three Phase Balance Load Meter", make: "Nano Vip One and Two" },
        { name: "Digital Pressure Gauge", make: "Testo" },
        { name: "Digital Tachometer", make: "Kusum Meco (Non-contact Type)" },
        { name: "Lux Meter", make: "HTC" },
        { name: "Earth Tester", make: "Metravi" },
        { name: "Clamp on type Earth Tester", make: "Meco" },
        { name: "Insulation Tester", make: "Megger: 5kV" },
    ],
    flowAirThermal: [
        { name: "Inserted type Compressed Air flow meter", make: "CS" },
        { name: "Compressed Air Leak Detector", make: "CS" },
        { name: "Ultra Sonic Compressed Air Flow Meter", make: "Flexim | Emerson" },
        { name: "Ultra Sonic Thermic Fluid Heater Flow Meter", make: "Flexim | Emerson (up to 240℃)" },
        { name: "Ultra Sonic Steam Flow Meter", make: "Flexim | Emerson (Up to 180 ℃)" },
        { name: "Ultra sonic Water Flow Meter", make: "TDS 100" },
        { name: "Compressed Air Dew Point Meter", make: "CS" },
    ],
    environment: [
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
};

export default function InstrumentTabs() {
    const [activeTab, setActiveTab] = useState<'electrical' | 'flowAirThermal' | 'environment'>('electrical');

    const tabs = [
        { id: 'electrical', label: 'Electrical Measurement', icon: Zap },
        { id: 'flowAirThermal', label: 'Flow, Air & Thermal', icon: Wind },
        { id: 'environment', label: 'Environment, Process & Safety', icon: Settings },
    ];

    return (
        <section className="py-24 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6">

                {/* Tabs Header */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`flex items-center gap-3 px-8 py-4 rounded-xl text-sm md:text-base font-bold transition-all duration-300 border-2 ${activeTab === tab.id
                                ? "bg-[#0ea5e9] text-white border-[#0ea5e9] shadow-lg scale-105"
                                : "bg-white text-slate-600 border-transparent hover:border-slate-200 shadow-sm"
                                }`}
                        >
                            <tab.icon size={20} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {instrumentsData[activeTab].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -5 }}
                                className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[16/9]"
                            >
                                {/* Image Container */}
                                <div className="absolute inset-0 bg-slate-800">
                                    {/* Placeholder for Real Image - Use this logic when images are available */}
                                    {/* 
                                    <Image 
                                       src={`/instruments/${item.name.toLowerCase().replace(/ /g, '-')}.jpg`}
                                       alt={item.name}
                                       fill
                                       className="object-cover opacity-80 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                                    />
                                    */}

                                    {/* Fallback Display */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-slate-800 text-slate-600 group-hover:bg-slate-700 transition-colors duration-500">
                                        <div className="text-center group-hover:scale-110 transition-transform duration-700">
                                            <Camera size={48} className="mx-auto mb-2 opacity-30" />
                                        </div>
                                    </div>
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300"></div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="mb-1">
                                        <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2 block">
                                            {item.make ? item.make : "Limbaja Energy"}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                                        {item.name}
                                    </h3>
                                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                                        <p className="text-slate-300 text-sm mt-2">
                                            Premium quality instrument for accurate measurements.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}
