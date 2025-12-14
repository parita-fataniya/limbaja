"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Wind, Sun, Zap, ShieldCheck, Leaf, Factory, Sparkles } from "lucide-react"

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

    // --- SCENE OPACITY CONTROL ---
    // Scene 1: 0 - 0.25 (The Energy Challenge)
    const opacity1 = useTransform(smoothProgress, [0, 0.15, 0.25], [1, 1, 0])
    const scale1 = useTransform(smoothProgress, [0, 0.25], [1, 0.8])
    const blur1 = useTransform(smoothProgress, [0.15, 0.25], ["0px", "10px"])

    // Scene 2: 0.25 - 0.5 (Clean Energy Source)
    const opacity2 = useTransform(smoothProgress, [0.15, 0.25, 0.45, 0.55], [0, 1, 1, 0])
    const yScene2 = useTransform(smoothProgress, [0.2, 0.35], [50, 0])

    // Scene 3: 0.5 - 0.75 (Smart Energy Solution)
    const opacity3 = useTransform(smoothProgress, [0.45, 0.55, 0.7, 0.8], [0, 1, 1, 0])
    const gridScale = useTransform(smoothProgress, [0.5, 0.6], [1.5, 1])

    // Scene 4: 0.75 - 1.0 (Impact & CTA)
    // Starts fading in at 0.7, fully visible at 0.8, stays until end
    const opacity4 = useTransform(smoothProgress, [0.7, 0.8, 1], [0, 1, 1])
    const ctaY = useTransform(smoothProgress, [0.75, 0.85], [50, 0])

    // --- SHARED BACKGROUND TRANSITIONS ---
    const bgColor = useTransform(smoothProgress,
        [0, 0.15, 0.25, 0.45, 0.55, 0.7, 0.8, 1],
        [
            "#0f172a", // Start Dark
            "#0f172a", // Stay Dark for Scene 1
            "#0c4a6e", // Fade to Blue for Scene 2
            "#0c4a6e", // Stay Blue for Scene 2
            "#0f172a", // Fade to Dark for Scene 3 (Grid)
            "#0f172a", // Stay Dark for Scene 3
            "#16a34a", // Fade to Green for Scene 4
            "#16a34a"  // Stay Green
        ]
    )

    // Scene 1: Particles
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    return (
        <section ref={containerRef} className="relative h-[400vh]">
            <motion.div
                className="sticky top-0 h-screen overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: bgColor }}
            >

                {/* --- SCENE 1: THE ENERGY CHALLENGE --- */}
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center"
                    style={{ opacity: opacity1, scale: scale1, filter: `blur(${blur1})` }}
                >
                    {/* Background: Restored Pulse + Particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {/* Old Hero Pulse Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-blue-500/20 rounded-full blur-[60px] md:blur-[100px] animate-pulse" />

                        {/* Floating Particles (Restored Style) */}
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute bg-white/10 rounded-full"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    width: Math.random() * 6 + 2,
                                    height: Math.random() * 6 + 2,
                                }}
                                animate={{
                                    y: [0, -40, 0],
                                    opacity: [0.2, 0.8, 0.2],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>

                    <motion.h1
                        className="text-4xl md:text-8xl font-bold mb-6 tracking-tight leading-tight"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-white block">Power Your Future</span>
                        <span className="text-orange-500">With Sustainable </span>
                        <span className="text-green-500">Energy</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto">
                        Inefficiency isn't just waste.<br /> It's a missed opportunity for growth.
                    </p>
                    <motion.div
                        className="mt-12 text-white"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <p className="text-sm uppercase tracking-widest mb-2 font-semibold">Scroll</p>
                        <ArrowRight className="w-6 h-6 rotate-90 mx-auto" />
                    </motion.div>
                </motion.div>


                {/* --- SCENE 2: CLEAN ENERGY SOURCE --- */}
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 text-center pointer-events-none"
                    style={{ opacity: opacity2 }}
                >
                    {/* Background Elements */}
                    <div className="absolute inset-0 bg-gradient-to-b from-sky-900/20 to-green-900/20 pointer-events-none" />

                    <motion.div style={{ y: yScene2 }} className="relative z-10">
                        <div className="flex justify-center gap-8 mb-8">
                            <motion.div
                                className="bg-white/10 p-4 md:p-6 rounded-full backdrop-blur-sm border border-white/20"
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Sun className="w-12 h-12 md:w-16 md:h-16 text-yellow-400" />
                            </motion.div>
                            <motion.div
                                className="bg-white/10 p-4 md:p-6 rounded-full backdrop-blur-sm border border-white/20"
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <Wind className="w-12 h-12 md:w-16 md:h-16 text-sky-400" />
                            </motion.div>
                        </div>

                        <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
                            Clean & Sustainable
                        </h2>
                        <p className="text-base md:text-xl text-sky-100 max-w-2xl mx-auto">
                            Harnessing the raw power of nature. <br /> Transforming wind and sunlight into industrial potential.
                        </p>
                    </motion.div>

                    {/* Flow Lines */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute h-[1px] bg-gradient-to-r from-transparent via-green-400 to-transparent w-full"
                                style={{ top: `${30 + i * 15}%` }}
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
                            />
                        ))}
                    </div>
                </motion.div>


                {/* --- SCENE 3: SMART ENERGY SOLUTION --- */}
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center z-30 px-6 text-center pointer-events-none"
                    style={{ opacity: opacity3 }}
                >
                    {/* Grid Background */}
                    <motion.div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: "linear-gradient(#4ADE80 1px, transparent 1px), linear-gradient(90deg, #4ADE80 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                            scale: gridScale
                        }}
                    />

                    <div className="relative z-10 w-full max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-green-500/20 border border-green-500/50 text-green-400 text-sm font-semibold mb-4 md:mb-8">
                            <Sparkles className="w-4 h-4" /> Smart Energy Grid
                        </div>

                        <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-12">
                            Engineered for Efficiency
                        </h2>

                        <div className="grid grid-cols-3 gap-2 md:gap-12">
                            {[
                                { icon: ShieldCheck, title: "Reliable", desc: "Uninterrupted power flow." },
                                { icon: Zap, title: "Efficient", desc: "Maximized energy output." },
                                { icon: Leaf, title: "Sustainable", desc: "Eco-friendly solutions." },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-slate-800/50 backdrop-blur-md p-2 md:p-6 rounded-2xl border border-slate-700"
                                >
                                    <item.icon className="w-6 h-6 md:w-10 md:h-10 text-green-400 mx-auto mb-1 md:mb-4" />
                                    <h3 className="text-xs md:text-xl font-bold text-white mb-1 md:mb-2">{item.title}</h3>
                                    <p className="text-slate-400 text-[9px] md:text-sm leading-tight">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>


                {/* --- SCENE 4: IMPACT & CTA --- */}
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center z-40 px-6 text-center"
                    style={{ opacity: opacity4 }}
                >
                    {/* Green to White Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-500 to-white/20 z-0 opacity-100 pointer-events-none" />

                    <motion.div className="relative z-10 max-w-4xl mx-auto" style={{ y: ctaY }}>
                        {/* Logo Glow Effect */}
                        <div className="relative w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-8">
                            <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-30 animate-pulse" />
                            <div className="relative z-10 bg-white p-3 md:p-4 rounded-2xl shadow-xl">
                                <Factory className="w-full h-full text-green-600" />
                            </div>
                        </div>

                        <h2 className="text-3xl md:text-7xl font-bold text-white mb-4 md:mb-6">
                            Power Your Future.
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-10 max-w-2xl mx-auto font-medium">
                            Innovation, sustainability, and trust. <br /> Join the leaders in modern energy.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                            <Link href="/calculate-savings">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-white text-green-700 font-bold rounded-full shadow-lg shadow-black/10 flex items-center justify-center gap-2 hover:bg-slate-50"
                                >
                                    Get a Quote <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                                </motion.button>
                            </Link>
                            <Link href="/contact-us">
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-transparent border border-white text-white font-bold rounded-full shadow-sm hover:shadow-md"
                                >
                                    Contact Us
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>

            </motion.div>
        </section>
    );
}
