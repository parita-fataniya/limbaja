import type { Metadata } from 'next';
import InstrumentHero from "@/components/instruments/InstrumentHero";
import InstrumentOverview from "@/components/instruments/InstrumentOverview";
import InstrumentTabs from "@/components/instruments/InstrumentTabs";
import InstrumentCTA from "@/components/instruments/InstrumentCTA";

export const metadata: Metadata = {
    title: "Advanced Instruments & Diagnostics | Limbaja Energy",
    description: "Discover our range of high-precision diagnostic instruments used for energy audits including power quality analyzers, ultrasonic flow meters, and more.",
};

export default function InstrumentPage() {
    return (
        <main className="min-h-screen bg-white">
            <InstrumentHero />
            <InstrumentOverview />
            <InstrumentTabs />
            <InstrumentCTA />
        </main>
    );
}
