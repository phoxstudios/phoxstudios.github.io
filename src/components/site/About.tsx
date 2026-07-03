import { Reveal, SectionHeading } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <SectionHeading
        eyebrow="About"
        title="A studio built for founders who care about the details."
        sub="We fuse strategy, design, and engineering into digital products that feel effortless — and perform relentlessly."
      />
      <div className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-3">
        {[
          { t: "Strategy first", d: "Every pixel starts with a business question. Positioning, story, and outcomes." },
          { t: "Design that ships", d: "Prototype-driven design that translates 1:1 to the final build. No surprises." },
          { t: "Engineering craft", d: "Fast, accessible, SEO-ready. Built to grow with you, not against you." },
        ].map((c, i) => (
          <Reveal key={c.t} delay={i * 0.1}>
            <div className="group relative h-full overflow-hidden rounded-3xl glass p-8 transition-all hover:-translate-y-1">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/20 blur-3xl transition-opacity opacity-0 group-hover:opacity-100" />
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-gold text-ink font-bold">0{i+1}</div>
              <h3 className="text-xl font-semibold">{c.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}