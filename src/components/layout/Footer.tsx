import { Logo } from "@/components/site/Logo";
import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Twitter } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border/40 mt-24">
    <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <Logo />
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Arenex Techworks. All rights reserved.</p>
      <div className="flex items-center gap-5">
        <div className="flex gap-5 text-xs text-muted-foreground">
          <Link to="/services" className="hover:text-primary">Services</Link>
          <Link to="/portfolio" className="hover:text-primary">Portfolio</Link>
          <Link to="/pricing" className="hover:text-primary">Pricing</Link>
          <Link to="/about" className="hover:text-primary">About</Link>
        </div>
        <div className="flex gap-3 text-muted-foreground">
          <a href="https://instagram.com/arenextechworks" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram className="w-4 h-4" /></a>
          <a href="https://x.com/arenextechworks" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-primary transition-colors"><Twitter className="w-4 h-4" /></a>
          <a href="https://wa.me/923434247850" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-primary transition-colors"><MessageCircle className="w-4 h-4" /></a>
        </div>
      </div>
    </div>
  </footer>
);
