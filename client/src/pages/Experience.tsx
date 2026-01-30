import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";

const HISTORY = [
  {
    period: "2023 - PRESENT",
    role: "SENIOR_SYSTEMS_ARCHITECT",
    company: "GLOBAL_CORP",
    location: "REMOTE",
    details: [
      "Architected micro-frontend framework serving 5M+ daily users.",
      "Reduced CI/CD pipeline latency by 40% through custom tooling.",
      "Led a team of 8 engineers in migration to Rust-based backend services."
    ]
  },
  {
    period: "2021 - 2023",
    role: "INTERFACE_ENGINEER_II",
    company: "FUTURE_STUDIOS",
    location: "NEW_YORK",
    details: [
      "Developed WebGL rendering engine for client architectural visualizations.",
      "Implemented design system tokens across web, iOS, and Android platforms.",
      "Optimized core web vitals resulting in 15% conversion lift."
    ]
  },
  {
    period: "2019 - 2021",
    role: "FULL_STACK_DEV",
    company: "STARTUP_INC",
    location: "BERLIN",
    details: [
      "Built MVP from scratch using React/Node.js stack.",
      "Handled database schema design and real-time WebSocket integration.",
      "Scaled infrastructure to handle 10k concurrent connections."
    ]
  }
];

export default function Experience() {
  return (
    <div className="max-w-4xl">
      <PageHeader 
        title="Temporal Grid" 
        code="04" 
        description="Chronological record of commercial engagements and roles." 
      />

      <div className="relative border-l border-[hsl(var(--grid-line))] ml-4 md:ml-0 md:border-none space-y-12">
        {HISTORY.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 group"
          >
            {/* Period Column */}
            <div className="md:col-span-3 pt-1 relative">
              <div className="hidden md:block absolute top-3 right-0 w-full h-px bg-[hsl(var(--grid-line))]" />
              <div className="hidden md:block absolute top-2 right-0 w-2 h-2 bg-[hsl(var(--grid-line))] group-hover:bg-[hsl(var(--accent-primary))] transition-colors" />
              
              {/* Mobile Indicator */}
              <div className="md:hidden absolute -left-[17px] top-2 w-2 h-2 rounded-full bg-[hsl(var(--accent-primary))]" />
              
              <span className="font-mono text-xs md:text-sm bg-[hsl(var(--bg-primary))] pr-4 relative z-10 block w-fit">
                {item.period}
              </span>
            </div>

            {/* Content Column */}
            <div className="md:col-span-9 space-y-4 pb-12 border-b border-[hsl(var(--grid-line))] last:border-0">
              <div>
                <h3 className="font-display text-2xl font-bold uppercase mb-1 text-[hsl(var(--text-primary))]">
                  {item.role}
                </h3>
                <div className="flex gap-4 text-xs-mono text-[hsl(var(--accent-primary))]">
                  <span>@{item.company}</span>
                  <span>// {item.location}</span>
                </div>
              </div>

              <ul className="space-y-2">
                {item.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex gap-3 text-sm font-mono text-[hsl(var(--text-secondary))]">
                    <span className="opacity-50 mt-1">→</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
