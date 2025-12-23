"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function CompanyProfile() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm"
                >
                    <div className="mb-8">
                        <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-6">
                            <span className="text-[#0ea5e9] font-bold">LIMBAJA ENERGY</span> has specialization in energy audit and energy implementation.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            <span className="font-semibold text-slate-800">LIMBAJA ENERGY</span> is a fast-growing company in energy conservation field.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            "Having Qualified Energy Auditors and Energy Managers certified by Bureau of Energy Efficiency, Ministry of power, Govt. Of India.",
                            "Authorized Energy Auditor of chief Electrical Inspector (CEI) Government of Gujarat",
                            "Authorized Energy Auditor of Gujarat Energy Development Agency (GEDA) Government of Gujarat"
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <CheckCircle2 className="text-[#22c55e] shrink-0 mt-1" size={24} />
                                <span className="text-slate-700 font-medium text-lg leading-relaxed">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
