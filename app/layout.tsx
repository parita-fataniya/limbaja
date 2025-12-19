import type { Metadata } from "next";
import { Nunito } from "next/font/google"; // Changed to Nunito for rounded look matching logo
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const font = Nunito({
  subsets: ["latin"],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito',
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
      </body>
    </html>
  );
}
