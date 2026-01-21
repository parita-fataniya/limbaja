import type { Metadata } from 'next';
import { services } from "../ServiceData";
import ServiceDetailClient from "./ServiceDetailClient";

export async function generateStaticParams() {
    return services.map((service) => ({
        id: service.id,
    }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const service = services.find((s) => s.id === params.id);
    if (!service) {
        return {
            title: "Service Not Found | Limbaja Energy",
            description: "The requested energy audit service could not be found.",
        };
    }

    const title = `${service.title} | Energy Efficiency Services | Limbaja Energy`;
    const description = service.description.slice(0, 160) + '...';

    return {
        title,
        description,
        alternates: {
            canonical: `https://www.limbajaenergy.com/service/${params.id}`,
        },
        openGraph: {
            title,
            description: service.description.slice(0, 200),
            url: `https://www.limbajaenergy.com/service/${params.id}`,
            images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [service.image],
        },
    };
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
    const service = services.find((s) => s.id === params.id);

    const jsonLd = [
        {
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
                },
                {
                    '@type': 'ListItem',
                    'position': 3,
                    'name': service?.title || 'Service Detail',
                    'item': `https://www.limbajaenergy.com/service/${params.id}`
                }
            ]
        },
        service ? {
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': service.title,
            'description': service.description,
            'image': `https://www.limbajaenergy.com${service.image}`,
            'provider': {
                '@type': 'Organization',
                'name': 'Limbaja Energy',
                'url': 'https://www.limbajaenergy.com'
            },
            'areaServed': 'India',
            'hasOfferCatalog': {
                '@type': 'OfferCatalog',
                'name': 'Energy Audit Services',
                'itemListElement': [
                    {
                        '@type': 'Offer',
                        'itemOffered': {
                            '@type': 'Service',
                            'name': service.title
                        }
                    }
                ]
            }
        } : null
    ].filter(Boolean);

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ServiceDetailClient id={params.id} />
        </main>
    );
}

