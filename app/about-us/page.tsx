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
    title: "About Us | Limbaja Energy",
    description: "Learn about Limbaja Energy, our mission, vision, and team of certified energy experts dedicated to sustainable energy solutions.",
};

export default function AboutUs() {
    return (
        <main className="min-h-screen">
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
