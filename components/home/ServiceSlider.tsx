"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/app/service/ServiceData";

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group h-full"
        >
            <Link href={`/service/${service.id}`} className="block h-full">
                <div className="bg-white rounded-none overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group-hover:-translate-y-1 h-full">
                    {/* Banner Image Section */}
                    <div className="relative w-full aspect-video z-0">
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Texture Overlay */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col flex-grow relative z-10">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <div className="p-2 bg-slate-50 border border-slate-100 flex items-center justify-center text-primary rounded-none shrink-0 ml-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                <service.icon className="w-5 h-5" />
                            </div>
                        </div>

                        <p className="text-slate-600 text-sm line-clamp-3 mb-6 leading-relaxed flex-grow">
                            {service.description}
                        </p>

                        <div className="flex items-center text-secondary font-bold text-[10px] mt-auto uppercase tracking-[0.2em]">
                            <span className="mr-2">Explore Service</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default function ServiceSlider() {
    const displayedServices = services.slice(0, 6);

    return (
        <section className="py-24 bg-slate-200 overflow-hidden relative border-y border-slate-300/50">
            {/* Mid-Grey Depth Accents */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Very subtle technical grid */}
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `radial-gradient(#305196 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }}></div>

                {/* Soft, professional brand glows */}
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/[0.04] rounded-full blur-[150px]"></div>
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/[0.04] rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Professional Header - Centered */}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center gap-4 mb-6"
                        >
                            <span className="h-px w-8 bg-primary rounded-full"></span>
                            <span className="text-primary font-black text-[12px] uppercase tracking-[0.4em]">Industrial Excellence</span>
                            <span className="h-px w-8 bg-primary rounded-full"></span>
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                            Advanced Energy <br />
                            <span className="text-primary relative inline-block">
                                Auditing
                                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                                    <path d="M0 7C30 7 70 2 100 2" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" opacity="0.3" />
                                </svg>
                            </span> Services.
                        </h2>
                    </div>
                </div>

                {/* Grid - White Cards on Mid-Grey Backdrop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {displayedServices.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>

                {/* View All Button - Centered at Bottom */}
                <div className="flex justify-center mt-8">
                    <Link href="/service" className="group inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-none font-black uppercase tracking-widest text-xs hover:bg-primary transition-all shadow-xl">
                        <span>All Services</span>
                        <MoveRight className="group-hover:translate-x-2 transition-transform duration-500" size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}


