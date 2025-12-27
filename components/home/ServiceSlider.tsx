"use client";

import React from "react";
import { ArrowRight, MoveRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { services } from "@/app/service/ServiceData";

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        // Disable 3D tilt on mobile
        if (window.innerWidth < 1024) return;

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
            className="group relative h-full min-h-[380px] w-full will-change-transform"
        >
            {/* Dark Glossy Background - backdrop-blur disabled on mobile for performance */}
            <div className="absolute inset-0 rounded-3xl bg-slate-900/40 md:backdrop-blur-xl border border-white/5 transition-all duration-500 group-hover:bg-slate-900/60 group-hover:border-primary/30 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"></div>

            {/* Animated Glow on Dark */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(104,163,61,0.15)_0%,transparent_70%)]"
                style={{ "--mouse-x": "50%", "--mouse-y": "50%" } as React.CSSProperties}></div>

            <div className="relative h-full p-8 flex flex-col items-start" style={{ transform: "translateZ(50px)" }}>
                {/* Icon Section */}
                <div className="mb-8 relative">
                    <div className="absolute inset-0 bg-primary blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500 rounded-full scale-150"></div>
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg relative z-10">
                        <service.icon size={32} strokeWidth={1.5} />
                    </div>
                </div>

                {/* Content Section */}
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">Expertise {index + 1}</span>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">{service.title}</h3>
                <p className="text-slate-400 mb-8 text-sm leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors">{service.description}</p>

                {/* Footer Section */}
                <div className="mt-auto w-full flex items-center justify-between">
                    <Link
                        href={`/service#${service.id}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-white/70 hover:text-primary transition-all group/link"
                    >
                        Learn More
                        <span className="group-hover/link:translate-x-1.5 transition-transform duration-300">
                            <ArrowRight size={18} />
                        </span>
                    </Link>
                </div>

                {/* Large Background Icon Accent */}
                <div className="absolute -bottom-8 -right-8 text-white/[0.03] group-hover:text-primary/[0.05] transition-colors -z-10 select-none">
                    <service.icon size={160} strokeWidth={0.5} />
                </div>
            </div>
        </motion.div>
    );
};

export default function ServiceSlider() {
    const displayedServices = services.slice(0, 6);

    return (
        <section className="py-24 bg-[#020617] overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(104,163,61,0.1)_0%,transparent_50%)]"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Simplified Header */}
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="w-12 h-1 bg-primary rounded-full mb-8 shadow-[0_0_20px_rgba(104,163,61,0.5)]"
                    ></motion.div>

                    <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                        Our Modern <span className="text-primary drop-shadow-[0_0_15px_rgba(104,163,61,0.3)]">Services</span>
                    </h2>

                    <p className="text-slate-400 max-w-2xl text-lg md:text-xl font-medium leading-relaxed">
                        Cutting-edge energy auditing and engineering solutions
                        tailored for the modern industrial landscape.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                    {displayedServices.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>

                {/* Attractive View All Button */}
                <div className="flex justify-center">
                    <Link href="/service" className="relative group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative overflow-hidden px-10 py-5 rounded-full bg-primary text-white font-black text-lg tracking-widest uppercase flex items-center gap-4 shadow-[0_10px_40px_rgba(104,163,61,0.3)] transition-all group-hover:shadow-[0_15px_60px_rgba(104,163,61,0.5)] group-hover:bg-white group-hover:text-primary"
                        >
                            <span className="relative z-10">View All Services</span>
                            <MoveRight className="relative z-10 group-hover:translate-x-3 transition-transform duration-500" size={24} />

                            {/* Inner Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                            {/* Floating Sparkles */}
                            <Sparkles className="absolute top-2 right-4 text-white/30 group-hover:text-primary/30 transition-colors" size={20} />
                        </motion.div>

                        {/* Outer Glow Ring */}
                        <div className="absolute -inset-1 rounded-full bg-primary opacity-30 blur-xl group-hover:opacity-60 transition-opacity animate-pulse"></div>
                    </Link>
                </div>
            </div>

            {/* Background Orbs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] -z-10"></div>
        </section>
    );
}


