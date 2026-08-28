import { motion } from "framer-motion";
import { identity, featuredProjects, additionalProjects } from "@shared/profile";

export function Projects() {
  return (
    <section id="work" className="shell scroll-mt-16 pb-8 pt-24 sm:pt-28">
      <div className="mb-12 flex items-baseline justify-between gap-8">
        <h2 className="cmd !text-[clamp(1.05rem,2vw,1.4rem)] !text-foreground">
          ls selected-work/
        </h2>
        <span className="font-mono text-[12px] text-muted-foreground">
          {`${featuredProjects.length} dirs`}
        </span>
      </div>

      {featuredProjects.map((project, idx) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="grid gap-8 border-t border-dashed border-border py-12 md:grid-cols-[280px_1fr] md:gap-14"
        >
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.07em] text-primary">
              {project.kicker}
            </div>
            <h3 className="mt-4 text-xl font-bold tracking-[-0.01em]">
              <span className="text-accent">{String(idx + 1).padStart(2, "0")}/ </span>
              {project.title}
            </h3>
            <p className="mt-2 font-mono text-[13px] leading-snug text-muted-foreground">
              {project.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="prose-serif max-w-[62ch] text-[1.15rem] leading-[1.6] text-foreground/85">
              {project.summary}
            </p>

            <div className="mt-8 grid gap-3.5">
              {project.points.map((point, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[18px_1fr] gap-3 font-mono text-[13.5px] leading-[1.6] text-muted-foreground"
                >
                  <span className="pt-0.5 text-accent">&rarr;</span>
                  <span className="prose-serif">{point}</span>
                </div>
              ))}
            </div>

            {project.metrics.length > 0 && (
              <div className="mt-9 grid grid-cols-3 gap-px border border-border bg-border">
                {project.metrics.map((m) => (
                  <div key={m.label} className="bg-background px-4 py-5">
                    <div className="text-xl font-bold tracking-[-0.02em] text-primary">
                      {m.value}
                    </div>
                    <div className="mono-label mt-2 lowercase">{m.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.article>
      ))}

      <div className="mt-6 border-t border-dashed border-border pt-12">
        <div className="mb-10 flex items-baseline justify-between gap-8">
          <h3 className="cmd !text-[clamp(0.95rem,1.8vw,1.2rem)] !text-foreground">
            ls also-shipped/
          </h3>
          <span className="font-mono text-[12px] text-muted-foreground">
            parallel engagements
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {additionalProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex flex-col gap-3 border border-border p-5 transition-colors hover:border-primary/50 hover:bg-card/60"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h4 className="font-bold tracking-[-0.01em]">
                  <span className="text-accent">$ </span>
                  {project.title}
                </h4>
                <span className="font-mono text-[10.5px] text-primary">{project.tag}</span>
              </div>
              <p className="prose-serif text-[14px] leading-[1.55] text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-auto pt-2 font-mono text-[11px] text-muted-foreground/70">
                {project.stack}
              </div>
            </motion.div>
          ))}

          <div className="flex flex-col justify-center gap-2 border border-dashed border-border p-5">
            <p className="prose-serif text-[15px] leading-snug text-muted-foreground">
              Happy to walk through any of these in detail.
            </p>
            <a
              href={`mailto:${identity.email}`}
              className="w-fit font-mono text-[12.5px] text-primary link-underline"
            >
              ask_me &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
