import { ArrowRight, Zap, Leaf, BarChart3, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Animated Hero Section */}
      <Hero />

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">

            <div className="md:w-1/2">
              <div className="bg-slate-100 p-8 rounded-2xl border-l-4 border-[#0ea5e9]">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Highlights Of <span className="text-[#0ea5e9]">Limbaja Energy</span>
                </h2>
                <p className="text-slate-600 mb-6 leading-loose text-lg text-justify">
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
            </div>

            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature Cards */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-[#22c55e] mb-4 group-hover:bg-[#22c55e] group-hover:text-white transition-colors">
                  <Leaf size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-800">Energy Conservation</h3>
                <p className="text-slate-500 text-sm">Reducing carbon footprint through efficient energy utilization strategies.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-[#0ea5e9] mb-4 group-hover:bg-[#0ea5e9] group-hover:text-white transition-colors">
                  <BarChart3 size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-800">Energy Audit</h3>
                <p className="text-slate-500 text-sm">Detailed analysis of energy flows to identify saving opportunities.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-[#f59e0b] mb-4 group-hover:bg-[#f59e0b] group-hover:text-white transition-colors">
                  <Zap size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-800">Implementation</h3>
                <p className="text-slate-500 text-sm">End-to-end support for implementing energy saving measures.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Settings size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-800">Process Study</h3>
                <p className="text-slate-500 text-sm">Optimizing industrial processes like boilers, pumps, and compressors.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#0f172a] text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Start Saving Energy Today</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Contact our certified energy auditors to discover how much you can save.
          </p>
          <Link
            href="/contact-us"
            className="bg-[#22c55e] hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold transition-all inline-flex items-center gap-2"
          >
            Get a Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}
