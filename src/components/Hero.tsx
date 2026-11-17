import type { Characteristics } from "@/types/hero";

interface HeroProps {
  characteristics: Characteristics[];
}

export function Hero(props: Readonly<HeroProps>) {
  const { characteristics } = props;

  return (
    <div className="border-b border-border relative overflow-hidden min-h-fit h-[70vh] content-center">
      <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-gain/10 text-gain rounded text-xs md:text-sm">ACTIVE</span>
          </div>
          <h1 className="text-3xl md:text-5xl mb-3">Steve Ucho</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">Software Engineer</p>
          <p className="text-foreground/80 max-w-2xl text-sm md:text-base">
            Computer science graduate from NYU '21 with a reputation for being a fast learner.
            I seek out problems and challenges. Specialized in full-stack web development, REST APIs, and GraphQL.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-16">
        {characteristics.map((stat) => (
          <div key={stat.label} className="bg-card border border-border rounded p-3 md:p-4">
            <div className="text-xl md:text-2xl mb-1">{stat.value}</div>
            <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
