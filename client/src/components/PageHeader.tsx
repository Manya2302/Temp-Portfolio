import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  code: string;
  description: string;
}

export function PageHeader({ title, code, description }: PageHeaderProps) {
  return (
    <div className="mb-12 md:mb-20 border-b border-[hsl(var(--grid-line))] pb-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-xs-mono text-[hsl(var(--accent-primary))] mb-2 block">
              // SECTION_{code}
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight leading-none">
              {title}
            </h2>
          </motion.div>
        </div>
        
        <motion.div 
          className="md:max-w-xs md:text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="font-mono text-xs md:text-sm text-[hsl(var(--text-secondary))] leading-relaxed uppercase tracking-wide">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
