import { useEffect } from "react";
import Lenis from "lenis";

/** Shared handle so section routes can smooth-scroll via the live Lenis instance. */
export const lenisRef: { current: Lenis | null } = { current: null };

export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenisRef.current = lenis;
    let raf = 0;
    const tick = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);
  return null;
}