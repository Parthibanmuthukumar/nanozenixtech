"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl shadow-lg border-b border-brand-accent/20' : 'bg-transparent'} py-4 px-4 md:px-8`}>
      <div className="flex items-center justify-between w-full">
        {/* Left Side: Company Name */}
        <Link href="/" className="transition-transform hover:scale-105 flex items-center">
          <Image 
            src="/images/ChatGPT Image Apr 4, 2026, 03_05_52 PM.png" 
            alt="Nanozenix Technologies" 
            width={400} 
            height={100} 
            className="h-16 md:h-20 w-auto object-contain"
            priority
          />
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-wide text-brand-beige">
          <Link href="/" className="hover:text-white transition-colors relative group">
            HOME
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/services" className="hover:text-white transition-colors relative group">
            SERVICE
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors relative group">
            CONTACT
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/careers" className="hover:text-white transition-colors relative group text-brand-accent drop-shadow-[0_0_10px_rgba(23,168,145,0.5)]">
            JOIN 
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-brand-accent/20 flex flex-col p-6 gap-6 md:hidden text-center z-40"
          >
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-white hover:text-brand-accent transition-colors">
              HOME
            </Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-white hover:text-brand-accent transition-colors">
              SERVICE
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-white hover:text-brand-accent transition-colors">
              CONTACT
            </Link>
            <Link href="/careers" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-brand-accent drop-shadow-[0_0_10px_rgba(23,168,145,0.5)]">
              JOIN
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
