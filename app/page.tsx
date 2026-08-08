import type { Metadata } from 'next';
import StoryHero from "@/components/home/StoryHero";
import AboutSection from "@/components/home/AboutSection";
import ServiceSlider from "@/components/home/ServiceSlider";
import RandomInstruments from "@/components/home/RandomInstruments";
import ProjectSlider from "@/components/home/ProjectSlider";
import ClientTicker from "@/components/home/ClientTicker";
import HomeContact from "@/components/home/HomeContact";

export const metadata: Metadata = {
  title: "Energy Audit Company in Gujarat | Industrial Energy Audit Services",
  description: "Limbaja Energy is a trusted Energy Audit Company in Gujarat providing industrial energy audit services, electrical energy audits, electrical safety audits, thermography services, power quality analysis, and energy efficiency solutions across Gujarat and India.",
  keywords: [
    "Energy Audit Company in Gujarat",
    "Energy Auditor in Gujarat",
    "Industrial Energy Audit Services in Gujarat",
    "Energy Conservation Consultant Gujarat",
    "Power Quality Analysis Services in Gujarat",
    "Industrial Energy Audit Services",
    "Energy Efficiency Solutions",
    "Electrical Energy Audit Services",
    "Electrical Safety Audit Services",
    "Thermography Services"
  ],
  alternates: {
    canonical: 'https://www.limbajaenergy.com',
  },
  openGraph: {
    title: "Energy Audit Company in Gujarat | Industrial Energy Audit Services",
    description: "Limbaja Energy is a trusted Energy Audit Company in Gujarat providing industrial energy audit services, electrical energy audits, power quality analysis, and energy efficiency solutions.",
    url: 'https://www.limbajaenergy.com',
    siteName: 'Limbaja Energy',
    images: [{ url: '/OG_Image.png', width: 1200, height: 630, alt: 'Limbaja Energy - Energy Audit Company in Gujarat' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Energy Audit Company in Gujarat | Industrial Energy Audit Services",
    description: "Limbaja Energy is a trusted Energy Audit Company in Gujarat providing industrial energy audit services.",
    images: ['/OG_Image.png'],
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Limbaja Energy',
    alternateName: 'Limbaja Energy Solutions',
    url: 'https://www.limbajaenergy.com',
    logo: 'https://www.limbajaenergy.com/logo.png',
    description: 'Limbaja Energy is a leading provider of energy audit and efficiency solutions for industrial operations.',
    sameAs: [
      'https://www.facebook.com/limbajaenergy',
      'https://www.instagram.com/limbajaenergy',
      'https://www.linkedin.com/company/limbaja-energy',
      'https://www.indiamart.com/limbaja-energy/'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91 97142 53756',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi', 'gu']
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
      <StoryHero />
      <AboutSection />
      <ServiceSlider />
      <RandomInstruments />
      <ProjectSlider />
      <ClientTicker />
      <HomeContact />
    </main>
  );
}
