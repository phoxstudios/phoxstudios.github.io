import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "./Reveal";

const items = [
  { t: "Aureus Coffee", tag: "Brand", year: "2025", img: "/work/aureus-coffee.png", span: "lg:col-span-7" },
  { t: "Nova Finance", tag: "Web", year: "2025", img: "/work/nova-finance.png", span: "lg:col-span-5" },
  { t: "Palate Menu", tag: "Product", year: "2024", img: "/work/palate-menu.png", span: "lg:col-span-5" },
  { t: "Kaya Studio", tag: "Identity", year: "2025", img: "/work/kaya-studio.png", span: "lg:col-span-7" },
  { t: "Loop Wear", tag: "E-com", year: "2024", img: "/work/loop-wear.png", span: "lg:col-span-6" },
  { t: "Skyline Realty", tag: "Web", year: "2024", img: "/work/skyline-realty.png", span: "lg:col-span-6" },
];

const filters = ["All", "Brand", "Web", "Product", "Identity", "E-com"];
const EASE = [0.16, 1, 0.3, 1] as const;

export function Portfolio() {
  const [f, setF] = useState("All");
  const visible = items.filter((i) => f === "All" || i.tag === f);

  return (
    <section id="work" className="relative px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading index="03" eyebrow="Selected work" title="Recent obsessions." />
          <div className="flex flex-wrap gap-2">
            {filters.map((name) => (
              <button
                key={name}
                onClick={() => setF(name)}
                className={`rounded-full border px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] transition-colors ${
                  f === name
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <AnimatePresence mode="popLayout">
            {visible.map((it) => (
              <motion.a
                layout
                key={it.t}
                href="#contact"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, ease: EASE }}
                className={`group relative block overflow-hidden rounded-[2rem] bg-card ${it.span}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={it.img || "/placeholder.svg"}
                    alt={`${it.t} — ${it.tag} project by Phox Studio`}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />
                </div>
                <div className="flex items-end justify-between p-6 md:p-7">
                  <div>
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      <span>{it.tag}</span>
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      <span>{it.year}</span>
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-semibold md:text-3xl">{it.t}</h3>
                  </div>
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-full border border-foreground/20 text-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    →
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
