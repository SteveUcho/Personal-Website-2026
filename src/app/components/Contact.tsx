import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub", handle: "@SteveUcho", url: "https://github.com/SteveUcho" },
  { icon: Linkedin, label: "LinkedIn", handle: "/in/steveucho", url: "https://linkedin.com/in/steveucho" },
  { icon: Twitter, label: "Twitter", handle: "@SteveUcho", url: "https://twitter.com/SteveUcho" },
  { icon: Mail, label: "Email", handle: "steve.ucho8@gmail.com", url: "mailto:steve.ucho8@gmail.com" },
];

export function Contact() {
  return (
    <div className="pb-12">
      <h2 className="text-xl md:text-2xl mb-6">Connect</h2>

      <div className="bg-card border border-border rounded p-4 md:p-6">
        <p className="text-muted-foreground mb-6 text-sm md:text-base">
          Computer science graduate with a reputation for being a fast learner. I seek out problems and challenges.
          Looking to collaborate or have a project in mind? Let's connect and discuss opportunities.
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          <span className="px-2 md:px-3 py-1 bg-primary/10 text-primary rounded text-xs md:text-sm border border-primary/20">Best Use of MongoDB</span>
          <span className="px-2 md:px-3 py-1 bg-primary/10 text-primary rounded text-xs md:text-sm border border-primary/20">Prototype Fund Grant</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.url}
                className="flex items-center gap-3 p-3 md:p-4 bg-secondary border border-border rounded hover:border-primary transition-colors"
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs md:text-sm text-muted-foreground">{link.label}</div>
                  <div className="text-sm md:text-base truncate">{link.handle}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <div className="mt-8 text-center text-xs md:text-sm text-muted-foreground">
        <p>© 2026 Steve Ucho. Built with React + TypeScript + Tailwind CSS</p>
        <p className="mt-2">New York, NY • NYU '21 BS Computer Science</p>
      </div>
    </div>
  );
}
