import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";

export default function About() {
  const narrative = [
    {
      label: "ORIGIN",
      text: "My academic foundation includes a B.Sc. in Information Technology (Computer Science) from Lok Jagruti University, Ahmedabad, where I built strong competencies in data analysis, programming, and system-oriented problem solving. Through applied projects across data science, SOC fundamentals, and SAP enterprise systems, my focus developed toward delivering reliable analytics within real-world business and security environments."
    },
    {
      label: "PHILOSOPHY",
      text: "I believe effective technology balances analytical rigor, security awareness, and business alignment, with data delivering the most value when it is accurate, interpretable, and grounded in real operational contexts. My approach prioritizes clarity, responsible data use, and insights that support secure, informed decision-making."
    },
    {
      label: "OBJECTIVE",
      text: "To apply data science and analytical modeling to derive actionable insights from complex and security-driven datasets, while integrating SOC analysis principles and SAP enterprise context to support informed decision-making, resilient systems, and scalable business intelligence solutions."
    }
  ];

  const stats = [
    { label: "Education", value: "B.Sc. in Information Technology" },
    { label: "Academic Experience", value: "4 year" },
    { label: "Certifications", value: "10+ Certifications" },
    { label: "Projects", value: "8+ Projects" }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <PageHeader 
        title="Narrative" 
        code="01" 
        description="Biographical data stream and operational philosophy." 
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Column: WHO AM I Section */}
        <div className="space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            className="relative pl-8 border-l border-[hsl(var(--grid-line))]"
          >
            <span className="absolute -left-[3px] top-0 w-[5px] h-[5px] bg-[hsl(var(--accent-primary))]" />
            <h3 className="text-xs-mono mb-4 text-[hsl(var(--accent-primary))]">WHO AM I?</h3>
            <div className="space-y-6">
<p className="text-[hsl(var(--text-secondary))] leading-relaxed">
  I completed a B.Sc. in Information Technology (Computer Science) from Lok Jagruti University, Ahmedabad, graduating in 2025 with a CGPA of 7.93. I work at the intersection of data science, cybersecurity analytics, and enterprise systems, with a strong academic foundation in information technology and hands-on experience across analytical modeling, data visualization, and secure data handling. My primary focus lies in applying machine learning and statistical techniques to transform complex datasets into meaningful, decision-ready insights.
</p>

<p className="text-[hsl(var(--text-secondary))] leading-relaxed">
  Alongside data science, I have practical exposure to SOC analysis, including log correlation, anomaly detection, and threat monitoring, which has shaped my understanding of security-driven data and operational risk. I also bring working knowledge of SAP enterprise data and business processes, enabling me to connect analytical outputs with real-world organizational workflows and business intelligence requirements.
</p>

<p className="text-[hsl(var(--text-secondary))] leading-relaxed">
  I am driven by building analytical solutions that are not only technically sound but also usable and impactful—whether through dashboards that support business decisions, models that surface hidden patterns, or insights that enhance security and operational efficiency. My goal is to deliver systems that feel simple to use while performing rigorous analysis behind the scenes.
</p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, idx) => (
              <div 
                key={stat.label}
                className="border border-[hsl(var(--grid-line))] bg-[hsl(var(--bg-secondary))] p-6 relative group hover:border-[hsl(var(--accent-primary))] transition-colors"
              >
                <div className="absolute top-0 left-0 w-2 h-2 bg-[hsl(var(--accent-primary))] opacity-0 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-xs-mono text-[hsl(var(--accent-primary))] mb-2">{stat.label}</h4>
                <p className="text-[hsl(var(--text-primary))] font-display">{stat.value}</p>
                <div className="h-px bg-[hsl(var(--grid-line))] mt-4" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Narrative Sections */}
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
  );
}
