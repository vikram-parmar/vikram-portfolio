import { Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/50 py-8 sm:py-12 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-display font-bold text-lg sm:text-xl truncate">Vikram Parmar</span>
        </div>
        
        <p className="text-muted-foreground text-xs sm:text-sm text-center order-last md:order-none">
          © {new Date().getFullYear()} Vikram Parmar. All rights reserved.
        </p>

        <div className="flex gap-3 sm:gap-4">
          <a href="https://www.linkedin.com/in/vikram-parmar-5458b316a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition-all duration-300">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="tel:+916353688399" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition-all duration-300" title="+91 6353688399">
            <Phone className="w-5 h-5" />
          </a>
          <a href="mailto:vikramparmar385@gmail.com" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition-all duration-300">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
