import Link from "next/link";
import Image from "next/image";
import navbarIcon from "./navbar-icon.png";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="mb-4">
            <Image 
              src={navbarIcon} 
              alt="Nanozenix" 
              className="h-12  w-20 object-contain brightness-0 invert" 
            />
          </div>
          <p className="text-sm text-brand-muted">
            Pioneering the future through innovative AI, VLSI, and IoT integrated solutions.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white">Company</h4>
          <ul className="space-y-2 text-sm text-brand-muted">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white">Expertise</h4>
          <ul className="space-y-2 text-sm text-brand-muted">
            <li><Link href="/services" className="hover:text-white transition-colors">AI Development</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">VLSI Engineering</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">IoT Solutions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white">Connect</h4>
          <p className="text-sm text-brand-muted mb-2">nanozenixtech@gmail.com</p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center hover:scale-110 transition-transform">
              <span className="text-white text-sm">Li</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center hover:scale-110 transition-transform">
              <span className="text-white text-sm">X</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-brand-muted/30 text-center text-sm text-brand-muted">
        © {new Date().getFullYear()} Nanozenix Technologies Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}
