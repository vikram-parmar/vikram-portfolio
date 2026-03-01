import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Vivansh Infotech",
      role: "Software Developer (Backend)",
      period: "Oct 2023 - Present",
      location: "Ahmedabad, India",
      description: "Driving backend development, optimizing database operations, and architecting scalable solutions for high-traffic platforms.",
    },
    {
      company: "eSparkBiz",
      role: "Software Developer",
      period: "Jan 2022 - Oct 2023",
      location: "Ahmedabad, India",
      description: "Developed and maintained multiple production applications using Laravel and PHP, focusing on API integrations and core business logic.",
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-24 relative z-10 bg-background/50 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-3 sm:ml-4 md:ml-0 md:pl-0 md:border-none space-y-8 sm:space-y-12">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`relative flex flex-col md:flex-row items-stretch md:items-center gap-6 sm:gap-8 ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-33px] sm:left-[-41px] md:left-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-background border-2 border-primary rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,242,254,0.3)]">
                <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              </div>

              {/* Empty space for grid balancing */}
              <div className="hidden md:block w-1/2"></div>

              {/* Content Card */}
              <div className="w-full min-w-0 md:w-1/2 glass-panel p-5 sm:p-8 rounded-2xl hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(0,242,254,0.1)] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-start sm:items-center gap-2 mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">{exp.role}</h3>
                  <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full mt-2 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <div className="text-muted-foreground font-medium mb-4 flex items-center gap-2">
                  <span>{exp.company}</span>
                  <span className="w-1 h-1 rounded-full bg-white/30"></span>
                  <span className="text-sm">{exp.location}</span>
                </div>
                <p className="text-muted-foreground/80 leading-relaxed text-sm sm:text-base">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
