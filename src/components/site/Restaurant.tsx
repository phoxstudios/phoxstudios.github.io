import { Reveal, SectionHeading } from "./Reveal";

const perks = [
  { i: "◈", t: "Digital Menu", d: "Live menu with categories, tags, and dietary badges." },
  { i: "▢", t: "QR Ordering", d: "Table-side ordering with instant KOT to the kitchen." },
  { i: "✉", t: "WhatsApp Order", d: "Send orders straight to WhatsApp — no app install." },
  { i: "★", t: "Feedback", d: "Post-meal review capture and Google review nudge." },
  { i: "☰", t: "Reservations", d: "Table booking with confirmations and reminders." },
  { i: "◐", t: "Analytics", d: "Track top items, peak hours, and repeat guests." },
  { i: "♦", t: "Loyalty", d: "Digital loyalty cards, punch rewards, and offers." },
];

export function Restaurant() {
  return (
    <section id="restaurant" className="relative py-32 px-6">
      <SectionHeading eyebrow="Restaurant solutions" title="Your restaurant. Fully digital." />
      <div className="mx-auto mt-16 grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-10 -z-10 rounded-full bg-gold/20 blur-3xl" />
            <div className="animate-float relative aspect-[9/19] rounded-[3rem] border border-white/10 bg-gradient-to-b from-neutral-900 to-black p-3 shadow-2xl">
              <div className="h-full w-full overflow-hidden rounded-[2.4rem] bg-neutral-950 p-5">
                <div className="mx-auto h-1 w-16 rounded-full bg-white/20" />
                <div className="mt-6 text-[10px] uppercase tracking-widest text-muted-foreground">Aureus Bistro</div>
                <h4 className="mt-1 font-display text-2xl font-bold">Menu</h4>
                <div className="mt-4 grid gap-3">
                  {["Truffle Pasta", "Wagyu Slider", "Saffron Risotto"].map((n, i) => (
                    <div key={n} className="flex items-center justify-between rounded-xl bg-white/5 p-3">
                      <div>
                        <div className="text-sm font-medium">{n}</div>
                        <div className="text-[10px] text-muted-foreground">Chef's pick</div>
                      </div>
                      <div className="text-sm text-gold">₹{380 + i * 60}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-center">
                  <div className="grid h-24 w-24 place-items-center rounded-2xl bg-gold p-2">
                    <div className="h-full w-full rounded-lg bg-[conic-gradient(from_0deg,black_0_25%,transparent_0_50%,black_0_75%,transparent_0)]" />
                  </div>
                </div>
                <div className="mt-3 text-center text-[10px] uppercase tracking-widest text-muted-foreground">Scan to order</div>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {perks.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.05}>
              <div className="rounded-2xl glass p-5 transition-transform hover:-translate-y-1">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gold/10 text-gold text-lg">{p.i}</div>
                <h4 className="mt-4 font-semibold">{p.t}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}