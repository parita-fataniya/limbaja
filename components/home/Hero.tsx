"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Zap, Leaf, TrendingUp } from "lucide-react"
import { useRef } from "react"

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
        >
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(117, 183, 69, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(252, 192, 23, 0.2) 0%, transparent 50%),
                             radial-gradient(circle at 40% 20%, rgba(117, 183, 69, 0.2) 0%, transparent 50%)`,
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

            <div className="absolute inset-0 z-0 opacity-40">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(117, 183, 69, 0.15) 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

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

            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-0"
                style={{
                    background: "radial-gradient(circle, rgba(117, 183, 69, 0.08) 0%, transparent 70%)",
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

            {/* Glowing Orbs */}
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
                        background: "radial-gradient(circle, rgba(252, 192, 23, 0.12) 0%, transparent 70%)",
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

            {/* Floating Particles */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
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

            <motion.div style={{ y }} className="relative z-20 container mx-auto px-6 py-20">
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
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-[1.1] text-balance">
                            <span className="block text-white">Power Your Future</span>
                            <span className="block mt-2">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#75b745] via-[#8bc956] to-[#fcc017] animate-[shimmer_3s_ease-in-out_infinite]">
                                    With Sustainable Energy
                                </span>
                            </span>
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

                    {/* Impact Stats */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12 border-t border-white/10 pt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        {[
                            { value: "500+", label: "Projects Completed" },
                            { value: "30%", label: "Average Savings" },
                            { value: "100%", label: "Client Satisfaction" },
                            { value: "24/7", label: "Expert Support" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl font-bold text-white mb-1 tracking-tight">{stat.value}</div>
                                <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1e] to-transparent z-10" />
        </section>
    )
}
