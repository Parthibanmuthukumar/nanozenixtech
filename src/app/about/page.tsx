import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Nanozenix Technologies",
};

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20 min-h-screen">
      <Hero />
      <div className="py-12 text-center max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-dark/70 text-lg">
          To accelerate the adoption of advanced silicon architectures bridging the gap between physical hardware and cloud artificial intelligence edge deployment.
        </p>
      </div>
      <TechStack />
    </main>
  );
}
