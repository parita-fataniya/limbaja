"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    "/slider/image1.jpg",
    "/slider/image2.jpg",
    "/slider/image3.jpg",
    "/slider/image4.jpg",
];

export const ImageSlider = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <motion.div
                className="container mx-auto px-6 mb-12 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
                    Welcome To <span className="text-primary">Limbaja Energy</span>
                </h2>
                <div className="h-1 w-24 bg-accent mx-auto mt-4 rounded-full" />
            </motion.div>

            {/* Infinite Slider */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

                <motion.div
                    className="flex gap-8 px-8"
                    animate={{
                        x: ["0%", "-50%"]
                    }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity
                    }}
                    whileHover={{ scale: 0.98 }}
                    style={{
                        width: "fit-content"
                    }}
                >
                    {/* Duplicate images for seamless loop (2 sets is enough for -50% move logic) */}
                    {[...images, ...images].map((src, index) => (
                        <div
                            key={index}
                            className="relative w-[300px] md:w-[450px] h-[250px] md:h-[350px] flex-shrink-0 rounded-2xl overflow-hidden shadow-xl border border-slate-100 group cursor-pointer"
                        >
                            <Image
                                src={src}
                                alt={`Slide ${index}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    Project Gallery
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
