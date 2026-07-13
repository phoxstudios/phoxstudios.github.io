import { Reveal, RevealText } from "./Reveal";

const pillars = [
  { t: "Strategy first", d: "Every pixel starts with a business question. Positioning, story, and outcomes." },
  { t: "Design that ships", d: "Prototype-driven design that translates 1:1 to the final build. No surprises." },
  { t: "Engineering craft", d: "Fast, accessible, SEO-ready. Built to grow with you, not against you." },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center gap-3">
          <span className="font-display text-sm font-medium text-primary tabular-nums">01</span>
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            About the studio
          </span>
        </div>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div className="overflow-hidden">
            <RevealText
              text="A studio built for founders who care about the details."
              className="block font-display text-[clamp(2.25rem,5.5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-balance"
            />
          </div>
          <div className="flex flex-col justify-end">
            <Reveal delay={0.1}>
              <p
                className="text-base leading-relaxed text-muted-foreground md:text-lg"
                style={{ fontFamily: "var(--font-body)" }}
              >
                We fuse strategy, design, and engineering into digital products that feel
                effortless — and perform relentlessly. Our process blends deep research with
                creative exploration so your identity looks premium and aligns with your goals.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {pillars.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <div className="group h-full bg-background p-8 transition-colors hover:bg-secondary md:p-10">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-5xl font-semibold text-primary">
                    0{i + 1}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-foreground/20 transition-colors group-hover:bg-primary" />
                </div>
                <h3 className="mt-10 font-display text-2xl font-semibold">{c.t}</h3>
                <p
                  className="mt-3 text-sm leading-relaxed text-muted-foreground"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {c.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
