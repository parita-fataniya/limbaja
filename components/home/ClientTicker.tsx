"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const clients = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    name: `Client ${i + 1}`
}));

export default function ClientTicker() {
    return (
        <section className="py-20 bg-slate-900 overflow-hidden">
            <div className="container mx-auto px-6 text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Trusted By <span className="text-[#0ea5e9]">Industry Leaders</span></h2>
            </div>

            <div className="flex flex-col gap-8">
                {/* Row 1: Left to Right */}
                <div className="flex relative overflow-hidden">
                    <motion.div
                        className="flex gap-12 whitespace-nowrap"
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    >
                        {[...clients, ...clients, ...clients].map((client, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white/5 px-8 py-4 rounded-full border border-white/10 hover:border-[#0ea5e9]/50 transition-colors cursor-default backdrop-blur-sm">
                                <Building2 className="text-[#0ea5e9]" size={24} />
                                <span className="font-bold text-slate-300 text-lg">{client.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="flex relative overflow-hidden">
                    <motion.div
                        className="flex gap-12 whitespace-nowrap"
                        animate={{ x: [-1000, 0] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                    >
                        {[...clients, ...clients, ...clients].map((client, index) => (
                            <div key={index + 100} className="flex items-center gap-3 bg-white/5 px-8 py-4 rounded-full border border-white/10 hover:border-[#22c55e]/50 transition-colors cursor-default backdrop-blur-sm">
                                <Building2 className="text-[#22c55e]" size={24} />
                                <span className="font-bold text-slate-300 text-lg">{client.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
