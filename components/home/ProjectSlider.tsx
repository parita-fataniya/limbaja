"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Project Images from public/projects
const projects = [
    { id: 1, src: "/projects/p-1.png", title: "Industrial Efficiency Project" },
    { id: 2, src: "/projects/p-2.png", title: "Thermal Optimization" },
    { id: 3, src: "/projects/p-3.png", title: "Energy Audit Execution" },
    { id: 4, src: "/projects/p-4.png", title: "Power Quality Analysis" },
    { id: 5, src: "/projects/p-5.png", title: "Sustainable Integration" },
    { id: 6, src: "/projects/p-6.png", title: "Large Scale Implementation" },
    // { id: 7, src: "/projects/project7.jpg", title: "Site Inspection" }, // Skipping small/low-res if any, or include all
    { id: 8, src: "/projects/p-8.png", title: "Advanced Monitoring" },
];

export default function ProjectSlider() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrent((prev) => (prev + newDirection + projects.length) % projects.length);
    };

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [current]);

    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-slate-900 mb-4"
                        >
                            Our Projects
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-600 max-w-2xl"
                        >
                            Showcasing our impact across various industries through comprehensive energy audits and sustainable solutions.
                        </motion.p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-2 mt-4 md:mt-0">
                        <button
                            onClick={() => paginate(-1)}
                            className="bg-white text-slate-800 p-3 rounded-full hover:bg-primary hover:text-white transition-all shadow-md border border-slate-200"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => paginate(1)}
                            className="bg-white text-slate-800 p-3 rounded-full hover:bg-primary hover:text-white transition-all shadow-md border border-slate-200"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Slider */}
                <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden bg-slate-200 shadow-2xl">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <Image
                                src={projects[current].src}
                                alt={projects[current].title}
                                fill
                                className="object-cover"
                                priority={true}
                            />
                            {/* Overlay Gradient for Text */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                            {/* Caption */}
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-2xl md:text-3xl font-bold text-white mb-2"
                                >
                                    {projects[current].title}
                                </motion.h3>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {projects.map((_, idx) => (
                        <div
                            key={idx}
                            onClick={() => {
                                setDirection(idx > current ? 1 : -1);
                                setCurrent(idx);
                            }}
                            className={`h-2 rounded-full transition-all cursor-pointer ${idx === current ? "w-8 bg-primary" : "w-2 bg-slate-300 hover:bg-slate-400"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
