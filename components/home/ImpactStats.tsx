"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const CountUp = ({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (!inView) return;

        const node = nodeRef.current;
        const controls = animate(0, to, {
            duration: 2.5,
            ease: "easeOut",
            onUpdate(value: number) {
                if (node) {
                    node.textContent = `${prefix}${Math.round(value)}${suffix}`;
                }
            },
        });

        return () => controls.stop();
    }, [to, inView, prefix, suffix]);

    return <span ref={nodeRef} className="tabular-nums">{prefix}0{suffix}</span>;
};

export const ImpactStats = () => {
    return (
        <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white">
                            <CountUp to={500} suffix="+" />
                        </div>
                        <div className="text-sm md:text-base text-white/80 uppercase tracking-wider font-medium">Projects Completed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white">
                            <CountUp to={30} suffix="%" />
                        </div>
                        <div className="text-sm md:text-base text-white/80 uppercase tracking-wider font-medium">Average Savings</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white">
                            <CountUp to={100} suffix="%" />
                        </div>
                        <div className="text-sm md:text-base text-white/80 uppercase tracking-wider font-medium">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white">
                            24/7
                        </div>
                        <div className="text-sm md:text-base text-white/80 uppercase tracking-wider font-medium">Expert Support</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
