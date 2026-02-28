import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
