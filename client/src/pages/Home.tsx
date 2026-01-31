import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Activity, Globe, Zap, Mail, Linkedin, Github } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

export default function Home() {
  return (
    <div className="h-full flex flex-col pb-20 sm:pb-8">
      {/* Top Grid Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[hsl(var(--grid-line))] border border-[hsl(var(--grid-line))] mb-auto">
        
        {/* Hero Statement */}
        <div className="lg:col-span-8 bg-[hsl(var(--bg-primary))] p-6 sm:p-8 md:p-12 min-h-[50vh] sm:min-h-[40vh] flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-4 right-4 opacity-30 sm:opacity-50">
            <Activity className="w-8 h-8 sm:w-12 sm:h-12 text-[hsl(var(--grid-line-active))]" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <span className="text-xs-mono mb-4 block">// COMPUTATIONAL_INTERFACE_ARCHITECT</span> */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-6 sm:mb-8">
              Manya<br />
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "1px hsl(var(--text-primary))" }}>Parikh</span><br />
            </h1>
            <h3 className="text-sm sm:text-base md:text-lg mb-4">Data Scientist | SAP-Aware Consultant | SOC Analyst</h3>
            <p className="max-w-xl font-mono text-xs sm:text-sm text-[hsl(var(--text-secondary))] border-l-2 border-[hsl(var(--accent-primary))] pl-3 sm:pl-4 mb-6 sm:mb-8 leading-relaxed">
              Focused on applying data science and machine learning to extract actionable insights from complex, security-driven datasets, with hands-on exposure to SOC operations including log correlation, anomaly detection, and threat analysis. Supported by working knowledge of SAP enterprise data, this approach bridges analytics, security intelligence, and business decision-making with clarity and impact.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <span className="text-xs-mono text-[hsl(var(--text-secondary))]">CONNECT_NODES:</span>
              <div className="flex gap-6 sm:gap-12">
                {SOCIAL_LINKS.map((social, i) => {
                  const IconComponent = social.icon === "Mail" ? Mail : social.icon === "Linkedin" ? Linkedin : Github;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target={social.name !== "Email" ? "_blank" : undefined}
                      rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                      className="group relative w-10 h-10 sm:w-12 sm:h-12 border border-[hsl(var(--grid-line))] flex items-center justify-center hover:border-[hsl(var(--accent-primary))] hover:bg-[hsl(var(--accent-primary))]/10 transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + (i * 0.1) }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[hsl(var(--text-primary))] group-hover:text-[hsl(var(--accent-primary))] transition-colors" />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                        {social.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Status Metrics */}
        <div className="lg:col-span-4 grid grid-rows-3 gap-px bg-[hsl(var(--grid-line))]">
          {[
            { label: "CURRENT STATUS", value: "AVAILABLE FOR HIRE", color: "text-[hsl(var(--accent-primary))]" },
            { label: "LATEST DEPLOY", value: "SYSTEM_V2.0.4", icon: Globe },
            { label: "UPTIME", value: "99.98%", icon: Zap },
          ].map((item, i) => (
            <motion.div 
              key={item.label}
              className="bg-[hsl(var(--bg-primary))] p-4 sm:p-6 flex flex-col justify-center interactive-cell"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs-mono text-[10px] sm:text-xs">{item.label}</span>
                {item.icon && <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-[hsl(var(--text-secondary))]" />}
              </div>
              <div className={`font-display text-lg sm:text-2xl font-bold ${item.color || ""}`}>{item.value}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigational Routing Grid */}
      <div className="mt-6 sm:mt-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px bg-[hsl(var(--grid-line))] flex-1" />
          <span className="text-xs-mono text-[10px] sm:text-xs">QUICK_ACCESS_PROTOCOLS</span>
          <div className="h-px bg-[hsl(var(--grid-line))] flex-1" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {[
            { to: "/projects", label: "VIEW ARCHIVE", desc: "Structured Project Data" },
            { to: "/skills", label: "ANALYZE MATRIX", desc: "Competency Heatmap" },
            { to: "/contact", label: "INITIATE LINK", desc: "Secure Transmission" },
          ].map((link, i) => (
            <Link key={link.to} href={link.to}>
              <motion.div 
                className="group border border-[hsl(var(--grid-line))] p-4 sm:p-6 cursor-pointer hover:bg-[hsl(var(--accent-primary))] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <span className="text-xs-mono text-[10px] sm:text-xs group-hover:text-white transition-colors">{link.label}</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[hsl(var(--accent-primary))] group-hover:text-white -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
                <h3 className="font-display text-base sm:text-xl font-bold uppercase group-hover:text-white transition-colors leading-tight">{link.desc}</h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
