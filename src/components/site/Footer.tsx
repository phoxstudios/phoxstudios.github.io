import { ArrowUp } from "lucide-react";

const columns = [
  { t: "Studio", l: ["About", "Work", "Process", "Contact"] },
  { t: "Services", l: ["Brand Identity", "Web Development", "E-Commerce", "Marketing"] },
  { t: "Elsewhere", l: ["Instagram", "Behance", "Dribbble", "LinkedIn"] },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground px-6 pt-20 pb-10 text-background md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-baseline gap-0.5 text-2xl font-semibold">
              <span className="font-display text-primary">phox</span>
              <span className="font-display text-background">studio</span>
            </div>
            <p
              className="mt-5 max-w-xs text-sm leading-relaxed text-background/60"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Designing ideas into digital success — together. A premium branding &amp; digital
              design studio in Kerala, India.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.t}>
              <div className="text-xs uppercase tracking-[0.22em] text-background/40">{col.t}</div>
              <ul className="mt-5 space-y-3 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                {col.l.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-background/80 transition-colors hover:text-primary"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Oversized wordmark */}
        <div className="mt-20 border-t border-background/10 pt-10">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.22em] text-background/40">
              Est. 2018 — Kerala, India
            </span>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 text-sm text-background/80 transition-colors hover:text-primary"
            >
              Back to top
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
            </a>
          </div>
          <div className="mt-8 select-none font-display text-[clamp(3.5rem,18vw,17rem)] font-semibold leading-[0.8] tracking-[-0.04em]">
            <span className="text-primary">phox</span>
            <span className="text-background">studio</span>
          </div>
          <div
            className="mt-8 text-xs text-background/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © {new Date().getFullYear()} Phox Studio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
