"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Clients = () => {
    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
                        Our <span className="text-primary">Clients</span>
                    </h2>
                    <div className="h-1 w-24 bg-secondary mx-auto rounded-full" />
                    <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
                        Trusted by leading industries across sectors for energy auditing and conservation.
                    </p>
                </motion.div>

                <motion.div
                    className="relative max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ y: -5 }}
                >
                    {/* Scanning Light Effect */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent z-10 opacity-50"
                        animate={{
                            top: ["0%", "100%", "0%"],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    <div className="relative w-full h-[600px] md:h-[800px]">
                        <Image
                            src="/clients-collage.png"
                            alt="Limbaja Energy Clients"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 pointer-events-none rounded-3xl" />
                </motion.div>
            </div>
        </section>
    );
};
