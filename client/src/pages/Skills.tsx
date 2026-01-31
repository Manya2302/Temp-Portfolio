import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";

// ===============================
// SKILL MATRIX
// ===============================
const SKILL_MATRIX = [
  {
    category: "DATA_SCIENCE_AND_ANALYTICS",
    items: [
      { name: "Python (Pandas, NumPy)", level: 90 },
      { name: "Statistical Analysis", level: 88 },
      { name: "Machine Learning", level: 82 },
      { name: "Data Visualization (Power BI, Tableau)", level: 85 },
      { name: "SQL & Data Querying", level: 80 },
    ],
  },
  {
    category: "CYBERSECURITY_AND_SOC",
    items: [
      { name: "Log Analysis & Correlation", level: 78 },
      { name: "Anomaly Detection", level: 75 },
      { name: "Threat Monitoring & Analysis", level: 72 },
      { name: "SOC Fundamentals", level: 76 },
      { name: "Network & Security Basics", level: 70 },
    ],
  },
  {
    category: "SAP_AND_ENTERPRISE_SYSTEMS",
    items: [
      { name: "SAP FICO", level: 70 },
      { name: "SAP FIORI", level: 68 },
      { name: "SAP BASIS (Fundamentals)", level: 65 },
      { name: "Enterprise Data Understanding", level: 75 },
      { name: "Business Process Mapping", level: 72 },
    ],
  },
  {
    category: "FRONTEND_AND_UI_UX",
    items: [
      { name: "React / Frontend Development", level: 80 },
      { name: "UI/UX Design Principles", level: 82 },
      { name: "Responsive Design", level: 85 },
      { name: "Data Dashboards & Interfaces", level: 88 },
    ],
  },
  {
    category: "SYSTEMS_AND_PROBLEM_SOLVING",
    items: [
      { name: "Analytical Problem Solving", level: 90 },
      { name: "System-Oriented Thinking", level: 85 },
      { name: "Data-Driven Decision Support", level: 88 },
      { name: "Documentation & Communication", level: 82 },
    ],
  },
];

// ===============================
// TOOLS OF THE TRADE
// ===============================
const TOOLS_OF_THE_TRADE = [
  {
    category: "DEVELOPMENT_AND_VERSION_CONTROL",
    items: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 78 },
      { name: "Postman", level: 80 },
      { name: "WebSockets", level: 75 },
    ],
  },
  {
    category: "CLOUD_AND_DEPLOYMENT",
    items: [
      { name: "AWS", level: 72 },
      { name: "Vercel", level: 85 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    category: "DATABASES_AND_STORAGE",
    items: [
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "Prisma ORM", level: 75 },
    ],
  },
  {
    category: "VECTOR_DATABASES_AND_AI_INFRA",
    items: [
      { name: "ChromaDB", level: 70 },
      { name: "Qdrant", level: 68 },
    ],
  },
];


const SkillSection = ({ data, startIndex, sectionLabel }: { data: typeof SKILL_MATRIX, startIndex: number, sectionLabel: string }) => (
  <div className="space-y-4 sm:space-y-6 md:space-y-8">
    {data.map((domain, i) => (
      <motion.div 
        key={domain.category}
        className="border border-[hsl(var(--grid-line))] bg-[hsl(var(--bg-secondary))] hover:border-[hsl(var(--accent-primary))] transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.08 }}
      >
        {/* Header Section */}
        <div className="p-4 sm:p-6 border-b border-[hsl(var(--grid-line))] bg-[hsl(var(--bg-primary))]">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-xs-mono text-[10px] sm:text-xs text-[hsl(var(--accent-primary))]">
              {sectionLabel}_{String(startIndex + i).padStart(2, '0')}
            </span>
            <div className="h-px flex-1 bg-[hsl(var(--grid-line))]" />
          </div>
          <h3 className="font-display text-lg sm:text-xl md:text-2xl mt-2 sm:mt-3 font-bold tracking-wide break-words">{domain.category}</h3>
        </div>

        {/* Skills Grid */}
        <div className="p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-4 sm:gap-y-6">
            {domain.items.map((skill, idx) => (
              <motion.div 
                key={skill.name} 
                className="group"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="flex justify-between items-baseline mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm font-medium text-[hsl(var(--text-primary))] break-words pr-2">
                    {skill.name}
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-[hsl(var(--text-secondary))] ml-2 flex-shrink-0">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="h-1.5 sm:h-2 w-full bg-[hsl(var(--bg-primary))] overflow-hidden relative border border-[hsl(var(--grid-line))]">
                  {/* Grid lines inside the bar */}
                  <div className="absolute inset-0 flex justify-between z-10 pointer-events-none">
                    {[...Array(10)].map((_, j) => (
                      <div key={j} className="w-px h-full bg-[hsl(var(--grid-line))] opacity-50" />
                    ))}
                  </div>
                  
                  <motion.div 
                    className="h-full bg-[hsl(var(--text-primary))] group-hover:bg-[hsl(var(--accent-primary))] transition-colors duration-300 relative"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  >
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-shimmer" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 md:space-y-16 pb-20 sm:pb-8">
      {/* Skills Matrix Section */}
      <div>
        <PageHeader 
          title="Competency Matrix" 
          code="02" 
          description="Quantified technical capabilities and stack proficiency." 
        />
        <SkillSection data={SKILL_MATRIX} startIndex={0} sectionLabel="DOMAIN" />
      </div>

      {/* Tools of the Trade Section */}
      <div>
        <PageHeader 
          title="Tools of the Trade" 
          code="03" 
          description="Development tools, platforms, and infrastructure expertise." 
        />
        <SkillSection data={TOOLS_OF_THE_TRADE} startIndex={0} sectionLabel="TOOLS" />
      </div>
    </div>
  );
}

// ===============================
// EXPORTS (OPTIONAL)
// ===============================
export { SKILL_MATRIX, TOOLS_OF_THE_TRADE };
