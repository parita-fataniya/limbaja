"use client"

import { motion, useInView, animate } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Zap, Leaf, Settings, Cog, Gauge, CircuitBoard, Boxes, Wrench } from "lucide-react"
import { useRef, useEffect } from "react"



export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
        >
            {/* --- Background Animations Start --- */}

            {/* Radial Gradient Pulse */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(49, 84, 165, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(117, 183, 69, 0.2) 0%, transparent 50%),
                             radial-gradient(circle at 40% 20%, rgba(252, 192, 23, 0.1) 0%, transparent 50%)`,
                    }}
                    animate={{
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(117, 183, 69, 0.15) 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            {/* Matrix/Digital Rain Effect Lines */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-px bg-gradient-to-b from-transparent via-[#75b745]/40 to-transparent"
                        style={{
                            left: `${20 + i * 15}%`,
                            height: "100%",
                        }}
                        animate={{
                            opacity: [0, 0.6, 0],
                            scaleY: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.8,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Center Glow */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-0"
                style={{
                    background: "radial-gradient(circle, rgba(49, 84, 165, 0.08) 0%, transparent 70%)",
                    filter: "blur(60px)",
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            />

            {/* Floating Orbs */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(117, 183, 69, 0.15) 0%, transparent 70%)",
                        filter: "blur(40px)",
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(49, 84, 165, 0.12) 0%, transparent 70%)",
                        filter: "blur(40px)",
                    }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Technical Elements (Gears, Circuits, etc) */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                {/* Large rotating gear - top left */}
                <motion.div
                    className="absolute top-[12%] left-[8%]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                    <Settings className="w-24 h-24 stroke-[1] text-[#3154a5]/20" />
                </motion.div>

                {/* Small cog - top left nested */}
                <motion.div
                    className="absolute top-[18%] left-[14%]"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                    <Cog className="w-12 h-12 stroke-[1] text-[#75b745]/25" />
                </motion.div>

                {/* Circuit board - top right pulsing */}
                <motion.div
                    className="absolute top-[15%] right-[10%]"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                    <CircuitBoard className="w-20 h-20 stroke-[1] text-[#fcc017]/30" />
                </motion.div>

                {/* Gauge - left side oscillating */}
                <motion.div
                    className="absolute top-[45%] left-[6%]"
                    animate={{ rotate: [-15, 15, -15] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                    <Gauge className="w-16 h-16 stroke-[1] text-[#3154a5]/25" />
                </motion.div>

                {/* Boxes - bottom left floating */}
                <motion.div
                    className="absolute bottom-[20%] left-[12%]"
                    animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                    <Boxes className="w-18 h-18 stroke-[1] text-[#75b745]/20" />
                </motion.div>

                {/* Wrench - right side pulsing */}
                <motion.div
                    className="absolute top-[50%] right-[8%]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
                    transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                    <Wrench className="w-16 h-16 stroke-[1.5] text-[#fcc017]/35" />
                </motion.div>

                {/* Large gear - bottom right rotating */}
                <motion.div
                    className="absolute bottom-[25%] right-[12%]"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                    <Settings className="w-20 h-20 stroke-[1] text-[#3154a5]/18" />
                </motion.div>

                {/* Small cog - bottom right with dual animation */}
                <motion.div
                    className="absolute bottom-[18%] right-[18%]"
                    animate={{ rotate: 360, y: [-8, 8, -8] }}
                    transition={{
                        rotate: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                        y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
                    }}
                >
                    <Cog className="w-10 h-10 stroke-[1] text-[#75b745]/22" />
                </motion.div>
            </div>

            {/* Random Particles */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#75b745] rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            x: [0, Math.random() * 50 - 25, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: Math.random() * 5,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* --- Background Animations End --- */}


            <motion.div className="relative z-20 container mx-auto px-6 py-20">
                {/* Stats Badge */}
                <motion.div
                    className="flex justify-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-[#75b745]/30 rounded-full text-sm"
                        whileHover={{ scale: 1.05, borderColor: "rgba(117, 183, 69, 0.5)" }}
                    >
                        <Zap className="w-4 h-4 text-[#fcc017]" />
                        <span className="text-white/90">Trusted by 500+ businesses worldwide</span>
                    </motion.div>
                </motion.div>

                {/* Main Heading */}
                <div className="text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-[1.1] text-balance">
                            {/* "Power Your Future" - Slow smooth fade in */}
                            <motion.span
                                className="block text-white"
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            >
                                Power Your Future
                            </motion.span>

                            {/* "With Sustainable Energy" - Staggered slow fade in */}
                            <motion.span
                                className="block mt-2"
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#75b745] via-[#8bc956] to-[#fcc017] animate-[shimmer_3s_ease-in-out_infinite]">
                                    With Sustainable Energy
                                </span>
                            </motion.span>
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light text-pretty"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Your strategic partner in sustainable energy solutions. We optimize consumption, reduce carbon footprint,
                        and drive efficiency through expert auditing.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/contact-us"
                                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#75b745] to-[#6aa83c] hover:from-[#6aa83c] hover:to-[#5d9733] text-white text-lg px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-[#75b745]/30 hover:shadow-[#75b745]/50 overflow-hidden"
                            >
                                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative">Get Free Consultation</span>
                                <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/about-us"
                                className="group inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#75b745]/50 text-white text-lg px-8 py-4 rounded-full font-semibold transition-all"
                            >
                                <span>Discover Our Impact</span>
                                <motion.span
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                >
                                    <Leaf size={20} />
                                </motion.span>
                            </Link>
                        </motion.div>
                    </motion.div>

                </div>
            </motion.div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1e] to-transparent z-10" />
        </section>
    )
}
