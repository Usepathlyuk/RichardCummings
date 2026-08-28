import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/data/content";
import { Mail, ExternalLink, MapPin, Linkedin } from "lucide-react";
const profileImg = "/profile.jpg";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const dotGridY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Existing hero-bg */}
      <div
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />

      {/* Dot-grid pattern overlay — parallax */}
      <motion.div
        style={{ y: dotGridY }}
        className="absolute inset-0 z-0 opacity-[0.07]"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </motion.div>

      {/* Teal radial glow — parallax */}
      <motion.div
        style={{ y: glowY, opacity: glowOpacity }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-[120px] z-0 pointer-events-none"
      />

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-16"
        >
          {/* ── Left column: text content ─────────────────────────── */}
          <div className="flex-1 flex flex-col items-start w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-5 md:mb-6 border border-primary/20"
            >
              <MapPin size={14} />
              <span>{personalInfo.location}</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-3 md:mb-4">
              {personalInfo.name}
            </h1>

            <h2 className="text-base sm:text-lg md:text-2xl text-muted-foreground font-medium mb-4 md:mb-6">
              {personalInfo.headline}
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground/80 max-w-xl mb-6 md:mb-10 leading-relaxed">
              {personalInfo.subHeadline}
            </p>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 md:gap-4 mb-6 md:mb-10 w-full sm:w-auto">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center space-x-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 sm:px-6 py-2.5 sm:py-3 rounded-md font-medium transition-colors text-sm sm:text-base"
              >
                <Mail size={16} className="sm:hidden" />
                <Mail size={18} className="hidden sm:block" />
                <span>Email</span>
              </a>
              <a
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 sm:px-6 py-2.5 sm:py-3 rounded-md font-medium transition-colors border border-border text-sm sm:text-base"
              >
                <Linkedin size={16} className="sm:hidden" />
                <Linkedin size={18} className="hidden sm:block" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 col-span-2 sm:col-span-1 bg-transparent text-foreground hover:text-primary px-4 sm:px-6 py-2.5 sm:py-3 rounded-md font-medium transition-colors text-sm sm:text-base"
              >
                <span>{personalInfo.websiteDisplay}</span>
                <ExternalLink size={16} className="sm:hidden" />
                <ExternalLink size={18} className="hidden sm:block" />
              </a>
            </div>

            <div className="p-4 sm:p-6 md:p-8 bg-card/50 backdrop-blur-sm border border-border rounded-xl w-full">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
                {personalInfo.summary}
              </p>
            </div>
          </div>

          {/* ── Right column: profile photo ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 flex items-center justify-center order-first md:order-last"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/40 to-teal-600/20 blur-2xl scale-110 pointer-events-none" />
              {/* Gradient ring border */}
              <div className="relative p-[3px] rounded-full bg-gradient-to-br from-teal-400 via-teal-500/60 to-transparent">
                <div className="p-[3px] rounded-full bg-background">
                  <img
                    src={profileImg}
                    alt="Richard Cummings"
                    className="w-32 h-32 sm:w-44 sm:h-44 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover object-top grayscale"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
