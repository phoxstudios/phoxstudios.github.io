import { useEffect } from "react";
import { SmoothScroll, lenisRef } from "./SmoothScroll";
import { CustomCursor } from "./CustomCursor";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { About } from "./About";
import { Services } from "./Services";
import { Portfolio } from "./Portfolio";
import { Process } from "./Process";
import { Pricing } from "./Pricing";
import { Restaurant } from "./Restaurant";
import { Testimonials } from "./Testimonials";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import type { SectionPage } from "../../lib/seo";

/**
 * The full one-page site. Rendered by the index route ("/") and by every
 * real-path section route ("/work", "/services", …) served from routes/$.tsx.
 * When a `section` is provided the page smooth-scrolls to that section after
 * hydration, giving each hash target a crawlable history-API URL.
 */
export function SitePage({ section }: { section?: SectionPage }) {
  useEffect(() => {
    if (!section) return;
    // Wait two frames so hydration, Lenis init, and layout have settled.
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const el = document.getElementById(section.anchor);
        if (!el) return;
        if (lenisRef.current) lenisRef.current.scrollTo(el, { offset: -24 });
        else el.scrollIntoView();
      });
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [section?.path]);

  return (
    <div className="relative bg-background text-foreground">
      <SmoothScroll />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Pricing />
        <Restaurant />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
