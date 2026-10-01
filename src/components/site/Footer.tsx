import { ArrowUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { lenisRef } from "./SmoothScroll";

const columns: Array<{
  t: string;
  l: Array<{ label: string; to?: string; href?: string }>;
}> = [
  {
    t: "Studio",
    l: [
      { label: "About", to: "/about" },
      { label: "Work", to: "/work" },
      { label: "Process", to: "/process" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    t: "Services",
    l: [
      { label: "Brand Identity", to: "/services" },
      { label: "Web Development", to: "/services" },
      { label: "E-Commerce", to: "/services" },
      { label: "Marketing", to: "/services" },
    ],
  },
  {
    t: "Elsewhere",
    l: [
      { label: "WhatsApp", href: "https://wa.me/917034606037" },
      { label: "Email", href: "mailto:phoxstudios@gmail.com" },
      // Social profiles — add real URLs here when available.
      { label: "Instagram" },
      { label: "Behance" },
      { label: "Dribbble" },
      { label: "LinkedIn" },
    ],
  },
];

function backToTop() {
  if (lenisRef.current) lenisRef.current.scrollTo(0, { duration: 1.2 });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground px-6 pt-20 pb-10 text-background md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-baseline gap-0.5 text-2xl font-semibold">
              <span className="font-display text-primary">phox</span>
              <span className="font-display text-background">studio</span>
            </Link>
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
                  <li key={item.label}>
                    {item.to ? (
                      <Link
                        to={item.to}
                        preload="intent"
                        className="text-background/80 transition-colors hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ) : item.href ? (
                      <a
                        href={item.href}
                        className="text-background/80 transition-colors hover:text-primary"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-background/40">{item.label}</span>
                    )}
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
            <button
              type="button"
              onClick={backToTop}
              className="group inline-flex items-center gap-2 text-sm text-background/80 transition-colors hover:text-primary"
            >
              Back to top
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
            </button>
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
