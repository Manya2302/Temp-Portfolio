import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAVIGATION_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-white/5 py-4 shadow-lg"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer group"
        >
          <span className="text-2xl font-bold tracking-tighter font-display">
            DEV<span className="text-primary group-hover:text-accent transition-colors">.ELOPER</span>
          </span>
        </ScrollLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.href}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass="text-primary font-bold bg-white/5 rounded-lg"
              className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-all px-4 py-2 hover:bg-white/5 rounded-lg"
            >
              {link.name}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:shadow-[0_0_20px_-5px_hsl(250,100%,70%)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            Hire Me
          </ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAVIGATION_LINKS.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.href}
                  smooth={true}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
