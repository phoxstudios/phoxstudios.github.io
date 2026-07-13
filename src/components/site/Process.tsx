import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  { n: "01", t: "Discover", d: "Workshops, audits, and research to define the real problem." },
  { n: "02", t: "Design", d: "Systems and prototypes that make the answer feel obvious." },
  { n: "03", t: "Develop", d: "Engineering that's fast, accessible, and built to last." },
  { n: "04", t: "Launch", d: "Ship with confidence — measured, tested, and monitored." },
  { n: "05", t: "Grow", d: "Iterate with data. Compound momentum over time." },
];

export function Process() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!track.current) return;
      setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth + 40));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <section
      id="process"
      ref={section}
      style={{ height: `calc(100vh + ${distance}px)` }}
      className="relative"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
          <div className="flex items-center gap-3">
            <span className="font-display text-sm font-medium text-primary tabular-nums">04</span>
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
              Process
            </span>
          </div>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
            How we work.
          </h2>
        </div>

        <motion.div ref={track} style={{ x }} className="mt-14 flex gap-6 px-6 md:px-10">
          {steps.map((s) => (
            <article
              key={s.n}
              className="flex min-h-[46vh] min-w-[85vw] flex-col justify-between rounded-[2rem] border border-border bg-card p-10 md:min-w-[30rem] md:p-12"
            >
              <div className="flex items-center gap-5">
                <span className="font-display text-7xl font-semibold text-primary md:text-8xl">
                  {s.n}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <div>
                <h3 className="font-display text-4xl font-semibold md:text-5xl">{s.t}</h3>
                <p
                  className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {s.d}
                </p>
              </div>
            </article>
          ))}
          <div className="min-w-[40px]" />
        </motion.div>
      </div>
    </section>
  );
}
