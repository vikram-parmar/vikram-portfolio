import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 overflow-x-hidden overflow-y-auto">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full min-w-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-16">
          {/* Left: intro content */}
          <div className="flex-1">
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
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-tight mb-4 sm:mb-6"
            >
              Hi, I'm <br className="hidden md:block" />
              <span className="gradient-text">Vikram Parmar.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-2xl mb-6 sm:mb-10"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Senior Backend Developer engineering robust, scalable systems and APIs that power modern web applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <a
                href="/resume"
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all duration-300 text-sm sm:text-base"
              >
                Resume
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl glass-panel font-semibold flex items-center gap-2 hover:border-primary/50 hover:text-primary transition-all duration-300 text-sm sm:text-base"
              >
                <Terminal className="w-5 h-5" />
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right: profile image – portrait frame (desktop) / above content (mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0 order-first md:order-none flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Soft glow behind frame */}
              <div className="absolute -inset-2 rounded-[1.75rem] bg-primary/10 blur-xl" />
              <img
                src="/profile.png"
                alt="Vikram Parmar"
                className="relative w-44 sm:w-56 md:w-72 lg:w-80 aspect-[3/4] rounded-2xl object-cover object-top border border-white/20 shadow-[0_0_30px_rgba(0,242,254,0.12),0_25px_50px_-12px_rgba(0,0,0,0.4)] max-w-[85vw]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>
    </section>
  );
}
