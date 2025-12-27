"use client"
import Link from "next/link"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

const BentoCard = ({
    number,
    title,
    desc,
    className = "",
}: {
    number: string
    title: string
    desc: string
    className?: string
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-10 bg-white border border-black/5 rounded-[2.5rem] flex flex-col justify-between hover:shadow-2xl hover:shadow-black/5 transition-all duration-700 ${className}`}
    >
        <span className="text-6xl font-serif text-black/5 leading-none mb-8">{number}</span>
        <div>
            <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{title}</h4>
            <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
        </div>
    </motion.div>
)

export default function AboutSection() {
    return (
        <section className="py-32 bg-background relative">
            <div className="container mx-auto px-6 max-w-7xl">
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
                        Delivering excellence via strategic energy audit.
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
                        number="01"
                        title="Optimization"
                        desc="Maximizing electrical and thermal efficiency across all systems to reduce operational overhead."
                    />
                    <BentoCard
                        number="02"
                        title="Industrial"
                        desc="Deep expertise in diverse industrial processes and large facilities with certified engineering protocols."
                    />
                    <BentoCard
                        number="03"
                        title="Sustainability"
                        desc="Reducing environmental footprint while increasing operational yields and long-term financial savings."
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
                            className="group relative inline-flex items-center gap-4 bg-slate-900 text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-primary transition-all shadow-2xl hover:shadow-slate-300"
                        >
                            <span>Notre engagement</span>
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                        </Link>
                    </motion.div>

                    <div className="flex items-center gap-3 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-full border border-black/5">
                        <ShieldCheck className="text-slate-400" size={18} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            Certified Energy Auditors & Engineers
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
