import { Wrench, Ruler, Thermometer, Activity, Wind, Droplets, Zap, Gauge } from "lucide-react";

export default function InstrumentPage() {
    const instruments = [
        { name: "Power Quality Analyzer", make: "ALM 31", icon: Zap },
        { name: "Three Phase Balance Load Meter", make: "Nano Vip One and Two", icon: Activity },
        { name: "Inserted type Compressed Air flow meter", make: "CS", icon: Wind },
        { name: "Compressed Air Leak Detector", make: "CS", icon: SearchIcon }, // Custom icon below
        { name: "Ultra Sonic Compressed Air Flow Meter", make: "Flexim | Emerson", icon: Wind },
        { name: "Ultra Sonic Thermic Fluid Heater Flow Meter", make: "Flexim | Emerson ( up to 240℃)", icon: Thermometer },
        { name: "Ultra Sonic Steam Flow Meter", make: "Flexim | Emerson: Up to 180 ℃", icon: Droplets },
        { name: "Ultra sonic Water Flow Meter", make: "TDS 100", icon: Droplets },
        { name: "Flue Gas Analyser", make: "Testo 300", icon: Wind },
        { name: "Thermography", make: "Testo 868", icon: Thermometer },
        { name: "Digital Temperature meter", make: "Testo", icon: Thermometer },
        { name: "Anemometer", make: "Lutron", icon: Wind },
        { name: "Manometer", make: "HTC", icon: Gauge },
        { name: "S type Pitot Tube", make: "3m,1m, 0.5 m", icon: Ruler },
        { name: "Digital Pressure Gauge", make: "Testo", icon: Gauge },
        { name: "Digital Tachometer non-contact Type", make: "Kusum Meco", icon: Activity },
        { name: "Lux Meter", make: "HTC", icon: Zap }, // Using Zap as placeholder for Light
        { name: "TDS Meter", make: "", icon: Droplets },
        { name: "Hygro Meter", make: "Testo", icon: Droplets },
        { name: "Compressed Air Dew Point Meter", make: "CS", icon: Wind },
        { name: "IR Temperature Meter Non-Contact Type", make: "HTC", icon: Thermometer },
        { name: "Earth Tester", make: "Metravi", icon: Activity },
        { name: "Clamp on type Earth Tester", make: "Meco", icon: Activity },
        { name: "Insulation Tester", make: "Megger: 5kV", icon: Zap },
        { name: "Ultrasonic Thickness Tester", make: "UTM-9", icon: Ruler },
    ];

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Page Header */}
            <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0ea5e9]/10"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Instruments</h1>
                    <div className="h-1 w-20 bg-[#22c55e] mx-auto rounded"></div>
                    <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                        We are a leading Service provider in the field of "Energy Audit & Efficiency Measurement".
                        The requirement for an energy audit such as identification and quantification of energy necessitates measurements; these measurements require the use of instruments.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 pt-16">
                <div className="max-w-6xl mx-auto">

                    <div className="mb-12 text-center">
                        <p className="text-slate-600 text-lg">
                            We have Valuable Instrument for doing the Energy Audit and Performance Measurement.
                            These instruments must be portable, durable, easy to operate and relatively inexpensive.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {instruments.map((item, index) => (
                            <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all hover:border-[#0ea5e9]/30 group">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#0ea5e9] shadow-sm group-hover:scale-110 transition-transform">
                                        {item.icon ? <item.icon size={24} /> : <Wrench size={24} />}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 mb-1">{item.name}</h3>
                                        {item.make && (
                                            <p className="text-sm text-slate-500 font-medium">
                                                Make: <span className="text-slate-700">{item.make}</span>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

function SearchIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}

