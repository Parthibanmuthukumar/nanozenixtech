import { Button } from "../ui/Button";
import Link from "next/link";
import MouseGlow from "../ui/MouseGlow";
import VideoHero from "./VideoHero";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Mouse Glow Effect */}
      <MouseGlow />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Building the{" "}
              <span className="text-brand-accent">Intelligent Edge</span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-dark opacity-60 max-w-xl leading-relaxed">
              We engineer cutting-edge AI systems, VLSI designs, and IoT solutions that power the next generation of intelligent technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
                <Button 
                  size="lg" 
                  className="bg-brand-accent hover:bg-brand-dark text-white rounded-full px-8 transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  View Our Work
                </Button>
              </Link>
              
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white rounded-full px-8 transition-all duration-200 hover:scale-105"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="relative w-full flex items-center justify-center">
            <VideoHero />
          </div>
        </div>
      </div>
    </section>
  );
}
