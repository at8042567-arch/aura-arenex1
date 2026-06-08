import { NeonButton } from "@/components/site/NeonButton";
import { ArrowUpRight, Globe } from "lucide-react";
import cyberShot from "@/assets/cybercreatix-screenshot.png.asset.json";
import argonShot from "@/assets/argoncore-screenshot.png.asset.json";
import sdsShot from "@/assets/sdsbuds-screenshot.png.asset.json";
import { Seo } from "@/components/site/Seo";

const projects = [
  {
    name: "CyberCreatix AI Hub",
    url: "https://cybercreatix.online",
    category: "Web Platform",
    description: "A modern AI tools discovery platform designed to help users explore and discover useful AI tools.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    image: cyberShot.url,
  },
  {
    name: "ArgonCore",
    url: "https://argoncore.online",
    category: "Web Application",
    description: "A modern web application with a clean user experience and responsive architecture.",
    tech: ["Next.js", "JavaScript"],
    image: argonShot.url,
  },
  {
    name: "SDS Buds",
    url: "https://sdsbuds.vercel.app",
    category: "Business Website",
    description: "A professional business website focused on branding, responsiveness, and user experience.",
    tech: ["React", "Tailwind CSS"],
    image: sdsShot.url,
  },
];

export default function Portfolio() {
  return (
    <>
      <Seo
        title="Portfolio | Arenex Techworks Web Development Projects"
        description="Explore featured websites and web applications built by Arenex Techworks, including CyberCreatix AI Hub, ArgonCore, and SDS Buds."
        path="/portfolio"
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Arenex Techworks Portfolio",
          hasPart: projects.map((p) => ({
            "@type": "CreativeWork",
            name: p.name,
            url: p.url,
            description: p.description,
            image: p.image,
          })),
        }}
      />
      <section className="container pt-12 lg:pt-20 pb-10 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-4">PORTFOLIO</div>
        <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-5">
          Featured Work<span className="text-primary">.</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          A selection of websites and web applications built by Arenex Techworks.
        </p>
        <div className="w-24 h-px bg-primary mx-auto mt-6" />
      </section>

      <section className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={p.name} className={`glass-card scroll-reveal stagger-${i + 1} overflow-hidden hover-glow flex flex-col group`}>
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60">
                <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <span className="absolute top-4 left-4 pill-tag !py-1 !px-3 text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {p.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" /> {p.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full border border-primary/40 text-primary/90 bg-primary/5">{t}</span>
                  ))}
                </div>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-auto">
                  <NeonButton variant="outline" className="w-full justify-center">Visit Website</NeonButton>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}