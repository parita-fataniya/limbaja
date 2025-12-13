"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

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

            <div className="relative w-full overflow-hidden flex justify-center py-8">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

                <CarouselTrack />
            </div>
        </section>
    );
};

const CarouselTrack = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 2000); // 2s pause + transition time handled by spring
        return () => clearInterval(timer);
    }, []);

    const CARD_WIDTH = 200;
    const GAP = 48; // gap-12 is 3rem = 48px
    const STRIDE = CARD_WIDTH + GAP;

    // Create a large buffer of clients for "infinite" scrolling effect
    const manyClients = Array(50).fill(clients).flat();

    return (
        <motion.div
            className="flex gap-12 items-center"
            // Center the current index: screen center (50%) - (index position + half card width)
            animate={{
                x: `calc(50% - ${(index * STRIDE) + (CARD_WIDTH / 2)}px)`
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            style={{ width: "fit-content" }}
        >
            {manyClients.map((client, i) => (
                <div
                    key={i}
                    className={`bg-white p-6 rounded-xl shadow-sm border border-slate-100 w-[200px] h-[120px] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${i === index ? "opacity-100 scale-110 shadow-md border-blue-200 ring-2 ring-blue-100" : "opacity-60 scale-95 grayscale"
                        }`}
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
    );
};
