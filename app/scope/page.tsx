import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Scope of Work | Energy Audit Methodology | Limbaja Energy",
    description: "Detailed scope of work and exhaustive methodologies employed by Limbaja Energy for comprehensive energy audits and sustainable energy solutions.",
    keywords: ["Energy Audit Scope", "Audit Methodology", "Energy Conservation Scope", "Limbaja Energy Operations"],
    alternates: {
        canonical: 'https://www.limbajaenergy.com/scope',
    },
};

export default function ScopePage() {
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
                'name': 'Scope of Work',
                'item': 'https://www.limbajaenergy.com/scope'
            }
        ]
    };

    return (
        <div className="container mx-auto px-6 py-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <h1 className="text-4xl font-bold mb-6 text-slate-800">Scope of Limbaja Energy</h1>
            <p className="text-slate-600">Details about the scope of work and methodologies used by Limbaja Energy.</p>
        </div>
    );
}
