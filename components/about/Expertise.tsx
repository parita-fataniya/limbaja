"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Lightbulb } from "lucide-react";

export default function Expertise() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Expertise</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Points */}
                    <div className="space-y-6">
                        {[
                            "Certified Energy Auditors & Energy Engineers",
                            "Experience across diverse industries and facilities",
                            "Deep expertise in electrical & thermal energy systems",
                            "Focus on measurable cost reduction & efficiency gains"
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100"
                            >
                                <CheckCircle2 className="text-secondary shrink-0 mt-1" size={24} />
                                <span className="text-slate-700 font-medium text-lg">{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Highlight Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-10 rounded-3xl text-white relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 p-10 opacity-10">
                            <Lightbulb size={120} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6 text-primary">Why It Matters</h3>
                            <p className="text-lg leading-relaxed font-light text-balance">
                                "Conservation and efficient utilization of energy resources like Pumping, Compressor, Boiler, Heat Exchanger and process study play a vital role in boosting the profitability of an industry."
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
