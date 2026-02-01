import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { 
  LayoutGrid, 
  User, 
  Cpu, 
  FolderArchive, 
  History, 
  Terminal,
  Home,
  Sun,
  Moon,
  ChevronRight,
  ChevronLeft,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { path: "/", label: "INDEX", shortLabel: "HOME", icon: LayoutGrid, code: "00" },
  { path: "/about", label: "NARRATIVE", shortLabel: "ABOUT", icon: User, code: "01" },
  { path: "/skills", label: "MATRIX", shortLabel: "SKILLS", icon: Cpu, code: "02" },
  { path: "/projects", label: "ARCHIVE", shortLabel: "PROJECTS", icon: FolderArchive, code: "03" },
  { path: "/experience", label: "TIMELINE", shortLabel: "TIMELINE", icon: History, code: "04" },
  { path: "/contact", label: "TERMINAL", shortLabel: "CONTACT", icon: Terminal, code: "05" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [location, navigate] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Apply theme to document root
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty('--bg-primary', '240 10% 4%');
      root.style.setProperty('--bg-secondary', '240 6% 10%');
      root.style.setProperty('--text-primary', '0 0% 95%');
      root.style.setProperty('--text-secondary', '240 5% 65%');
      root.style.setProperty('--grid-line', '240 6% 15%');
      root.style.setProperty('--grid-line-active', '240 6% 25%');
    } else {
      root.style.setProperty('--bg-primary', '0 0% 98%');
      root.style.setProperty('--bg-secondary', '0 0% 93%');
      root.style.setProperty('--text-primary', '0 0% 10%');
      root.style.setProperty('--text-secondary', '240 5% 40%');
      root.style.setProperty('--grid-line', '240 6% 85%');
      root.style.setProperty('--grid-line-active', '240 6% 75%');
    }
  }, [isDarkMode]);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  // Find current and next page
  const currentIndex = NAV_ITEMS.findIndex(item => item.path === location);
  const nextItem = NAV_ITEMS[(currentIndex + 1) % NAV_ITEMS.length];
  const prevItem = NAV_ITEMS[(currentIndex - 1 + NAV_ITEMS.length) % NAV_ITEMS.length];
  
  const isFirstPage = currentIndex === 0;
  const isLastPage = currentIndex === NAV_ITEMS.length - 1;

  const handleNext = () => {
    if (!isLastPage) {
      navigate(nextItem.path);
    }
  };

  const handlePrev = () => {
    if (!isFirstPage) {
      navigate(prevItem.path);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--bg-primary))] text-[hsl(var(--text-primary))]">
      {/* MODERN NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 bg-[hsl(var(--bg-primary))]/95 backdrop-blur-md border-b border-[hsl(var(--grid-line))]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* LEFT: Brand Identity */}
            <Link href="/">
              <motion.div 
                className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center relative overflow-hidden rounded">
                  <img 
                    src="/profile.jpeg" 
                    alt="Manya Parikh"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to "M" if image not found
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-primary))] to-[hsl(var(--accent-alert))]"></div><div class="absolute inset-0 bg-black/20 animate-pulse"></div><span class="font-display text-sm sm:text-lg font-bold text-white relative z-10">M</span>';
                    }}
                  />
                </div>
                <div className="hidden sm:block">
                  <h1 className="font-display text-base sm:text-lg font-bold uppercase tracking-tight leading-none">
                    Manya <span className="text-[hsl(var(--accent-primary))]">Parikh</span>
                  </h1>
                  <p className="text-[9px] sm:text-[10px] text-[hsl(var(--text-secondary))] font-mono tracking-widest">DATA.SCI.DEV</p>
                </div>
              </motion.div>
            </Link>

            {/* RIGHT: Controls */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Theme Toggle */}
              <motion.button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-2 bg-[hsl(var(--bg-secondary))] border border-[hsl(var(--grid-line))] rounded-full hover:border-[hsl(var(--accent-primary))] transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-[hsl(var(--accent-alert))] group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Moon className="w-4 h-4 text-[hsl(var(--accent-primary))] group-hover:-rotate-12 transition-transform duration-300" />
                )}
                <span className="hidden md:block font-mono text-xs uppercase tracking-wider text-[hsl(var(--text-secondary))] group-hover:text-[hsl(var(--text-primary))]">
                  {isDarkMode ? "DAY" : "NIGHT"}
                </span>
              </motion.button>

              {/* Navigation Arrows - Desktop */}
              <div className="hidden sm:flex items-center gap-1 bg-[hsl(var(--bg-secondary))] border border-[hsl(var(--grid-line))] rounded-full p-1">
                <motion.button
                  onClick={handlePrev}
                  disabled={isFirstPage}
                  className={clsx(
                    "p-2 rounded-full transition-colors",
                    isFirstPage 
                      ? "opacity-30 cursor-not-allowed" 
                      : "hover:bg-[hsl(var(--bg-primary))] cursor-pointer"
                  )}
                  whileHover={!isFirstPage ? { scale: 1.1 } : {}}
                  whileTap={!isFirstPage ? { scale: 0.9 } : {}}
                  title={isFirstPage ? "First page" : `Previous: ${prevItem.shortLabel}`}
                >
                  <ChevronLeft className="w-4 h-4 text-[hsl(var(--text-secondary))]" />
                </motion.button>
                <motion.button
                  onClick={handleNext}
                  disabled={isLastPage}
                  className={clsx(
                    "px-4 py-2 rounded-full transition-all flex items-center gap-2",
                    isLastPage
                      ? "bg-[hsl(var(--bg-secondary))] opacity-30 cursor-not-allowed"
                      : "bg-[hsl(var(--accent-primary))] hover:bg-[hsl(var(--accent-primary))]/90 shadow-lg shadow-[hsl(var(--accent-primary))]/30 cursor-pointer"
                  )}
                  whileHover={!isLastPage ? { scale: 1.05, x: 2 } : {}}
                  whileTap={!isLastPage ? { scale: 0.95 } : {}}
                  title={isLastPage ? "Last page" : `Next: ${nextItem.shortLabel}`}
                >
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">NEXT</span>
                  <ChevronRight className="w-4 h-4 text-white" />
                </motion.button>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 bg-[hsl(var(--bg-secondary))] border border-[hsl(var(--grid-line))] rounded-lg hover:border-[hsl(var(--accent-primary))] transition-colors"
                whileTap={{ scale: 0.9 }}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[hsl(var(--text-primary))]" />
                ) : (
                  <Menu className="w-5 h-5 text-[hsl(var(--text-primary))]" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden sticky top-16 sm:top-20 z-40 bg-[hsl(var(--bg-primary))]/98 backdrop-blur-xl border-b border-[hsl(var(--grid-line))] overflow-hidden"
          >
            {/* Mobile Menu Actions */}
            <div className="px-4 py-6 space-y-3">
              <motion.button
                onClick={() => {
                  setIsDarkMode(!isDarkMode);
                }}
                className="w-full flex items-center justify-between px-4 py-3 bg-[hsl(var(--bg-secondary))] border border-[hsl(var(--grid-line))] rounded-lg hover:border-[hsl(var(--accent-primary))] transition-all"
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-mono text-xs uppercase tracking-wider text-[hsl(var(--text-secondary))]">Theme Mode</span>
                <div className="flex items-center gap-2">
                  {isDarkMode ? (
                    <>
                      <Sun className="w-4 h-4 text-[hsl(var(--accent-alert))]" />
                      <span className="font-mono text-xs font-bold text-[hsl(var(--text-primary))]">DAY</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-[hsl(var(--accent-primary))]" />
                      <span className="font-mono text-xs font-bold text-[hsl(var(--text-primary))]">NIGHT</span>
                    </>
                  )}
                </div>
              </motion.button>

              {/* Mobile Navigation */}
              <div className="flex gap-2">
                <motion.button
                  onClick={() => { handlePrev(); setMobileMenuOpen(false); }}
                  disabled={isFirstPage}
                  className={clsx(
                    "flex-1 flex items-center justify-center gap-2 px-4 py-3 border rounded-lg transition-all",
                    isFirstPage
                      ? "bg-[hsl(var(--bg-secondary))] border-[hsl(var(--grid-line))] opacity-30 cursor-not-allowed"
                      : "bg-[hsl(var(--bg-secondary))] border-[hsl(var(--grid-line))] hover:border-[hsl(var(--text-primary))]/30 cursor-pointer"
                  )}
                  whileTap={!isFirstPage ? { scale: 0.95 } : {}}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase tracking-wider">PREV</span>
                </motion.button>
                <motion.button
                  onClick={() => { handleNext(); setMobileMenuOpen(false); }}
                  disabled={isLastPage}
                  className={clsx(
                    "flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all",
                    isLastPage
                      ? "bg-[hsl(var(--bg-secondary))] opacity-30 cursor-not-allowed"
                      : "bg-[hsl(var(--accent-primary))] hover:bg-[hsl(var(--accent-primary))]/90 shadow-lg shadow-[hsl(var(--accent-primary))]/30 cursor-pointer"
                  )}
                  whileTap={!isLastPage ? { scale: 0.95 } : {}}
                >
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">NEXT</span>
                  <ChevronRight className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT VIEWPORT */}
      <main className="flex-1 overflow-y-auto scroll-smooth relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-[hsl(var(--grid-line))] z-10">
          <motion.div 
            className="h-full bg-[hsl(var(--accent-primary))]" 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, ease: "circOut" }}
          />
        </div>

        <div className="min-h-full px-3 py-6 sm:px-6 sm:py-8 md:px-8 md:py-12 lg:px-16 lg:py-16 max-w-7xl mx-auto">
          {children}
        </div>

        {/* Mobile Bottom Navigation Bar */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-[hsl(var(--bg-primary))]/95 backdrop-blur-md border-t border-[hsl(var(--grid-line))] z-50">
          <div className="flex items-center justify-around p-3">
            <motion.button
              onClick={handlePrev}
              disabled={isFirstPage}
              className={clsx(
                "flex items-center gap-2 px-4 py-2 border rounded-full transition-all",
                isFirstPage
                  ? "bg-[hsl(var(--bg-secondary))] border-[hsl(var(--grid-line))] opacity-30 cursor-not-allowed"
                  : "bg-[hsl(var(--bg-secondary))] border-[hsl(var(--grid-line))] hover:border-[hsl(var(--text-primary))]/30 cursor-pointer"
              )}
              whileTap={!isFirstPage ? { scale: 0.9 } : {}}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="font-mono text-xs uppercase">Prev</span>
            </motion.button>

            <Link href="/">
              <motion.button
                className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--accent-primary))] to-[hsl(var(--accent-alert))] rounded-full flex items-center justify-center shadow-lg shadow-[hsl(var(--accent-primary))]/30"
                whileTap={{ scale: 0.9 }}
              >
                <Home className="w-5 h-5 text-white" />
              </motion.button>
            </Link>

            <motion.button
              onClick={handleNext}
              disabled={isLastPage}
              className={clsx(
                "flex items-center gap-2 px-4 py-2 rounded-full transition-all",
                isLastPage
                  ? "bg-[hsl(var(--bg-secondary))] opacity-30 cursor-not-allowed"
                  : "bg-[hsl(var(--accent-primary))] hover:bg-[hsl(var(--accent-primary))]/90 shadow-lg shadow-[hsl(var(--accent-primary))]/30 cursor-pointer"
              )}
              whileTap={!isLastPage ? { scale: 0.9 } : {}}
            >
              <span className="font-mono text-xs font-bold uppercase text-white">Next</span>
              <ChevronRight className="w-4 h-4 text-white" />
            </motion.button>
          </div>
        </div>
      </main>
    </div>
  );
}
