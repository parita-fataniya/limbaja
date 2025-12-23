import InstrumentHero from "@/components/instruments/InstrumentHero";
import InstrumentOverview from "@/components/instruments/InstrumentOverview";
import InstrumentTabs from "@/components/instruments/InstrumentTabs";
import InstrumentCTA from "@/components/instruments/InstrumentCTA";

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
