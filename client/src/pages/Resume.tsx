import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { skills, education } from "@shared/profile";

export default function Resume() {
  const experience = [
    {
      company: "Vivansh Infotech",
      role: "Software Developer (Backend)",
      location: "Ahmedabad, India",
      period: "Oct 2023 – Present",
      highlights: [
        "Designing and maintaining REST APIs using Laravel.",
        "Implementing Redis caching and queue-based processing.",
        "Monitoring background jobs using Laravel Horizon.",
        "Optimizing queries through indexing and schema improvements.",
        "Contributing to backend architecture decisions and system maintainability.",
        "Working in Docker-based environments with AWS-hosted deployments."
      ]
    },
    {
      company: "eSparkBiz",
      role: "Software Developer",
      location: "Ahmedabad, India",
      period: "Jan 2022 – Oct 2023",
      highlights: [
        "Developed backend systems using Laravel and MySQL.",
        "Integrated payment gateways including Stripe, Callpay, Clover, and VALR.",
        "Built secure financial transaction workflows.",
        "Maintained and optimized production REST APIs."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Resume</h1>
              <p className="text-muted-foreground text-lg">
                Senior Backend Developer based in Gujarat, India
              </p>
            </div>
            
            <a 
              href="/resume.pdf" 
              download="Vikram_Parmar_Software_Developer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover-elevate transition-all"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column: Contact & Skills */}
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Contact
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">vikramparmar385@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+91 6353688399</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Gujarat, India</span>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">Technical Skills</h2>
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map(skill => (
                          <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-muted-foreground">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">Education</h2>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="font-bold text-sm">{education.degree}</h3>
                  <p className="text-xs text-muted-foreground mb-1">{education.institution}</p>
                  <span className="text-[10px] text-primary font-mono">{education.year}</span>
                </div>
              </section>
            </div>

            {/* Right Column: Experience */}
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  Work Experience
                </h2>
                <div className="space-y-8">
                  {experience.map((job, index) => (
                    <div key={index} className="relative pl-6 border-l border-white/10">
                      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                      <div className="mb-2">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <h3 className="text-lg font-bold">{job.role}</h3>
                          <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                            {job.period}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                          <span className="font-semibold text-foreground">{job.company}</span>
                          <span>•</span>
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {job.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6">Summary</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Backend-focused developer with 4+ years of experience building and maintaining production applications using Laravel and PHP. Experience working on platforms serving 50k+ users. Strong in REST API design, database optimization, Redis-based queues, and maintaining reliable backend architecture across distributed systems.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
