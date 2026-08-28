import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContact } from "@/hooks/use-contact";
import { identity } from "@shared/profile";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const fieldClass =
  "w-full border-0 border-b border-border bg-transparent px-0 py-2.5 font-mono text-[14px] text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-0 transition-colors";

export function Contact() {
  const { mutate: sendMessage, isPending } = useContact();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = (data: ContactFormData) =>
    sendMessage(data, { onSuccess: () => reset() });

  return (
    <section id="contact" className="scroll-mt-16 border-t border-dashed border-border">
      <div className="shell py-24 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_minmax(0,400px)] lg:gap-20">
          <div>
            <div className="cmd mb-6">./contact --now</div>
            <h2 className="max-w-[24ch] text-[clamp(1.8rem,4.2vw,3.1rem)] font-bold leading-[1.1] tracking-[-0.02em]">
              Looking for a backend engineer who owns the system, not just the ticket.
            </h2>
            <p className="prose-serif mt-7 max-w-[54ch] text-[clamp(1rem,1.8vw,1.25rem)] leading-[1.6] text-muted-foreground">
              Open to senior backend and platform roles — remote, global,
              async-friendly. Available for a conversation this week.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-[13px]">
              <a
                href={`mailto:${identity.email}`}
                className="bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-shadow hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.6)]"
              >
                {identity.email}
              </a>
              <a
                href={identity.phoneHref}
                className="border border-border px-6 py-3.5 text-foreground/90 transition-colors hover:border-primary hover:text-primary"
              >
                {identity.phone}
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noreferrer"
                className="border border-border px-6 py-3.5 text-foreground/90 transition-colors hover:border-primary hover:text-primary"
              >
                linkedin
              </a>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-7 border border-border bg-card/60 p-6 sm:p-8"
          >
            <div className="mono-label lowercase">{"// or send a message"}</div>
            <div>
              <label htmlFor="c-name" className="font-mono text-[12px] text-muted-foreground">
                name:
              </label>
              <input id="c-name" {...register("name")} type="text" placeholder="jane_doe" className={fieldClass} />
              {errors.name && (
                <p className="mt-1.5 font-mono text-[12px] text-destructive">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="c-email" className="font-mono text-[12px] text-muted-foreground">
                email:
              </label>
              <input id="c-email" {...register("email")} type="email" placeholder="jane@company.com" className={fieldClass} />
              {errors.email && (
                <p className="mt-1.5 font-mono text-[12px] text-destructive">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="c-msg" className="font-mono text-[12px] text-muted-foreground">
                message:
              </label>
              <textarea
                id="c-msg"
                {...register("message")}
                rows={4}
                placeholder="what are you building?"
                className={`${fieldClass} resize-none`}
              />
              {errors.message && (
                <p className="mt-1.5 font-mono text-[12px] text-destructive">{errors.message.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-primary px-6 py-3 font-mono text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
            >
              {isPending ? "sending…" : "send_message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
