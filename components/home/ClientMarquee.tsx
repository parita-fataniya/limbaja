"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

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
    const [isSnapping, setIsSnapping] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Handle seamless loop
    useEffect(() => {
        if (index === clients.length) {
            // We reached the duplicate set (visually same as index 0)
            // Wait for the spring animation to complete (approx 600ms), then snap back instantly
            const timeout = setTimeout(() => {
                setIsSnapping(true); // Disable transition
                setIndex(0);         // Snap to actual 0
            }, 600);
            return () => clearTimeout(timeout);
        } else if (index === 0 && isSnapping) {
            // We just snapped to 0. Re-enable transition for next move.
            // Small delay to ensure the snap frame rendered.
            const timeout = setTimeout(() => {
                setIsSnapping(false);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [index, isSnapping]);

    const CARD_WIDTH = 200;
    const GAP = 48; // 3rem
    const STRIDE = CARD_WIDTH + GAP;

    // Render 3 sets to ensure buffer on both sides if needed.
    // clients.length is 6. We render 18 items.
    // Index goes 0...6. 
    // At 0: Center is Item 0 (1st set). Left is Item -1 (from prev set? No, we don't have prev set here easily unless we shift everything).
    // Actually, simpler: Just render enough duplicates.
    // If we duplicate 3 times: [Set1, Set2, Set3]
    // Index 0 targets Set1[0]. 
    // Index 6 targets Set2[0].

    const displayClients = [...clients, ...clients, ...clients];

    return (
        <motion.div
            className="flex gap-12 items-center"
            animate={{
                x: `calc(50% - ${(index * STRIDE) + (CARD_WIDTH / 2)}px)`
            }}
            transition={isSnapping ? { duration: 0 } : { type: "spring", stiffness: 200, damping: 25 }}
            style={{ width: "fit-content" }}
        >
            {displayClients.map((client, i) => {
                // Determine active state based on modulo index to highlight correct duplicates too
                // We want to highlight the item that visually corresponds to 'index'.
                // If index is 0, item 0 is active. Identify duplicates: 0, 6, 12...
                const isActive = (i % clients.length) === (index % clients.length);

                return (
                    <div
                        key={i}
                        className={`bg-white p-6 rounded-xl shadow-sm border border-slate-100 w-[200px] h-[120px] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isActive
                                ? "opacity-100 scale-110 shadow-md border-blue-200 ring-2 ring-blue-100"
                                : "opacity-60 scale-95 grayscale"
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
                );
            })}
        </motion.div>
    );
};
