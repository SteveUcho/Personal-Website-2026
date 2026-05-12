
const tickerItems = [
  { symbol: "JS" },
  { symbol: "TS" },
  { symbol: "NODE" },
  { symbol: "PY" },
  { symbol: "GQL" },
  { symbol: "REST" },
  { symbol: "MDB" },
  { symbol: "GO" },
  { symbol: "SQL" },
];

const characteristics = [
  { label: "Years Experience", value: "3+" },
  { label: "Public Repos", value: "14" },
  { label: "Awards Won", value: "2" },
  { label: "Languages", value: "10+" },
];

function TickerTape() {
  const doubledItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="flex gap-8 animate-[scroll_40s_linear_infinite]">
      {doubledItems.map((item, index) => {
        return (
          <div key={index} className="flex items-center gap-3 whitespace-nowrap">
            <span className="text-foreground">{item.symbol}</span>
            <span className="text-muted-foreground">score</span>
            <span className="text-gain">8/10</span>
          </div>
        );
      })}
    </div>
  );
}

export function Hero() {
  return (
    <div className="border-b border-border pb-12 relative overflow-hidden min-h-fit h-[70vh] content-center">
      <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-gain/10 text-gain rounded text-xs md:text-sm">ACTIVE</span>
          </div>
          <h1 className="text-3xl md:text-5xl mb-3">Steve Ucho</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">Software Engineer</p>
          <p className="text-foreground/80 max-w-2xl text-sm md:text-base">
            Computer science graduate from NYU '21 with a reputation for being a fast learner.
            I seek out problems and challenges. Specialized in back-end web development, REST APIs, and GraphQL.
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

      <div className="absolute left-0 right-0 bg-secondary/50 border-y border-border py-2 md:py-3 overflow-hidden text-xs md:text-base">
        <TickerTape />
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}
