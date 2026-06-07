import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/site/Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <header className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-500 ${scrolled ? "bg-background/80 border-b border-border/60 shadow-[0_4px_30px_hsl(0_0%_0%/0.4)]" : "bg-background/40 border-b border-transparent"}`}>
      <div className={`container flex items-center justify-between transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
        <Logo />
        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-all duration-300 hover:text-primary hover:-translate-y-0.5 ${
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
          className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium border border-border bg-background/50 hover:border-primary hover:text-primary hover:-translate-y-0.5 hover:shadow-[0_8px_24px_hsl(55_100%_60%/0.25)] transition-all duration-300"
        >
          Get Started <ArrowUpRight className="w-4 h-4" />
        </Link>
        <button
          className="lg:hidden text-foreground relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 transition-all duration-300"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          <Menu className={`absolute transition-all duration-300 ${open ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`} />
          <X className={`absolute transition-all duration-300 ${open ? "opacity-100 rotate-0 scale-100 text-primary" : "opacity-0 -rotate-90 scale-75"}`} />
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl menu-panel overflow-hidden">
          <nav className="container flex flex-col py-4 gap-1">
            {links.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${0.05 + i * 0.06}s` }}
                className={({ isActive }) =>
                  `menu-item py-3 px-2 text-base font-medium rounded-lg transition-all duration-300 hover:text-primary hover:translate-x-1 hover:bg-primary/5 ${isActive ? "text-primary" : "text-foreground/80"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${0.05 + links.length * 0.06}s` }}
              className="menu-item mt-3 inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full text-sm font-semibold bg-gradient-primary text-primary-foreground shadow-[0_8px_30px_hsl(55_100%_60%/0.35)]"
            >
              Get Started <ArrowUpRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
