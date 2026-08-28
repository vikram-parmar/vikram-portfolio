import { motion } from "framer-motion";
import { skills, education, summary } from "@shared/profile";

const rows = Object.entries(skills);

export function Stack() {
  return (
    <section id="stack" className="shell scroll-mt-16 py-24 sm:py-28">
      <div className="grid gap-10 md:grid-cols-[260px_1fr] md:gap-14">
        <div>
          <h2 className="cmd !text-[clamp(1.05rem,2vw,1.4rem)] !text-foreground">
            cat stack.md
          </h2>
          <p className="prose-serif mt-5 text-[15px] leading-[1.6] text-muted-foreground">
            What I reach for, and what I've run in production.
          </p>
          <div className="mt-8 border border-dashed border-border p-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-primary">
              # education
            </div>
            <p className="mt-2 font-mono text-[13px] text-foreground/90">
              {education.degree} ({education.year})
            </p>
            <p className="font-mono text-[12px] text-muted-foreground">
              {education.institution}
            </p>
          </div>
        </div>

        <div>
          {rows.map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(idx * 0.04, 0.3) }}
              className={`grid grid-cols-1 gap-1.5 border-t border-dashed border-border py-5 sm:grid-cols-[180px_1fr] sm:gap-8 ${
                idx === rows.length - 1 ? "border-b border-dashed border-border" : ""
              }`}
            >
              <div className="pt-0.5 font-mono text-[12px] lowercase tracking-[0.03em] text-primary">
                {category.replace(/\s*[&/]\s*/g, "_").replace(/\s+/g, "_").toLowerCase()}
              </div>
              <div className="prose-serif text-[15px] leading-[1.7] text-foreground/85">
                {items.join(" · ")}
              </div>
            </motion.div>
          ))}

          <p className="prose-serif comment mt-10 max-w-[60ch] text-[15px] leading-[1.7] text-muted-foreground">
            {summary.full}
          </p>
        </div>
      </div>
    </section>
  );
}
