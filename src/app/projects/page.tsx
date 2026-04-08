import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";
import { getProjects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Portfolio & Projects | Nanozenix Technologies",
  description: "View our advanced engineering portfolio and case studies.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  
  return (
    <main className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">Our Portfolio</h1>
          <p className="text-lg text-brand-body opacity-70 mb-4">
            Industry-grade SaaS experiences, physical SoC designs, and edge deployments.
          </p>
        </div>

        <ProjectsClient projects={projects} />
      </div>
    </main>
  );
}
