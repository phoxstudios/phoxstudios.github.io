import { Reveal, SectionHeading } from "./Reveal";
import { Check } from "lucide-react";

const plans = [
  { name: "Starter", price: "9,999", tag: "Perfect for launches", features: ["Single Page", "Responsive", "Contact Form", "Basic SEO", "5-day delivery"] },
  { name: "Business", price: "14,999", tag: "Most requested", features: ["Up to 5 Pages", "Custom Design", "Branding", "Blog", "Analytics", "SEO"] },
  { name: "E-Commerce", price: "20,000", tag: "For online stores", features: ["Product Management", "Cart & Checkout", "Payment Gateway", "Shipping & Orders", "Fully Responsive"] },
  { name: "Premium", price: "25,000", tag: "Restaurants & hospitality", featured: true, features: ["Everything in E-commerce", "Digital Menu + QR Ordering", "Feedback System", "Reservations", "Loyalty Cards", "Analytics Dashboard", "WhatsApp Ordering"] },
  { name: "Enterprise", price: "45,000", tag: "Full brand + growth", features: ["Everything in Premium", "Brand Identity + Logo", "Social Media Kit", "Technical SEO", "Google Business Setup", "1 Month Support", "Priority Support"] },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="05"
          eyebrow="Website packages"
          title="Transparent pricing. Ridiculous value."
          sub="Fixed-price packages with clear deliverables. Custom scope? Talk to us."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <article
                className={`flex h-full flex-col rounded-[1.75rem] p-7 transition-transform duration-500 hover:-translate-y-1.5 ${
                  p.featured
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-card-foreground"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[11px] uppercase tracking-[0.18em] ${
                      p.featured ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {p.tag}
                  </span>
                  {p.featured && (
                    <span className="rounded-full bg-primary-foreground px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="mt-4 font-display text-2xl font-semibold">{p.name}</h3>

                <div className="mt-5 flex items-end gap-1">
                  <span className={`text-sm ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    ₹
                  </span>
                  <span className="font-display text-5xl font-semibold leading-none">{p.price}</span>
                </div>

                <ul className="mt-7 flex-1 space-y-3 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        className={`mt-0.5 h-4 w-4 flex-none ${
                          p.featured ? "text-primary-foreground" : "text-primary"
                        }`}
                      />
                      <span className={p.featured ? "text-primary-foreground/90" : "text-foreground/80"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  data-magnetic
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium transition-transform hover:scale-[1.03] ${
                    p.featured
                      ? "bg-primary-foreground text-primary"
                      : "bg-foreground text-background hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  Choose {p.name} →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
