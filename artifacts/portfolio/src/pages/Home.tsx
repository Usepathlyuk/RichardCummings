import { Nav } from "@/components/layout/Nav";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { UsePathly } from "@/components/sections/UsePathly";
import { Stats } from "@/components/sections/Stats";
import { Skills } from "@/components/sections/Skills";
import { Tools } from "@/components/sections/Tools";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-primary-foreground">
      <ScrollProgressBar />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Timeline />
        <UsePathly />
        <Skills />
        <Tools />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
