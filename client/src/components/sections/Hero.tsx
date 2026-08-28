import { motion } from "framer-motion";
import { identity, summary } from "@shared/profile";

const fade = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section id="top" className="shell pb-20 pt-16 sm:pb-24 sm:pt-24">
      <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-center md:gap-16">
        <div className="min-w-0">
          <motion.div
            {...fade}
            transition={{ duration: 0.45 }}
            className="mb-8 flex items-center gap-2.5 font-mono text-[12px] tracking-[0.04em] text-accent"
          >
            <span className="relative flex h-[7px] w-[7px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-accent" />
            </span>
            {identity.availability}
          </motion.div>

          <motion.div
            {...fade}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-4 font-mono text-[13px] text-muted-foreground"
          >
            <span className="text-accent">vikram@portfolio</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-primary">~</span>
            <span className="text-muted-foreground">$ </span>
            whoami
          </motion.div>

          <motion.h1
            {...fade}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="cursor max-w-[16ch] text-[clamp(2.4rem,5.6vw,4.4rem)] font-bold leading-[1.05] tracking-[-0.02em] text-foreground"
          >
            Senior backend developer.
          </motion.h1>

          <motion.p
            {...fade}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="comment prose-serif mt-7 max-w-[58ch] text-[clamp(1rem,1.7vw,1.2rem)] leading-[1.6] text-muted-foreground"
          >
            {summary.lead}
          </motion.p>

          <motion.p
            {...fade}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="comment prose-serif mt-3 max-w-[56ch] text-[0.98rem] leading-[1.6] text-muted-foreground/80"
          >
            {summary.sub}
          </motion.p>

          <motion.div
            {...fade}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="mt-10 flex flex-wrap items-center gap-3 font-mono text-[13px]"
          >
            <a
              href="/#work"
              className="bg-primary px-6 py-3 font-medium text-primary-foreground transition-shadow hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.6)]"
            >
              see_selected_work
            </a>
            <a
              href="/resume"
              className="border border-border px-6 py-3 text-foreground/90 transition-colors hover:border-primary hover:text-primary"
            >
              cat resume.pdf
            </a>
            <span className="ml-1 text-muted-foreground">
              # {identity.location} · {identity.timezone}
            </span>
          </motion.div>
        </div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="group order-first mx-auto w-44 shrink-0 sm:w-52 md:order-none md:mx-0 md:w-60"
        >
          <div className="relative border border-border p-1.5 transition-colors duration-300 group-hover:border-primary/60">
            <span className="absolute -left-px -top-px h-3 w-3 border-l border-t border-primary transition-all duration-300 group-hover:h-4 group-hover:w-4" />
            <span className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-primary transition-all duration-300 group-hover:h-4 group-hover:w-4" />
            <div className="relative overflow-hidden">
              <img
                src="/profile.png"
                alt={identity.name}
                className="aspect-[3/4] w-full object-cover object-top grayscale contrast-[1.05] transition-[filter] duration-500 ease-out group-hover:grayscale-0 group-hover:contrast-100 motion-reduce:transition-none"
              />
              {/* CRT scanlines at rest — clear on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(0,0,0,0.5) 0 1px, transparent 1px 3px)",
                }}
              />
              <div className="pointer-events-none absolute inset-0 opacity-0 shadow-[inset_0_0_40px_-8px_hsl(var(--primary)/0.5)] transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </div>
          <figcaption className="mt-2.5 font-mono text-[11px] tracking-[0.04em] text-muted-foreground">
            <span className="text-accent"># </span>vikram_parmar.png
            <span className="text-muted-foreground/50 transition-colors duration-300 group-hover:text-accent">
              {" "}
              --render color
            </span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
