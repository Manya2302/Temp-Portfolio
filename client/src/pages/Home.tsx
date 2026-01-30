import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Activity, Globe, Zap, Mail, Linkedin, Github } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      {/* Top Grid Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[hsl(var(--grid-line))] border border-[hsl(var(--grid-line))] mb-auto">
        
        {/* Hero Statement */}
        <div className="lg:col-span-8 bg-[hsl(var(--bg-primary))] p-8 md:p-12 min-h-[40vh] flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-50">
            <Activity className="w-12 h-12 text-[hsl(var(--grid-line-active))]" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs-mono mb-4 block">// COMPUTATIONAL_INTERFACE_ARCHITECT</span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-8">
              Algorithmic<br />
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "1px hsl(var(--text-primary))" }}>Precision</span><br />
              Systems
            </h1>
            <p className="max-w-xl font-mono text-sm text-[hsl(var(--text-secondary))] border-l border-[hsl(var(--accent-primary))] pl-4 mb-8">
              Designing spatial interfaces and high-performance frontend architecture. 
              Rejecting standard templates in favor of engineered aesthetic systems.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-8">
              <span className="text-xs-mono text-[hsl(var(--text-secondary))]">CONNECT_NODES:</span>
              <div className="flex gap-12">
                {SOCIAL_LINKS.map((social, i) => {
                  const IconComponent = social.icon === "Mail" ? Mail : social.icon === "Linkedin" ? Linkedin : Github;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target={social.name !== "Email" ? "_blank" : undefined}
                      rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                      className="group relative w-12 h-12 border border-[hsl(var(--grid-line))] flex items-center justify-center hover:border-[hsl(var(--accent-primary))] hover:bg-[hsl(var(--accent-primary))]/10 transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + (i * 0.1) }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-5 h-5 text-[hsl(var(--text-primary))] group-hover:text-[hsl(var(--accent-primary))] transition-colors" />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
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
              className="bg-[hsl(var(--bg-primary))] p-6 flex flex-col justify-center interactive-cell"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs-mono">{item.label}</span>
                {item.icon && <item.icon className="w-4 h-4 text-[hsl(var(--text-secondary))]" />}
              </div>
              <div className={`font-display text-2xl font-bold ${item.color || ""}`}>{item.value}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigational Routing Grid */}
      <div className="mt-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px bg-[hsl(var(--grid-line))] flex-1" />
          <span className="text-xs-mono">QUICK_ACCESS_PROTOCOLS</span>
          <div className="h-px bg-[hsl(var(--grid-line))] flex-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { to: "/projects", label: "VIEW ARCHIVE", desc: "Structured Project Data" },
            { to: "/skills", label: "ANALYZE MATRIX", desc: "Competency Heatmap" },
            { to: "/contact", label: "INITIATE LINK", desc: "Secure Transmission" },
          ].map((link, i) => (
            <Link key={link.to} href={link.to}>
              <div className="group border border-[hsl(var(--grid-line))] p-6 cursor-pointer hover:bg-[hsl(var(--accent-primary))] transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs-mono group-hover:text-white transition-colors">{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-[hsl(var(--accent-primary))] group-hover:text-white -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase group-hover:text-white transition-colors">{link.desc}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
