"use client";

import { motion } from "framer-motion";
import { Gauge } from "lucide-react";

export default function InstrumentOverview() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm text-[#0ea5e9] border border-slate-100 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                        <Gauge size={32} />
                    </div>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 font-light">
                        The requirement for an energy audit such as identification and quantification of energy 
                        necessitates measurements; these measurements require the use of instruments. 
                        These instruments must be portable, durable, easy to operate and relatively inexpensive.
                    </p>
                    <p className="text-xl font-bold text-slate-800 border-l-4 border-[#0ea5e9] pl-4 inline-block">
                        We have Valuable Instrument for doing the Energy Audit and Performance Measurement.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
