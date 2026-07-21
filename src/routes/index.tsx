import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "../components/site/SmoothScroll";
import { CustomCursor } from "../components/site/CustomCursor";
import { Nav } from "../components/site/Nav";
import { Hero } from "../components/site/Hero";
import { About } from "../components/site/About";
import { Services } from "../components/site/Services";
import { Portfolio } from "../components/site/Portfolio";
import { Process } from "../components/site/Process";
import { Pricing } from "../components/site/Pricing";
import { Restaurant } from "../components/site/Restaurant";
import { Testimonials } from "../components/site/Testimonials";
import { FAQ } from "../components/site/FAQ";
import { Contact } from "../components/site/Contact";
import { Footer } from "../components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
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
