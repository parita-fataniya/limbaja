import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Changed to Inter for a professional look
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { HeaderControlProvider } from "@/context/HeaderControlContext";
import Script from "next/script";

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
  description: "End-to-end energy efficiency solutions. Energy audit, consultancy, and implementation support for sustainable industrial operations in India and globally.",
  keywords: [
    "Energy Audit",
    "Energy Efficiency India",
    "Sustainable Energy Solutions",
    "Industrial Energy Solutions",
    "Limbaja Energy",
    "Power Quality Audit",
    "Thermography Services",
    "Steam Engineering Audit",
    "Compressed Air Audit",
    "Energy Conservation Projects",
    "Renewable Energy Solutions India",
    "Energy Consultancy Services",
    "Ahmedabad Energy Audit"
  ],
  authors: [{ name: "Limbaja Energy" }],
  creator: "Limbaja Energy",
  publisher: "Limbaja Energy",
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Limbaja Energy - Sustainable Energy Solutions",
    description: "End-to-end energy efficiency solutions, audits, and consultancy for sustainable industrial operations.",
    url: 'https://www.limbajaenergy.com',
    siteName: 'Limbaja Energy',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/OG_Image.png',
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
    images: ['/OG_Image.png'],
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
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P35HKJZR');`,
          }}
        />
      </head>
      <body className={font.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P35HKJZR"
            height="0"
            width="0"
            title="Google Tag Manager"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <HeaderControlProvider>
          <Navbar />
          <main className="min-h-screen pt-40 md:pt-36">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <WhatsAppButton />
        </HeaderControlProvider>
      </body>
    </html>
  );
}

