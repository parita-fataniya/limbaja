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
                                <span className="text-sm font-bold text-[#0ea5e9] uppercase tracking-[0.2em]">About Us</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">Who We Are</h2>
                            <div className="w-20 h-1 bg-[#0ea5e9] rounded-full mb-8"></div>

                            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-loose tracking-wide text-justify">
                                <p className="text-justify font-medium">
                                    With rising energy costs and the growing need for sustainable resource management, improving electrical and thermal energy efficiency has become a key priority for industries. Limbaja Energy is a trusted Energy Audit Company in Gujarat, serving clients across Gujarat and India with end-to-end energy management solutions. From conceptualization and precision measurement to feasibility analysis, implementation support, and performance optimization, we help organizations achieve measurable energy savings and long-term operational excellence.
                                </p>
                                <p className="text-justify">
                                    Our team of Certified Energy Auditors and experienced Energy Engineers brings extensive expertise across diverse industries, manufacturing processes, and commercial facilities. As a reliable Energy Consultant in Gujarat and BEE Certified Energy Auditor, we provide comprehensive industrial energy audit services that identify energy-saving opportunities, reduce operating costs, improve equipment performance, and enhance overall plant efficiency. Our commitment to innovation, technical excellence, and sustainable energy management has made us a preferred partner for businesses seeking reliable energy audit and consulting services in Gujarat and across India.
                                </p>
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
