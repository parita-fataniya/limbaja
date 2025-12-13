"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
    { name: "Ashapura Group", logo: "/clients/logo_ashapura.png" },
    { name: "Indian Oil", logo: "/clients/logo_indianoil.png" },
    { name: "Jindal Saw", logo: "/clients/logo_jindal.png" },
    { name: "Max Speciality Films", logo: "/clients/logo_max.png" },
    { name: "Murugappa Group", logo: "/clients/logo_murugappa.png" },
    { name: "OCCL", logo: "/clients/logo_occl.png" },
];

export const ClientMarquee = () => {
    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <motion.h2
                    className="text-3xl md:text-5xl font-bold text-slate-800 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Our <span className="text-[#3154a5]">Clients</span>
                </motion.h2>
                <div className="h-1 w-24 bg-[#75b745] mx-auto rounded-full mb-6" />
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Trusted to deliver excellence across industries.
                </p>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />

                <motion.div
                    className="flex gap-12 px-12 items-center"
                    animate={{
                        x: ["0%", "-50%"]
                    }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity
                    }}
                    style={{
                        width: "fit-content"
                    }}
                >
                    {/* Duplicate 4 times to ensure enough length for loop */}
                    {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 w-[200px] h-[120px] flex items-center justify-center flex-shrink-0 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
