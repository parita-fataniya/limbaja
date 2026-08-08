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
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6 font-light">
                        The identification and quantification of energy consumption during an energy audit require accurate and reliable measurements, making the use of high-quality instruments essential. These instruments should be portable, durable, easy to operate, and capable of delivering precise results across a wide range of industrial applications.
                    </p>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 font-light">
                        At Limbaja Energy, we provide Industrial Measuring Instruments in Gujarat for industries across Gujarat and India. Our range includes Energy Audit Instruments, Electrical Testing Instruments, Power Quality Analyzers, Portable Measurement Instruments, and Industrial Monitoring Instruments that support accurate testing, diagnostics, and performance analysis. These advanced instruments help improve measurement accuracy, enhance energy audits, optimize industrial processes, and enable informed decision-making for better energy management.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
