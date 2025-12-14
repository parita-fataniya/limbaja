"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Factory, Settings, Cog, Gauge, CircuitBoard, Boxes, Wrench, TrendingUp } from "lucide-react"
import { useRef, useEffect, useState } from "react"

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
        >
            {/* --- Background Animations Start --- */}

            {/* Radial Gradient Pulse - Optimized */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: isMobile
                            ? `radial-gradient(circle at 50% 50%, rgba(234, 88, 12, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 80% 80%, rgba(22, 163, 74, 0.2) 0%, transparent 50%)`
                            : `radial-gradient(circle at 20% 50%, rgba(234, 88, 12, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 80% 80%, rgba(22, 163, 74, 0.2) 0%, transparent 50%),
                               radial-gradient(circle at 40% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)`,
                        willChange: "opacity",
                    }}
                    animate={{
                        opacity: [0.2, 0.35, 0.2],
                    }}
                    transition={{
                        duration: isMobile ? 6 : 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Grid Overlay - Animated on Desktop, Static on Mobile */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <motion.div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(234, 88, 12, 0.15) 1px, transparent 1px)`,
                        backgroundSize: isMobile ? "30px 30px" : "50px 50px",
                    }}
                    animate={
                        !isMobile
                            ? {
                                backgroundPosition: ["0px 0px", "50px 50px", "0px 0px"],
                            }
                            : {}
                    }
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />
            </div>

            {/* Conveyor Belt Effect Lines - Mobile: Horizontal, Desktop: Vertical */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {isMobile
                    ? // Horizontal conveyor lines for mobile
                    [...Array(4)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute h-px bg-gradient-to-r from-transparent via-orange-600/40 to-transparent"
                            style={{
                                top: `${25 + i * 20}%`,
                                width: "100%",
                                willChange: "transform, opacity",
                            }}
                            animate={{
                                x: ["-100%", "100%"],
                                opacity: [0, 0.8, 0],
                            }}
                            transition={{
                                duration: 3 + i * 0.5,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: i * 0.6,
                                ease: "linear",
                            }}
                        />
                    ))
                    : // Vertical lines for desktop
                    [...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-px bg-gradient-to-b from-transparent via-orange-600/40 to-transparent"
                            style={{
                                left: `${15 + i * 15}%`,
                                height: "100%",
                                willChange: "transform, opacity",
                            }}
                            animate={{
                                opacity: [0, 0.7, 0],
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

            {/* Center Glow - Factory themed */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full pointer-events-none z-0"
                style={{
                    background: "radial-gradient(circle, rgba(234, 88, 12, 0.15) 0%, transparent 60%)",
                    willChange: "transform, opacity",
                }}
                animate={{
                    scale: isMobile ? [1, 1.15, 1] : [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: isMobile ? 8 : 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            />

            {/* Floating Orbs - Different positions on mobile */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full"
                    style={{
                        top: isMobile ? "15%" : "25%",
                        left: isMobile ? "10%" : "20%",
                        background: "radial-gradient(circle, rgba(22, 163, 74, 0.18) 0%, transparent 60%)",
                        willChange: "transform, opacity",
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.7, 0.3],
                        x: isMobile ? [0, 20, 0] : [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full"
                    style={{
                        bottom: isMobile ? "20%" : "25%",
                        right: isMobile ? "10%" : "20%",
                        background: "radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 60%)",
                        willChange: "transform, opacity",
                    }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.8, 0.4],
                        x: isMobile ? [0, -20, 0] : [0, -30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Factory Technical Elements - Hidden most on mobile, prominent on desktop */}
            {!isMobile && (
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                    {/* Large rotating gear - top left */}
                    <motion.div
                        className="absolute top-[12%] left-[8%]"
                        style={{ willChange: "transform" }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                        <Settings className="w-24 h-24 stroke-[1] text-orange-600/25" />
                    </motion.div>

                    {/* Small cog - top left nested */}
                    <motion.div
                        className="absolute top-[18%] left-[14%]"
                        style={{ willChange: "transform" }}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                        <Cog className="w-12 h-12 stroke-[1] text-green-600/30" />
                    </motion.div>

                    {/* Circuit board - top right pulsing */}
                    <motion.div
                        className="absolute top-[15%] right-[10%]"
                        style={{ willChange: "transform, opacity" }}
                        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                        <CircuitBoard className="w-20 h-20 stroke-[1] text-amber-500/35" />
                    </motion.div>

                    {/* Gauge - left side oscillating */}
                    <motion.div
                        className="absolute top-[45%] left-[6%]"
                        style={{ willChange: "transform" }}
                        animate={{ rotate: [-20, 20, -20] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                        <Gauge className="w-16 h-16 stroke-[1.5] text-orange-600/30" />
                    </motion.div>

                    {/* Boxes - bottom left floating */}
                    <motion.div
                        className="absolute bottom-[20%] left-[12%]"
                        style={{ willChange: "transform" }}
                        animate={{ y: [-15, 15, -15], x: [-8, 8, -8], rotate: [0, 5, 0, -5, 0] }}
                        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                        <Boxes className="w-20 h-20 stroke-[1.5] text-green-600/25" />
                    </motion.div>

                    {/* Wrench - right side pulsing */}
                    <motion.div
                        className="absolute top-[50%] right-[8%]"
                        style={{ willChange: "transform, opacity" }}
                        animate={{
                            scale: [1, 1.25, 1],
                            opacity: [0.25, 0.5, 0.25],
                            rotate: [0, 15, 0, -15, 0],
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                        <Wrench className="w-16 h-16 stroke-[1.5] text-amber-500/40" />
                    </motion.div>

                    {/* Large gear - bottom right rotating */}
                    <motion.div
                        className="absolute bottom-[25%] right-[12%]"
                        style={{ willChange: "transform" }}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                        <Settings className="w-20 h-20 stroke-[1] text-orange-600/22" />
                    </motion.div>

                    {/* Small cog - bottom right with dual animation */}
                    <motion.div
                        className="absolute bottom-[18%] right-[18%]"
                        style={{ willChange: "transform" }}
                        animate={{ rotate: 360, y: [-10, 10, -10] }}
                        transition={{
                            rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                            y: { duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                        }}
                    >
                        <Cog className="w-10 h-10 stroke-[1.5] text-green-600/28" />
                    </motion.div>
                </div>
            )}

            {/* Mobile-only simplified factory icons */}
            {isMobile && (
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                    {/* Top factory icon */}
                    <motion.div
                        className="absolute top-[15%] right-[10%]"
                        animate={{
                            y: [-8, 8, -8],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                        <Factory className="w-12 h-12 stroke-[1] text-orange-600/40" />
                    </motion.div>

                    {/* Rotating gear */}
                    <motion.div
                        className="absolute bottom-[25%] left-[12%]"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                        <Settings className="w-14 h-14 stroke-[1] text-green-600/35" />
                    </motion.div>
                </div>
            )}

            {/* Production Line Particles - More on desktop, fewer on mobile */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {[...Array(isMobile ? 4 : 8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-500 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: isMobile ? `${Math.random() * 100}%` : `${10 + Math.random() * 80}%`,
                            willChange: "transform, opacity",
                            boxShadow: "0 0 8px rgba(234, 88, 12, 0.5)",
                        }}
                        animate={{
                            y: isMobile ? [0, -60, 0] : [0, -120, 0],
                            x: [0, Math.random() * 60 - 30, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 4,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: Math.random() * 5,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* --- Background Animations End --- */}

            <motion.div className="relative z-20 container mx-auto px-6 pt-32 pb-20">
                {/* Stats Badge */}
                <motion.div
                    className="flex justify-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-white/5 backdrop-blur-md border border-orange-600/30 rounded-full text-xs md:text-sm"
                        whileHover={{ scale: 1.05, borderColor: "rgba(234, 88, 12, 0.5)" }}
                        animate={
                            isMobile
                                ? {
                                    boxShadow: [
                                        "0 0 0px rgba(234, 88, 12, 0)",
                                        "0 0 20px rgba(234, 88, 12, 0.3)",
                                        "0 0 0px rgba(234, 88, 12, 0)",
                                    ],
                                }
                                : {}
                        }
                        transition={
                            isMobile
                                ? {
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }
                                : {}
                        }
                    >
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                            <Factory className="w-4 h-4 text-orange-500" />
                        </motion.div>
                        <span className="text-white/90">Trusted by 500+ businesses worldwide</span>
                    </motion.div>
                </motion.div>

                {/* Main Heading */}
                <div className="text-center max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-[1.1] text-balance">
                            {/* Mobile: Single line, Desktop: Two lines */}
                            {isMobile ? (
                                <motion.span
                                    className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-green-500"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                >
                                    Power Your Future
                                </motion.span>
                            ) : (
                                <>
                                    <motion.span
                                        className="block text-white"
                                        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                    >
                                        Power Your Future
                                    </motion.span>

                                    <motion.span
                                        className="block mt-2"
                                        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                    >
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-green-500 animate-[shimmer_3s_ease-in-out_infinite]">
                                            With Sustainable Energy

                                        </span>
                                    </motion.span>
                                </>
                            )}
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-base md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed font-light text-pretty px-4 md:px-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: isMobile ? 0.5 : 0.3 }}
                    >
                        Transform your production with cutting-edge automation, Industry 4.0 integration, and real-time analytics.
                        Maximize efficiency, minimize downtime.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-4 md:px-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: isMobile ? 0.7 : 0.5 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={
                                isMobile
                                    ? {
                                        y: [0, -5, 0],
                                    }
                                    : {}
                            }
                            transition={
                                isMobile
                                    ? {
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "easeInOut",
                                    }
                                    : {}
                            }
                        >
                            <Link
                                href="/contact-us"
                                className="group relative inline-flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 overflow-hidden w-full sm:w-auto"
                            >
                                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative">Start Automation</span>
                                <ArrowRight
                                    size={isMobile ? 18 : 20}
                                    className="relative group-hover:translate-x-1 transition-transform"
                                />
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/about-us"
                                className="group inline-flex items-center justify-center gap-2 md:gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 hover:border-orange-500/50 text-white text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all w-full sm:w-auto"
                            >
                                <span>View Solutions</span>
                                <motion.span
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        rotate: isMobile ? [0, 10, 0, -10, 0] : 360,
                                    }}
                                    transition={{
                                        duration: isMobile ? 2 : 20,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: isMobile ? "easeInOut" : "linear",
                                    }}
                                >
                                    <TrendingUp size={isMobile ? 18 : 20} />
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
