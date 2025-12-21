"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2 } from "lucide-react";

interface ClientGridProps {
    images: string[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
        },
    },
};

export default function ClientGrid({ images }: ClientGridProps) {
    if (images.length === 0) {
        return (
            <div className="text-center py-12 bg-slate-50 rounded-lg">
                <Building2 className="mx-auto text-slate-300 mb-4" size={48} />
                <p className="text-slate-500">No client logos found.</p>
            </div>
        );
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
            {images.map((imagePath, i) => (
                <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{
                        y: -8,
                        scale: 1.05,
                        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                    }}
                    className="aspect-[3/2] bg-white/80 backdrop-blur-sm border border-slate-100/50 rounded-xl flex items-center justify-center p-6 shadow-sm transition-colors duration-300 hover:border-[#0ea5e9]/30 hover:bg-white"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={imagePath}
                            alt={`Client ${i + 1}`}
                            fill
                            className="object-contain" // Removed grayscale filter
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                        />
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
