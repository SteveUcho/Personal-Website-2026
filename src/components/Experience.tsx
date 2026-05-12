interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "ZT Systems",
    position: "Software Engineer",
    period: "August 2022 - August 2024",
    description: "Developed real-time IoT applications for global manufacturing operations",
    achievements: [
      "Developed real-time applications that aggregate data from servers and sensors",
      "Built systems monitoring manufacturing plants across the globe",
      "Architected scalable data collection and processing pipelines",
    ],
  },
  {
    company: "Accrete.AI",
    position: "Software Engineer Intern",
    period: "September 2018 - May 2019",
    description: "Built ML data infrastructure and storage systems",
    achievements: [
      "Developed realtime ML data normalization applications using JavaScript and MongoDB change streams",
      "Designed permission and file storage system for structured and unstructured data",
      "Implemented scalable data pipeline architecture",
    ],
  },
  {
    company: "MIDASoft Inc. | The Americas",
    position: "API Developer Intern",
    period: "May 2019 - June 2019",
    description: "Developed database architecture and scalable web modules",
    achievements: [
      "Crafted database schema to link distributed data sets",
      "Employed web template knowledge to develop scalable and maintainable modules",
      "Improved data integration across multiple systems",
    ],
  },
  {
    company: "Accrete.AI",
    position: "Knowledge and Annotation Intern",
    period: "July 2018 - September 2018",
    description: "Machine learning model training and data visualization",
    achievements: [
      "Trained deep learning models through annotation using IBM's Watson Knowledge Studio",
      "Created data visualization tools using Python, Pandas, and Node.js",
      "Improved ML model accuracy through systematic data annotation",
    ],
  },
];

export function Experience() {
  return (
    <div className="border-b border-border pb-12">
      <h2 className="text-xl md:text-2xl mb-6">Experience History</h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 md:pl-8 pb-6 border-l-2 border-border last:pb-0">
            <div className="absolute left-0 top-0 -ml-[7px] md:-ml-[9px] w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary border-4 border-background"></div>

            <div className="bg-card border border-border rounded p-4 md:p-5">
              <div className="flex flex-col md:flex-row items-start justify-between mb-2 gap-1 md:gap-0">
                <div>
                  <h3 className="text-lg md:text-xl">{exp.position}</h3>
                  <div className="text-primary text-sm md:text-base">{exp.company}</div>
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">{exp.period}</div>
              </div>

              <p className="text-muted-foreground mb-3 text-sm md:text-base">{exp.description}</p>

              <ul className="space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-xs md:text-sm flex items-start gap-2">
                    <span className="text-primary mt-0.5 md:mt-1">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
