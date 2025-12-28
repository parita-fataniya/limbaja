"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-[60px] md:top-[80px] left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary)] via-[#F8B133] to-[var(--secondary)] origin-left z-50"
            style={{ scaleX }}
        />
    );
}
