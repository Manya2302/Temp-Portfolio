import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";

const SKILL_MATRIX = [
  {
    category: "FRONTEND_ARCHITECTURE",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 98 },
      { name: "WebGL / Three.js", level: 75 },
    ]
  },
  {
    category: "BACKEND_SYSTEMS",
    items: [
      { name: "Node.js", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Docker / K8s", level: 70 },
      { name: "Rust", level: 60 },
    ]
  },
  {
    category: "DESIGN_THEORY",
    items: [
      { name: "System Design", level: 92 },
      { name: "UI Engineering", level: 88 },
      { name: "Motion Physics", level: 85 },
    ]
  }
];

export default function Skills() {
  return (
    <div>
      <PageHeader 
        title="Competency Matrix" 
        code="02" 
        description="Quantified technical capabilities and stack proficiency." 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--grid-line))] border border-[hsl(var(--grid-line))]">
        {SKILL_MATRIX.map((domain, i) => (
          <motion.div 
            key={domain.category}
            className="bg-[hsl(var(--bg-primary))] p-8 min-h-[400px] flex flex-col"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="mb-8 pb-4 border-b border-[hsl(var(--grid-line))]">
              <span className="text-xs-mono text-[hsl(var(--accent-primary))]">DOMAIN_{String(i).padStart(2, '0')}</span>
              <h3 className="font-display text-xl mt-2 font-bold">{domain.category}</h3>
            </div>

            <div className="flex-1 space-y-8">
              {domain.items.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2 text-sm font-mono uppercase">
                    <span>{skill.name}</span>
                    <span className="text-[hsl(var(--text-secondary))]">{skill.level}%</span>
                  </div>
                  
                  {/* Custom Meter */}
                  <div className="h-1 w-full bg-[hsl(var(--bg-secondary))] overflow-hidden relative">
                    {/* Grid lines inside the bar */}
                    <div className="absolute inset-0 flex justify-between z-10 pointer-events-none">
                      {[...Array(10)].map((_, j) => (
                        <div key={j} className="w-px h-full bg-[hsl(var(--bg-primary))]" />
                      ))}
                    </div>
                    
                    <motion.div 
                      className="h-full bg-[hsl(var(--text-primary))] group-hover:bg-[hsl(var(--accent-primary))] transition-colors duration-300"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
