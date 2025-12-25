import type { Metadata } from 'next';
import fs from "fs";
import path from "path";
import ClientGrid from "./ClientGrid";

export const metadata: Metadata = {
    title: "Our Clients | Limbaja Energy",
    description: "Trusted by industry leaders. View our prestigious client list and partners who have benefited from our energy efficiency solutions.",
};

import { clients } from "@/lib/ClientData";

export default function ClientsPage() {
    const clientImages = clients.map(file => `/clients/${file}`);

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Page Header */}
            <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9]/20 to-[#22c55e]/20"></div>

                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#0ea5e9]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#22c55e]/20 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                        Our Clients
                    </h1>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-[#0ea5e9] to-[#22c55e] mx-auto rounded-full"></div>
                    <p className="mt-8 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        We are proud to partner with industry leaders, delivering excellence and innovation in every project.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 pt-20">
                <ClientGrid images={clientImages} />
            </div>
        </div>
    );
}
