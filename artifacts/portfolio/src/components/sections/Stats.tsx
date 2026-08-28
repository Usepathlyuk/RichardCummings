import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { keyStats } from "@/data/content";

function parseStatValue(value: string): { prefix: string; num: number; suffix: string; decimals: number } {
  const hasGbp = value.startsWith("£");
  const stripped = hasGbp ? value.slice(1) : value;
  const match = stripped.match(/^([\d,]+\.?\d*)(.*)$/);
  if (!match) return { prefix: hasGbp ? "£" : "", num: 0, suffix: stripped, decimals: 0 };
  const raw = match[1].replace(/,/g, "");
  const num = parseFloat(raw);
  const suffix = match[2] ?? "";
  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
  return { prefix: hasGbp ? "£" : "", num, suffix, decimals };
}

function formatNum(n: number, decimals: number): string {
  if (decimals > 0) return n.toFixed(decimals);
  const rounded = Math.round(n);
  if (rounded >= 1000) return rounded.toLocaleString("en-GB");
  return String(rounded);
}

function AnimatedCounter({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [displayed, setDisplayed] = useState("0");
  const { prefix, num, suffix, decimals } = parseStatValue(value);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const start = performance.now();
    let raf: number;

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(formatNum(num * eased, decimals));
      if (progress < 1) raf = requestAnimationFrame(step);
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, num, decimals]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay }}
      className="group flex flex-col items-center text-center p-6 md:p-8 rounded-xl bg-card border border-border/50 hover:border-teal-500/40 transition-all hover:shadow-[0_0_24px_hsl(173,80%,40%,0.08)] relative overflow-hidden"
    >
      {/* Subtle card glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/0 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl" />

      <div
        className="text-4xl md:text-5xl font-bold mb-2 tracking-tight tabular-nums relative"
        style={{
          color: "hsl(173, 80%, 45%)",
          textShadow: isInView ? "0 0 20px hsl(173, 80%, 40%, 0.5)" : "none",
          transition: "text-shadow 0.6s ease",
        }}
      >
        {prefix}{displayed}{suffix}
      </div>
      <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wide relative">
        {label}
      </div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section id="stats" className="py-16 md:py-32 border-y border-border relative overflow-hidden">
      {/* Subtle dot-grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Impact by the Numbers</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-400/30 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyStats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              value={stat.value}
              label={stat.label}
              delay={index * 0.07}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
