import { CheckCircle2, Zap, BarChart2, Wind, Thermometer, Droplets, Activity, Search, AlertTriangle, Settings, FileText, PieChart, Globe } from "lucide-react";

export default function ServicePage() {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Page Header */}
            <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0ea5e9]/10"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                    <div className="h-1 w-20 bg-[#22c55e] mx-auto rounded"></div>
                    <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                        We provide comprehensive energy solutions tailored to your industry needs.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 pt-16">
                <div className="grid lg:grid-cols-4 gap-12">

                    {/* Sidebar Navigation (Hidden on small screens for now, can be sticky) */}
                    <div className="hidden lg:block col-span-1">
                        <div className="sticky top-24 space-y-2 max-h-[80vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-slate-200">
                            <h3 className="font-bold text-slate-800 mb-4 px-2">Service Index</h3>
                            <a href="#detailed-energy-audit" className="block px-3 py-2 text-sm text-slate-600 hover:text-[#0ea5e9] hover:bg-slate-50 rounded transition-colors">Detailed Energy Audit</a>
                            <a href="#energy-conservation" className="block px-3 py-2 text-sm text-slate-600 hover:text-[#0ea5e9] hover:bg-slate-50 rounded transition-colors">Energy Conservation</a>
                            <a href="#harmonic-analysis" className="block px-3 py-2 text-sm text-slate-600 hover:text-[#0ea5e9] hover:bg-slate-50 rounded transition-colors">Harmonic Analysis</a>
                            <a href="#flow-measurement" className="block px-3 py-2 text-sm text-slate-600 hover:text-[#0ea5e9] hover:bg-slate-50 rounded transition-colors">Flow Measurement</a>
                            <a href="#compressor-audit" className="block px-3 py-2 text-sm text-slate-600 hover:text-[#0ea5e9] hover:bg-slate-50 rounded transition-colors">Compressor Air Flow Audit</a>
                            <a href="#leakage-audit" className="block px-3 py-2 text-sm text-slate-600 hover:text-[#0ea5e9] hover:bg-slate-50 rounded transition-colors">Ultrasonic Air Leakage Audit</a>
                            <a href="#power-plant-audit" className="block px-3 py-2 text-sm text-slate-600 hover:text-[#0ea5e9] hover:bg-slate-50 rounded transition-colors">Power Plant Audit</a>
                            <a href="#boiler-furnace" className="block px-3 py-2 text-sm text-slate-600 hover:text-[#0ea5e9] hover:bg-slate-50 rounded transition-colors">Boiler & Furnace Study</a>
                            <a href="#cooling-tower" className="block px-3 py-2 text-sm text-slate-600 hover:text-[#0ea5e9] hover:bg-slate-50 rounded transition-colors">Cooling Tower Study</a>
                            <a href="#chiller" className="block px-3 py-2 text-sm text-slate-600 hover:text-[#0ea5e9] hover:bg-slate-50 rounded transition-colors">Chiller Performance</a>
                            <a href="#lighting" className="block px-3 py-2 text-sm text-slate-600 hover:text-[#0ea5e9] hover:bg-slate-50 rounded transition-colors">Lighting System</a>
                            <a href="#thermography" className="block px-3 py-2 text-sm text-slate-600 hover:text-[#0ea5e9] hover:bg-slate-50 rounded transition-colors">Thermography Study</a>
                            <a href="#steam-trap" className="block px-3 py-2 text-sm text-slate-600 hover:text-[#0ea5e9] hover:bg-slate-50 rounded transition-colors">Steam Trap Audit</a>
                            <a href="#pumping" className="block px-3 py-2 text-sm text-slate-600 hover:text-[#0ea5e9] hover:bg-slate-50 rounded transition-colors">Pumping System Study</a>
                            <a href="#fan" className="block px-3 py-2 text-sm text-slate-600 hover:text-[#0ea5e9] hover:bg-slate-50 rounded transition-colors">Fan Study</a>
                            <a href="#carbon" className="block px-3 py-2 text-sm text-slate-600 hover:text-[#0ea5e9] hover:bg-slate-50 rounded transition-colors">Carbon Verification</a>
                            <a href="#arc-flash" className="block px-3 py-2 text-sm text-slate-600 hover:text-[#0ea5e9] hover:bg-slate-50 rounded transition-colors">Electrical Arc Flash</a>
                            <a href="#motor" className="block px-3 py-2 text-sm text-slate-600 hover:text-[#0ea5e9] hover:bg-slate-50 rounded transition-colors">Motor Efficiency</a>
                            <a href="#meter-calibration" className="block px-3 py-2 text-sm text-slate-600 hover:text-[#0ea5e9] hover:bg-slate-50 rounded transition-colors">Meter Calibration</a>
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-3 space-y-20">

                        {/* Detailed Energy Audit */}
                        <section id="detailed-energy-audit" className="scroll-mt-28">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-50 rounded-lg text-[#0ea5e9]"><FileText size={32} /></div>
                                <h2 className="text-3xl font-bold text-slate-800">Detailed Energy Audit</h2>
                            </div>
                            <div className="prose prose-slate max-w-none text-slate-600">
                                <p className="text-lg leading-relaxed mb-6">
                                    Energy Audit is defined as “the verification, monitoring and analysis of use of energy including submission of technical report containing recommendations for improving energy efficiency with cost benefit analysis and an action plan to reduce energy consumption”. It builds on the principle "you can't manage what you don't measure" combining energy use and statistics.
                                </p>

                                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Types of Detailed Energy Audit</h3>
                                <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
                                    {[
                                        "Electrical Energy Audit",
                                        "Thermal Energy Audit",
                                        "Comprehensive Energy Audit",
                                        "Mandatory Energy Audit",
                                        "Statutory Energy Audit as per Chief Electrical Inspector",
                                        "Energy Audit as per ISO 50001",
                                        "Responsible Care (RC) certification Compliance"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                            <CheckCircle2 size={18} className="text-[#22c55e] shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Essential Elements</h3>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[
                                        { title: "Recording", desc: "Measuring and recording energy consumption" },
                                        { title: "Analyzing", desc: "Correlating energy consumption to measured output" },
                                        { title: "Comparing", desc: "Comparing to appropriate standard or benchmark" },
                                        { title: "Setting Targets", desc: "Setting targets to reduce energy consumption" },
                                        { title: "Monitoring", desc: "Comparing consumption to set targets regularly" },
                                        { title: "Reporting", desc: "Reporting results including variances" },
                                        { title: "Controlling", desc: "Implementing measures to correct variances" }
                                    ].map((ele, i) => (
                                        <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                                            <h4 className="font-bold text-slate-800 mb-2">{ele.title}</h4>
                                            <p className="text-sm text-slate-500">{ele.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Scope of Work</h3>
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-6">
                                    <div>
                                        <h4 className="font-bold text-[#0ea5e9] mb-2">Analysis of Electricity Bills</h4>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Study of fixed and variable charges</li>
                                            <li>Calculation of Specific Energy Consumption</li>
                                            <li>Load factor calculation & Contract demand optimization</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0ea5e9] mb-2">Electrical Distribution Networks</h4>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Performance evaluation of transformers & Load survey</li>
                                            <li>Cable loss calculation & reduction methods</li>
                                            <li>Power factor measurement at PCC, MCC and Major loads</li>
                                            <li>Review of metering and monitoring status</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0ea5e9] mb-2">Electrical Equipment</h4>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Measurement of voltage, current, KW, PF, frequency</li>
                                            <li>Determining loading of major motive loads</li>
                                            <li>Specific Energy Consumption for major loads</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="w-full h-px bg-slate-200"></div>

                        {/* Energy Conservation */}
                        <section id="energy-conservation" className="scroll-mt-28">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-green-50 rounded-lg text-green-600"><Zap size={32} /></div>
                                <h2 className="text-3xl font-bold text-slate-800">Energy Conservation</h2>
                            </div>
                            <div className="prose prose-slate max-w-none text-slate-600">
                                <p className="mb-6">
                                    Energy conservation is the effort made to reduce the consumption of energy by using less of an energy service. It can be achieved by using energy more efficiently or reducing the amount of service used. Energy conservation measures (ECMs) in industry reduce the need for energy services and result in increased environmental quality, national security, personal financial security, and higher savings.
                                </p>
                                <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
                                    <h3 className="font-bold text-green-800 mb-4 text-lg">Project Models</h3>
                                    <ul className="grid sm:grid-cols-2 gap-3 list-none pl-0">
                                        {[
                                            "Guaranteed Energy Saving Project",
                                            "Percentage Basis Energy Saving Project",
                                            "Fixed cost Energy Saving Project",
                                            "Implementation of Energy Saving Project",
                                            "Technology Upgradation Energy Saving Project",
                                            "Energy Efficiency Wise Energy Saving Project",
                                            "Alternative Fuel Selection Energy Saving Projects"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-6">
                                    <h3 className="font-bold text-slate-800 mb-2">Benchmarking</h3>
                                    <p>
                                        Benchmarking of energy consumption internally (historical/trend analysis) and externally (across similar industries) are powerful tools for performance assessment. Historical data helps bring out energy consumption and cost trends, helping understand effects of capacity utilization on energy use efficiency.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <div className="w-full h-px bg-slate-200"></div>

                        {/* Harmonic Analysis */}
                        <section id="harmonic-analysis" className="scroll-mt-28">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600"><Activity size={32} /></div>
                                <h2 className="text-3xl font-bold text-slate-800">Harmonic Analysis</h2>
                            </div>
                            <div className="prose prose-slate max-w-none text-slate-600">
                                <p className="mb-6">
                                    Harmonic analysis is a technique used to study and analyze the harmonic components in a periodic waveform. In electrical engineering, it examines the existence and properties of harmonics in electrical power systems, often introduced by non-linear loads like power electronics and VFDs.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mt-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                            <AlertTriangle className="text-amber-500" size={24} />
                                            Problems Caused by Harmonics
                                        </h3>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex gap-2"><span>•</span> Blinking of Incandescent Lights (Transformer Saturation)</li>
                                            <li className="flex gap-2"><span>•</span> Capacitor Failure (Harmonic Resonance)</li>
                                            <li className="flex gap-2"><span>•</span> Circuit Breakers Tripping (Inductive Heating)</li>
                                            <li className="flex gap-2"><span>•</span> Electronic Equipment Shutting down (Voltage Distortion)</li>
                                            <li className="flex gap-2"><span>•</span> Motor Failures (Overheating due to voltage drop)</li>
                                            <li className="flex gap-2"><span>•</span> Power Interference on Voice Communication</li>
                                        </ul>
                                    </div>
                                    <div className="bg-indigo-50 p-6 rounded-xl">
                                        <h3 className="text-xl font-bold text-indigo-900 mb-4">Our Methodology</h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 size={18} className="text-indigo-600 mt-1" />
                                                <span>Measurement of Total Harmonic Distortion (Voltage & Current).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 size={18} className="text-indigo-600 mt-1" />
                                                <span>Analysis of Harmonics up to 50th order (IEEE 519/IEC 61000 standards).</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 size={18} className="text-indigo-600 mt-1" />
                                                <span>Use of 3 Phase 3 Wire Method.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 size={18} className="text-indigo-600 mt-1" />
                                                <span>Design of Harmonic Filters (Active/Passive) to mitigate issues.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h3 className="font-bold text-slate-800 mb-4">Suggestions for Mitigation</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="border border-slate-200 p-4 rounded-lg">
                                            <strong className="block text-[#0ea5e9] mb-2">Option 1: Detuned Capacitor</strong>
                                            <p className="text-sm">Prevents harmonic amplification and resonance, limiting current flow into capacitors and extending their life.</p>
                                        </div>
                                        <div className="border border-slate-200 p-4 rounded-lg">
                                            <strong className="block text-[#0ea5e9] mb-2">Option 2: Active Filter</strong>
                                            <p className="text-sm">Install Active filters in the plant to dynamically reduce harmonics across the spectrum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="w-full h-px bg-slate-200"></div>

                        {/* Flow Measurement */}
                        <section id="flow-measurement" className="scroll-mt-28">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-cyan-50 rounded-lg text-cyan-600"><Droplets size={32} /></div>
                                <h2 className="text-3xl font-bold text-slate-800">Flow Measurement</h2>
                            </div>
                            <div className="prose prose-slate max-w-none text-slate-600">
                                <p className="mb-6">
                                    Accurate flow measurements are critical to the calculation of Utility or process control applications. External flow measurement with clamp-on ultrasonic transducers has become a standard measuring technique due to its non-invasive nature and ability to measure widely independent of fluid type (liquid, gas, steam).
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-cyan-50 p-5 rounded-lg border border-cyan-100">
                                        <h4 className="font-bold text-cyan-800 mb-2">Principle</h4>
                                        <p className="text-sm">
                                            Clamp-on ultrasonic systems determine volumetric flow using the transit-time difference method. The time delay between acoustic transit time with and against the flow direction is measured to calculate flow rate based on pipe geometry and fluid properties.
                                        </p>
                                    </div>
                                    <div className="bg-cyan-50 p-5 rounded-lg border border-cyan-100">
                                        <h4 className="font-bold text-cyan-800 mb-2">Key Features</h4>
                                        <ul className="text-sm space-y-1 list-disc pl-4">
                                            <li>Non-invasive clamp-on technology</li>
                                            <li>Precise bidirectional measuring</li>
                                            <li>Explosion protection (ATEX/IECEx zone 2)</li>
                                            <li>Flow & thermal energy measurement of Steam</li>
                                        </ul>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4">Measurement Services</h3>
                                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                                    {[
                                        "Steam Flow Measurement (up to 180 °C)",
                                        "Thermic Fluid Heater Flow (up to 240 °C)",
                                        "Boiler Feed Water Flow (up to 240 °C)",
                                        "Brine chiller Flow (up to -30 °C)",
                                        "Fire Fighting Line Flow",
                                        "ETP Line Flow",
                                        "Water Pumping Station Flow",
                                        "Borewell Flow",
                                        "Chemical Flow",
                                        "Cooling Tower Flow",
                                        "Condenser Flow",
                                        "Chiller Flow"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <div className="w-full h-px bg-slate-200"></div>

                        {/* Compressor Audits */}
                        <section id="compressor-audit" className="scroll-mt-28">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-sky-50 rounded-lg text-sky-600"><Wind size={32} /></div>
                                <h2 className="text-3xl font-bold text-slate-800">Compressor Audits</h2>
                            </div>

                            <div className="space-y-12">
                                {/* Air Flow Audit */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-4 border-l-4 border-sky-500 pl-3">Compressor Air Flow Audit</h3>
                                    <p className="text-slate-600 mb-4">
                                        Identifies inefficiencies, reduces energy costs, and improves system performance. Many compressors operate inefficiently due to leaks, artificial demand, or incorrect pressure settings.
                                    </p>
                                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                        <h4 className="font-bold text-slate-800 mb-3">Scope of Work</h4>
                                        <ul className="space-y-2 text-slate-600 list-disc pl-5">
                                            <li>Measurement of Compressed Air Flow at Generation and Consumption.</li>
                                            <li>Evaluation of specific energy consumption (kW/CFM).</li>
                                            <li>Pressure profile analysis of the network.</li>
                                            <li>Analysis of usage pressure vs requirement.</li>
                                            <li>Cost savings analysis and recommendations.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Leakage Audit */}
                                <div id="leakage-audit" className="scroll-mt-28">
                                    <h3 className="text-xl font-bold text-slate-800 mb-4 border-l-4 border-amber-500 pl-3">Ultrasonic Air Leakage Audit</h3>
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex-1">
                                            <p className="text-slate-600 mb-4">
                                                We identify leakage points using advanced ultrasonic leak detectors with location tagging and camera capturing. This allows for quantification of leakage (CFM) and cost impact without machine stoppage.
                                            </p>
                                            <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg">
                                                <h4 className="font-bold text-amber-800 mb-2 text-sm uppercase tracking-wide">Leakage Example Calculation</h4>
                                                <div className="text-sm space-y-1 text-slate-700">
                                                    <div className="flex justify-between"><span>Air leakage from valve:</span> <span className="font-mono font-bold">12 CFM</span></div>
                                                    <div className="flex justify-between"><span>Power Wastage:</span> <span className="font-mono font-bold">2.16 kW</span></div>
                                                    <div className="flex justify-between"><span>Annual Cost Waste:</span> <span className="font-mono font-bold text-red-600">~ ₹1,60,834</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 bg-slate-50 p-6 rounded-xl border border-slate-200">
                                            <h4 className="font-bold text-slate-800 mb-3">Scope of Work</h4>
                                            <ul className="space-y-2 text-slate-600 list-disc pl-5">
                                                <li>Online air leakage identification using ultrasonic detector.</li>
                                                <li>Quantification of leaks in CFM and tagging.</li>
                                                <li>Generation of report with leak locations.</li>
                                                <li>Compressed air SLD study.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="w-full h-px bg-slate-200"></div>

                        {/* Power Plant Audit */}
                        <section id="power-plant-audit" className="scroll-mt-28">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-purple-50 rounded-lg text-purple-600"><Settings size={32} /></div>
                                <h2 className="text-3xl font-bold text-slate-800">Power Plant Audit</h2>
                            </div>
                            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 mb-8">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-bold text-purple-900 mb-2">Plant Types</h3>
                                        <ul className="list-disc pl-5 text-purple-800/80 space-y-1">
                                            <li>Captive Power Plant</li>
                                            <li>Cogeneration Power Plant</li>
                                            <li>Waste Heat Recovery</li>
                                            <li>Gas Power Plant</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-purple-900 mb-2">Standards</h3>
                                        <p className="text-sm text-purple-800/80">Performance testing in accordance with respective PTC Codes (ASME PTC 4, 4.3, 6, 12.1, 12.2, 23).</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2">Steam Generator Boiler Efficiency (ASME PTC 4)</h4>
                                    <p className="text-slate-600 text-sm">Evaluation by indirect method: measuring heat loss due to dry flue gas, moisture in fuel/air, hydrogen, unburnt carbon, radiation limits.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2">Turbine (ASME PTC 6)</h4>
                                    <p className="text-slate-600 text-sm">Turbine cylinder efficiency, pressure survey, heat rate, gland sealing system performance.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2">Condenser & Cooling Tower</h4>
                                    <p className="text-slate-600 text-sm">Performance study of deviation due to flow, scale, pressure loss. Assessment of cooling tower capacity, range, approach and effectiveness (PTC 23).</p>
                                </div>
                            </div>
                        </section>

                        <div className="w-full h-px bg-slate-200"></div>

                        {/* Boiler & Furnace Study */}
                        <section id="boiler-furnace" className="scroll-mt-28">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-orange-50 rounded-lg text-orange-600"><Thermometer size={32} /></div>
                                <h2 className="text-3xl font-bold text-slate-800">Boiler & Furnace Study</h2>
                            </div>
                            <div className="prose prose-slate max-w-none text-slate-600">
                                <p className="mb-6">
                                    Efficiencies of generation, distribution, and utilization of thermal energies are determined. Boiler efficiency tests determine steam generation to fuel ratio.
                                </p>
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                    <h3 className="font-bold text-slate-800 mb-4">Scope of Work</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
                                            <li>Flue gas analysis (Excess air, Oxygen, Stack losses).</li>
                                            <li>Surface temperature measurement (Radiation & Convection losses).</li>
                                            <li>Complete heat and mass balance.</li>
                                            <li>Boiler indirect efficiency calculation.</li>
                                            <li>Analysis of air ingress in flue gas path.</li>
                                        </ul>
                                        <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
                                            <li>Evaluation of boiler blow down losses.</li>
                                            <li>Study of boiler loading pattern and peak load behavior.</li>
                                            <li>Performance analysis of Super heater, Air preheater, Economizer.</li>
                                            <li>Draft system evaluation (FD, ID & PA fan efficiency).</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h3 className="font-bold text-slate-800 mb-2">Process Heat Mass Balance</h3>
                                    <p className="text-sm">
                                        Critical for process engineering to optimize efficiency. Involves Process Streams (flows of materials) and Balance Equations (Energy & Mass) to account for inputs and outputs accurately. Used for both troubleshooting existing processes and designing new ones.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <div className="w-full h-px bg-slate-200"></div>

                        {/* Cooling Tower Study */}
                        <section id="cooling-tower" className="scroll-mt-28">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-teal-50 rounded-lg text-teal-600"><Wind size={32} /></div>
                                <h2 className="text-3xl font-bold text-slate-800">Cooling Tower Study</h2>
                            </div>
                            <div className="prose prose-slate max-w-none text-slate-600">
                                <p className="mb-6">
                                    Cooling towers represent the largest reuse of water in industrial applications. Optimizing their operation offers significant savings (20-25%). We assess capacity, efficiency, and identifying energy saving potential.
                                </p>
                                <div className="bg-teal-50 p-6 rounded-xl border border-teal-100 mb-6">
                                    <h3 className="font-bold text-teal-800 mb-3">Scope of Work</h3>
                                    <ul className="grid md:grid-cols-2 gap-2 text-sm text-slate-700 list-disc pl-5">
                                        <li>Measurement of power parameters (Fans, Pumps).</li>
                                        <li>Measurement of air flow, DBT, WBT, Sump Temp, RH.</li>
                                        <li>Heat Load Calculation.</li>
                                        <li>Estimation of Range, Approach, and Effectiveness.</li>
                                        <li>Calculation of Evaporation loss, Blowdown loss, COC.</li>
                                        <li>L/G Ratio analysis.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2">Energy Saving Opportunities</h4>
                                    <ul className="text-sm list-disc pl-5 space-y-1 text-slate-600 columns-1 md:columns-2 gap-8">
                                        <li>Optimize fan blade angle and clearance.</li>
                                        <li>Replace old nozzles with non-clogging square spray ABS nozzles.</li>
                                        <li>Replace splash bars with PVC cellular film fill.</li>
                                        <li>Install new drift eliminators.</li>
                                        <li>Optimize blow down flow rate.</li>
                                        <li>Monitor L/G ratio and approach.</li>
                                        <li>Control cooling tower fans based on temperature.</li>
                                        <li>Install VFD for fan energy savings.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <div className="w-full h-px bg-slate-200"></div>

                        {/* Chiller Performance */}
                        <section id="chiller" className="scroll-mt-28">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-cyan-50 rounded-lg text-cyan-600"><Thermometer size={32} /></div>
                                <h2 className="text-3xl font-bold text-slate-800">Chiller Performance</h2>
                            </div>
                            <div className="prose prose-slate max-w-none text-slate-600">
                                <p className="mb-6">
                                    Performance assessment involves calculating cooling duty and power consumption to determine Specific Power Consumption (SPC - kW/TR) and Energy Efficiency Ratio (EER).
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white p-5 rounded-xl border border-slate-200">
                                        <h4 className="font-bold text-slate-800 mb-2">Scope of Work</h4>
                                        <ul className="space-y-1 text-sm list-disc pl-5">
                                            <li>Review of present HVAC system (Chillers, AHUs, Pumps, Towers).</li>
                                            <li>Estimation of actual tonnage vs design.</li>
                                            <li>Evaluation of COP and EER.</li>
                                            <li>Measurement of Chiller Power Consumption Pattern.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-cyan-50 p-5 rounded-xl border border-cyan-100">
                                        <h4 className="font-bold text-cyan-900 mb-2">Case Study Highlight</h4>
                                        <p className="text-sm text-cyan-800 mb-2">Reduction of Chiller consumption by Overhaul.</p>
                                        <ul className="space-y-1 text-xs text-cyan-800/80">
                                            <li className="flex justify-between"><span>Existing SEC:</span> <span className="font-mono">0.81 kW/TR</span></li>
                                            <li className="flex justify-between"><span>Suggested SEC:</span> <span className="font-mono">0.70 kW/TR</span></li>
                                            <li className="flex justify-between font-bold"><span>Annual Saving:</span> <span>₹8,77,067</span></li>
                                            <li className="flex justify-between"><span>Payback:</span> <span>~8 months</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="w-full h-px bg-slate-200"></div>

                        {/* Lighting System */}
                        <section id="lighting" className="scroll-mt-28">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-yellow-50 rounded-lg text-yellow-600"><Zap size={32} /></div>
                                <h2 className="text-3xl font-bold text-slate-800">Lighting System</h2>
                            </div>
                            <p className="text-slate-600 mb-4">
                                Lighting consumes 2-10% of total industrial power. We examine the system to improve efficiency and optimize lighting levels by incorporating energy-efficient equipment and layout changes.
                            </p>
                        </section>

                        <div className="w-full h-px bg-slate-200"></div>

                        {/* Thermography Study */}
                        <section id="thermography" className="scroll-mt-28">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-red-50 rounded-lg text-red-600"><Thermometer size={32} /></div>
                                <h2 className="text-3xl font-bold text-slate-800">Thermography Study</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-slate-600 mb-4">
                                        Predictive maintenance using Infrared technology. It allows early detection of potential problems like hotspots in electrical panels, insulation failures, and heat loss without disrupting operations.
                                    </p>
                                    <h4 className="font-bold text-slate-800 mb-2">Services Provided</h4>
                                    <ul className="text-sm list-disc pl-5 space-y-1 text-slate-600">
                                        <li>Electrical Thermography Service</li>
                                        <li>Boiler Insulation Thermography</li>
                                        <li>Steam Line Insulation Thermography</li>
                                        <li>Furnace Insulation Thermography</li>
                                        <li>Thermic Fluid Heater Line Insulation</li>
                                        <li>Chiller line Insulation</li>
                                    </ul>
                                </div>
                                <div className="bg-red-50 p-6 rounded-xl text-center flex flex-col items-center justify-center">
                                    <Thermometer size={48} className="text-red-400 mb-3" />
                                    <p className="font-medium text-red-800">Non-Contact Inspection</p>
                                    <p className="text-sm text-red-600">No loss of production or downtime.</p>
                                </div>
                            </div>
                        </section>

                        <div className="w-full h-px bg-slate-200"></div>

                        {/* Steam Trap Audit */}
                        <section id="steam-trap" className="scroll-mt-28">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-gray-50 rounded-lg text-gray-600"><Droplets size={32} /></div>
                                <h2 className="text-3xl font-bold text-slate-800">Steam Trap Audit</h2>
                            </div>
                            <p className="text-slate-600 mb-4">
                                Optimized steam traps can reduce energy costs by 10-15%. We use thermography to find plugged or leaking steam traps by comparing upstream and downstream temperatures.
                            </p>
                        </section>

                        <div className="w-full h-px bg-slate-200"></div>

                        {/* Pumping System Study */}
                        <section id="pumping" className="scroll-mt-28">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-50 rounded-lg text-blue-600"><Activity size={32} /></div>
                                <h2 className="text-3xl font-bold text-slate-800">Pumping System Study</h2>
                            </div>
                            <div className="prose prose-slate max-w-none text-slate-600">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
                                    <h3 className="font-bold text-slate-800 mb-2">Scope of Work</h3>
                                    <ul className="list-disc pl-5 space-y-1 text-sm">
                                        <li>Measurement and Analysis of Pump operating parameters (Power, Flow, Head).</li>
                                        <li>Comparison of operating efficiency vs design efficiency.</li>
                                        <li>Study of pump operation vs process requirement.</li>
                                        <li>Identification of energy saving potential (e.g., replacing inefficient pumps).</li>
                                    </ul>
                                </div>
                                <div className="p-4 border border-blue-100 rounded-lg bg-blue-50/30">
                                    <h4 className="font-bold text-blue-900 mb-2 text-sm">Case Study: Pump Replacement</h4>
                                    <p className="text-xs text-blue-800 mb-2">Replacing existing pump with Energy Efficient Pump (82% eff)</p>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                                        <div><span className="block text-slate-500">Old Efficiency</span><span className="font-bold">37.26%</span></div>
                                        <div><span className="block text-slate-500">New Efficiency</span><span className="font-bold">82%</span></div>
                                        <div><span className="block text-slate-500">Power Saving</span><span className="font-bold">30.2 kW</span></div>
                                        <div><span className="block text-slate-500">Annual Saving</span><span className="font-bold">₹14,38,341</span></div>
                                    </div>
                                    <div className="mt-2 pt-2 border-t border-blue-200 text-center">
                                        <span className="text-xs font-bold text-green-600">Payback Period: 2.42 Months</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="w-full h-px bg-slate-200"></div>

                        {/* Fan Study */}
                        <section id="fan" className="scroll-mt-28">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600"><Wind size={32} /></div>
                                <h2 className="text-3xl font-bold text-slate-800">Fan Study</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-slate-600 mb-4">
                                        Fans are tested for field performance (Flow, Head, Temperature, kW). We compare operating efficiency with rated efficiency and study control methods (Damper vs VFD).
                                    </p>
                                    <h4 className="font-bold text-slate-800 mb-2">Scope of Work</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                                        <li>Measurement of operating parameters.</li>
                                        <li>Efficiency comparison.</li>
                                        <li>Suggestions for improvement (e.g., VFD installation).</li>
                                    </ul>
                                </div>
                                <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100">
                                    <h4 className="font-bold text-indigo-900 mb-2 text-sm">Case Study: VFD Installation</h4>
                                    <p className="text-xs text-indigo-800 mb-3">Replaced Damper Control (50% throttling) with VFD.</p>
                                    <ul className="space-y-1 text-xs text-indigo-800/80">
                                        <li className="flex justify-between"><span>Power Saving:</span> <span className="font-mono font-bold">28.9 kW (30%)</span></li>
                                        <li className="flex justify-between"><span>Annual Saving:</span> <span className="font-mono font-bold">₹16,87,983</span></li>
                                        <li className="flex justify-between"><span>Investment:</span> <span className="font-mono font-bold">Nil (VFD existed)</span></li>
                                        <li className="flex justify-between"><span>Payback:</span> <span className="font-mono font-bold">Immediate</span></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <div className="w-full h-px bg-slate-200"></div>

                        {/* Carbon Verification */}
                        <section id="carbon" className="scroll-mt-28">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-green-50 rounded-lg text-green-600"><Globe size={32} /></div>
                                <h2 className="text-3xl font-bold text-slate-800">Carbon Verification Service</h2>
                            </div>
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <p className="text-slate-600 mb-4">
                                    We assist in validating carbon credits under the Universal Carbon Registry (UCR).
                                </p>
                                <h4 className="font-bold text-green-900 mb-3">Project Types</h4>
                                <ul className="grid md:grid-cols-2 gap-2 text-sm text-green-800 list-disc pl-5">
                                    <li>Wind, Solar, Hydro Power Projects</li>
                                    <li>Biomass Power & Thermal Projects</li>
                                    <li>Biogas Power & Thermal Projects</li>
                                    <li>Energy Efficiency Projects</li>
                                    <li>Waste Heat Recovery Projects</li>
                                    <li>Green Hydrogen / Green Ammonia</li>
                                    <li>Agro-forestry / Bamboo plantation</li>
                                </ul>
                            </div>
                        </section>

                        <div className="w-full h-px bg-slate-200"></div>

                        {/* Arc Flash */}
                        <section id="arc-flash" className="scroll-mt-28">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-amber-50 rounded-lg text-amber-600"><Zap size={32} /></div>
                                <h2 className="text-3xl font-bold text-slate-800">Electrical Arc Flash Study</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-slate-600 mb-4">
                                        An Arc Flash is an electrical explosion resulting from a low-impedance connection to ground or another phase. It can cause severe injury. We assess the risk and determine necessary safety boundaries.
                                    </p>
                                    <h4 className="font-bold text-slate-800 mb-2">Scope of Work</h4>
                                    <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                                        <li>Collect distribution system data.</li>
                                        <li>Determine modes of operation and bolted fault currents.</li>
                                        <li>Calculate Arc Flash Incident Energy.</li>
                                        <li>Determine Arc Flash Boundary.</li>
                                        <li>Determine PPE requirements (Hazard Risk Category).</li>
                                    </ul>
                                </div>
                                <div className="flex items-center justify-center bg-amber-50 rounded-xl p-6">
                                    <Zap size={64} className="text-amber-500" />
                                </div>
                            </div>
                        </section>

                        <div className="w-full h-px bg-slate-200"></div>

                        {/* Motor Efficiency */}
                        <section id="motor" className="scroll-mt-28">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-purple-50 rounded-lg text-purple-600"><Settings size={32} /></div>
                                <h2 className="text-3xl font-bold text-slate-800">Electrical Motor Efficiency Study</h2>
                            </div>
                            <div className="prose prose-slate max-w-none text-slate-600">
                                <p className="mb-4">
                                    We analyze motor losses (Stator Copper, Rotor Copper, Iron, Friction, Stray) to determine efficiency.
                                </p>
                                <div className="p-4 border border-purple-100 rounded-lg bg-purple-50/30">
                                    <h4 className="font-bold text-purple-900 mb-2 text-sm">Case Study: Motor Replacement</h4>
                                    <p className="text-xs text-purple-800 mb-2">Replacing old re-winded motor with IE3 Energy Efficient Motor.</p>
                                    <div className="grid grid-cols-2 gap-4 text-xs">
                                        <div><span className="block text-slate-500">Old Efficiency</span><span className="font-bold">87.5%</span></div>
                                        <div><span className="block text-slate-500">New Efficiency (IE3)</span><span className="font-bold">93.5%</span></div>
                                        <div><span className="block text-slate-500">Annual Saving</span><span className="font-bold">₹1,13,500</span></div>
                                        <div><span className="block text-slate-500">Payback</span><span className="font-bold">~12 Months</span></div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="w-full h-px bg-slate-200"></div>

                        {/* Meter Calibration */}
                        <section id="meter-calibration" className="scroll-mt-28">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-50 rounded-lg text-blue-600"><PieChart size={32} /></div>
                                <h2 className="text-3xl font-bold text-slate-800">Energy Meter Calibration Service</h2>
                            </div>
                            <p className="text-slate-600 mb-4">
                                We provide onsite calibration services for energy meters using our Class 0.2S portable power analyzer. We verify Voltage, Current, kW, kVA, kVAr, PF, and Frequency accuracies.
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}
