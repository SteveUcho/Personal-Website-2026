import { Hero } from "./components/Hero";
import { SkillsStock } from "./components/SkillsStock";
import { ProjectsHoldings } from "./components/ProjectsHoldings";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-12 space-y-8 md:space-y-12">
        <Hero />
        <SkillsStock />
        <Experience />
        <ProjectsHoldings />
        <Contact />
      </div>
    </div>
  );
}