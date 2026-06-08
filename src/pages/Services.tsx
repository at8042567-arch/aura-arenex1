import heroLogoAsset from "@/assets/hero-logo-3d.png.asset.json";
import { NeonButton } from "@/components/site/NeonButton";
import { Monitor, Briefcase, ShoppingCart, LayoutDashboard, Wrench, Sparkles, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "@/components/site/Seo";

const services = [
  {
    icon: Monitor, title: "Custom Website Development",
    desc: "Tailor-made websites engineered for speed, scalability, and a premium brand experience across every device.",
    items: ["Fully Custom Design", "Responsive & Mobile First", "Performance Optimized", "SEO Ready"],
  },
  {
    icon: Briefcase, title: "Business Websites",
    desc: "Professional websites built to establish credibility, generate leads, and grow your business online.",
    items: ["Lead Generation Focused", "Modern UI", "CMS Integration", "Analytics Ready"],
  },
  {
    icon: ShoppingCart, title: "E-Commerce Websites",
    desc: "Conversion-driven online stores with smooth checkout flows, scalable catalogs, and secure payments.",
    items: ["Custom Storefronts", "Payment Integrations", "Inventory Management", "Mobile Optimized"],
  },
  {
    icon: LayoutDashboard, title: "Web Applications",
    desc: "Scalable, modern web applications built with clean architecture and powerful functionality.",
    items: ["Custom Dashboards", "Authentication & Roles", "API Integrations", "Scalable Architecture"],
  },
  {
    icon: Wrench, title: "Website Maintenance & Support",
    desc: "Ongoing maintenance, updates, and performance care to keep your website fast, secure, and reliable.",
    items: ["Security Updates", "Performance Monitoring", "Bug Fixes", "Priority Support"],
  },
  {
    icon: Sparkles, title: "AI Integration",
    desc: "Optional add-on to enhance your website with smart AI features like chat, search, and automation.",
    items: ["AI Chat Assistants", "Smart Search", "Content Automation", "Custom AI Workflows"],
  },
];

export default function Services() {
  return (
    <>
      <Seo
        title="Web Development Services | Arenex Techworks"
        description="Custom website development, business websites, e-commerce, web apps, maintenance, and AI integration by Arenex Techworks."
        path="/services"
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Arenex Techworks Services",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: { "@type": "Service", name: s.title, description: s.desc, provider: { "@type": "Organization", name: "Arenex Techworks" } },
          })),
        }}
      />
      <section className="container pt-12 lg:pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <span className="pill-tag mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> OUR SERVICES
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-5">
              Modern Web<br />Development That<br />Drives Growth<span className="text-primary">.</span>
            </h1>
            <p className="text-muted-foreground max-w-md mb-8">
              From business websites to advanced web applications, we build fast, scalable, and conversion-focused digital experiences.
            </p>
            <Link to="/contact"><NeonButton>Let's Work Together</NeonButton></Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial-glow blur-3xl" />
            <img src={heroLogoAsset.url} alt="Arenex Techworks 3D logo" loading="lazy" width={1280} height={1024} className="relative w-full max-w-[600px] mx-auto float-slow" />
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-3">WHAT WE DO</div>
          <h2 className="text-4xl lg:text-5xl font-bold">Our Services</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className={`glass-card scroll-reveal stagger-${(i % 6) + 1} p-7 hover-glow`}>
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
