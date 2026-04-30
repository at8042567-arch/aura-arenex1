import productsIcon from "@/assets/products-icon.jpg";
import { NeonButton } from "@/components/site/NeonButton";
import { Rocket, Film, BookOpen, Check, Shield, Cloud, RefreshCw, ArrowUpRight } from "lucide-react";

const products = [
  {
    icon: Rocket, title: "2500+ Graphic\nDesigning Assets Pack",
    desc: "A huge collection of 2500+ premium graphic design assets to speed up your creative workflow.",
    items: ["2500+ Premium Assets", "Vector, PNG, PSD, AI & More", "Commercial Use License", "Well Organized & Easy to Use"],
  },
  {
    icon: Film, title: "500+ Motion Graphics\nReels Bundle",
    desc: "500+ motion graphics reels and elements to make your videos stand out on any platform.",
    items: ["500+ Ready to Use Reels", "After Effects & Premiere Pro", "High Quality & Trendy", "Vertical Format (9:16)"],
  },
  {
    icon: BookOpen, title: "Kali Linux\nMastery eBook",
    desc: "The complete guide to Kali Linux. Learn ethical hacking, penetration testing and security like a pro.",
    items: ["Beginner to Advanced", "Step-by-Step Explanations", "Practical Examples", "Lifetime Access"],
  },
];

const benefits = [
  { icon: Shield, title: "Secure Payments", desc: "Your payments are 100% secure and protected." },
  { icon: Cloud, title: "Instant Download", desc: "Access your products instantly after purchase." },
  { icon: RefreshCw, title: "Lifetime Access", desc: "Get lifetime access to all your purchases." },
];

export default function DigitalProducts() {
  return (
    <>
      <section className="container pt-12 lg:pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-5">DIGITAL PRODUCTS</div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-5">
              Premium Digital<br />Products for Creators<span className="text-primary">.</span>
            </h1>
            <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
              High quality digital products to help you save time, improve your workflow and create without limits.
            </p>
            <NeonButton>Browse All Products</NeonButton>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial-glow blur-3xl" />
            <img src={productsIcon} alt="Products folder icon" loading="lazy" width={1024} height={1024} className="relative w-full max-w-[480px] mx-auto float-slow" />
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-3">OUR PRODUCTS</div>
          <h2 className="text-4xl lg:text-5xl font-bold">Explore Our Digital Products</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.title} className="glass-card p-7 hover-glow flex flex-col">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/15 border border-primary/40 text-primary mb-6">
                <p.icon className="w-5 h-5" />
              </span>
              <h3 className="text-xl font-bold mb-3 whitespace-pre-line leading-snug">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
              <div className="border-t border-border/60 pt-5 space-y-3 mb-6">
                {p.items.map((i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground/85">{i}</span>
                  </div>
                ))}
              </div>
              <button className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border border-border hover:border-primary hover:text-primary transition-all">
                View Product <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="glass-card mt-10 p-7 grid md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="flex items-start gap-4">
              <span className="icon-circle !w-12 !h-12 shrink-0"><b.icon className="w-5 h-5" /></span>
              <div>
                <h4 className="font-bold mb-1">{b.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
