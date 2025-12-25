import type { Metadata } from 'next';
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServiceSlider from "@/components/home/ServiceSlider";
import RandomInstruments from "@/components/home/RandomInstruments";
import ClientTicker from "@/components/home/ClientTicker";
import HomeContact from "@/components/home/HomeContact";

export const metadata: Metadata = {
  title: "Limbaja Energy | Leading Energy Audit & Efficiency Experts",
  description: "Transform your industrial energy efficiency with Limbaja Energy. Certified energy auditors providing comprehensive power quality audits, steam engineering, and sustainable energy solutions.",
  alternates: {
    canonical: 'https://www.limbajaenergy.com',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Limbaja Energy',
    url: 'https://www.limbajaenergy.com',
    logo: 'https://www.limbajaenergy.com/logo.png', // Assuming logo exists or will exist
    sameAs: [
      'https://www.facebook.com/limbajaenergy', // Add actual links if known, or placeholders
      'https://www.instagram.com/limbajaenergy',
      'https://www.linkedin.com/company/limbaja-energy'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91 97142 53756',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: 'en'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nikol',
      addressLocality: 'Ahmedabad',
      postalCode: '382350',
      addressRegion: 'Gujarat',
      addressCountry: 'IN'
    }
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <AboutSection />
      <ServiceSlider />
      <RandomInstruments />
      <ClientTicker />
      <HomeContact />
    </main>
  );
}
