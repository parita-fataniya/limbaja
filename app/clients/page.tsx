import type { Metadata } from 'next';
import fs from "fs";
import path from "path";
import ClientGrid from "./ClientGrid";

export const metadata: Metadata = {
    title: "Our Clients | Trusted Energy Audit Company in Gujarat",
    description: "Explore Limbaja Energy's portfolio of successful projects and valued clients. As a trusted Energy Audit Company in Gujarat, we deliver industrial energy audits, energy management solutions, and efficiency improvements for businesses across Gujarat and India.",
    keywords: [
        "Trusted Energy Audit Company in Gujarat",
        "Industrial Energy Audit Clients Gujarat",
        "Energy Audit Projects in Gujarat",
        "Energy Audit Company for Industries Gujarat",
        "Industrial Energy Consultant Gujarat",
        "Energy Audit Company India",
        "Industrial Energy Audit Services India",
        "Energy Management Consultant India",
        "Energy Efficiency Consultant India",
        "Industrial Energy Solutions Provider"
    ],
    alternates: {
        canonical: 'https://www.limbajaenergy.com/clients',
    },
    openGraph: {
        title: "Our Clients | Trusted Energy Audit Company in Gujarat",
        description: "Explore Limbaja Energy's portfolio of successful projects and valued clients across Gujarat and India.",
        url: 'https://www.limbajaenergy.com/clients',
        images: [{ url: '/OG_Image.png', width: 1200, height: 630, alt: 'Our Clients - Limbaja Energy' }],
    },
};

import { clients } from "@/lib/ClientData";

export default function ClientsPage() {
    const clientImages = clients.map((file: string) => `/clients/${file}`);


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
                'name': 'Clients',
                'item': 'https://www.limbajaenergy.com/clients'
            }
        ]
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Page Header */}
            <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20"></div>

                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                        Our Clients
                    </h1>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
                    <p className="mt-8 text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        We are proud to partner with leading industries across Gujarat and India, delivering reliable energy audit, energy management, and efficiency solutions with excellence and innovation. As a trusted Energy Audit Company in Gujarat, we have successfully completed Industrial Energy Audit Services for a wide range of manufacturing and commercial clients. Our commitment to quality, technical expertise, and customer satisfaction has made us a preferred Industrial Energy Consultant, helping businesses improve energy efficiency, reduce operating costs, and achieve sustainable growth.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 pt-20">
                <ClientGrid images={clientImages} />
            </div>
        </div>
    );
}
