"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, BadgeCheck } from "lucide-react";

export default function Certifications() {
    return (
        <section className="py-20 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Recognized & Authorized</h2>
                    <p className="text-slate-500">Accredited by leading government bodies.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Award,
                            text: "Qualified Energy Auditors & Energy Managers certified by Bureau of Energy Efficiency (BEE), Ministry of Power, Govt. of India"
                        },
                        {
                            icon: ShieldCheck,
                            text: "Authorized Energy Auditor – Chief Electrical Inspector (CEI), Govt. of Gujarat"
                        },
                        {
                            icon: BadgeCheck,
                            text: "Authorized Energy Auditor – Gujarat Energy Development Agency (GEDA)"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl"
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-[#22c55e]">
                                <item.icon size={32} />
                            </div>
                            <p className="text-slate-700 font-medium leading-relaxed">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
