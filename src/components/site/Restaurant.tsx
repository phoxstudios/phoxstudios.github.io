import { Reveal, SectionHeading } from "./Reveal";
import {
  Utensils,
  QrCode,
  MessageCircle,
  Star,
  CalendarCheck,
  BarChart3,
  Gift,
} from "lucide-react";

const perks = [
  { Icon: Utensils, t: "Digital Menu", d: "Live menu with categories, tags, and dietary badges." },
  { Icon: QrCode, t: "QR Ordering", d: "Table-side ordering with instant KOT to the kitchen." },
  { Icon: MessageCircle, t: "WhatsApp Order", d: "Send orders straight to WhatsApp — no app install." },
  { Icon: Star, t: "Feedback", d: "Post-meal review capture and Google review nudge." },
  { Icon: CalendarCheck, t: "Reservations", d: "Table booking with confirmations and reminders." },
  { Icon: BarChart3, t: "Analytics", d: "Track top items, peak hours, and repeat guests." },
  { Icon: Gift, t: "Loyalty", d: "Digital loyalty cards, punch rewards, and offers." },
];

export function Restaurant() {
  return (
    <section id="restaurant" className="relative px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="06"
          eyebrow="Restaurant solutions"
          title="Your restaurant. Fully digital."
        />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Phone mockup */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative aspect-[9/18] rounded-[2.75rem] border border-border bg-foreground p-3 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]">
                <div className="h-full w-full overflow-hidden rounded-[2.25rem] bg-background p-6">
                  <div className="mx-auto h-1 w-14 rounded-full bg-foreground/15" />
                  <div className="mt-7 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Aureus Bistro
                  </div>
                  <h4 className="mt-1 font-display text-3xl font-semibold">Menu</h4>
                  <div className="mt-6 grid gap-3">
                    {["Truffle Pasta", "Wagyu Slider", "Saffron Risotto"].map((n, i) => (
                      <div
                        key={n}
                        className="flex items-center justify-between rounded-2xl bg-secondary p-4"
                      >
                        <div>
                          <div className="text-sm font-medium text-foreground">{n}</div>
                          <div className="text-[10px] text-muted-foreground">Chef&apos;s pick</div>
                        </div>
                        <div className="font-display text-sm font-semibold text-primary">
                          ₹{380 + i * 60}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-col items-center">
                    <div className="grid h-24 w-24 place-items-center rounded-2xl bg-primary p-3">
                      <QrCode className="h-full w-full text-primary-foreground" strokeWidth={1.25} />
                    </div>
                    <div className="mt-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Scan to order
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Perks grid */}
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
            {perks.map((p, i) => (
              <Reveal key={p.t} delay={(i % 2) * 0.06}>
                <div className="group h-full bg-background p-7 transition-colors hover:bg-secondary">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <p.Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h4 className="mt-5 font-display text-lg font-semibold">{p.t}</h4>
                  <p
                    className="mt-1.5 text-sm leading-relaxed text-muted-foreground"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {p.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
