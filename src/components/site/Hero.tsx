import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ClientOnly } from "./ClientOnly";
import { HeroScene } from "./HeroScene";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(".hero-word");
      gsap.set(words, { y: "110%", opacity: 0 });
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.8 }, 0.1)
        .to(words, { y: 0, opacity: 1, duration: 1.1, stagger: 0.06 }, 0.2)
        .to(".hero-sub", { opacity: 1, y: 0, duration: 0.8 }, 0.9)
        .to(".hero-cta", { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 }, 1.1)
        .to(".hero-meta", { opacity: 1, y: 0, duration: 0.6 }, 1.3);

      // parallax on mouse
      const onMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        gsap.to(".hero-title", { x: -x * 0.3, y: -y * 0.3, duration: 1, ease: "power3.out" });
        gsap.to(".hero-glow", { x: x * 2, y: y * 2, duration: 1.5, ease: "power3.out" });
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    }, root);
    return () => ctx.revert();
  }, []);

  const title = "DESIGNING IDEAS INTO DIGITAL SUCCESS TOGETHER".split(" ");

  return (
    <section ref={root} id="top" className="relative min-h-screen overflow-hidden pt-32 grain">
      {/* Background 3D scene */}
      <div className="absolute inset-0 -z-10">
        <ClientOnly>
          <HeroScene />
        </ClientOnly>
      </div>

      {/* Radial glows */}
      <div className="hero-glow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--gold)_35%,transparent),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,transparent,var(--background)_70%)]" />

      {/* Light rays */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh] opacity-40">
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-gold/60 to-transparent" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-gold/40 to-transparent" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-gold/30 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <p className="hero-eyebrow inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground opacity-0 translate-y-4">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          Premium Digital Agency
        </p>

        <h1 className="hero-title mt-8 max-w-6xl font-display text-[clamp(2.6rem,8vw,7rem)] font-bold leading-[0.95] tracking-tighter">
          {title.map((w, i) => (
            <span key={i} className="mr-3 inline-block overflow-hidden align-bottom md:mr-5">
              <span className={`hero-word inline-block ${["INTO","SUCCESS"].includes(w) ? "text-gradient-gold italic" : ""}`}>
                {w}
              </span>
            </span>
          ))}
        </h1>

        <p className="hero-sub mt-8 max-w-xl text-base text-muted-foreground opacity-0 translate-y-4 md:text-lg">
          Affordable <span className="text-gold">•</span> Creative <span className="text-gold">•</span> Reliable
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" data-magnetic className="hero-cta group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-ink glow-gold opacity-0 translate-y-4 transition-transform hover:scale-105">
            Start Your Project
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="#work" data-magnetic className="hero-cta group inline-flex items-center gap-3 rounded-full glass px-7 py-4 text-sm font-medium text-foreground opacity-0 translate-y-4 transition-colors hover:bg-white/10">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-gold text-ink">▶</span>
            Watch Showreel
          </a>
        </div>

        <div className="hero-meta mt-24 grid w-full max-w-3xl grid-cols-2 gap-6 opacity-0 translate-y-4 md:grid-cols-4">
          {[
            ["8+", "Years"],
            ["240", "Projects"],
            ["120", "Clients"],
            ["99%", "Satisfaction"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-display text-3xl font-bold text-gradient-gold md:text-4xl">{n}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
          <span>Scroll</span>
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}