import heroLogo from "@/assets/hero-logo.png";
import { NeonButton } from "@/components/site/NeonButton";
import { Monitor, Code2, Pencil, Check } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Monitor, title: "Web Development",
    desc: "We build modern, fast and responsive websites that deliver exceptional performance and user experience.",
    items: ["Custom Websites", "Responsive Design", "Performance Optimized", "SEO Friendly"],
  },
  {
    icon: Code2, title: "SaaS Development",
    desc: "We create powerful SaaS tools and applications that solve real problems and scale with your business.",
    items: ["Custom SaaS Solutions", "Scalable Architecture", "Secure & Reliable", "API Integrations"],
  },
  {
    icon: Pencil, title: "UI/UX Design",
    desc: "We design clean, intuitive and modern interfaces that provide amazing user experiences.",
    items: ["User Research", "Wireframing & Prototyping", "UI/UX Design", "User Testing"],
  },
];

export default function Services() {
  return (
    <>
      <section className="container pt-12 lg:pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <span className="pill-tag mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> OUR SERVICES
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-5">
              We Build Digital<br />Solutions That Drive<br />Real Results<span className="text-primary">.</span>
            </h1>
            <p className="text-muted-foreground max-w-md mb-8">
              From modern websites to powerful SaaS tools, we help businesses grow with technology that actually works.
            </p>
            <Link to="/about"><NeonButton>Let's Work Together</NeonButton></Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial-glow blur-3xl" />
            <img src={heroLogo} alt="Arenex 3D logo" loading="lazy" width={1024} height={1024} className="relative w-full max-w-[520px] mx-auto float-slow" />
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-3">WHAT WE DO</div>
          <h2 className="text-4xl lg:text-5xl font-bold">Our Services</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="glass-card p-7 hover-glow">
              <span className="icon-circle mb-6"><s.icon className="w-6 h-6" /></span>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <div className="border-t border-border/60 pt-5 space-y-3">
                {s.items.map((i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground/85">{i}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
