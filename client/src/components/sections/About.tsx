import { motion } from "framer-motion";
import { Database, Server, Terminal, Settings } from "lucide-react";

export function About() {
  const skills = [
    { category: "Languages", items: ["PHP", "JavaScript"], icon: Terminal },
    { category: "Backend", items: ["Laravel", "Filament", "Livewire"], icon: Server },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"], icon: Database },
    { category: "Performance & Ops", items: ["Redis", "Docker", "AWS", "Octane"], icon: Settings },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I am a backend-focused developer with over 4 years of experience building and maintaining production applications. I enjoy solving real-world production problems and improving systems step by step.
            </p>
            <p>
              Based in Gujarat, India, I specialize in the Laravel ecosystem. My experience ranges from crafting complex REST API designs to optimizing database queries and maintaining reliable architecture across distributed systems serving 50k+ active users.
            </p>
            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-primary mt-8">
              <h4 className="text-foreground font-bold mb-2">Education</h4>
              <p className="text-sm">Bachelor of Engineering (2022)</p>
              <p className="text-sm opacity-80">Gujarat Technological University</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl hover:border-primary/50 transition-colors group"
              >
                <skill.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-foreground font-semibold mb-3">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-muted-foreground"
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
