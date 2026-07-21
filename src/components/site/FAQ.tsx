import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading, Reveal } from "./Reveal";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most brand and website projects ship in 2–4 weeks depending on scope. We agree on a fixed timeline up front and deliver on the exact promised day.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. We're based in Calicut, Kerala, and collaborate with founders worldwide. Async-first communication keeps timezones from slowing us down.",
  },
  {
    q: "What's included in a brand identity package?",
    a: "A complete visual system — logo, color palette, typography, tone of voice, and usage guidelines — designed with strategic clarity so your brand is instantly recognizable.",
  },
  {
    q: "Can you handle both design and development?",
    a: "Absolutely. We fuse strategy, design, and engineering in-house, so your prototype translates 1:1 to a fast, accessible, SEO-ready build.",
  },
  {
    q: "How does pricing work?",
    a: "We offer transparent, fixed-price packages with clear deliverables. For custom scope, we scope a tailored proposal after a short discovery call.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading index="09" eyebrow="FAQ" title="Questions, answered." />
        </div>

        <div className="border-t border-border">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q}>
                <div className="border-b border-border">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <span className="font-display text-xl font-medium text-foreground md:text-2xl">
                      {item.q}
                    </span>
                    <span
                      className={`grid h-10 w-10 flex-none place-items-center rounded-full border transition-colors ${
                        isOpen
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-foreground/20 text-foreground"
                      }`}
                    >
                      <Plus
                        className={`h-5 w-5 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p
                          className="max-w-xl pb-7 text-base leading-relaxed text-muted-foreground"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
