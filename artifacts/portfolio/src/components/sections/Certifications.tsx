import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { educationAndCerts } from "@/data/content";
import { Award, GraduationCap } from "lucide-react";

export function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const dotGridY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const glowRightY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={sectionRef} id="certifications" className="py-16 md:py-32 bg-background relative overflow-hidden">
      {/* Dot-grid depth — parallax */}
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

      {/* Teal glow accent left — parallax */}
      <motion.div
        style={{ y: glowY }}
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-teal-500/8 blur-[100px] pointer-events-none"
      />

      {/* Secondary glow accent right — counter-parallax */}
      <motion.div
        style={{ y: glowRightY }}
        className="absolute -right-24 bottom-0 w-[300px] h-[300px] rounded-full bg-blue-400/5 blur-[90px] pointer-events-none"
      />

      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Certifications column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-teal-500/10 text-teal-400 rounded-lg border border-teal-500/20">
                <Award size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-teal-400/30 rounded-full mb-8" />

            <div className="space-y-3">
              {educationAndCerts.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="p-5 bg-card/60 border border-teal-500/20 rounded-xl flex items-start gap-4 hover:border-teal-500/50 hover:shadow-[0_0_16px_hsl(173,80%,40%,0.08)] transition-all duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                  <p className="font-medium text-foreground leading-relaxed text-sm">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-blue-400/10 text-blue-400 rounded-lg border border-blue-400/20">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-blue-400/20 rounded-full mb-8" />

            <div className="space-y-3">
              {educationAndCerts.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.06 }}
                  className="p-5 bg-card/60 border border-blue-400/20 rounded-xl flex items-start gap-4 hover:border-blue-400/50 hover:shadow-[0_0_16px_hsl(210,70%,60%,0.08)] transition-all duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <p className="font-medium text-foreground leading-relaxed text-sm">{edu}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
