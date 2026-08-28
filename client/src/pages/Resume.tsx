import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { usePageMeta } from "@/hooks/use-page-meta";
import {
  identity,
  summary,
  skills,
  experience,
  education,
} from "@shared/profile";

export default function Resume() {
  usePageMeta({
    title: "Résumé — Vikram Parmar, Senior Backend Developer",
    description:
      "Résumé of Vikram Parmar, senior backend developer: 4.5+ years with Laravel/PHP, REST API design, multi-tenant architecture, Redis, queues and database optimization. Experience at Vivansh Infotech and eSparkBiz.",
    path: "/resume",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="shell py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col gap-6 border-b border-dashed border-border pb-10 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="cmd">cat resume.md</div>
            <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.2rem)] font-bold tracking-[-0.02em]">
              {identity.name}
            </h1>
            <p className="prose-serif mt-2 font-mono text-[13px] text-muted-foreground">
              {identity.title} · {identity.location}
            </p>
          </div>

          <a
            href="/resume.pdf"
            download="Vikram_Parmar_Backend_Developer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 bg-primary px-6 py-3 font-mono text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Download className="h-4 w-4" />
            download resume.pdf
          </a>
        </motion.div>

        <div className="grid gap-14 py-12 md:grid-cols-[240px_1fr] md:gap-16">
          <aside className="space-y-10">
            <section>
              <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-primary"># contact</div>
              <div className="mt-4 space-y-2 font-mono text-[13px] text-muted-foreground">
                <a href={`mailto:${identity.email}`} className="block break-all hover:text-foreground">
                  {identity.email}
                </a>
                <a href={identity.phoneHref} className="block hover:text-foreground">
                  {identity.phone}
                </a>
                <p>{identity.location} — open to remote</p>
                <a href={identity.linkedin} target="_blank" rel="noreferrer" className="block hover:text-foreground">
                  linkedin
                </a>
              </div>
            </section>

            <section>
              <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-primary"># skills</div>
              <div className="mt-4 space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="font-mono text-[11px] lowercase tracking-[0.03em] text-foreground/80">
                      {category.replace(/\s*[&/]\s*/g, "_").replace(/\s+/g, "_").toLowerCase()}
                    </h3>
                    <p className="prose-serif mt-1.5 text-[13px] leading-[1.6] text-muted-foreground">
                      {items.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-primary"># education</div>
              <p className="mt-4 font-mono text-[13px] text-foreground/90">{education.degree}</p>
              <p className="font-mono text-[12px] text-muted-foreground">{education.institution}</p>
              <p className="mt-1 font-mono text-[12px] text-primary">{education.year}</p>
            </section>
          </aside>

          <div className="space-y-12">
            <section>
              <div className="cmd !text-foreground">head -1 summary.md</div>
              <p className="prose-serif mt-4 text-[1.1rem] leading-[1.65] text-foreground/85">
                {summary.full}
              </p>
            </section>

            <section>
              <div className="cmd !text-foreground">cat experience.md</div>
              <div className="mt-5">
                {experience.map((job) => (
                  <div
                    key={job.company}
                    className="border-t border-dashed border-border py-8 first:border-t-0 first:pt-0"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-bold tracking-[-0.01em]">
                        <span className="text-muted-foreground">## </span>
                        {job.role}
                      </h3>
                      <span className="font-mono text-[12px] text-primary">{job.period}</span>
                    </div>
                    <div className="mt-1 font-mono text-[13px] text-muted-foreground">
                      {job.company} · {job.location}
                    </div>
                    <ul className="mt-4 space-y-2">
                      {job.highlights.map((point, i) => (
                        <li
                          key={i}
                          className="grid grid-cols-[16px_1fr] gap-2 text-[13.5px] leading-[1.6] text-muted-foreground"
                        >
                          <span className="font-mono text-accent">&rarr;</span>
                          <span className="prose-serif">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
