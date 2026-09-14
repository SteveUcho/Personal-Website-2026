interface Skill {
  name: string;
  ticker: string;
}

const skills: Skill[] = [
  { name: "JavaScript", ticker: "JS" },
  { name: "TypeScript", ticker: "TS" },
  { name: "Node.js", ticker: "NODE" },
  { name: "Python", ticker: "PY" },
  { name: "GraphQL", ticker: "GQL" },
  { name: "REST APIs", ticker: "REST" },
  { name: "MongoDB", ticker: "MDB" },
  { name: "Go", ticker: "GO" },
  { name: "Vue", ticker: "VUE" },
];

export function SkillsStock() {
  return (
    <div className="border-b border-border pb-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-2">
        <h2 className="text-xl md:text-2xl">Skills</h2>
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
