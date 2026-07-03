import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  { n: "01", t: "Discover", d: "Workshops, audits, and research to define the real problem." },
  { n: "02", t: "Design", d: "Systems and prototypes that make the answer feel obvious." },
  { n: "03", t: "Develop", d: "Engineering that's fast, accessible, and built to last." },
  { n: "04", t: "Launch", d: "Ship with confidence — measured, tested, and monitored." },
  { n: "05", t: "Grow", d: "Iterate with data. Compound momentum over time." },
];

export function Process() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (!wrap.current || !track.current) return;
      const distance = track.current.scrollWidth - window.innerWidth + 64;
      gsap.to(track.current, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${distance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={wrap} className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">— Process</p>
        <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight">How we work.</h2>
      </div>
      <div ref={track} className="mt-16 flex gap-6 pl-6">
        {steps.map((s) => (
          <div key={s.n} className="relative min-w-[85vw] max-w-[520px] md:min-w-[520px] rounded-3xl glass p-10">
            <div className="flex items-center gap-4">
              <span className="font-display text-6xl font-bold text-gradient-gold">{s.n}</span>
              <span className="h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent" />
            </div>
            <h3 className="mt-8 font-display text-4xl font-semibold">{s.t}</h3>
            <p className="mt-4 text-muted-foreground">{s.d}</p>
          </div>
        ))}
        <div className="min-w-[64px]" />
      </div>
    </section>
  );
}