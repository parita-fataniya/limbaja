"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MoveRight, Camera, Sparkles } from "lucide-react";
import { instruments, Instrument } from "@/app/instrument/InstrumentData";

const InstrumentCard = ({ item, index }: { item: Instrument, index: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="group relative aspect-[11/10] w-full cursor-pointer bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        >
            {/* Image Container */}
            <div className="absolute inset-0 bg-slate-800">
                {item.image ? (
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-800 text-slate-600 group-hover:bg-slate-700 transition-colors duration-500">
                        <Camera size={48} className="mx-auto opacity-30 group-hover:scale-110 transition-transform duration-700" />
                    </div>
                )}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 transition-opacity duration-300"></div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300" style={{ transform: "translateZ(30px)" }}>
                <div className="mb-1">
                    <span className="text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
                        {item.make ? item.make : "Professional Tool"}
                    </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight tracking-wide group-hover:text-primary transition-colors">
                    {item.name}
                </h3>
            </div>

            {/* Subtle Glow Ring */}
            <div className="absolute -inset-1 rounded-2xl border border-white/0 group-hover:border-primary/30 transition-colors duration-500"></div>
        </motion.div>
    );
};

export default function RandomInstruments() {
    const [randomInstruments, setRandomInstruments] = useState<Instrument[]>([]);

    useEffect(() => {
        // Randomly pick 6 instruments
        const shuffled = [...instruments].sort(() => 0.5 - Math.random());
        setRandomInstruments(shuffled.slice(0, 6));
    }, []);

    if (randomInstruments.length === 0) return null;

    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(104,163,61,0.03)_0%,transparent_50%)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(104,163,61,0.03)_0%,transparent_50%)]"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 shadow-xl shadow-slate-900/10 mb-8"
                    >
                        <Sparkles size={14} className="text-primary" />
                        <span className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Advanced Tooling</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">
                        Precision <span className="text-primary">Instruments</span>
                    </h2>

                    <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
                        Our state-of-the-art diagnostic equipment ensures the highest accuracy
                        in energy auditing and performance optimization.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {randomInstruments.map((item, index) => (
                        <InstrumentCard key={index} item={item} index={index} />
                    ))}
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                    <Link href="/instrument" className="group relative inline-flex items-center gap-5 bg-white text-slate-900 border-2 border-slate-900 px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-slate-900 hover:text-white transition-all shadow-xl hover:shadow-slate-900/10 active:scale-95">
                        <span>View Full Inventory</span>
                        <MoveRight className="group-hover:translate-x-3 transition-transform duration-500" size={22} />

                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
