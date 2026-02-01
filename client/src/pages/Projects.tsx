import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const PROJECTS = [
  // ...existing projects...
  // New projects below
  {
    id: "001",
    title: "Loco Payroll Management System",
    desc: "AI-based payroll management system with PayPal integration for seamless salary processing.",
    stack: ["AI", "Node.js", "Express", "PayPal API"],
    year: "2025",
    github: "https://github.com/Manya2302/Payroll",
    live: ""
  },
  {
    id: "002",
    title: "QuickFix – Instant Home Services Platform",
    desc: "MEAN stack app with AI/ML-based service provider allocation (distance, skill, experience), Razorpay payment integration.",
    stack: ["MEAN", "AI/ML", "Razorpay"],
    year: "2025",
    github: "",
    live: ""
  },
  {
    id: "003",
    title: "Stock Market Analysis",
    desc: "Transforms raw stock price data into actionable insights: price trends (2019–2024), year-wise & sector-wise analysis, interactive visualizations, and tabular drill-down.",
    stack: ["Power BI", "Data Analysis", "Visualization"],
    year: "2024",
    github: "http://github.com/Manya2302/Power-BI/blob/master/Trading%20Report/Stock%20Treding%20Report_Manya_Parikh.pbix",
    live: ""
  },
  {
    id: "004",
    title: "Blinkit Report",
    desc: "Transforms raw data into insights for sales, inventory, fulfillment, and profitability. Interactive dashboard for business stakeholders.",
    stack: ["Power BI", "Dashboard", "Analytics"],
    year: "2024",
    github: "https://github.com/Manya2302/Power-BI/blob/master/Blinkit/Blinkit%20Report.pbix",
    live: ""
  },
  {
    id: "005",
    title: "Lock Blip",
    desc: "AI-based message creation with military-grade encryption functionalities.",
    stack: ["AI", "Encryption", "Security"],
    year: "2025",
    github: "https://github.com/Manya2302/LockBlip",
    live: ""
  }
];

export default function Projects() {
  return (
    <div className="pb-20 sm:pb-8">
      <PageHeader 
        title="Project Archive" 
        code="03" 
        description="Select works from the database. Chronological sorting active." 
      />

      {/* Table Header - Desktop Only */}
      <div className="hidden lg:grid grid-cols-12 gap-4 px-4 py-2 border-b border-[hsl(var(--grid-line))] text-xs-mono text-[10px] xl:text-xs text-[hsl(var(--text-secondary))]">
        <div className="col-span-1">ID</div>
        <div className="col-span-4">PROJECT_NAME</div>
        <div className="col-span-4">DESCRIPTION</div>
        <div className="col-span-2">STACK</div>
        <div className="col-span-1 text-right">YEAR</div>
      </div>

      <div className="space-y-px sm:space-y-2 lg:space-y-px bg-[hsl(var(--grid-line))] border-b border-[hsl(var(--grid-line))]">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-[hsl(var(--bg-primary))] hover:bg-[hsl(var(--bg-secondary))] transition-colors duration-200 relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 p-4 sm:p-6 items-start lg:items-center">
              {/* Mobile/Tablet Layout */}
              <div className="lg:hidden space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-xs-mono text-[10px] text-[hsl(var(--accent-primary))] mb-2">
                      {project.id} • {project.year}
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold uppercase group-hover:text-[hsl(var(--accent-primary))] transition-colors flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    {(project.github || project.live) && (
                      <div className="flex gap-2 mt-1">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs-mono text-[hsl(var(--accent-primary))] hover:underline">
                            <Github className="w-3 h-3" /> GitHub
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs-mono text-[hsl(var(--accent-primary))] hover:underline">
                            <ArrowUpRight className="w-3 h-3" /> Live
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                
                <p className="text-xs sm:text-sm font-mono text-[hsl(var(--text-secondary))] leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="text-[9px] sm:text-[10px] border border-[hsl(var(--grid-line))] px-2 py-1 uppercase tracking-wider bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-secondary))]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:block col-span-1 font-mono text-sm text-[hsl(var(--text-secondary))]">
                {project.id}
              </div>
              
              <div className="hidden lg:block col-span-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-lg xl:text-xl font-bold uppercase group-hover:text-[hsl(var(--accent-primary))] transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  {(project.github || project.live) && (
                    <div className="flex gap-2 mt-1">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs-mono text-[hsl(var(--accent-primary))] hover:underline">
                          <Github className="w-3 h-3" /> GitHub
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs-mono text-[hsl(var(--accent-primary))] hover:underline">
                          <ArrowUpRight className="w-3 h-3" /> Live
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="hidden lg:block col-span-4 text-xs xl:text-sm font-mono text-[hsl(var(--text-secondary))]">
                {project.desc}
              </div>
              
              <div className="hidden lg:flex col-span-2 flex-wrap gap-2">
                {project.stack.map(tech => (
                  <span key={tech} className="text-[10px] border border-[hsl(var(--grid-line))] px-1 py-0.5 uppercase tracking-wider bg-[hsl(var(--bg-primary))]">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="hidden lg:block col-span-1 text-right font-mono text-sm text-[hsl(var(--text-secondary))]">
                {project.year}
              </div>
            </div>
            
            {/* Hover Decor */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[hsl(var(--accent-primary))] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
