import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tools } from "@/data/content";

const categoryStyle: Record<string, { label: string; dot: string; border: string; hoverBorder: string; shadow: string }> = {
  "ITSM & Asset Management": { label: "text-teal-400",    dot: "bg-teal-400",    border: "border-teal-500/20",   hoverBorder: "hover:border-teal-500/50",   shadow: "hover:shadow-[0_0_16px_hsl(173,80%,40%,0.12)]"  },
  "Productivity & Data":      { label: "text-blue-400",   dot: "bg-blue-400",   border: "border-blue-400/20",   hoverBorder: "hover:border-blue-400/50",   shadow: "hover:shadow-[0_0_16px_hsl(210,70%,60%,0.10)]"  },
  "Logistics & Routing":      { label: "text-amber-400",  dot: "bg-amber-400",  border: "border-amber-400/20",  hoverBorder: "hover:border-amber-400/50",  shadow: "hover:shadow-[0_0_16px_hsl(38,92%,50%,0.10)]"   },
  "Development & AI":         { label: "text-violet-400", dot: "bg-violet-400", border: "border-violet-400/20", hoverBorder: "hover:border-violet-400/50", shadow: "hover:shadow-[0_0_16px_hsl(262,80%,65%,0.10)]"  },
  "E-commerce & Support":     { label: "text-emerald-400",dot: "bg-emerald-400",border: "border-emerald-400/20",hoverBorder: "hover:border-emerald-400/50",shadow: "hover:shadow-[0_0_16px_hsl(152,60%,50%,0.10)]"  },
};

const fallback = { label: "text-muted-foreground", dot: "bg-muted-foreground", border: "border-border", hoverBorder: "hover:border-border/80", shadow: "" };

const ALL = "All";
const categories = Array.from(new Set(tools.map((t) => t.category)));

export function Tools() {
  const [activeTab, setActiveTab] = useState<string>(ALL);

  const visibleCategories = activeTab === ALL ? categories : categories.filter((c) => c === activeTab);

  return (
    <section id="tools" className="py-16 md:py-32 bg-card/30 relative overflow-hidden">
      {/* Dot-grid depth */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools &amp; Software</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-400/30 rounded-full" />
          <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl">
            Platforms and applications I have worked with hands-on across my career.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10 flex flex-wrap gap-2"
        >
          {/* All tab */}
          <button
            data-active={activeTab === ALL}
            aria-pressed={activeTab === ALL}
            onClick={() => setActiveTab(ALL)}
            className="px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200
              border-border text-muted-foreground
              hover:border-teal-500/40 hover:text-teal-400
              data-[active=true]:bg-teal-500/15 data-[active=true]:border-teal-500/50 data-[active=true]:text-teal-400"
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              data-active={activeTab === cat}
              aria-pressed={activeTab === cat}
              onClick={() => setActiveTab(cat)}
              className="px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200
                border-border text-muted-foreground
                hover:border-teal-500/40 hover:text-teal-400
                data-[active=true]:bg-teal-500/15 data-[active=true]:border-teal-500/50 data-[active=true]:text-teal-400"
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="space-y-8 md:space-y-12"
          >
            {visibleCategories.map((category, catIndex) => {
              const style = categoryStyle[category] ?? fallback;
              const categoryTools = tools.filter((t) => t.category === category);

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIndex * 0.07 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${style.dot}`} />
                    <h3 className={`text-sm font-bold uppercase tracking-widest ${style.label}`}>
                      {category}
                    </h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-current to-transparent opacity-20" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                    {categoryTools.map((tool, toolIndex) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: catIndex * 0.07 + toolIndex * 0.04 }}
                        className={`flex flex-col gap-2 p-3 sm:p-4 rounded-xl border ${style.border} bg-card/60 transition-all duration-200 cursor-default ${style.hoverBorder} ${style.shadow}`}
                      >
                        <p className="text-sm font-semibold text-foreground leading-snug">
                          {tool.name}
                        </p>
                        <div className="flex items-center gap-1.5 mt-auto">
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${style.dot}`} />
                          <span className={`text-xs ${style.label} leading-none`}>
                            {tool.category}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
