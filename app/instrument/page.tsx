import type { Metadata } from 'next';
import InstrumentHero from "@/components/instruments/InstrumentHero";
import InstrumentOverview from "@/components/instruments/InstrumentOverview";
import InstrumentTabs from "@/components/instruments/InstrumentTabs";
import InstrumentCTA from "@/components/instruments/InstrumentCTA";

export const metadata: Metadata = {
    title: "Advanced Instruments & Diagnostics | Energy Audit Tools | Limbaja Energy",
    description: "Discover our range of high-precision diagnostic instruments used for professional energy audits, including power quality analyzers, ultrasonic flow meters, and thermal imaging cameras.",
    keywords: ["Energy Audit Instruments", "Power Quality Analyzer India", "Ultrasonic Flow Meter Services", "Thermal Imaging Audit", "Limbaja Energy Tools"],
    alternates: {
        canonical: 'https://www.limbajaenergy.com/instrument',
    },
    openGraph: {
        title: "Energy Diagnostic Instruments | Limbaja Energy",
        description: "Cutting-edge diagnostic tools for precise energy performance indicators.",
        url: 'https://www.limbajaenergy.com/instrument',
        images: [{ url: '/OG_Image.png', width: 1200, height: 630, alt: 'Limbaja Energy Instruments' }],
    },
};

export default function InstrumentPage() {
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
                'name': 'Instruments',
                'item': 'https://www.limbajaenergy.com/instrument'
            }
        ]
    };

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <InstrumentHero />
            <InstrumentOverview />
            <InstrumentTabs />
            <InstrumentCTA />
        </main>
    );
}
