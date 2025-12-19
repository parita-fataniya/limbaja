import { Building2 } from "lucide-react";

export default function ClientsPage() {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Page Header */}
            <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0ea5e9]/10"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Clients</h1>
                    <div className="h-1 w-20 bg-[#22c55e] mx-auto rounded"></div>
                    <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
                        Trusted By Industry Leaders
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 pt-16">

                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">Trusted By Industry Leaders</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We are proud to have worked with some of the most respected names in the industry.
                    </p>
                </div>

                {/* Client Logo Grid Placeholder */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="aspect-video bg-slate-50 border border-slate-100 rounded-xl flex flex-col items-center justify-center p-4 hover:shadow-md transition-shadow group">
                            <Building2 className="text-slate-300 mb-2 group-hover:text-[#0ea5e9] transition-colors" size={32} />
                            <span className="text-sm text-slate-400 font-medium">Company Logo</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
