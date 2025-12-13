import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen pb-20">

            {/* Page Header */}
            <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0ea5e9]/10"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                    <div className="h-1 w-20 bg-[#22c55e] mx-auto rounded"></div>
                </div>
            </div>

            <div className="container mx-auto px-6 pt-16">
                <div className="max-w-4xl mx-auto">

                    {/* Intro */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-[#0ea5e9] pl-4">Our Mission</h2>
                        <p className="text-slate-600 mb-4 leading-relaxed text-lg">
                            With gradually increasing energy costs and depletion of natural resources of fossil fuels,
                            prudent energy efficient usage of Electrical energy and thermal energy is paramount.
                        </p>
                        <p className="text-slate-600 mb-4 leading-relaxed text-lg">
                            <strong>Limbaja Energy</strong> is committed to help clients achieve energy savings and provides
                            complete end-to-end solution from conceptualization, measurement, feasibility analysis and
                            implementation support for energy saving.
                        </p>
                    </div>

                    {/* Team & Expertise */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-12">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Our Expertise</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            We have a very qualified team of certified <strong>Energy Auditors and Energy Engineers</strong> who have
                            wide experience in various types of industries, processes, and facilities. In many industries
                            and facilities, energy generally has the highest potential for cost reduction.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Conservation and efficient utilization of energy resources like Pumping, Compressor, Boiler,
                            Heat Exchanger, and process study play a vital role in boosting the profitability of an industry.
                        </p>
                    </div>

                    {/* Key Features */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white shadow-md p-6 rounded-xl border-t-4 border-[#22c55e]">
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Specialization</h3>
                            <p className="text-slate-600">
                                LIMBAJA ENERGY has specialization in energy audit and energy implementation strategies tailored for industrial needs.
                            </p>
                        </div>
                        <div className="bg-white shadow-md p-6 rounded-xl border-t-4 border-[#0ea5e9]">
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Certification</h3>
                            <p className="text-slate-600">
                                Our team consists of Qualified Energy Auditors and Energy Managers certified by the <strong>Bureau of Energy Efficiency (BEE)</strong>,
                                Ministry of Power, Govt. Of India.
                            </p>
                        </div>
                    </div>

                    {/* Bullet Points */}
                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-slate-800 mb-6">Why Choose Us?</h3>
                        <ul className="grid gap-4">
                            <li className="flex items-center gap-3 text-slate-700 bg-slate-50 p-4 rounded-lg">
                                <CheckCircle2 className="text-[#22c55e]" size={24} />
                                <span className="font-medium">Fast-growing company in energy conservation field</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-700 bg-slate-50 p-4 rounded-lg">
                                <CheckCircle2 className="text-[#22c55e]" size={24} />
                                <span className="font-medium">Complete end-to-end energy solutions</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-700 bg-slate-50 p-4 rounded-lg">
                                <CheckCircle2 className="text-[#22c55e]" size={24} />
                                <span className="font-medium">Certified experts by Bureau of Energy Efficiency</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}
