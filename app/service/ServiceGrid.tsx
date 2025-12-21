"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { services } from "./ServiceData";
import { ArrowRight } from "lucide-react";

export default function ServiceGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
                <Link href={`/service/${service.id}`} key={service.id} className="block group h-full">
                    <motion.div
                        layoutId={`card-${service.id}`}
                        className="bg-slate-900 rounded-none overflow-hidden border border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group-hover:-translate-y-1 h-full"
                    >
                        {/* Banner Image Section */}
                        <div className="relative w-full aspect-video z-0">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Texture Overlay */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                        </div>

                        {/* Content Section (Downside/Below Image) */}
                        <div className="p-6 flex flex-col flex-grow relative z-10">
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[var(--primary)] transition-colors">
                                    {service.title}
                                </h3>
                                <div className="p-2 bg-white/5 border border-white/10 flex items-center justify-center text-white rounded-none shrink-0 ml-4">
                                    <service.icon className="w-5 h-5" />
                                </div>
                            </div>


                            <p className="text-slate-400 text-sm line-clamp-3 mb-6 leading-relaxed flex-grow">
                                {service.description}
                            </p>

                            <div className="flex items-center text-[var(--secondary)] font-semibold text-sm mt-auto uppercase tracking-wider">
                                <span className="mr-2">View Details</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </motion.div>
                </Link>
            ))}
        </div>
    );
}
