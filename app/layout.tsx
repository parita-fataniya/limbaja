import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Changed to Inter for a professional look
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const font = Inter({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.limbajaenergy.com'),
  title: {
    default: "Limbaja Energy - Sustainable Energy Solutions",
    template: "%s | Limbaja Energy"
  },
  description: "End-to-end energy efficiency solutions. Energy audit, consultancy, and implementation support for sustainable industrial operations.",
  keywords: [
    "Energy Audit", 
    "Energy Efficiency", 
    "Sustainable Energy", 
    "Industrial Energy Solutions", 
    "Limbaja Energy",
    "Power Quality Audit",
    "Thermography",
    "Steam Engineering",
    "Compressed Air Audit"
  ],
  authors: [{ name: "Limbaja Energy" }],
  creator: "Limbaja Energy",
  publisher: "Limbaja Energy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Limbaja Energy - Sustainable Energy Solutions",
    description: "End-to-end energy efficiency solutions, audits, and consultancy.",
    url: 'https://www.limbajaenergy.com',
    siteName: 'Limbaja Energy',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/OG_Image.png', // Assuming we might have or will need a default OG image, let's point to one or use a placeholder that user can replace.
        width: 1200,
        height: 630,
        alt: 'Limbaja Energy Preview',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Limbaja Energy",
    description: "Sustainable energy solutions and efficiency audits.",
    images: ['/OG_Image.png'], // Consistency
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={font.className}>
        <Navbar />
        <main className="min-h-screen pt-40 md:pt-36">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
