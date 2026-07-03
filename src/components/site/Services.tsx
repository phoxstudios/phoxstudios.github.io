import { Reveal, SectionHeading } from "./Reveal";

const services = [
  { icon: "◆", t: "Graphic Design", d: "Editorial-grade visuals and marketing collateral." },
  { icon: "✦", t: "Brand Identity", d: "Systems that define how the world sees your company." },
  { icon: "◈", t: "Logo Design", d: "Symbols crafted with intent, tested at every scale." },
  { icon: "▲", t: "Web Development", d: "Fast, accessible, SEO-first sites and apps." },
  { icon: "●", t: "UI / UX", d: "Interfaces people actually enjoy using." },
  { icon: "▢", t: "E-Commerce", d: "Storefronts optimized for conversion and craft." },
  { icon: "◐", t: "Photography", d: "Product, lifestyle, and brand imagery." },
  { icon: "▶", t: "Videography", d: "Cinematic brand films and product motion." },
  { icon: "✧", t: "Advertisement", d: "Campaigns that get remembered and clicked." },
  { icon: "☰", t: "Social Media", d: "Content systems and community that compounds." },
  { icon: "↗", t: "Digital Marketing", d: "SEO, ads, and lifecycle that ships pipeline." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <SectionHeading eyebrow="Services" title="Everything you need. Nothing you don't." />
      <div className="mx-auto mt-16 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.t} delay={(i % 3) * 0.08}>
            <article className="group relative h-full overflow-hidden rounded-2xl glass p-7 transition-transform duration-300 hover:-translate-y-2 hover:rotate-[-0.4deg]">
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--gold)_30%,transparent),transparent_60%)]" />
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold/10 text-gold text-xl">{s.icon}</div>
                <span className="text-xs tabular-nums text-muted-foreground">/ {String(i+1).padStart(2,"0")}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-gold opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                Learn more →
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}