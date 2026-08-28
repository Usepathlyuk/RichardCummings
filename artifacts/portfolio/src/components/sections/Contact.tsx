import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/data/content";
import { Mail, ExternalLink, Linkedin } from "lucide-react";

const profileImg = "/profile.jpg";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const dotGridY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const glowTopY = useTransform(scrollYProgress, [0, 1], ["-10%", "15%"]);

  return (
    <section ref={sectionRef} id="contact" className="py-16 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-teal-500/5 to-transparent" />

      {/* Subtle dot-grid — parallax */}
      <motion.div
        style={{ y: dotGridY }}
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-0"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </motion.div>

      {/* Secondary teal glow — top — parallax */}
      <motion.div
        style={{ y: glowTopY }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-teal-500/5 blur-[90px] pointer-events-none z-0"
      />

      {/* Teal radial glow — parallax */}
      <motion.div
        style={{ y: glowY }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-teal-500/8 blur-[100px] pointer-events-none z-0"
      />

      <div className="container mx-auto px-6 md:px-12 max-w-3xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Profile photo — circular, small */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/40 to-teal-600/20 blur-xl scale-110 pointer-events-none" />
              <div className="relative p-[2px] rounded-full bg-gradient-to-br from-teal-400 via-teal-500/60 to-transparent">
                <div className="p-[2px] rounded-full bg-background">
                  <img
                    src={profileImg}
                    alt="Richard Cummings"
                    className="w-20 h-20 rounded-full object-cover object-top grayscale"
                  />
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">Ready to build something exceptional?</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto">
            Currently open to new opportunities in IT Asset Management leadership, IT Service Management, Service Delivery, product management, and SaaS strategy. Particularly interested in organisations within logistics, supply chain, or managed services — where operational depth meets technology. Based in {personalInfo.location}.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-teal-500 text-background hover:bg-teal-400 px-8 py-4 rounded-md font-bold transition-all hover:scale-105 hover:shadow-[0_0_24px_hsl(173,80%,40%,0.4)]"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            <a
              href={personalInfo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border px-8 py-4 rounded-md font-bold transition-all hover:scale-105"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-transparent text-foreground hover:text-teal-400 px-8 py-4 rounded-md font-bold transition-colors border border-transparent hover:border-teal-500/20"
            >
              <span>Visit UsePathly</span>
              <ExternalLink size={20} />
            </a>
          </div>

          <div className="mt-24 text-sm text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} Richard Cummings. All rights reserved.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
