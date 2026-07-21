import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading, Reveal } from "./Reveal";

const services = [
  { t: "Graphic Design", d: "Editorial-grade visuals and marketing collateral." },
  { t: "Brand Identity", d: "Systems that define how the world sees your company." },
  { t: "Logo Design", d: "Symbols crafted with intent, tested at every scale." },
  { t: "Web Development", d: "Fast, accessible, SEO-first sites and apps." },
  { t: "UI / UX", d: "Interfaces people actually enjoy using." },
  { t: "E-Commerce", d: "Storefronts optimized for conversion and craft." },
  { t: "Photography", d: "Product, lifestyle, and brand imagery." },
  { t: "Videography", d: "Cinematic brand films and product motion." },
  { t: "Advertisement", d: "Campaigns that get remembered and clicked." },
  { t: "Social Media", d: "Content systems and community that compounds." },
  { t: "Digital Marketing", d: "SEO, ads, and lifecycle that ships pipeline." },
];

export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="relative px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="02"
          eyebrow="Services"
          title="Everything you need. Nothing you don't."
        />

        <div className="mt-16 border-t border-border">
          {services.map((s, i) => (
            <Reveal key={s.t}>
              <div
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group relative grid grid-cols-[auto_1fr] items-center gap-6 border-b border-border py-7 transition-colors md:grid-cols-[6rem_1fr_1fr_auto] md:gap-10 md:py-8"
              >
                <span className="font-display text-sm tabular-nums text-muted-foreground">
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl font-semibold tracking-tight text-foreground transition-transform duration-500 group-hover:translate-x-2 md:text-[2.75rem]">
                  {s.t}
                </h3>
                <p
                  className="hidden text-sm leading-relaxed text-muted-foreground md:block"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {s.d}
                </p>
                <span className="hidden h-11 w-11 place-items-center rounded-full border border-foreground/20 text-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground md:grid">
                  →
                </span>
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-primary"
                  animate={{ scaleX: active === i ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
