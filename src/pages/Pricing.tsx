import pricingTiersAsset from "@/assets/pricing-tiers.png.asset.json";
import { NeonButton } from "@/components/site/NeonButton";
import { Send, Rocket, Crown, Check, Shield } from "lucide-react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Seo } from "@/components/site/Seo";

const plans = [
  {
    icon: Send, name: "Starter Website",
    desc: "Suitable for small businesses and personal brands looking to launch online.",
    price: "Starter", note: "Project based",
    items: ["Up to 5 Pages", "Responsive Design", "Basic SEO Setup", "Contact Form", "1 Revision Round"],
    popular: false,
  },
  {
    icon: Rocket, name: "Business Website",
    desc: "Suitable for growing businesses requiring a professional, conversion-ready online presence.",
    price: "Business", note: "Project based",
    items: ["Up to 12 Pages", "Custom Design & CMS", "Advanced SEO", "Performance Optimized", "30 Days Support"],
    popular: true,
  },
  {
    icon: Crown, name: "Custom Web Application",
    desc: "Suitable for advanced custom solutions with unique functionality and scalable architecture.",
    price: "Custom", note: "Quote on request",
    items: ["Custom Web Application", "Authentication & Database", "Admin Dashboard", "Scalable Architecture", "Priority Support"],
    popular: false,
  },
];

const faqs = [
  { q: "Can I upgrade my plan later?", a: "Yes, you can upgrade your project scope at any time and we'll adjust pricing accordingly." },
  { q: "Do you offer a free consultation?", a: "Absolutely. Reach out via WhatsApp and we'll discuss your project for free." },
  { q: "What payment methods do you accept?", a: "We accept bank transfer, JazzCash, EasyPaisa and major international payment methods." },
  { q: "Do you offer refunds?", a: "Yes, we offer a 30-day money back guarantee on all our work." },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 text-left text-sm font-medium hover:text-primary transition-colors">
        {q}
        <ChevronDown className={`w-4 h-4 transition-transform text-primary ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-4 text-sm text-muted-foreground leading-relaxed">{a}</p>}
    </div>
  );
};

export default function Pricing() {
  return (
    <>
      <Seo
        title="Pricing | Arenex Techworks Web Development Plans"
        description="Simple project-based pricing for Starter Websites, Business Websites, and Custom Web Applications by Arenex Techworks."
        path="/pricing"
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <section className="container pt-12 lg:pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-5">PRICING</div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-5">
              Simple Pricing<span className="text-primary">.</span><br />Real Value<span className="text-primary">.</span>
            </h1>
            <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
              Choose the perfect plan for your project and start growing today.
            </p>
            <NeonButton variant="outline">Compare Plans</NeonButton>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial-glow blur-3xl" />
            <img src={pricingTiersAsset.url} alt="Arenex Techworks pricing tiers" loading="lazy" width={1280} height={1024} className="relative w-full max-w-[620px] mx-auto float-slow" />
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`relative glass-card scroll-reveal stagger-${i + 1} p-7 flex flex-col ${
                p.popular ? "border-primary/60 shadow-glow-yellow scale-[1.02]" : ""
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-primary/60 bg-background text-primary">
                  Most Popular
                </div>
              )}
              <span className="icon-circle mb-6"><p.icon className="w-5 h-5" /></span>
              <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
              <div className="mb-6">
                <div className="text-3xl font-extrabold glow-text">{p.price}</div>
                <div className="text-xs text-muted-foreground mt-1">{p.note}</div>
              </div>
              <div className="border-t border-border/60 pt-5 space-y-3 mb-7">
                {p.items.map((i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground/85">{i}</span>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/923434247850" target="_blank" rel="noopener noreferrer" className="mt-auto">
                {p.popular ? <NeonButton className="w-full justify-center">Get Started</NeonButton>
                           : <NeonButton variant="outline" className="w-full justify-center">Get Started</NeonButton>}
              </a>
            </div>
          ))}
        </div>

        <div className="glass-card scroll-reveal mt-12 p-8 grid lg:grid-cols-2 gap-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-4">FAQ</div>
            <div>{faqs.map((f) => <FaqItem key={f.q} {...f} />)}</div>
          </div>
          <div className="flex items-center gap-5 lg:border-l lg:border-border/60 lg:pl-10">
            <Shield className="w-14 h-14 text-secondary shrink-0 drop-shadow-[0_0_12px_hsl(95_80%_50%/0.6)]" />
            <div>
              <h3 className="text-xl font-bold mb-2">30-Day Money Back Guarantee</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Not satisfied? Get a full refund within 30 days, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
