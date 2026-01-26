"use client"
import Link from "next/link"
import { ArrowRight, ShieldCheck, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

import Image from "next/image"

const BentoCard = ({
    title,
    desc,
    image,
    className = "",
}: {
    title: string
    desc: string
    image: string
    className?: string
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`group relative h-[450px] w-full bg-slate-900 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 border border-white/10 ${className}`}
    >
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0 h-full w-full">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
            {/* Gradient Overlay for general depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        </div>

        {/* Content Container - Glassmorphic Style */}
        <div className="absolute bottom-0 left-0 w-full p-6">
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 overflow-hidden transition-all duration-500 group-hover:bg-white/20">

                {/* Title & Icon Header */}
                <div className="flex justify-between items-center mb-2">
                    <h4 className="text-2xl font-bold text-white tracking-tight drop-shadow-md">
                        {title}
                    </h4>
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                        <ArrowUpRight className="text-white" size={20} />
                    </div>
                </div>

                {/* Description - Reveals on Hover */}
                <div className="max-h-0 group-hover:max-h-24 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out overflow-hidden">
                    <p className="text-slate-200 leading-relaxed text-sm font-medium pt-2 border-t border-white/10 mt-2">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    </motion.div>
)

export default function AboutSection() {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <span className="h-px w-8 bg-black/20"></span>
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400">
                            Our Strategic Approach
                        </span>
                        <span className="h-px w-8 bg-black/20"></span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 max-w-3xl"
                    >
                        Delivering Excellence Via Strategic <span className="whitespace-nowrap">Energy Audit.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-500 max-w-2xl leading-relaxed"
                    >
                        Limbaja Energy is committed to helping clients achieve energy savings through precision measurement and
                        expert analysis. Prudent energy usage has become a critical business imperative.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <BentoCard
                        title="Optimization"
                        desc="Maximizing electrical and thermal efficiency across all systems to reduce operational overhead."
                        image="/about/optimization.png"
                    />
                    <BentoCard
                        title="Industrial"
                        desc="Deep expertise in diverse industrial processes and large facilities with certified engineering protocols."
                        image="/about/industrial.png"
                    />
                    <BentoCard
                        title="Sustainability"
                        desc="Reducing environmental footprint while increasing operational yields and long-term financial savings."
                        image="/about/sustainability.png"
                    />
                </div>

                <div className="flex flex-col items-center gap-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/about-us"
                            className="group relative inline-flex items-center gap-4 bg-slate-900 text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-primary transition-all shadow-xl hover:shadow-2xl hover:shadow-slate-300 transform hover:-translate-y-1"
                        >
                            <span>Notre engagement</span>
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                        </Link>
                    </motion.div>

                    <div className="flex items-center gap-3 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-full border border-black/5 shadow-sm">
                        <ShieldCheck className="text-teal-600" size={18} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                            Certified Energy Auditors & Engineers
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
