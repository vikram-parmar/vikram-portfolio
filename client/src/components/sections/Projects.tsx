import { motion } from "framer-motion";
import { ExternalLink, Layers, Users } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Capability",
      type: "Training & Workforce Platform",
      description: "A robust platform serving 50k+ users. Architected scalable backend solutions to handle heavy concurrent usage and complex data relationships.",
      tech: ["Laravel", "PostgreSQL", "Redis", "Queues"],
      metric: "50k+ Users"
    },
    {
      title: "Letting a Property",
      type: "Property Management",
      description: "UK-Based platform streamlining property management, tenant onboarding, and automated document processing systems.",
      tech: ["PHP", "Laravel", "MySQL", "AWS"],
    },
    {
      title: "Seedlr",
      type: "Crypto Gifting Platform",
      description: "A South African platform enabling users to gift cryptocurrency. Handled secure transactions and third-party API integrations.",
      tech: ["Laravel", "Web3 APIs", "MySQL", "Queue Workers"],
    },
    {
      title: "One For All Social",
      type: "Social Media Management",
      description: "A comprehensive dashboard for managing multiple social media accounts, built with modern reactive backend tools.",
      tech: ["Laravel", "Filament", "Livewire", "PostgreSQL"],
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-24 relative z-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">Selected Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              <div className="relative z-10 h-full glass-panel p-8 rounded-2xl border-white/10 group-hover:border-primary/50 transition-colors flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  {project.metric && (
                    <span className="flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                      <Users className="w-3.5 h-3.5" />
                      {project.metric}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-primary/80 mb-3 sm:mb-4">{project.type}</p>
                <p className="text-muted-foreground text-sm sm:text-base mb-5 sm:mb-8 flex-grow min-w-0">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-foreground/80 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
