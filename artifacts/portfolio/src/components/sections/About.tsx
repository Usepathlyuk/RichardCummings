import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { aboutStatement } from "@/data/content";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const dotGridY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const glowRightY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-card/30 border-y border-border relative overflow-hidden">
      {/* Subtle dot-grid depth — parallax */}
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

      {/* Teal glow accent top-left — parallax */}
      <motion.div
        style={{ y: glowY }}
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-teal-500/8 blur-[100px] pointer-events-none"
      />

      {/* Secondary glow accent bottom-right — counter-parallax */}
      <motion.div
        style={{ y: glowRightY }}
        className="absolute -right-24 bottom-0 w-[300px] h-[300px] rounded-full bg-teal-400/5 blur-[90px] pointer-events-none"
      />

      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-teal-500/60 to-transparent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">About</span>
            <div className="h-px w-8 bg-teal-500/30" />
          </div>

          <div className="relative pl-12 md:pl-14">
            {/* Teal-tinted quotation mark */}
            <div
              className="absolute left-0 md:-left-2 top-0 text-6xl md:text-9xl font-serif leading-none select-none pointer-events-none"
              style={{ color: "hsl(173, 80%, 40%, 0.45)" }}
            >
              &ldquo;
            </div>

            <p className="text-xl md:text-3xl lg:text-4xl font-medium leading-snug md:leading-tight text-foreground tracking-tight">
              {aboutStatement}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
