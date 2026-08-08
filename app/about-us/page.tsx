import type { Metadata } from 'next';
import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import CompanyProfile from "@/components/about/CompanyProfile";
import Expertise from "@/components/about/Expertise";
import Specializations from "@/components/about/Specializations";
import Certifications from "@/components/about/Certifications";
import Benefits from "@/components/about/Benefits";
import { Vision, AboutCTA } from "@/components/about/AboutBottom";

export const metadata: Metadata = {
    title: "About Limbaja Energy | Trusted Energy Audit Company in Gujarat",
    description: "Learn about Limbaja Energy, a trusted Energy Audit Company in Gujarat with certified energy auditors offering industrial energy consulting, energy management solutions, and expert audit services to improve efficiency, reduce costs, and support sustainable business growth.",
    keywords: [
        "Energy Audit Company in Gujarat",
        "Certified Energy Auditor Gujarat",
        "Energy Consultant in Gujarat",
        "Industrial Energy Consultants Gujarat",
        "BEE Certified Energy Auditor Gujarat",
        "Authorized Energy Auditor Gujarat",
        "Energy Management Consultant Gujarat",
        "Industrial Energy Experts Gujarat"
    ],
    alternates: {
        canonical: 'https://www.limbajaenergy.com/about-us',
    },
    openGraph: {
        title: "About Limbaja Energy | Trusted Energy Audit Company in Gujarat",
        description: "Learn about Limbaja Energy, a trusted Energy Audit Company in Gujarat with certified energy auditors offering industrial energy consulting.",
        url: 'https://www.limbajaenergy.com/about-us',
        images: [{ url: '/OG_Image.png', width: 1200, height: 630, alt: 'About Limbaja Energy - Trusted Energy Audit Company in Gujarat' }],
    },
};

export default function AboutUs() {
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
                'name': 'About Us',
                'item': 'https://www.limbajaenergy.com/about-us'
            }
        ]
    };

    return (
        <main className="min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <AboutHero />
            <WhoWeAre />
            <CompanyProfile />
            <Expertise />
            <Specializations />
            <Certifications />
            <Benefits />
            <Vision />
            <AboutCTA />
        </main>
    );
}
