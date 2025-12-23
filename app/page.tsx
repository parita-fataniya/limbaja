"use client";

import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServiceSlider from "@/components/home/ServiceSlider";
import RandomInstruments from "@/components/home/RandomInstruments";
import ClientTicker from "@/components/home/ClientTicker";
import HomeContact from "@/components/home/HomeContact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServiceSlider />
      <RandomInstruments />
      <ClientTicker />
      <HomeContact />
    </main>
  );
}
