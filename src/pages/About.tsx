import founder from "@/assets/founder.jpg";
import { Instagram, Mail, MessageCircle, Twitter, Globe, Send } from "lucide-react";
import { useState } from "react";
import { NeonButton } from "@/components/site/NeonButton";
import { toast } from "sonner";
import { z } from "zod";
import { Seo } from "@/components/site/Seo";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export default function About() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    const body = `Hi Arenex Techworks,%0A%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0A%0A${encodeURIComponent(form.message)}`;
    window.location.href = `mailto:arenextechworks@gmail.com?subject=New%20Project%20Inquiry&body=${body}`;
    toast.success("Opening your email client…");
  };

  return (
    <>
      <Seo
        title="About & Contact | Arenex Techworks"
        description="Learn about Arenex Techworks, founded by Abdulrehman Tariq, and get in touch via WhatsApp, email, Instagram, or X."
        path="/about"
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Arenex Techworks",
          mainEntity: {
            "@type": "Person",
            name: "Abdulrehman Tariq",
            jobTitle: "Founder",
            worksFor: { "@type": "Organization", name: "Arenex Techworks" },
            sameAs: ["https://instagram.com/arenextechworks", "https://x.com/arenextechworks"],
          },
        }}
      />
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
          <img src={founder} alt="Abdulrehman Tariq, Founder of Arenex Techworks" loading="lazy" width={768} height={896} className="rounded-2xl w-full h-full object-cover border border-primary/40 shadow-[0_0_40px_hsl(55_100%_60%/0.15)]" />
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-3">FOUNDER</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Abdulrehman Tariq</h2>
            <p className="text-sm text-primary font-semibold mb-2">Founder, Arenex Techworks</p>
            <div className="w-16 h-px bg-primary mb-6" />
            <p className="text-muted-foreground leading-relaxed">
              Arenex Techworks is focused on building modern websites and web applications for startups, businesses, and brands. Our mission is to build fast, scalable, and visually compelling web experiences that help brands grow online.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="container py-6" id="contact">
        <div className="glass-card scroll-reveal p-8 lg:p-12">
          <div className="text-center mb-10">
            <div className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-3">CONTACT</div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
              Let's Build Something Great Together<span className="text-primary">.</span>
            </h2>
            <div className="w-16 h-px bg-primary mx-auto mt-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Name</label>
                <input type="text" maxLength={100} required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full bg-background/50 border border-border/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_20px_hsl(55_100%_60%/0.25)] transition-all"
                  placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Email</label>
                <input type="email" maxLength={255} required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full bg-background/50 border border-border/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_20px_hsl(55_100%_60%/0.25)] transition-all"
                  placeholder="you@email.com" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Message</label>
                <textarea rows={5} maxLength={1000} required value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full bg-background/50 border border-border/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_20px_hsl(55_100%_60%/0.25)] transition-all resize-none"
                  placeholder="Tell us about your project…" />
              </div>
              <NeonButton type="submit" className="w-full justify-center">
                <Send className="w-4 h-4" /> Send Message
              </NeonButton>
            </form>

            <div className="grid sm:grid-cols-2 gap-4">
              <a href="mailto:arenextechworks@gmail.com" className="flex flex-col items-center text-center group hover-glow rounded-2xl p-6 border border-border/60">
                <span className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/50 flex items-center justify-center mb-3 text-primary shadow-[0_0_20px_hsl(55_100%_60%/0.3)]"><Mail className="w-6 h-6" /></span>
                <h3 className="text-base font-bold mb-1">Email</h3>
                <p className="text-xs text-muted-foreground break-all">arenextechworks@gmail.com</p>
              </a>
              <a href="https://wa.me/923434247850" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center group hover-glow rounded-2xl p-6 border border-border/60">
                <span className="w-14 h-14 rounded-2xl bg-secondary/15 border border-secondary/50 flex items-center justify-center mb-3 text-secondary shadow-[0_0_20px_hsl(95_80%_50%/0.3)]"><MessageCircle className="w-6 h-6" /></span>
                <h3 className="text-base font-bold mb-1">WhatsApp</h3>
                <p className="text-xs text-muted-foreground">+92 3434247850</p>
              </a>
              <a href="https://instagram.com/arenextechworks" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center group hover-glow rounded-2xl p-6 border border-border/60">
                <span className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/50 flex items-center justify-center mb-3 text-primary shadow-[0_0_20px_hsl(55_100%_60%/0.3)]"><Instagram className="w-6 h-6" /></span>
                <h3 className="text-base font-bold mb-1">Instagram</h3>
                <p className="text-xs text-muted-foreground">@arenextechworks</p>
              </a>
              <a href="https://x.com/arenextechworks" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center group hover-glow rounded-2xl p-6 border border-border/60">
                <span className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/50 flex items-center justify-center mb-3 text-primary shadow-[0_0_20px_hsl(55_100%_60%/0.3)]"><Twitter className="w-6 h-6" /></span>
                <h3 className="text-base font-bold mb-1">X (Twitter)</h3>
                <p className="text-xs text-muted-foreground">@arenextechworks</p>
              </a>
              <a href="https://arenextechworks.com" target="_blank" rel="noopener noreferrer" className="sm:col-span-2 flex flex-col items-center text-center group hover-glow rounded-2xl p-6 border border-border/60">
                <span className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/50 flex items-center justify-center mb-3 text-primary shadow-[0_0_20px_hsl(55_100%_60%/0.3)]"><Globe className="w-6 h-6" /></span>
                <h3 className="text-base font-bold mb-1">Website</h3>
                <p className="text-xs text-muted-foreground">arenextechworks.com</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}