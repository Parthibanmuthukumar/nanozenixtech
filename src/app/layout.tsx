import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nanozenix Technologies Pvt Ltd",
  description: "Innovative AI, VLSI, and IoT solutions for the modern world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen text-brand-body selection:bg-brand-accent selection:text-white flex flex-col`}>
        <Navbar />
        <div className="flex-1">
          {children} 
        </div>
        <Footer />
      </body>
    </html>
  );
}
