export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 px-6 py-16">
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--gold)_20%,transparent),transparent_70%)]" />
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold text-ink font-black">P</span>
            <span>PHOX<span className="text-gradient-gold">STUDIO</span></span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Designing ideas into digital success — together.
          </p>
        </div>
        {[
          { t: "Studio", l: ["About", "Work", "Process", "Contact"] },
          { t: "Services", l: ["Brand Identity", "Web Development", "E-Commerce", "Marketing"] },
          { t: "Elsewhere", l: ["Instagram", "Behance", "Dribbble", "LinkedIn"] },
        ].map(col => (
          <div key={col.t}>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{col.t}</div>
            <ul className="mt-4 space-y-2 text-sm">
              {col.l.map(item => (
                <li key={item}><a href="#" className="text-foreground/80 transition-colors hover:text-gold">{item}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row">
        <div>© {new Date().getFullYear()} PHOXSTUDIO. All rights reserved.</div>
        <a href="#top" className="inline-flex items-center gap-2 text-gold transition-transform hover:-translate-y-0.5">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}