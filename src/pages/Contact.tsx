import { Instagram, MessageCircle, Twitter } from "lucide-react";

const channels = [
  { icon: MessageCircle, label: "WhatsApp", value: "+92 3434247850", href: "https://wa.me/923434247850", tone: "secondary" as const },
  { icon: Instagram, label: "Instagram", value: "@arenextechworks", href: "https://instagram.com/arenextechworks", tone: "primary" as const },
  { icon: Twitter, label: "X (Twitter)", value: "@arenextechworks", href: "https://x.com/arenextechworks", tone: "primary" as const },
];

export default function Contact() {
  return (
    <>
      <section className="container pt-12 lg:pt-20 pb-10 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-4">CONTACT</div>
        <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-5">
          Let's Build Something<br />Powerful<span className="text-primary">.</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Have a project in mind? Reach out and let's create a website that grows your business.
        </p>
        <div className="w-24 h-px bg-primary mx-auto mt-6" />
      </section>

      <section className="container py-10">
        <div className="glass-card scroll-reveal p-8 lg:p-12 max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {channels.map((c, i) => {
              const isSecondary = c.tone === "secondary";
              return (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                   className={`scroll-reveal stagger-${i + 1} flex flex-col items-center text-center group hover-glow rounded-2xl p-6 border border-border/60`}>
                  <span className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${isSecondary ? "bg-secondary/15 border border-secondary/50 text-secondary shadow-[0_0_20px_hsl(95_80%_50%/0.3)]" : "bg-primary/15 border border-primary/50 text-primary shadow-[0_0_20px_hsl(55_100%_60%/0.3)]"}`}>
                    <c.icon className="w-7 h-7" />
                  </span>
                  <h3 className="text-lg font-bold mb-1">{c.label}</h3>
                  <p className="text-sm text-muted-foreground">{c.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}