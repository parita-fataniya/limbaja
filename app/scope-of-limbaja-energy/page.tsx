import { AnimatedSection } from "@/components/shared/AnimatedSection";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Scope of Limbaja Energy | Professional Excellence",
    description: "Learn about the professional scope and commitments of Limbaja Energy towards industrial energy efficiency and excellence.",
    alternates: {
        canonical: 'https://www.limbajaenergy.com/scope-of-limbaja-energy',
    },
};

export default function Scope() {
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
                'name': 'Scope of Limbaja Energy',
                'item': 'https://www.limbajaenergy.com/scope-of-limbaja-energy'
            }
        ]
    };

    return (
        <div className="pt-24 min-h-screen bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <AnimatedSection>
                    <h1 className="text-4xl font-bold mb-6 text-slate-900">Scope of Limbaja Energy</h1>
                    <p className="text-lg text-slate-600">
                        (Content coming soon)
                    </p>
                </AnimatedSection>
            </div>
        </div>
    );
}
