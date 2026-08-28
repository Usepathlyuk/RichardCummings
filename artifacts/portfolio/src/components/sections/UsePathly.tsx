import { motion } from "framer-motion";
import { usePathly } from "@/data/content";
import { ArrowRight, ExternalLink } from "lucide-react";

export function UsePathly() {
  return (
    <section id="usepathly" className="py-32 bg-card relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-8 border border-primary/20">
              Featured Project
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              {usePathly.name}
            </h2>
            <p className="text-xl text-primary font-medium mb-8">
              {usePathly.tagline}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {usePathly.description}
            </p>
            
            <a 
              href={usePathly.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-md font-bold transition-all hover:scale-105"
            >
              <span>Visit Platform</span>
              <ExternalLink size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm flex flex-col items-center justify-center text-center gap-4"
            >
              <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-2">
                Built entirely solo
              </p>
              <p className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
                Founded{" "}
                <span className="text-primary">·</span>{" "}
                Designed{" "}
                <span className="text-primary">·</span>{" "}
                Built{" "}
                <span className="text-primary">·</span>{" "}
                Launched{" "}
                <span className="text-muted-foreground">—</span>{" "}
                <span className="text-primary">Solo</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="p-6 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <ArrowRight size={20} className="text-primary mt-1 shrink-0" />
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Live platform with paying customers. Proof that Richard doesn't just manage technology — he builds it.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
