import { Metadata } from "next";
import Image from "next/image";
import { Code, Cpu, CircuitBoard, Cpu as Chip } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Nanozenix Technologies",
  description: "Explore our expert services in Web Design, AI, VLSI Design, and IoT solutions.",
};

export default function ServicesPage() {
  const services = [
    { 
      title: "WEB DEVELOPMENT", 
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80", 
      icon: <Code size={32} />,
      desc: "We design and develop modern, high-performance websites that prioritize user experience, speed, and scalability. Built and optimized to convert and scale your digital ecosystem.",
      tags: ["UI/UX Design", "Responsive Web", "SEO-Ready"]
    },
    { 
      title: "Senior AI Engineer", 
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80", 
      icon: <Cpu size={32} />,
      desc: "Deploy intelligent automation with custom machine learning models. We build logic architectures that scale and think ahead of the curve to keep you competitive.",
      tags: ["Deep Learning", "LLMs", "Data Science"]
    },
    { 
      title: "VLSI Design", 
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1200&q=80", 
      icon: <CircuitBoard size={32} />,
      desc: "Architect next-generation silicon logic. From RTL down to physical synthesis, we create low-power, high-efficiency integrated circuits for modern complex hardware.",
      tags: ["ASIC Flow", "FPGA", "Verilog"]
    },
    { 
      title: "Embedded Systems", 
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80", 
      icon: <Chip size={32} />,
      desc: "Bridge the gap between hardware and software. We craft robust firmware and sensing solutions tailored precisely for mission-critical industrial IoT devices.",
      tags: ["Firmware", "IoT", "C/C++"]
    }
  ];

  return (
    <main className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Our Expertise</h1>
          <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full mb-8 shadow-[0_0_10px_rgba(23,168,145,0.5)]" />
          <p className="text-xl text-brand-beige opacity-80">
            We offer specialized engineering services that span from core silicon design to high-level artificial intelligence models and stunning web architectures.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {services.map((srv, idx) => (
            <div 
              key={idx}
              className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center bg-[#111] rounded-[3rem] overflow-hidden shadow-2xl p-6 md:p-8 border border-white/10 hover:border-brand-accent/50 transition-all duration-300 group`}
            >
              {/* Massive Image Block */}
              <div className="w-full md:w-1/2 relative h-80 md:h-[400px] rounded-[2rem] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <Image 
                  src={srv.image}
                  alt={srv.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white bg-brand-accent p-4 rounded-2xl shadow-lg transition-transform group-hover:-translate-y-2">
                  {srv.icon}
                </div>
              </div>

              {/* Vast Content Block */}
              <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  {srv.title}
                </h2>
                <p className="text-lg text-brand-beige opacity-80 mb-8 leading-relaxed">
                  {srv.desc}
                </p>
                
                {/* Tag Cluster */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {srv.tags.map(tag => (
                    <span key={tag} className="text-xs uppercase tracking-widest font-bold px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="self-start px-8 py-4 bg-brand-accent text-white rounded-full font-bold shadow-[0_0_20px_rgba(23,168,145,0.4)] hover:shadow-[0_0_30px_rgba(23,168,145,0.6)] hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 border border-white/20">
                  Start a Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
