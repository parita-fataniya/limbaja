"use client";

import { motion } from "framer-motion";
import { Zap, Factory, Leaf } from "lucide-react";

export default function WhoWeAre() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* Left: Text */}
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 relative inline-block">
                                Who We Are
                                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#0ea5e9] rounded-full"></span>
                            </h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed text-justify">
                                <p>
                                    With gradually increasing energy costs and the depletion of fossil fuel resources, efficient utilization of electrical and thermal energy has become essential.
                                </p>
                                <p>
                                    Limbaja Energy provides complete <strong>end-to-end solutions</strong>—from conceptualization and measurement to feasibility analysis and implementation support—for achieving sustainable energy savings.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Illustration Grid */}
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <div className="bg-slate-50 p-8 rounded-2xl flex flex-col items-center justify-center text-center aspect-square shadow-sm hover:shadow-lg transition-all border border-slate-100 hover:border-[#0ea5e9]/30 group">
                                <Zap className="text-[#0ea5e9] mb-4 group-hover:scale-110 transition-transform" size={48} />
                                <span className="font-bold text-slate-700">Energy Optimization</span>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl flex flex-col items-center justify-center text-center aspect-square shadow-sm hover:shadow-lg transition-all mt-8 border border-slate-100 hover:border-[#0ea5e9]/30 group">
                                <Factory className="text-slate-600 mb-4 group-hover:scale-110 transition-transform" size={48} />
                                <span className="font-bold text-slate-700">Industrial Solutions</span>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl flex flex-col items-center justify-center text-center aspect-square shadow-sm hover:shadow-lg transition-all -mt-8 border border-slate-100 hover:border-[#0ea5e9]/30 group">
                                <Leaf className="text-[#22c55e] mb-4 group-hover:scale-110 transition-transform" size={48} />
                                <span className="font-bold text-slate-700">Sustainability</span>
                            </div>
                            <div className="bg-[#0f172a] p-8 rounded-2xl flex flex-col items-center justify-center text-center aspect-square shadow-lg shadow-blue-900/20 hover:shadow-xl transition-all border border-slate-700 group">
                                <span className="text-4xl font-bold text-white mb-2 group-hover:text-[#0ea5e9] transition-colors">10+</span>
                                <span className="font-bold text-slate-400 text-sm">Years Excellence</span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
