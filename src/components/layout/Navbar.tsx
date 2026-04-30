import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/site/Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/saas-tools", label: "SaaS Tools" },
  { to: "/digital-products", label: "Digital Products" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <div className="container flex items-center justify-between py-5">
        <Logo />
        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-foreground/80"
                } ${isActive ? "after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-primary after:shadow-[0_0_8px_hsl(var(--primary))]" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/about"
          className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium border border-border bg-background/50 hover:border-primary hover:text-primary transition-all"
        >
          Get Started <ArrowUpRight className="w-4 h-4" />
        </Link>
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <nav className="container flex flex-col py-4 gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `py-3 text-sm font-medium ${isActive ? "text-primary" : "text-foreground/80"}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
