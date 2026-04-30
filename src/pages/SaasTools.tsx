import saasIcon from "@/assets/saas-icon.jpg";
import { NeonButton } from "@/components/site/NeonButton";
import { Download, Zap, Globe, Shield, Code2, Lock } from "lucide-react";

const features = [
  { icon: Zap, title: "Fast & Efficient", desc: "Download videos in high speed with no limits." },
  { icon: Globe, title: "50+ Platforms", desc: "Supports YouTube, Facebook, Instagram, Twitter and more." },
  { icon: Shield, title: "Secure & Clean", desc: "No ads, no tracking. Just a clean experience." },
  { icon: Code2, title: "Open Source", desc: "Built for developers, by developers. 100% open-source." },
];

export default function SaasTools() {
  return (
    <>
      <section className="container pt-12 lg:pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-5">SAAS TOOLS</div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-5">
              Powerful Tools<br />Built for You<span className="text-primary">.</span>
            </h1>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Our tools are designed to simplify workflows, boost productivity and deliver real results.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial-glow blur-3xl" />
            <img src={saasIcon} alt="SaaS code icon" loading="lazy" width={1024} height={1024} className="relative w-full max-w-[460px] mx-auto float-slow" />
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="text-center text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-6">OUR FLAGSHIP TOOL</div>
        <div className="glass-card p-8 lg:p-12 grid lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-5 mb-6">
              <div className="w-20 h-20 rounded-2xl border border-primary/60 flex items-center justify-center bg-background shadow-[0_0_30px_hsl(55_100%_60%/0.25)]">
                <Download className="w-9 h-9 text-primary" />
              </div>
              <div>
                <span className="pill-tag !py-1 !px-3 mb-2 text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> OPEN SOURCE
                </span>
                <h3 className="text-3xl font-bold">ArgonCore</h3>
                <p className="text-sm text-muted-foreground mt-1">Video Downloader</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              ArgonCore is a fast, reliable and open-source video downloader that helps you download videos from 50+ platforms in the highest quality.
            </p>
            <a href="https://argoncore.example.com" target="_blank" rel="noopener noreferrer">
              <NeonButton>Visit Site</NeonButton>
            </a>
          </div>
          <div className="lg:border-l lg:border-border/60 lg:pl-10 space-y-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <span className="icon-circle !w-12 !h-12 shrink-0"><f.icon className="w-5 h-5" /></span>
                <div>
                  <h4 className="font-bold mb-1">{f.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card mt-8 px-8 py-4 flex items-center justify-center gap-3 max-w-xl mx-auto">
          <Lock className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground/85">Trusted by developers and users worldwide.</span>
        </div>
      </section>
    </>
  );
}
