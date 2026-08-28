import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { careerTimeline, type CareerPhase } from "@/data/content";
import { ChevronDown } from "lucide-react";

const PHASE_CONFIG: Record<CareerPhase, {
  label: string;
  accentBar: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
}> = {
  it:        { label: "IT & Tech",    accentBar: "bg-teal-500",   badgeBg: "bg-teal-500/10",   badgeBorder: "border-teal-500/25",   badgeText: "text-teal-400"   },
  logistics: { label: "Logistics",    accentBar: "bg-orange-500", badgeBg: "bg-orange-500/10", badgeBorder: "border-orange-500/25", badgeText: "text-orange-400" },
  saas:      { label: "SaaS",         accentBar: "bg-purple-500", badgeBg: "bg-purple-500/10", badgeBorder: "border-purple-500/25", badgeText: "text-purple-400" },
  early:     { label: "Early Career", accentBar: "bg-slate-500",  badgeBg: "bg-slate-500/10",  badgeBorder: "border-slate-500/25",  badgeText: "text-slate-400"  },
};

const FILTER_TABS = ["All", "IT & Tech", "Logistics", "SaaS"] as const;
type FilterTab = typeof FILTER_TABS[number];

export function Timeline() {
  const [expandedKey, setExpandedKey] = useState<string | null>(
    `${careerTimeline[0].title}|${careerTimeline[0].date}`
  );
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const dotGridY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const glowRightY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const displayed =
    activeFilter === "All"
      ? careerTimeline
      : careerTimeline.filter(r => PHASE_CONFIG[r.phase].label === activeFilter);

  function handleFilterChange(tab: FilterTab) {
    setActiveFilter(tab);
    setExpandedKey(null);
  }

  return (
    <section ref={sectionRef} id="timeline" className="py-16 md:py-32 relative overflow-hidden">
      {/* Dot-grid — parallax */}
      <motion.div
        style={{ y: dotGridY }}
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </motion.div>

      {/* Teal glow left — parallax */}
      <motion.div
        style={{ y: glowY }}
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-teal-500/8 blur-[100px] pointer-events-none"
      />

      {/* Secondary glow right — counter-parallax */}
      <motion.div
        style={{ y: glowRightY }}
        className="absolute -right-24 bottom-0 w-[300px] h-[300px] rounded-full bg-teal-400/5 blur-[90px] pointer-events-none"
      />

      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Timeline</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-400/30 rounded-full" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {FILTER_TABS.map(tab => (
            <button
              key={tab}
              onClick={() => handleFilterChange(tab)}
              aria-pressed={activeFilter === tab}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                activeFilter === tab
                  ? "bg-teal-500/15 border-teal-500/50 text-teal-400"
                  : "border-border text-muted-foreground hover:border-teal-500/30 hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Timeline track */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-teal-500/60 via-teal-500/20 to-transparent hidden md:block" />

          <AnimatePresence mode="popLayout">
            <div className="space-y-4 md:pl-14">
              {displayed.map((role, filteredIndex) => {
                const key = `${role.title}|${role.date}`;
                const phase = role.phase;
                const ps = PHASE_CONFIG[phase];
                const isExpanded = expandedKey === key;

                return (
                  <motion.div
                    key={key}
                    layout
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16, transition: { duration: 0.15 } }}
                    transition={{ delay: filteredIndex * 0.05, duration: 0.3 }}
                    className="relative"
                  >
                    {/* Dot on connector line */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: filteredIndex * 0.05 + 0.15, type: "spring", stiffness: 300 }}
                      className="absolute -left-14 top-8 hidden md:flex items-center justify-center cursor-pointer"
                      onClick={() => setExpandedKey(isExpanded ? null : key)}
                    >
                      <div className={`w-3 h-3 rounded-full border-2 transition-all ${
                        isExpanded
                          ? "bg-teal-400 border-teal-400 shadow-[0_0_8px_2px_hsl(173,80%,40%,0.5)]"
                          : "bg-background border-teal-500/50 hover:border-teal-400"
                      }`} />
                    </motion.div>

                    {/* Card */}
                    <div
                      className={`border rounded-xl transition-all cursor-pointer overflow-hidden relative ${
                        isExpanded
                          ? "bg-card border-teal-500/40 shadow-[0_0_0_1px_hsl(173,80%,40%,0.12),0_4px_24px_hsl(173,80%,40%,0.08)]"
                          : "bg-background border-border hover:border-teal-500/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
                      }`}
                      onClick={() => setExpandedKey(isExpanded ? null : key)}
                    >
                      {/* Phase accent bar */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl ${ps.accentBar}`} />

                      {/* Card header */}
                      <div className="pl-5 pr-6 py-5 md:pl-7 md:pr-8 md:py-6 flex flex-col md:flex-row md:items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">{role.title}</h3>
                          <p className="text-teal-400 font-medium mt-0.5">{role.company}</p>
                          {/* Stat badges */}
                          <div className="flex flex-wrap gap-1.5 mt-2.5">
                            {role.stats.map(stat => (
                              <span
                                key={stat}
                                className={`text-xs px-2 py-0.5 rounded-full border ${ps.badgeBg} ${ps.badgeBorder} ${ps.badgeText}`}
                              >
                                {stat}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between md:flex-col md:items-end gap-2 shrink-0">
                          <span className="text-sm text-muted-foreground font-mono bg-muted/50 px-3 py-1 rounded-full whitespace-nowrap">
                            {role.date}
                          </span>
                          <ChevronDown
                            className={`text-muted-foreground transition-transform duration-300 ${
                              isExpanded ? "rotate-180 text-teal-400" : ""
                            }`}
                          />
                        </div>
                      </div>

                      {/* Expanded content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="pl-5 pr-6 pb-6 md:pl-7 md:pr-8 md:pb-8 border-t border-teal-500/20 pt-5 space-y-4">
                              {role.description.split("\n\n").map((para, i) => (
                                <motion.p
                                  key={i}
                                  initial={{ opacity: 0, y: 8 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.08, duration: 0.25 }}
                                  className="text-muted-foreground leading-relaxed"
                                >
                                  {para}
                                </motion.p>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
