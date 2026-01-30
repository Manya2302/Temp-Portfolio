import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";

export default function About() {
  const narrative = [
    {
      label: "ORIGIN",
      text: "I operate at the intersection of systematic design and computational logic. My background is not in traditional art, but in structured problem solving and architectural theory."
    },
    {
      label: "PHILOSOPHY",
      text: "I believe interfaces should be honest. I reject decorative metaphors (skeuomorphism, glassmorphism) in favor of exposing the underlying grid and logic of the browser."
    },
    {
      label: "OBJECTIVE",
      text: "To build resilient, high-performance web systems that scale not just in traffic, but in complexity and maintainability."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader 
        title="Narrative" 
        code="01" 
        description="Biographical data stream and operational philosophy." 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Left Column: Asymmetric Layout */}
        <div className="lg:col-span-5 space-y-12">
          <div className="aspect-[3/4] bg-[hsl(var(--bg-secondary))] border border-[hsl(var(--grid-line))] relative p-4 group">
             {/* Abstract Portrait Representation */}
             <div className="w-full h-full border border-[hsl(var(--grid-line))] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="border-[0.5px] border-[hsl(var(--grid-line))] opacity-20" />
                  ))}
                </div>
                <span className="font-mono text-xs text-[hsl(var(--text-secondary))] bg-[hsl(var(--bg-primary))] px-2 z-10">
                  [IMAGE_DATA_REDACTED]
                </span>
                
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-[hsl(var(--accent-primary))] opacity-0 group-hover:opacity-20 transition-opacity" />
             </div>
          </div>
          
          <div className="border-t border-[hsl(var(--grid-line))] pt-4">
             <div className="grid grid-cols-2 gap-4 text-xs font-mono text-[hsl(var(--text-secondary))]">
                <div>LOC: SAN_FRANCISCO</div>
                <div>EXP: 5_YEARS</div>
                <div>ROLE: SENIOR_ENGR</div>
                <div>MODE: ASYNC</div>
             </div>
          </div>
        </div>

        {/* Right Column: Text Stream */}
        <div className="lg:col-span-7">
          <div className="space-y-16">
            {narrative.map((section, idx) => (
              <motion.div 
                key={section.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="relative pl-8 border-l border-[hsl(var(--grid-line))]"
              >
                <span className="absolute -left-[3px] top-0 w-[5px] h-[5px] bg-[hsl(var(--accent-primary))]" />
                <h3 className="text-xs-mono mb-4 text-[hsl(var(--accent-primary))]">{section.label}</h3>
                <p className="font-display text-xl md:text-2xl leading-relaxed uppercase tracking-wide">
                  {section.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
