"use client";

export default function TechStack() {
  const technologies = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", 
    "Framer Motion", "Firebase", "Node.js", "Python",
    "TensorFlow", "Cadence", "Verilog", "MQTT"
  ];

  // Double the array for seamless loop
  const doubledTech = [...technologies, ...technologies];

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark">Powered by Modern Tech</h2>
          <p className="text-lg text-brand-body opacity-70">
            Our scalable architecture uses industry-standard frameworks.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex gap-4 marquee">
            {doubledTech.map((tech, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 px-6 py-3 bg-brand-muted text-brand-dark rounded-full font-medium shadow-sm whitespace-nowrap"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
