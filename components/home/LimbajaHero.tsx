"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function LimbajaHero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50">
      
      {/* Background Abstract Shapes - Inspired by Logo's circular flow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Eco-Green Gradient Blob */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1, x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-[#68A33D]/10 rounded-full blur-3xl"
        />
        
        {/* Clean Energy Blue Gradient Blob */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1.1, x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#305196]/10 rounded-full blur-3xl"
        />

        {/* Warm Yellow Accent Blob */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4, rotate: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-[#F8B133]/10 rounded-full blur-3xl"
        />
        
        {/* Geometric Curves / Logo Extension */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 Q 50 0 100 100" stroke="currentColor" fill="transparent" strokeWidth="0.5" />
          <path d="M0 50 Q 50 100 100 50" stroke="currentColor" fill="transparent" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        {/* Logo Icon (Optional, subtle integration) */}
        {/* <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-8"
        >
          <Image src="/logo.svg" alt="Limbaja Energy Logo" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20" />
        </motion.div> */}

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Welcome to <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#68A33D] to-[#305196]">
            Limbaja Energy
          </span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex items-center gap-3 text-lg md:text-2xl font-medium text-slate-600 mb-8 uppercase tracking-widest"
        >
          <span className="text-[#68A33D]">Energy</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F8B133]" />
          <span className="text-[#305196]">Efficiency</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F8B133]" />
          <span className="text-slate-700">Excellence</span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-500 max-w-2xl font-light leading-relaxed mb-12"
        >
          Smart energy audits, efficiency measurement, and sustainable industrial solutions.
        </motion.p>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-[#305196]/60 font-semibold">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
             <ArrowDown className="text-[#68A33D]/60 w-6 h-6" />
          </motion.div>
        </motion.div>

      </div>
      
      {/* Decorative Gradient Overlay for depth */}
      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-80 z-0" />
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent opacity-80 z-0" />

    </section>
  );
}
