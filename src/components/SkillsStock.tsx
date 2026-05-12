interface Skill {
  name: string;
  ticker: string;
  price: number;
  change: number;
  shares: number;
}

const skills: Skill[] = [
  { name: "JavaScript", ticker: "JS", price: 98.5, change: 12.4, shares: 150 },
  { name: "TypeScript", ticker: "TS", price: 96.2, change: 15.7, shares: 120 },
  { name: "Node.js", ticker: "NODE", price: 94.3, change: 18.2, shares: 130 },
  { name: "Python", ticker: "PY", price: 92.7, change: 8.3, shares: 110 },
  { name: "GraphQL", ticker: "GQL", price: 91.6, change: 14.2, shares: 95 },
  { name: "REST APIs", ticker: "REST", price: 95.4, change: 11.5, shares: 140 },
  { name: "MongoDB", ticker: "MDB", price: 89.8, change: 16.8, shares: 105 },
  { name: "Go", ticker: "GO", price: 87.2, change: 9.4, shares: 85 },
  { name: "Vue", ticker: "VUE", price: 84.5, change: 7.1, shares: 75 },
];

export function SkillsStock() {
  return (
    <div className="border-b border-border pb-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-2">
        <h2 className="text-xl md:text-2xl">Skills Portfolio</h2>
        <div className="text-xs md:text-sm text-muted-foreground">Last updated: Today</div>
      </div>

      <div className="bg-card border border-border rounded overflow-hidden">
        {/* Mobile view */}
        <div className="grid grid-cols-3 gap-2">
          {skills.map((skill) => {
            return (
              <div
                key={skill.ticker}
                className="p-4 border border-border"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-medium">{skill.name}</div>
                    <div className="text-xs text-muted-foreground">{skill.ticker}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
