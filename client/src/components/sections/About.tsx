import { motion } from "framer-motion";
import { Database, Server, Terminal, Zap, Activity, CloudCog, GitBranch, type LucideIcon } from "lucide-react";
import { skills as profileSkills, education } from "@shared/profile";

const categoryIcons: Record<string, LucideIcon> = {
  "Languages": Terminal,
  "Backend": Server,
  "Databases": Database,
  "Caching & Queues": Zap,
  "Performance": Activity,
  "DevOps": CloudCog,
  "Version Control": GitBranch,
};

export function About() {
  const skillsWithIcons = Object.entries(profileSkills).map(([category, items]) => ({
    category,
    items,
    icon: categoryIcons[category] ?? Terminal,
  }));

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 relative z-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I am a backend-focused developer with over 4 years of experience building and maintaining production applications. I enjoy solving real-world production problems and improving systems step by step.
            </p>
            <p>
              Based in Gujarat, India, I specialize in the Laravel ecosystem. My experience ranges from crafting complex REST API designs to optimizing database queries and maintaining reliable architecture across distributed systems serving 50k+ active users.
            </p>
            <div className="glass-panel p-4 sm:p-6 rounded-2xl border-l-4 border-l-primary mt-6 sm:mt-8">
              <h4 className="text-foreground font-bold mb-2">Education</h4>
              <p className="text-sm">{education.degree} ({education.year})</p>
              <p className="text-sm opacity-80">{education.institution}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
          >
            {skillsWithIcons.map((skill, idx) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-4 sm:p-6 rounded-2xl hover:border-primary/50 transition-colors group min-w-0"
              >
                <skill.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-foreground font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{skill.category}</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs rounded-md bg-white/5 border border-white/10 text-muted-foreground break-words"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
