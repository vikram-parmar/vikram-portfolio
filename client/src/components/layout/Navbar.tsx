import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { identity } from "@shared/profile";

const navLinks = [
  { name: "work", href: "/#work" },
  { name: "experience", href: "/#experience" },
  { name: "stack", href: "/#stack" },
  { name: "resume", href: "/resume" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="shell flex items-center justify-between gap-6 py-3.5 font-mono text-[12.5px]">
        <a href="/#top" className="tracking-[0.02em] text-foreground">
          <span className="text-accent">~/</span>vikram_parmar
        </a>

        <nav className="hidden items-center gap-6 tracking-[0.03em] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`mailto:${identity.email}`}
            className="border border-primary/50 bg-primary/10 px-3 py-1.5 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            ./contact
          </a>
        </nav>

        <button
          className="relative z-50 p-2 text-foreground md:hidden"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 top-[49px] z-40 flex flex-col gap-1 bg-background/98 px-5 pt-6 font-mono backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-dashed border-border py-4 text-base tracking-[0.03em] text-foreground"
              >
                <span className="text-accent">$ </span>
                {link.name}
              </a>
            ))}
            <a
              href={`mailto:${identity.email}`}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 border border-primary/50 bg-primary/10 px-4 py-3 text-center text-primary"
            >
              ./contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
