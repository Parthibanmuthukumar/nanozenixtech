"use client";

import { Card } from "@/components/ui/Card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="p-0 overflow-hidden group h-full flex flex-col hover:border-brand-accent">
      {/* Image Section */}
      <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-brand-accent to-brand-dark">
        <Image 
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>
        
        {project.featured && (
          <span className="absolute top-4 left-4 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            FEATURED
          </span>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-6 md:p-8 flex-grow flex flex-col bg-white">
        <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-accent transition-colors">
          {project.title}
        </h3>
        
        <p className="text-brand-body text-sm mb-6 flex-grow opacity-80">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1.5 bg-brand-muted text-brand-dark text-xs rounded-full font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <button className="text-brand-accent text-sm font-medium hover:text-brand-dark transition-all duration-200 inline-flex items-center gap-1 group/btn">
            View Details <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </Card>
  );
}
