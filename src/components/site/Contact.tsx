import { useState } from "react";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({ name: "", email: "", msg: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.name.trim() || !f.email.includes("@") || f.msg.trim().length < 5) return;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <SectionHeading eyebrow="Contact" title="Let's build something remarkable." />
      <div className="mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <form onSubmit={submit} className="relative overflow-hidden rounded-3xl glass p-8">
            {sent && (
              <div className="absolute inset-0 z-10 grid place-items-center rounded-3xl bg-background/90 backdrop-blur-sm">
                <div className="text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold text-2xl text-ink glow-gold">✓</div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">Message received.</h3>
                  <p className="mt-2 text-sm text-muted-foreground">We'll reply within 24 hours.</p>
                </div>
              </div>
            )}
            <div className="grid gap-5">
              {[
                { k: "name", l: "Name", type: "text" },
                { k: "email", l: "Email", type: "email" },
              ].map(fi => (
                <label key={fi.k} className="group block">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-gold">{fi.l}</span>
                  <input
                    required maxLength={120}
                    type={fi.type}
                    value={f[fi.k as "name"|"email"]}
                    onChange={e => setF({ ...f, [fi.k]: e.target.value })}
                    className="mt-2 w-full border-0 border-b border-white/15 bg-transparent px-0 py-3 text-lg outline-none transition-colors focus:border-gold"
                  />
                </label>
              ))}
              <label className="group block">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-gold">Project brief</span>
                <textarea
                  required maxLength={2000} rows={4}
                  value={f.msg}
                  onChange={e => setF({ ...f, msg: e.target.value })}
                  className="mt-2 w-full resize-none border-0 border-b border-white/15 bg-transparent px-0 py-3 text-base outline-none transition-colors focus:border-gold"
                />
              </label>
              <button
                type="submit"
                data-magnetic
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-semibold text-ink glow-gold transition-transform hover:scale-[1.02]"
              >
                Send message →
              </button>
            </div>
          </form>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid gap-5">
            {[
              { t: "Email", v: "phoxstudios@gmail.com" },
              { t: "WhatsApp", v: "+91 7034606037, +91 9497159722" },
              { t: "Studio", v: "Calicut, India — worldwide" },
            ].map(c => (
              <div key={c.t} className="rounded-2xl glass p-6">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{c.t}</div>
                <div className="mt-2 text-lg font-medium">{c.v}</div>
              </div>
            ))}
            <div className="overflow-hidden rounded-2xl glass">
              <iframe
                title="Studio location"
                src="https://www.google.com/maps?q=Bengaluru&output=embed"
                loading="lazy"
                className="h-56 w-full grayscale contrast-125 invert-[.92] hue-rotate-180"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
