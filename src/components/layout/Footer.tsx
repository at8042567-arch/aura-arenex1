import { Logo } from "@/components/site/Logo";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="border-t border-border/40 mt-24">
    <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
      <Logo />
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Arenex Techworks. All rights reserved.</p>
      <div className="flex gap-5 text-xs text-muted-foreground">
        <Link to="/services" className="hover:text-primary">Services</Link>
        <Link to="/pricing" className="hover:text-primary">Pricing</Link>
        <Link to="/about" className="hover:text-primary">About</Link>
      </div>
    </div>
  </footer>
);
