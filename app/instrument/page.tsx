import type { Metadata } from 'next';
import InstrumentHero from "@/components/instruments/InstrumentHero";
import InstrumentOverview from "@/components/instruments/InstrumentOverview";
import InstrumentTabs from "@/components/instruments/InstrumentTabs";
import InstrumentCTA from "@/components/instruments/InstrumentCTA";

export const metadata: Metadata = {
    title: "Industrial Measuring Instruments in Gujarat | Limbaja Energy",
    description: "Limbaja Energy offers Industrial Measuring Instruments in Gujarat, including energy audit instruments, electrical testing instruments, power quality analyzers, portable measurement devices, and industrial monitoring solutions for accurate testing and reliable performance.",
    keywords: [
        "Industrial Measuring Instruments in Gujarat",
        "Energy Audit Instruments Gujarat",
        "Portable Measurement Instruments Gujarat",
        "Industrial Testing Instruments Gujarat",
        "Power Quality Measurement Instruments Gujarat",
        "Industrial Measuring Instruments India",
        "Energy Audit Instruments",
        "Electrical Testing Instruments",
        "Power Quality Analyzer",
        "Industrial Monitoring Instruments"
    ],
    alternates: {
        canonical: 'https://www.limbajaenergy.com/instrument',
    },
    openGraph: {
        title: "Industrial Measuring Instruments in Gujarat | Limbaja Energy",
        description: "Limbaja Energy offers Industrial Measuring Instruments in Gujarat, including energy audit instruments, electrical testing instruments, power quality analyzers, and portable measurement devices.",
        url: 'https://www.limbajaenergy.com/instrument',
        images: [{ url: '/OG_Image.png', width: 1200, height: 630, alt: 'Industrial Measuring Instruments in Gujarat - Limbaja Energy' }],
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
