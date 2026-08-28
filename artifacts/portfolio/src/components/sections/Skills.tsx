import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/content";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const technicalRadarData = [
  { subject: "ITAM / CMDB", score: 95 },
  { subject: "HW Provisioning", score: 90 },
  { subject: "Automation", score: 85 },
  { subject: "SaaS Dev", score: 80 },
  { subject: "AI Integration", score: 75 },
  { subject: "E-comm & Web", score: 70 },
  { subject: "ServiceNow", score: 92 },
];

const professionalRadarData = [
  { subject: "Operations", score: 95 },
  { subject: "Service Delivery", score: 95 },
  { subject: "Process Optim.", score: 95 },
  { subject: "Leadership", score: 90 },
  { subject: "Customer Success", score: 90 },
  { subject: "Acct Management", score: 85 },
  { subject: "Strategy", score: 85 },
];

const TEAL = "hsl(173, 80%, 40%)";
const TEAL_FILL = "hsl(173, 80%, 40%, 0.18)";
const MUTED = "hsl(215, 20%, 60%)";

function SkillRadar({ data, color, fill }: { data: typeof technicalRadarData; color: string; fill: string }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={data} margin={{ top: 20, right: 55, bottom: 20, left: 55 }} outerRadius="65%">
        <PolarGrid stroke="hsl(215, 20%, 25%)" />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: MUTED, fontSize: 11, fontWeight: 500 }}
        />
        <Radar
          name="Proficiency"
          dataKey="score"
          stroke={color}
          fill={fill}
          fillOpacity={1}
          strokeWidth={2}
        />
        <Tooltip
          contentStyle={{
            background: "hsl(215, 30%, 12%)",
            border: "1px solid hsl(215, 20%, 25%)",
            borderRadius: "8px",
            color: "hsl(210, 40%, 92%)",
            fontSize: "13px",
          }}
          formatter={(val: number) => [`${val}%`, "Proficiency"]}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

function SkillBars({
  data,
  accentColor,
  trackColor,
}: {
  data: typeof technicalRadarData;
  accentColor: string;
  trackColor: string;
}) {
  return (
    <div className="flex flex-col gap-3 py-2">
      {data.map((item, i) => (
        <motion.div
          key={item.subject}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
        >
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-medium" style={{ color: MUTED }}>
              {item.subject}
            </span>
            <span className="text-xs font-semibold" style={{ color: accentColor }}>
              {item.score}%
            </span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: trackColor }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: accentColor }}
              initial={{ width: 0 }}
              whileInView={{ width: `${item.score}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const dotGridY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const glowLeftY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const glowRightY = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <section ref={sectionRef} id="skills" className="py-16 md:py-32 relative overflow-hidden">
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

      {/* Teal glow — top-left — parallax */}
      <motion.div
        style={{ y: glowLeftY }}
        className="absolute -left-40 top-1/4 w-[350px] h-[350px] rounded-full bg-teal-500/7 blur-[110px] pointer-events-none"
      />

      {/* Blue glow — bottom-right — counter-parallax */}
      <motion.div
        style={{ y: glowRightY }}
        className="absolute -right-32 bottom-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/6 blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Competencies</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-400/30 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Technical Arsenal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card/60 border border-border rounded-2xl p-6 md:p-8 hover:border-teal-500/30 transition-all hover:shadow-[0_0_32px_hsl(173,80%,40%,0.06)]"
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <span className="w-8 h-px bg-teal-500 inline-block" />
              Technical Arsenal
            </h3>
            {/* Mobile: progress bars */}
            <div className="mb-8 md:hidden">
              <SkillBars
                data={technicalRadarData}
                accentColor={TEAL}
                trackColor="hsl(173, 80%, 40%, 0.12)"
              />
            </div>
            {/* Desktop: radar chart */}
            <div className="mb-8 hidden md:block">
              <SkillRadar data={technicalRadarData} color={TEAL} fill={TEAL_FILL} />
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.technical.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="px-3 py-1.5 bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded-md text-xs font-medium hover:bg-teal-500 hover:text-background transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Professional Leadership */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card/60 border border-border rounded-2xl p-6 md:p-8 hover:border-border/80 transition-all hover:shadow-[0_4px_32px_hsl(215,20%,10%,0.3)]"
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <span className="w-8 h-px bg-blue-400 inline-block" />
              Professional Leadership
            </h3>
            {/* Mobile: progress bars */}
            <div className="mb-8 md:hidden">
              <SkillBars
                data={professionalRadarData}
                accentColor="hsl(210, 70%, 60%)"
                trackColor="hsl(210, 70%, 60%, 0.12)"
              />
            </div>
            {/* Desktop: radar chart */}
            <div className="mb-8 hidden md:block">
              <SkillRadar
                data={professionalRadarData}
                color="hsl(210, 70%, 60%)"
                fill="hsl(210, 70%, 60%, 0.18)"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.professional.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground border border-border rounded-md text-xs font-medium hover:border-blue-400/50 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
