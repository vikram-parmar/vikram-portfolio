import { motion } from "framer-motion";
import { experience } from "@shared/profile";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 border-t border-dashed border-border bg-card/40">
      <div className="shell py-24 sm:py-28">
        <h2 className="cmd mb-14 !text-[clamp(1.05rem,2vw,1.4rem)] !text-foreground">
          cat experience.md
        </h2>

        <div>
          {experience.map((job, idx) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="grid gap-6 border-t border-dashed border-border py-10 md:grid-cols-[260px_1fr] md:gap-14"
            >
              <div>
                <h3 className="text-lg font-bold tracking-[-0.01em]">
                  <span className="text-muted-foreground">## </span>
                  {job.company}
                </h3>
                <div className="mt-2 font-mono text-[13px] text-muted-foreground">
                  {job.role}
                </div>
                <div className="mt-3 font-mono text-[12px] text-primary">{job.period}</div>
                <div className="mt-1 font-mono text-[12px] text-muted-foreground/70">
                  {job.location}
                </div>
              </div>

              <div className="grid gap-3.5">
                {job.highlights.map((point, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[18px_1fr] gap-3 text-[14px] leading-[1.65] text-muted-foreground"
                  >
                    <span className="pt-0.5 font-mono text-accent">&rarr;</span>
                    <span className="prose-serif">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
