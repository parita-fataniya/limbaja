"use client";

import { motion } from "framer-motion";
import { Factory, IndianRupee, Globe } from "lucide-react";

export default function Benefits() {
    return (
        <section className="py-20 bg-[#f8fafc]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-16">Energy Efficiency Benefits</h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Industry */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-secondary"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-50 rounded-lg text-secondary">
                                <Factory size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">Industry</h3>
                        </div>
                        <ul className="space-y-4">
                            {["Reduce Energy Bills", "Increased Competitiveness", "Increased Productivity", "Improved Quality", "Improved Profit"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-600">
                                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Nation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#f59e0b]"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-orange-50 rounded-lg text-[#f59e0b]">
                                <IndianRupee size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">Nation</h3>
                        </div>
                        <ul className="space-y-4">
                            {["Reduced Energy Imports", "Avoided Cost Can be used for Poverty Reduction ", "Conservation of Limited Resources", "Improved Energy Security"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-600">
                                    <span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Globe */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-green-50 rounded-lg text-primary">
                                <Globe size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">Globe</h3>
                        </div>
                        <ul className="space-y-4">
                            {["Reduced GHG and Other Emissions", "Maintain the Sustainable Environment"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-600">
                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
