import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, RevealText } from "./Reveal";
import { Check } from "lucide-react";

const details = [
  { t: "Email", v: "phoxstudios@gmail.com", href: "mailto:phoxstudios@gmail.com" },
  { t: "WhatsApp", v: "+91 7034606037 · +91 9497159722", href: "https://wa.me/917034606037" },
  { t: "Studio", v: "Calicut, Kerala — India & worldwide", href: undefined },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({ name: "", email: "", msg: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.name.trim() || !f.email.includes("@") || f.msg.trim().length < 5) return;
    setSent(true);
  };

  return (
    <section id="contact" className="relative px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center gap-3">
          <span className="font-display text-sm font-medium text-primary tabular-nums">08</span>
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Contact
          </span>
        </div>
        <div className="mt-8 overflow-hidden">
          <RevealText
            text="Let's build something remarkable."
            className="block max-w-4xl font-display text-[clamp(2.5rem,8vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.03em]"
          />
        </div>

        <div className="mt-20 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Form */}
          <Reveal>
            <form onSubmit={submit} className="relative">
              {sent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 z-10 grid place-items-center rounded-[2rem] bg-background/95 backdrop-blur-sm"
                >
                  <div className="text-center">
                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 font-display text-3xl font-semibold">Message received.</h3>
                    <p className="mt-2 text-sm text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                      We&apos;ll reply within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}
              <div className="grid gap-8">
                {[
                  { k: "name", l: "What's your name?", type: "text" },
                  { k: "email", l: "Your email address", type: "email" },
                ].map((fi) => (
                  <label key={fi.k} className="group block">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors group-focus-within:text-primary">
                      {fi.l}
                    </span>
                    <input
                      required
                      maxLength={120}
                      type={fi.type}
                      value={f[fi.k as "name" | "email"]}
                      onChange={(e) => setF({ ...f, [fi.k]: e.target.value })}
                      className="mt-3 w-full border-0 border-b border-foreground/20 bg-transparent px-0 py-3 font-display text-2xl outline-none transition-colors placeholder:text-foreground/30 focus:border-primary"
                    />
                  </label>
                ))}
                <label className="group block">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors group-focus-within:text-primary">
                    Tell us about your project
                  </span>
                  <textarea
                    required
                    maxLength={2000}
                    rows={3}
                    value={f.msg}
                    onChange={(e) => setF({ ...f, msg: e.target.value })}
                    className="mt-3 w-full resize-none border-0 border-b border-foreground/20 bg-transparent px-0 py-3 font-display text-2xl outline-none transition-colors focus:border-primary"
                  />
                </label>
                <button
                  type="submit"
                  data-magnetic
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01] sm:w-auto sm:px-10"
                >
                  Send message →
                </button>
              </div>
            </form>
          </Reveal>

          {/* Details */}
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-px overflow-hidden rounded-3xl border border-border bg-border">
              {details.map((c) => {
                const Inner = (
                  <>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {c.t}
                    </div>
                    <div className="mt-2 font-display text-xl font-medium text-foreground">
                      {c.v}
                    </div>
                  </>
                );
                return c.href ? (
                  <a
                    key={c.t}
                    href={c.href}
                    className="bg-background p-7 transition-colors hover:bg-secondary"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div key={c.t} className="bg-background p-7">
                    {Inner}
                  </div>
                );
              })}
              <div className="bg-background">
                <iframe
                  title="Phox Studio location — Calicut, Kerala"
                  src="https://www.google.com/maps?q=Calicut,Kerala&output=embed"
                  loading="lazy"
                  className="h-64 w-full grayscale contrast-110"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
