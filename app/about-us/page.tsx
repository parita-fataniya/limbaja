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
    title: "About Us | Certified Energy Experts | Limbaja Energy",
    description: "Learn about Limbaja Energy, our mission to drive industrial sustainability, and our team of BEE-certified energy experts providing global energy solutions.",
    keywords: ["Limbaja Energy Mission", "Certified Energy Experts India", "Sustainable Energy Team", "Energy Consultancy Ahmedabad"],
    alternates: {
        canonical: 'https://www.limbajaenergy.com/about-us',
    },
    openGraph: {
        title: "About Limbaja Energy | Sustainable Energy Solutions",
        description: "Driving efficiency and excellence in industrial energy management.",
        url: 'https://www.limbajaenergy.com/about-us',
        images: [{ url: '/OG_Image.png', width: 1200, height: 630, alt: 'About Limbaja Energy' }],
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
