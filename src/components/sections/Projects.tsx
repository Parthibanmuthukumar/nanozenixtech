import ProjectCard from "@/components/ui/ProjectCard";
import Link from "next/link";
import { getProjects } from "@/lib/data/projects";

export default async function Projects() {
  // Show only first 6 projects on homepage
  const allProjects = await getProjects();
  const projects = allProjects.slice(0, 6);

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark">Featured Projects</h2>
            <p className="text-lg text-brand-body opacity-70 max-w-2xl">
              Explore our portfolio of cutting-edge solutions.
            </p>
          </div>
          <Link 
            href="/projects" 
            className="hidden md:inline-flex text-brand-accent text-sm font-medium hover:text-brand-dark transition-colors items-center gap-1 relative group"
          >
            <span className="relative">
              View All Portfolio →
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link 
            href="/projects" 
            className="inline-flex text-brand-accent text-sm font-medium hover:text-brand-dark transition-colors items-center gap-1"
          >
            View All Portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}
