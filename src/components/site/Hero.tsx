import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const lines = [
  [{ t: "Designing", accent: false }, { t: "ideas", accent: true }],
  [{ t: "into digital", accent: false }],
  [{ t: "success", accent: true }],
];

const stats = [
  ["8+", "Years"],
  ["240", "Projects"],
  ["120", "Clients"],
  ["99%", "Satisfaction"],
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden px-6 pt-36 md:px-10 grain">
      {/* Top meta row */}
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 pt-6 md:flex-row md:items-end md:justify-between">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Premium Digital Agency — Kerala, India
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          className="max-w-xs text-sm leading-relaxed text-muted-foreground md:text-right"
          style={{ fontFamily: "var(--font-body)" }}
        >
          We craft complete visual systems that capture your brand&apos;s soul and make it
          instantly recognizable.
        </motion.p>
      </div>

      {/* Oversized editorial headline */}
      <h1 className="mx-auto mt-12 max-w-[1400px] font-display text-[clamp(3rem,13vw,12rem)] font-semibold leading-[0.86] tracking-[-0.04em]">
        {lines.map((line, li) => (
          <span key={li} className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.35 + li * 0.12 }}
            >
              {line.map((w, wi) => (
                <span key={wi} className={w.accent ? "italic text-primary" : "text-foreground"}>
                  {w.t}
                  {wi < line.length - 1 ? " " : ""}
                </span>
              ))}
            </motion.span>
          </span>
        ))}
      </h1>

      {/* CTA + descriptor row */}
      <div className="mx-auto mt-14 flex max-w-[1400px] flex-col gap-8 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            data-magnetic
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Start your project
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#work"
            data-magnetic
            className="group inline-flex items-center gap-3 rounded-full border border-foreground/20 px-8 py-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-[10px] text-primary-foreground">
              ▶
            </span>
            View our work
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 1 }}
          className="font-display text-lg font-medium text-foreground"
        >
          Affordable <span className="text-primary">·</span> Creative{" "}
          <span className="text-primary">·</span> Reliable
        </motion.p>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 1.1 }}
        className="mx-auto mt-16 grid max-w-[1400px] grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4"
      >
        {stats.map(([n, l]) => (
          <div key={l} className="bg-background px-6 py-8">
            <div className="font-display text-4xl font-semibold text-foreground md:text-5xl">{n}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">{l}</div>
          </div>
        ))}
      </motion.div>

      <div className="mx-auto mt-14 flex max-w-[1400px] items-center gap-3 pb-10 text-xs uppercase tracking-[0.28em] text-muted-foreground">
        <span className="h-8 w-px bg-gradient-to-b from-primary to-transparent" />
        Scroll to explore
      </div>
    </section>
  );
}
