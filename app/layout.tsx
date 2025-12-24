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
  title: "Limbaja Energy - Sustainable Energy Solutions",
  description: "End-to-end energy efficiency solutions. Energy audit, consultancy, and implementation support.",
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
        <main className="min-h-screen pt-32 md:pt-36">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
