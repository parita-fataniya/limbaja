"use client"

import { motion } from "framer-motion"
import { Zap, Factory, Leaf, TrendingUp } from "lucide-react"

export default function WhoWeAre() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* Left Section */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <div className="inline-block mb-4">
                                <span className="text-sm font-semibold text-[#0ea5e9] uppercase tracking-wider">About Us</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Who We Are</h2>
                            <div className="w-20 h-1 bg-[#0ea5e9] rounded-full mb-8"></div>

                            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed text-justify">
                                <p className="text-justify">
                                    With gradually increasing energy costs and depletion of natural resources of fossil fuels, prudent energy efficient usage of Electrical energy and thermal energy. Limbaja Energy is committed to help clients achieve energy savings and provides complete end to end solution from conceptualization, measurement, feasibility analysis and implementation support for energy saving.
                                </p>
                                <p className="text-justify">
                                    We have a very qualified team of certified Energy Auditors and Energy Engineers who have wide experience in various types of industries, processes and facilities. In many industries and facilities, energy generally has the highest potential for cost reduction.
                                </p>
                                <p className="text-justify">
                                    LIMBAJA ENERGY has specialization in energy audit and energy implementation.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-slate-700 font-medium">
                                    <li>LIMBAJA ENERGY is a fast-growing company in energy conservation field.</li>
                                    <li>Having Qualified Energy Auditors and Energy Managers certified by Bureau of Energy Efficiency, Ministry of power, Govt. Of India.</li>
                                    <li>Authorized Energy Auditor of chief Electrical Inspector (CEI) Government of Gujarat</li>
                                    <li>Authorized Energy Auditor of Gujarat Energy Development Agency (GEDA) Government of Gujarat</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {/* Energy Optimization */}
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white p-8 rounded-xl flex flex-col items-center justify-center text-center aspect-square shadow-md hover:shadow-xl transition-shadow border border-slate-200"
                            >
                                <div className="w-16 h-16 bg-[#0ea5e9]/10 rounded-full flex items-center justify-center mb-4">
                                    <Zap className="text-[#0ea5e9]" size={32} strokeWidth={2.5} />
                                </div>
                                <span className="font-semibold text-slate-800 text-sm">Energy Optimization</span>
                            </motion.div>

                            {/* Industrial Solutions */}
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white p-8 rounded-xl flex flex-col items-center justify-center text-center aspect-square shadow-md hover:shadow-xl transition-shadow mt-12 border border-slate-200"
                            >
                                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                                    <Factory className="text-slate-700" size={32} strokeWidth={2.5} />
                                </div>
                                <span className="font-semibold text-slate-800 text-sm">Industrial Solutions</span>
                            </motion.div>

                            {/* Sustainability */}
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white p-8 rounded-xl flex flex-col items-center justify-center text-center aspect-square shadow-md hover:shadow-xl transition-shadow -mt-6 border border-slate-200"
                            >
                                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                                    <Leaf className="text-emerald-600" size={32} strokeWidth={2.5} />
                                </div>
                                <span className="font-semibold text-slate-800 text-sm">Sustainable Practices</span>
                            </motion.div>

                            {/* Years of Excellence */}
                            <motion.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl flex flex-col items-center justify-center text-center aspect-square shadow-lg hover:shadow-2xl transition-all border border-slate-700 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <TrendingUp className="text-[#0ea5e9] mb-3 relative z-10" size={32} strokeWidth={2.5} />
                                <span className="text-5xl font-bold text-white mb-2 relative z-10">10+</span>
                                <span className="font-medium text-slate-300 text-xs uppercase tracking-wide relative z-10">
                                    Years of Excellence
                                </span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
