import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export function Reveal({ children, y = 40, delay = 0, className = "" }: { children: ReactNode; y?: number; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "expo.out",
          delay,
          scrollTrigger: { trigger: el, start: "top 85%" },
        }
      );
    });
    return () => ctx.revert();
  }, [y, delay]);
  return <div ref={ref} className={className}>{children}</div>;
}

export function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <p className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span className="h-1 w-1 rounded-full bg-gold" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}