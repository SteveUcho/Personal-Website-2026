import { ExternalLink, Github, Star } from "lucide-react";
import type { Project } from "@/types/projects";

interface ProjectsHoldingsProps {
  projects: Project[];
}

export function ProjectsHoldings(props: Readonly<ProjectsHoldingsProps>) {
  const { projects } = props;

  return (
    <div className="border-b border-border pb-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-2">
        <h2 className="text-xl md:text-2xl">Projects</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {projects.map((project) => {
          return (
            <div
              key={project.name}
              className={`bg-card border border-border rounded p-4 md:p-6 transition-colors ${project.star ? "hover:border-yellow-400/50" : "hover:border-primary/50"}`}
            >
              <div className="flex flex-col md:flex-row items-start justify-between mb-3 gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg md:text-xl">{project.name.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("-")}</h3>
                    {project.star && (
                      <Star className="w-5 h-5 text-yellow-400" />
                    )}
                  </div>
                  <p className="text-muted-foreground mb-3 text-sm md:text-base">{project.description}</p>
                  <p className="mb-3">
                    <span className="text-sm md:text-base">Last updated: </span>
                    <span className="text-muted-foreground text-sm md:text-base">{new Date(project.pushedAt).toLocaleDateString()}</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-foreground text-xs md:text-sm rounded capitalize hover:bg-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-4 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-xs md:text-sm text-primary hover:underline"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="flex items-center gap-1 text-xs md:text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
