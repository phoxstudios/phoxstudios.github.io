import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  y = 32,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  y?: number;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ y, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* Split a line of text and reveal word-by-word for an editorial feel */
export function RevealText({
  text,
  className = "",
  delay = 0,
  stagger = 0.05,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const word: Variants = {
    hidden: { y: "110%" },
    show: { y: "0%", transition: { duration: 1, ease: EASE } },
  };
  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em]">
          <motion.span variants={word} className="inline-block">
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
  index,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
  index?: string;
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex max-w-3xl flex-col ${alignment}`}>
      <Reveal>
        <div className="flex items-center gap-3">
          {index && (
            <span className="font-display text-sm font-medium text-primary tabular-nums">
              {index}
            </span>
          )}
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <div className="mt-6 overflow-hidden">
        <RevealText
          text={title}
          className="block font-display text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-balance text-foreground"
        />
      </div>
      {sub && (
        <Reveal delay={0.15}>
          <p
            className={`mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg ${
              align === "center" ? "mx-auto" : ""
            }`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
