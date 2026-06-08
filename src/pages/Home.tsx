import heroLogoAsset from "@/assets/hero-logo-3d.png.asset.json";
import workLaptop from "@/assets/work-laptop.jpg.asset.json";
import workPerson from "@/assets/work-person.jpg.asset.json";
import workAbstract from "@/assets/work-abstract.jpg.asset.json";
import { NeonButton } from "@/components/site/NeonButton";
import { Box, Code2, Layers, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "@/components/site/Seo";

const Stat = ({ icon: Icon, value, label }: any) => (
  <div className="flex items-center gap-4">
    <span className="icon-circle !w-12 !h-12"><Icon className="w-5 h-5" /></span>
    <div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <Seo
        title="Arenex Techworks | Custom Website Development Company"
        description="Arenex Techworks builds high-performance custom websites, business sites, e-commerce stores, and web applications for modern brands."
        path="/"
      />
      {/* HERO */}
      <section className="container relative pt-12 lg:pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <span className="pill-tag mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
              WELCOME TO ARENEX<span className="text-primary">TECHWORKS</span>
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-4">
              Building High-Performance<br />Websites for Modern<br />Businesses<span className="text-primary">.</span>
            </h1>
            <p className="text-base text-muted-foreground max-w-md mb-9 leading-relaxed">
              We help startups, businesses, and brands create powerful digital experiences through custom web development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/portfolio"><NeonButton>View Our Work</NeonButton></Link>
              <Link to="/contact"><NeonButton variant="outline">Get Started</NeonButton></Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial-glow blur-3xl" />
            <img src={heroLogoAsset.url} alt="Arenex Techworks 3D logo on neon podium" width={1280} height={1024} className="relative w-full max-w-[640px] mx-auto float-slow" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container">
        <div className="glass-card scroll-reveal-scale px-8 py-7 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative overflow-hidden">
          <div className="absolute -inset-px bg-gradient-radial-glow opacity-40 blur-2xl pointer-events-none" />
          <Stat icon={Box} value="20+" label="Projects Completed" />
          <div className="hidden md:block w-px bg-border/60 absolute left-1/3 top-6 bottom-6" />
          <Stat icon={Code2} value="100%" label="Responsive Builds" />
          <div className="hidden md:block w-px bg-border/60 absolute left-2/3 top-6 bottom-6" />
          <Stat icon={Layers} value="5★" label="Client Satisfaction" />
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={workLaptop.url} alt="Developer laptop with code at night" loading="lazy" className="scroll-reveal stagger-1 rounded-2xl row-span-2 h-full w-full object-cover border border-border/50" />
            <img src={workPerson.url} alt="Silhouette of a developer at sunset" loading="lazy" className="scroll-reveal stagger-2 rounded-2xl object-cover h-full w-full border border-border/50" />
            <img src={workAbstract.url} alt="Abstract neon peak on dark background" loading="lazy" className="scroll-reveal stagger-3 rounded-2xl object-cover h-full w-full border border-border/50" />
          </div>
          <div className="scroll-reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-3">WHAT WE DO</div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-5">
              Custom web<br />development that<br />drives growth<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
              From business websites to powerful web applications and e-commerce stores, we build fast, scalable and conversion-focused experiences.
            </p>
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Explore Services <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
