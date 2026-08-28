import { motion } from "framer-motion";
import { stats } from "@shared/profile";

export function Stats() {
  return (
    <section className="shell pb-4">
      <div className="cmd mb-4">cat metrics.json</div>
      <div className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
            className="bg-background px-5 py-8 sm:py-10"
          >
            <div className="text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-none tracking-[-0.02em] text-primary">
              {stat.value}
            </div>
            <div className="mono-label mt-3 lowercase">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
