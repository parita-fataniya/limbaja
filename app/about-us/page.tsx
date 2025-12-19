import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import Expertise from "@/components/about/Expertise";
import Specializations from "@/components/about/Specializations";
import Certifications from "@/components/about/Certifications";
import Benefits from "@/components/about/Benefits";
import { Vision, AboutCTA } from "@/components/about/AboutBottom";

export default function AboutUs() {
    return (
        <main className="min-h-screen">
            <AboutHero />
            <WhoWeAre />
            <Expertise />
            <Specializations />
            <Certifications />
            <Benefits />
            <Vision />
            <AboutCTA />
        </main>
    );
}
