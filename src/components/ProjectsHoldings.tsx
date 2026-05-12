import { ExternalLink, Github } from "lucide-react";

interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    name: "Shop-Builder",
    description: "Shopify clone-ish built with Next.js and modern web technologies",
    tech: ["TypeScript", "Next.js", "React"],
    github: "https://github.com/SteveUcho/next-vanilla-shop-builder",
  },
  {
    name: "Dumb-Money-Game",
    description: "Stock market simulation game for learning trading strategies",
    tech: ["TypeScript", "React", "Node.js"],
    github: "https://github.com/SteveUcho/dumb-money-game",
  },
  {
    name: "Golang-Distributed-Server",
    description: "Distributed server architecture built with Go (Fall 2020)",
    tech: ["Go", "Distributed Systems"],
    github: "https://github.com/SteveUcho/Golang-Distributed-Server",
  },
  {
    name: "Picture-Frame-Wifi",
    description: "Client and server implementation for Spectra 6 Eink picture frame. Server is written in Python FastAPI and client is written in C using PlatformIO for esp32",
    tech: ["Python", "C", "C++"],
    github: "https://github.com/SteveUcho/Picture-Frame-Wifi",
  },
  {
    name: "Mobile-VR-With-Unity",
    description: "This is a VR mobile experice of the Never Built New York (NBNY) exhibit that took place in the Queens Museum",
    tech: ["C#", "Unity", "VR"],
    github: "https://github.com/SteveUcho/Team-Finder-App",
  },
  {
    name: "FLTK-FLUID-Syntax-Highlighting",
    description: `This VScode Extension is published on the Marketplace. Syntax highlighter for the "FLTK User Interface Designer (FLUID)" .fl file format`,
    tech: ["VSCode", "Extension"],
    github: "https://github.com/SteveUcho/Cat-GPS-nRF9151",
  },
];

export function ProjectsHoldings() {
  return (
    <div className="border-b border-border pb-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-2">
        <h2 className="text-xl md:text-2xl">Project</h2>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {projects.map((project) => {
          return (
            <div
              key={project.name}
              className="bg-card border border-border rounded p-4 md:p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row items-start justify-between mb-3 gap-3">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl mb-2">{project.name}</h3>
                  <p className="text-muted-foreground mb-3 text-sm md:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-foreground text-xs md:text-sm rounded"
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
                    <Github className="w-3 h-3 md:w-4 md:h-4" />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="flex items-center gap-1 text-xs md:text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
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
