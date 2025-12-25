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
            description: "The requested service could not be found.",
        };
    }

    return {
        title: `${service.title} | Limbaja Energy`,
        description: service.description.slice(0, 160) + '...',
        openGraph: {
            title: `${service.title} | Limbaja Energy`,
            description: service.description.slice(0, 200),
            images: [service.image], // Utilizing the service image if available
        },
    };
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
    // Pass the ID to the client component to handle rendering and interactivity
    return <ServiceDetailClient id={params.id} />;
}
