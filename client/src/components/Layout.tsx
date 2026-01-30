import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { 
  LayoutGrid, 
  User, 
  Cpu, 
  FolderArchive, 
  History, 
  Terminal,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { path: "/", label: "INDEX", icon: LayoutGrid, code: "00" },
  { path: "/about", label: "NARRATIVE", icon: User, code: "01" },
  { path: "/skills", label: "MATRIX", icon: Cpu, code: "02" },
  { path: "/projects", label: "ARCHIVE", icon: FolderArchive, code: "03" },
  { path: "/experience", label: "TIMELINE", icon: History, code: "04" },
  { path: "/contact", label: "TERMINAL", icon: Terminal, code: "05" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[hsl(var(--bg-primary))] text-[hsl(var(--text-primary))] overflow-hidden">
      {/* SYSTEM HEADER (Mobile) */}
      <div className="md:hidden h-14 border-b border-[hsl(var(--grid-line))] flex items-center justify-between px-4 sticky top-0 bg-[hsl(var(--bg-primary))] z-50">
        <span className="font-mono text-xs tracking-widest text-[hsl(var(--accent-primary))]">SYS.VER.2026</span>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* NAVIGATION SIDEBAR */}
      <nav className={clsx(
        "fixed inset-0 z-40 bg-[hsl(var(--bg-primary))] md:relative md:w-64 md:flex-shrink-0 border-r border-[hsl(var(--grid-line))] flex flex-col transition-transform duration-300 ease-out md:translate-x-0",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Identity Block */}
        <div className="h-24 md:h-32 border-b border-[hsl(var(--grid-line))] p-6 flex flex-col justify-center">
          <h1 className="font-display text-xl font-bold uppercase tracking-tighter">
            Manya<span className="text-[hsl(var(--accent-primary))]"> Parikh</span>
          </h1>
          <div className="mt-2 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 animate-pulse" />
            <span className="text-xs-mono">SYSTEM ONLINE</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-8 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = location === item.path;
            const Icon = item.icon;
            
            return (
              <Link key={item.path} href={item.path}>
                <div 
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    "group flex items-center gap-4 px-6 py-4 cursor-pointer font-mono text-sm transition-all duration-200 border-l-2 border-transparent hover:bg-[hsl(var(--bg-secondary))]",
                    isActive ? "border-l-[hsl(var(--accent-primary))] bg-[hsl(var(--bg-secondary))] text-[hsl(var(--accent-primary))]" : "text-[hsl(var(--text-secondary))]"
                  )}
                >
                  <span className="text-[10px] opacity-50 font-bold">{item.code}</span>
                  <span className={clsx("tracking-widest uppercase", isActive && "font-bold")}>{item.label}</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer Meta */}
        <div className="p-6 border-t border-[hsl(var(--grid-line))]">
          <div className="grid grid-cols-2 gap-2 text-[10px] text-[hsl(var(--text-secondary))] font-mono">
            <div>BUILD</div>
            <div className="text-right">A8.04</div>
            <div>LATENCY</div>
            <div className="text-right">12ms</div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT VIEWPORT */}
      <main className="flex-1 h-[calc(100vh-3.5rem)] md:h-screen overflow-y-auto scroll-smooth relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-[hsl(var(--grid-line))] z-10">
          <motion.div 
            className="h-full bg-[hsl(var(--accent-primary))]" 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, ease: "circOut" }}
          />
        </div>

        <div className="min-h-full p-4 md:p-12 lg:p-16 max-w-7xl mx-auto">
           {children}
        </div>
      </main>
    </div>
  );
}
