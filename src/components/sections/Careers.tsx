"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { careersData } from "@/lib/data/careers";
import { ChevronRight, Terminal, Binary, Cpu, Layout, Code2 } from "lucide-react";

export default function Careers() {
  const [activeJobId, setActiveJobId] = useState<string | null>(null);

  const getIcon = (category: string) => {
    switch (category) {
      case "AI": return <Cpu className="w-6 h-6" />;
      case "VLSI": return <Binary className="w-6 h-6" />;
      case "Software": return <Layout className="w-6 h-6" />;
      default: return <Terminal className="w-6 h-6" />;
    }
  };

  return (
    <section className="relative min-h-[80vh] w-full bg-[#0A0A0A] bg-opacity-95 text-brand-beige py-20 px-4 md:px-8 overflow-hidden font-mono mx-auto mt-[-5rem]">
      {/* Immersive Cyber-grid CSS background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 pt-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 border-l-4 border-brand-accent pl-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
            JOIN /<span className="text-brand-accent">NANOZENIX</span>
          </h1>
          <p className="text-xl text-brand-muted max-w-2xl">
            {'>'} Initializing recruitment protocols... <br />
            {'>'} Searching for elite engineers in Modern Frontend, AI, VLSI, and Full Stack Architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careersData.map((job) => (
            <motion.div
              layout
              key={job.id}
              onClick={() => setActiveJobId(activeJobId === job.id ? null : job.id)}
              className={`cursor-pointer rounded-2xl border transition-colors duration-300 overflow-hidden ${activeJobId === job.id ? 'bg-[#111] border-brand-accent shadow-[0_0_30px_rgba(23,168,145,0.2)]' : 'bg-black/50 border-white/10 hover:border-brand-accent/50 hover:bg-[#1A1A1A]'}`}
            >
              <motion.div layout className="p-6 md:p-8 flex items-start justify-between">
                <div className="flex gap-4 items-start">
                  <div className={`p-3 rounded-xl ${activeJobId === job.id ? 'bg-brand-accent text-white' : 'bg-white/5 text-brand-muted'}`}>
                    {getIcon(job.category)}
                  </div>
                  <div>
                    <motion.h3 layout="position" className="text-xl md:text-2xl font-bold text-white mb-2">{job.role}</motion.h3>
                    <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wider">
                      <span className="text-brand-accent bg-brand-accent/10 px-2 py-0.5 rounded-sm">[{job.category}]</span>
                      <span className="text-brand-muted border border-brand-muted/30 px-2 py-0.5 rounded-sm">{job.location}</span>
                      <span className="text-brand-muted border border-brand-muted/30 px-2 py-0.5 rounded-sm">{job.type}</span>
                    </div>
                  </div>
                </div>
                <motion.div 
                  animate={{ rotate: activeJobId === job.id ? 90 : 0 }}
                  className={`${activeJobId === job.id ? 'text-brand-accent' : 'text-brand-muted'} ml-2`}
                >
                  <ChevronRight size={24} />
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {activeJobId === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-brand-accent/20 bg-brand-accent/5"
                  >
                    <div className="p-6 md:p-8 pt-6">
                      <p className="text-brand-beige/80 leading-relaxed mb-8 font-sans text-lg">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-4 justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Code2 className="text-brand-accent opacity-50" size={18} />
                          <span className="text-sm text-brand-muted">Algorithmic technicals required</span>
                        </div>
                        <button className="bg-brand-accent text-white font-bold py-3 px-8 rounded-xl hover:scale-105 shadow-[0_0_20px_rgba(23,168,145,0.4)] transition-all font-sans">
                          Execute Application
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
