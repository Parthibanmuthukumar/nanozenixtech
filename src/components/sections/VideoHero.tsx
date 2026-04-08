"use client";

import { useEffect, useState, useRef } from "react";

export default function VideoHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.warn("Autoplay blocked:", e));
    }
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-brand-muted/20 shadow-[0_20px_60px_rgba(26,50,99,0.15)] aspect-square flex items-center justify-center">
      {!isLoaded && (
        <div className="absolute inset-0 bg-brand-dark/20 animate-pulse flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-4 border-brand-accent border-t-transparent animate-spin"></div>
        </div>
      )}
      
      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ objectPosition: 'center center' }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 to-transparent pointer-events-none mix-blend-overlay"></div>
    </div>
  );
}
