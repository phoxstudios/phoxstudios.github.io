import { useState } from "react";
import { Reveal, SectionHeading } from "./Reveal";

const items = [
  { t: "Aureus Coffee", tag: "Brand", h: "row-span-2", grad: "from-amber-500/40 to-orange-700/30" },
  { t: "Nova Finance", tag: "Web", h: "", grad: "from-yellow-500/30 to-amber-800/20" },
  { t: "Palate Menu", tag: "Product", h: "", grad: "from-orange-400/40 to-yellow-600/30" },
  { t: "Kaya Studio", tag: "Identity", h: "row-span-2", grad: "from-amber-400/40 to-red-700/30" },
  { t: "Loop Wear", tag: "E-com", h: "", grad: "from-yellow-400/30 to-amber-700/20" },
  { t: "Skyline Realty", tag: "Web", h: "", grad: "from-amber-300/30 to-orange-800/30" },
];
const filters = ["All", "Brand", "Web", "Product", "Identity", "E-com"];

export function Portfolio() {
  const [f, setF] = useState("All");
  const visible = items.filter(i => f === "All" || i.tag === f);
  return (
    <section id="work" className="relative py-32 px-6">
      <SectionHeading eyebrow="Selected work" title="Recent obsessions." />
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-center gap-2">
        {filters.map(name => (
          <button
            key={name}
            onClick={() => setF(name)}
            className={`rounded-full px-4 py-2 text-xs uppercase tracking-widest transition-all ${
              f === name ? "bg-gold text-ink glow-gold" : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="mx-auto mt-12 grid max-w-7xl auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-3">
        {visible.map((it, i) => (
          <Reveal key={it.t + f} delay={(i % 3) * 0.08} className={it.h}>
            <a href="#" className={`group relative block h-full overflow-hidden rounded-3xl glass`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${it.grad}`} />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22><defs><pattern id=%22p%22 width=%2240%22 height=%2240%22 patternUnits=%22userSpaceOnUse%22><path d=%22M0 40L40 0%22 stroke=%22white%22 stroke-opacity=%220.05%22/></pattern></defs><rect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23p)%22/></svg>')]" />
              <div className="absolute inset-0 flex items-end justify-between p-6 transition-transform duration-500 group-hover:scale-[1.02]">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/60">{it.tag}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold">{it.t}</h3>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-ink opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">→</span>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}