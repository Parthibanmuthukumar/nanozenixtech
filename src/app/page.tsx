"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import { Code, Cpu, CircuitBoard, Cpu as Chip, ChevronDown } from "lucide-react";

export default function Home() {
  const heroText = "BUILT YOUR PROJECT WITH US".split(" ");
  
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<number | null>(null);

  // Parallax Scroll Hooks
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.85]);
  const heroBorderRadius = useTransform(scrollY, [0, 600], ["0rem", "6rem"]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 600], [0, 150]);

  const services = [
    { 
      title: "Web Development", 
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80", 
      icon: <Code size={32} />,
      desc: "We design and develop modern, high-performance websites that prioritize user experience, speed, and scalability. Built and optimized to convert and scale your digital ecosystem.",
      tags: ["UI/UX Design", "Responsive Web", "SEO-Ready"]
    },
    { 
      title: "Senior AI Engineer", 
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80", 
      icon: <Cpu size={32} />,
      desc: "Deploy intelligent automation with custom machine learning models. We build logic architectures that scale and think ahead of the curve to keep you competitive.",
      tags: ["Deep Learning", "LLMs", "Data Science"]
    },
    { 
      title: "VLSI Design Engineer", 
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=600&q=80", 
      icon: <CircuitBoard size={32} />,
      desc: "Architect next-generation silicon logic. From RTL down to physical synthesis, we create low-power, high-efficiency integrated circuits for modern complex hardware.",
      tags: ["ASIC Flow", "FPGA", "Verilog"]
    },
    { 
      title: "Embedded Systems Engineer", 
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80", 
      icon: <Chip size={32} />,
      desc: "Bridge the gap between hardware and software. We craft robust firmware and sensing solutions tailored precisely for mission-critical industrial IoT devices.",
      tags: ["Firmware", "IoT", "C/C++"]
    }
  ];

  const faqs = [
    { q: "What services does Nanozenix Technologies offer?", a: "Nanozenix Technologies specializes in cutting-edge Next-Gen Web Solutions, Artificial Intelligence, VLSI Design, and Embedded Systems engineering." },
    { q: "Where is Nanozenix Technologies located?", a: "We operate globally with a remote-first culture, ensuring we can collaborate with clients and recruit top engineers from anywhere in the world." },
    { q: "Do you build custom AI models for scaling businesses?", a: "Yes, our Senior AI Engineers have extensive experience building scalable, deep learning models tailored to specific business logic and workflows." },
    { q: "How does your VLSI Design process work?", a: "Our dedicated VLSI and Embeddded Systems engineers work strictly from architectural definition down to physical design and verification." },
    { q: "Does Nanozenix provide post-launch support?", a: "Absolutely. We pride ourselves on offering comprehensive maintenance, infrastructure scaling, and post-launch support packages." }
  ];

  return (
    <main className="min-h-screen overflow-hidden text-brand-dark pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[85vh] flex items-center justify-center -mt-20 z-0">
        <motion.div 
          style={{ 
            scale: heroScale, 
            borderRadius: heroBorderRadius,
            y: heroY
          }}
          className="absolute inset-0 w-full h-full overflow-hidden shadow-2xl origin-top"
        >
          <video 
            src="/videos/hero.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-90 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-brand-dark z-10" />
        </motion.div>
        
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-20 text-center px-4 max-w-5xl mt-20"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white flex flex-wrap justify-center gap-4">
            {heroText.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.2, // word by word delay
                  ease: [0.2, 0.65, 0.3, 0.9],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-8 text-lg font-semibold text-brand-beige md:text-xl drop-shadow-md"
          >
            Empowering the future with absolute precision AI, VLSI, and Next-Gen Web Architectures.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. OUR SERVICES SECTION */}
      <section id="services" className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">OUR SERVICES</h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full shadow-[0_0_10px_rgba(23,168,145,0.5)]" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              className="bg-[#111] rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(23,168,145,0.2)] transition-all duration-300 flex flex-col group border border-white/10 hover:border-brand-accent/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              {/* Image Header */}
              <div className="relative w-full h-60 overflow-hidden z-0 border-b border-white/10">
                <Image 
                  src={srv.image}
                  alt={srv.title}
                  fill
                  unoptimized={true}
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors" />
              </div>

              {/* Content Body */}
              <div className="flex flex-col flex-1 p-6 lg:p-8 relative z-10 bg-[#111] pt-10">
                <div className="absolute -top-7 right-6 text-black bg-brand-accent p-3 rounded-xl shadow-[0_0_15px_rgba(23,168,145,0.6)] z-20 transition-transform group-hover:-translate-y-1">
                  {srv.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">{srv.title}</h3>
                <p className="text-sm text-brand-beige/70 mb-6 leading-relaxed flex-1">
                  {srv.desc}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {srv.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Explore Button */}
                <button className="mt-auto flex items-center justify-between w-full py-3 px-5 rounded-xl border border-white/20 text-white font-bold hover:bg-brand-accent hover:border-brand-accent hover:shadow-[0_0_20px_rgba(23,168,145,0.4)] transition-all">
                  Explore Details
                  <span className="text-lg group-hover:translate-x-1 transition-transform text-brand-accent group-hover:text-white">&rarr;</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. OUR TECH STACK SECTION */}
      <section className="py-20 bg-black border-y border-white/10 overflow-hidden border-t-brand-accent/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Our Tech Stack</h2>
        </div>
        <div className="w-full relative py-8">
          {/* Gradient Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
          
          <div className="flex w-[200%] marquee-lr">
            {/* Duplicated for infinite effect */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex flex-1 justify-around items-center px-4 gap-8">
                {[
                  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
                  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
                  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
                  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
                  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
                  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
                  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
                  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
                  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' }
                ].map((tech, j) => (
                  <div key={j} className="flex flex-col items-center gap-3 shrink-0 mx-4">
                    <div className="h-20 px-4 min-w-[5rem] rounded-2xl bg-[#111] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] flex items-center justify-center py-3 hover:scale-110 hover:border-brand-accent/50 hover:shadow-[0_0_20px_rgba(23,168,145,0.3)] transition-all cursor-pointer">
                      <img src={tech.icon} alt={tech.name} className="h-full w-auto object-contain drop-shadow-sm" loading="lazy" style={{ maxHeight: '100%' }} />
                    </div>
                    <span className="font-semibold text-sm text-white opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">{tech.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHO WE ARE & FAQ SECTION */}
      <section className="px-4 md:px-8 py-32 max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Driven by Passion.</h2>
          <p className="text-lg text-brand-beige opacity-70">A team of friends building tech, answering your questions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* FAQ Accordion Section */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <span className="font-semibold text-white">{faq.q}</span>
                  <ChevronDown className={`text-brand-accent transition-transform flex-shrink-0 ml-4 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-brand-beige/80 text-sm md:text-base border-t border-white/5 mt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Friendly Stat/Info Box */}
          <div className="col-span-1 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-brand-accent rounded-[2rem] p-8 text-white flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden group h-full hover:shadow-[0_0_20px_rgba(23,168,145,0.4)] transition-all"
            >
              <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
                <Code size={150} />
              </div>
              <span className="text-5xl font-black mb-2 relative z-10 text-white tracking-tighter">100%</span>
              <span className="text-sm font-semibold uppercase tracking-widest relative z-10 text-white/90">Curiosity & Dedication</span>
              <p className="mt-4 text-xs font-medium text-white/80 relative z-10">
                We are a group of friends turned tech-founders, committed to building creative and reliable solutions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#111] border border-white/10 rounded-[2rem] p-8 flex items-center justify-center text-center flex-col group hover:bg-[#1a1a1a] hover:border-brand-accent/50 transition-colors h-full"
            >
              <Cpu size={40} className="text-brand-accent mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold text-white mb-2">Hands-on Approach</h4>
              <p className="text-xs text-brand-beige/70">
                No corporate red tape. Just direct collaboration with passionate developers and engineers.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

    </main>
  );
}
