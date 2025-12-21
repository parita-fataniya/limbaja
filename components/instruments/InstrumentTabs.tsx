"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import Image from "next/image";

// Data Structure
interface Instrument {
    name: string;
    make: string;
    image?: string;
}

const instruments: Instrument[] = [
    { name: "Power Quality Analyzer", make: "ALM 31", image: "/instrument/1alm31.jpg" },
    { name: "Three Phase Balance Load Meter", make: "Nano Vip One and Two", image: "/instrument/2nanovip.JPG" },
    { name: "Inserted type Compressed Air flow meter", make: "CS", image: "/instrument/3Inserted.jpg" },
    { name: "Compressed Air Leak Detector", make: "CS", image: "/instrument/4Ultrasonic.png" },
    { name: "Ultra Sonic Compressed Air Flow Meter", make: "Flexim | Emerson", image: "/instrument/5.jpeg" },
    { name: "Ultra Sonic Thermic Fluid Heater Flow Meter", make: "Flexim | Emerson (up to 240℃)", image: "/instrument/6flexim.jpg" },
    { name: "Ultra Sonic Steam Flow Meter", make: "Flexim | Emerson (Up to 180 ℃)", image: "/instrument/7.jpeg" },
    { name: "Ultra sonic Water Flow Meter", make: "TDS 100" },
    { name: "Flue Gas Analyser", make: "Testo 300", image: "/instrument/9Flue.jpg" },
    { name: "Thermography", make: "Testo 868", image: "/instrument/10Thermography.JPG" },
    { name: "Digital Temperature meter", make: "Testo", image: "/instrument/11 Temperature meter.png" },
    { name: "Anemometer", make: "Lutron", image: "/instrument/12 Lutron Anemometer.jpg" },
    { name: "Manometer", make: "HTC", image: "/instrument/13 HTC Manometer.jpg" },
    { name: "S type Pitot Tube", make: "3m, 1m, 0.5m", image: "/instrument/14 S type Pitot Tube.jpg" },
    { name: "Digital Pressure Gauge", make: "Testo", image: "/instrument/15 Digital Pressure gauge.png" },
    { name: "Digital Tachometer non-contact Type", make: "Kusum Meco", image: "/instrument/16 stroboscope-500x500.png" },
    { name: "Lux Meter", make: "HTC", image: "/instrument/17 HTC Lux meter.jpg" },
    { name: "TDS Meter", make: "", image: "/instrument/18 TDS Meter.jpg" },
    { name: "Hygro Meter", make: "Testo", image: "/instrument/19 Hygrometer.JPG" },
    { name: "Compressed Air Dew Point Meter", make: "CS", image: "/instrument/20 Compressed Air Dew Point Meter.jpg" },
    { name: "IR Temperature Meter Non-Contact Type", make: "HTC", image: "/instrument/21 IR Temperature Meter.jpg" },
    { name: "Earth Tester", make: "Metravi", image: "/instrument/22 Earth Tester.jpg" },
    { name: "Clamp on type Earth Tester", make: "Meco", image: "/instrument/23 meco-4680-blc-clamp-on-earth-and-leakage-current-tester.jpeg" },
    { name: "Insulation Tester", make: "Megger: 5kV", image: "/instrument/24 5kV Insulation Testor.JPG" },
    { name: "Ultrasonic Thickness Tester", make: "UTM-9", image: "/instrument/25 Ultrasonic-Thickness-Gauges..jpg" },
];

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
