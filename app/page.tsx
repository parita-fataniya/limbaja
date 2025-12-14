"use client";

import { ArrowRight, Zap, Leaf, BarChart3, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { ImageSlider } from "@/components/home/ImageSlider";
import { ClientMarquee } from "@/components/home/ClientMarquee";
import { ImpactStats } from "@/components/home/ImpactStats";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Animated Hero Section */}
      <Hero />

      {/* Image Slider Section */}
      <ImageSlider />

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-slate-100 p-6 md:p-8 rounded-2xl border-l-4 border-[#0ea5e9]">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Highlights Of <span className="text-[#0ea5e9]">Limbaja Energy</span>
                </h2>
                <p className="text-slate-600 mb-6 leading-loose text-lg text-left">
                  With gradually increasing energy costs and depletion of natural resources of fossil fuels,
                  prudent energy efficient usage of Electrical energy and thermal energy is essential.
                  <strong>Limbaja Energy</strong> is committed to help clients achieve energy savings and provides
                  complete end-to-end solutions from conceptualization, measurement, feasibility analysis
                  and implementation support for energy saving.
                </p>
                <Link href="/about-us" className="text-[#0ea5e9] font-bold hover:underline flex items-center gap-2">
                  Read more about us <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Feature Cards */}
              {[
                {
                  icon: Leaf,
                  title: "Energy Conservation",
                  desc: "Reducing carbon footprint through efficient energy utilization strategies.",
                  // green-500
                  classes: "bg-green-100 text-green-500 group-hover:bg-green-500"
                },
                {
                  icon: BarChart3,
                  title: "Energy Audit",
                  desc: "Detailed analysis of energy flows to identify saving opportunities.",
                  // sky-500
                  classes: "bg-sky-100 text-sky-500 group-hover:bg-sky-500"
                },
                {
                  icon: Zap,
                  title: "Implementation",
                  desc: "End-to-end support for implementing energy saving measures.",
                  // amber-500
                  classes: "bg-amber-100 text-amber-500 group-hover:bg-amber-500"
                },
                {
                  icon: Settings,
                  title: "Process Study",
                  desc: "Optimizing industrial processes like boilers, pumps, and compressors.",
                  // purple-600
                  classes: "bg-purple-100 text-purple-600 group-hover:bg-purple-600"
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:text-white transition-colors duration-300 ${card.classes}`}>
                    <card.icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-slate-800">{card.title}</h3>
                  <p className="text-slate-500 text-sm">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <ImpactStats />

      {/* Client Marquee Section */}
      <ClientMarquee />

      {/* Call to Action */}
      <section className="py-16 bg-[#0f172a] text-center text-white overflow-hidden">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Start Saving Energy Today</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Contact our certified energy auditors to discover how much you can save.
          </p>
          <Link
            href="/contact-us"
            className="bg-[#22c55e] hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold transition-all inline-flex items-center gap-2 transform hover:scale-105"
          >
            Get a Free Consultation <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
