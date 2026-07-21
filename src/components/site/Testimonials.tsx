import { Star } from "lucide-react";
import { SectionHeading } from "./Reveal";

const items = [
  { q: "Phox Studio turned our messy idea into a brand people actually love.", n: "Aarav Mehta", r: "Founder, Aureus Coffee" },
  { q: "The site converts 3× better and the process was disarmingly smooth.", n: "Priya Nair", r: "CMO, Nova Finance" },
  { q: "Design so precise it feels inevitable. Delivery on the exact promised day.", n: "Rohan Kapoor", r: "CEO, Kaya Studio" },
  { q: "Our QR menu paid for the entire website in 3 weeks. Unbelievable ROI.", n: "Neha Sharma", r: "Owner, Palate Bistro" },
  { q: "Every animation, every micro-interaction — you can feel the care.", n: "Vikram Joshi", r: "Product Lead, Loop Wear" },
];
const loop = [...items, ...items];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading index="07" eyebrow="Testimonials" title="Loved by ambitious teams." />
      </div>

      <div className="mt-16 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-6 px-6">
          {loop.map((t, i) => (
            <figure
              key={i}
              className="flex w-[400px] shrink-0 flex-col justify-between rounded-[1.75rem] border border-border bg-card p-8"
            >
              <div>
                <div className="flex gap-1 text-primary" aria-hidden>
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-primary" />
                  ))}
                </div>
                <blockquote
                  className="mt-5 font-display text-xl font-medium leading-snug text-foreground"
                >
                  &ldquo;{t.q}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground">
                  {t.n[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.n}</div>
                  <div className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                    {t.r}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
