import { SectionHeading } from "./Reveal";

const items = [
  { q: "PHOXSTUDIO turned our messy idea into a brand people actually love.", n: "Aarav Mehta", r: "Founder, Aureus Coffee" },
  { q: "The site converts 3× better and the process was disarmingly smooth.", n: "Priya Nair", r: "CMO, Nova Finance" },
  { q: "Design so precise it feels inevitable. Delivery on the exact promised day.", n: "Rohan Kapoor", r: "CEO, Kaya Studio" },
  { q: "Our QR menu paid for the entire website in 3 weeks. Unbelievable ROI.", n: "Neha Sharma", r: "Owner, Palate Bistro" },
  { q: "Every animation, every micro-interaction — you can feel the care.", n: "Vikram Joshi", r: "Product Lead, Loop Wear" },
];
const loop = [...items, ...items];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-32">
      <SectionHeading eyebrow="Testimonials" title="Loved by ambitious teams." />
      <div className="mt-16 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-5">
          {loop.map((t, i) => (
            <figure key={i} className="w-[380px] shrink-0 rounded-3xl glass p-7">
              <div className="flex gap-1 text-gold" aria-hidden>
                {"★★★★★".split("").map((s, k) => <span key={k}>{s}</span>)}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">"{t.q}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gold text-ink font-bold">{t.n[0]}</div>
                <div>
                  <div className="text-sm font-semibold">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}