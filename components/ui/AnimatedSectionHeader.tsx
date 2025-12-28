"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedSectionHeaderProps {
    title: string;
    icon?: LucideIcon;
    className?: string;
}

export function AnimatedSectionHeader({ title, icon: Icon, className = "" }: AnimatedSectionHeaderProps) {
    return (
        <div className={`relative mb-8 inline-block ${className}`}>
            <div className="flex items-center gap-3">
                {Icon && (
                    <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="p-2 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]"
                    >
                        <Icon className="w-6 h-6" />
                    </motion.div>
                )}
                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-3xl font-bold text-slate-900"
                >
                    {title}
                </motion.h3>
            </div>

            {/* Animated Underline */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] origin-left rounded-full w-full max-w-[120px]" // Fixed width or dynamic? Let's limit it for style.
            />
        </div>
    );
}
