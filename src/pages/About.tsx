import founder from "@/assets/founder.jpg";
import heroLogo from "@/assets/hero-logo.png";
import { Instagram, MessageCircle, Twitter } from "lucide-react";

export default function About() {
  return (
    <>
      <section className="container pt-12 lg:pt-20 pb-12 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-4">ABOUT ARENEX TECHWORKS</div>
        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-4">
          We Build With Purpose.<br />We Grow Together<span className="text-primary">.</span>
        </h1>
        <div className="w-24 h-px bg-primary mx-auto mt-6" />
      </section>

      {/* Founder */}
      <section className="container py-6">
        <div className="glass-card scroll-reveal-scale p-7 lg:p-10 grid md:grid-cols-[280px_1fr] gap-8 items-start">
          <img src={founder} alt="Abdulrehman Tariq, Founder" loading="lazy" width={768} height={896} className="rounded-2xl w-full h-full object-cover border border-primary/40 shadow-[0_0_40px_hsl(55_100%_60%/0.15)]" />
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-3">FOUNDER</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Abdulrehman Tariq</h2>
            <p className="text-sm text-primary font-semibold mb-2">Founder, Arenex Techworks</p>
            <div className="w-16 h-px bg-primary mb-6" />
            <p className="text-muted-foreground leading-relaxed">
              Arenex Techworks was founded with a vision to help businesses and startups establish a strong digital presence through modern web development. Our mission is to build fast, scalable, and visually compelling web experiences that help brands grow online.
            </p>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="container py-6">
        <div className="glass-card scroll-reveal p-8 lg:p-12">
          <div className="text-center mb-8">
            <div className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-3">GET IN TOUCH</div>
            <h2 className="text-3xl lg:text-4xl font-bold">Let's Connect</h2>
            <div className="w-16 h-px bg-primary mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a href="https://wa.me/923434247850" target="_blank" rel="noopener noreferrer"
               className="flex flex-col items-center text-center group hover-glow rounded-2xl p-6 border border-border/60">
              <span className="w-16 h-16 rounded-2xl bg-secondary/15 border border-secondary/50 flex items-center justify-center mb-4 text-secondary shadow-[0_0_20px_hsl(95_80%_50%/0.3)]">
                <MessageCircle className="w-7 h-7" />
              </span>
              <h3 className="text-lg font-bold mb-1">WhatsApp</h3>
              <p className="text-sm text-muted-foreground">+92 3434247850</p>
            </a>
            <a href="https://instagram.com/arenextechworks" target="_blank" rel="noopener noreferrer"
               className="flex flex-col items-center text-center group hover-glow rounded-2xl p-6 border border-border/60">
              <span className="w-16 h-16 rounded-2xl bg-primary/15 border border-primary/50 flex items-center justify-center mb-4 text-primary shadow-[0_0_20px_hsl(55_100%_60%/0.3)]">
                <Instagram className="w-7 h-7" />
              </span>
              <h3 className="text-lg font-bold mb-1">Instagram</h3>
              <p className="text-sm text-muted-foreground">@arenextechworks</p>
            </a>
            <a href="https://x.com/arenextechworks" target="_blank" rel="noopener noreferrer"
               className="flex flex-col items-center text-center group hover-glow rounded-2xl p-6 border border-border/60">
              <span className="w-16 h-16 rounded-2xl bg-primary/15 border border-primary/50 flex items-center justify-center mb-4 text-primary shadow-[0_0_20px_hsl(55_100%_60%/0.3)]">
                <Twitter className="w-7 h-7" />
              </span>
              <h3 className="text-lg font-bold mb-1">X (Twitter)</h3>
              <p className="text-sm text-muted-foreground">@arenextechworks</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
