import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContact } from "@/hooks/use-contact";

// Define a client-side schema matching the backend requirements
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const { mutate: sendMessage, isPending } = useContact();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    sendMessage(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 relative z-10 bg-background/50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="min-w-0"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">Let's Connect</h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-md">
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4 group min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-panel flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300 flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:vikramparmar385@gmail.com" className="text-sm sm:text-lg font-medium hover:text-primary transition-colors break-all">
                    vikramparmar385@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-panel flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300 flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+916353688399" className="text-sm sm:text-lg font-medium hover:text-primary transition-colors">
                    +91 6353688399
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-panel flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300 flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-sm sm:text-lg font-medium">Gujarat, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-5 sm:p-8 md:p-10 rounded-3xl min-w-0"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  {...register("name")}
                  id="name"
                  type="text"
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-destructive text-sm mt-1.5">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-destructive text-sm mt-1.5">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={4}
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-destructive text-sm mt-1.5">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group"
              >
                {isPending ? "Sending..." : "Send Message"}
                {!isPending && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
