import type { Metadata } from 'next';
import ServiceGrid from "./ServiceGrid";

export const metadata: Metadata = {
    title: "Our Services | Energy Audit & Efficiency Solutions | Limbaja Energy",
    description: "Explore our comprehensive range of energy efficiency services including BEE-certified energy audits, harmonic analysis, power quality diagnostics, and industrial energy conservation.",
    keywords: ["Energy Audit Services", "Harmonic Analysis India", "Compressor Flow Audit", "Industrial Energy Management", "Steam Engineering Services"],
    alternates: {
        canonical: 'https://www.limbajaenergy.com/service',
    },
    openGraph: {
        title: "Energy Efficiency Services | Limbaja Energy",
        description: "Expert audits and solutions tailored for industrial energy excellence.",
        url: 'https://www.limbajaenergy.com/service',
        images: [{ url: '/OG_Image.png', width: 1200, height: 630, alt: 'Limbaja Energy Services' }],
    },
};

export default function ServicePage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://www.limbajaenergy.com'
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Services',
                'item': 'https://www.limbajaenergy.com/service'
            }
        ]
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Page Header - Matching Instrument Tabs Style */}
            <div className="bg-slate-900 py-20 relative overflow-hidden text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Services</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
                        Expert solutions and comprehensive audits tailored to your industry needs.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 pt-16">
                <ServiceGrid />
            </div>
        </div>
    );
}
