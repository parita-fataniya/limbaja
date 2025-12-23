import { services } from "../ServiceData";
import ServiceDetailClient from "./ServiceDetailClient";

export async function generateStaticParams() {
    return services.map((service) => ({
        id: service.id,
    }));
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
    // Pass the ID to the client component to handle rendering and interactivity
    return <ServiceDetailClient id={params.id} />;
}
