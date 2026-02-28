import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel mb-8 border-primary/30"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-sm font-medium text-primary">Available for new opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-tight mb-6"
        >
          Hi, I'm <br className="hidden md:block" />
          <span className="gradient-text">Vikram Parmar.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mb-10"
        >
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Senior Backend Developer engineering robust, scalable systems and APIs that power modern web applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all duration-300"
          >
            View Projects
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl glass-panel font-semibold flex items-center gap-2 hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            <Terminal className="w-5 h-5" />
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>
    </section>
  );
}
