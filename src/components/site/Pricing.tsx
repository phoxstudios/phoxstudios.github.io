import { Reveal, SectionHeading } from "./Reveal";

const plans = [
  { name: "Starter", price: "9,999", tag: "Perfect for launches", features: ["Single Page", "Responsive", "Contact Form", "Basic SEO", "5-day delivery"] },
  { name: "Business", price: "14,999", tag: "Most requested", features: ["Up to 5 Pages", "Custom Design", "Branding", "Blog", "Analytics", "SEO"] },
  { name: "E-Commerce", price: "20,000", tag: "For online stores", features: ["Product Management", "Cart & Checkout", "Payment Gateway", "Shipping & Orders", "Fully Responsive"] },
  { name: "Premium", price: "25,000", tag: "Restaurants & hospitality", featured: true, features: ["Everything in E-commerce", "Digital Menu + QR Ordering", "Feedback System", "Reservations", "Loyalty Cards", "Analytics Dashboard", "WhatsApp Ordering", "Google Forms"] },
  { name: "Enterprise", price: "45,000", tag: "Full brand + growth", features: ["Everything in Premium", "Brand Identity + Logo", "Social Media Kit", "Technical SEO", "Google Business Setup", "1 Month Support", "Weekly Reports", "Priority Support", "Premium Hosting"] },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32 px-6">
      <SectionHeading
        eyebrow="Website packages"
        title="Transparent pricing. Ridiculous value."
        sub="Fixed-price packages with clear deliverables. Custom scope? Talk to us."
      />
      <div className="mx-auto mt-16 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.08}>
            <article
              className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all hover:-translate-y-2 ${
                p.featured
                  ? "bg-gradient-to-b from-gold/25 to-transparent glass glow-gold ring-1 ring-gold/60"
                  : "glass"
              }`}
            >
              {p.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink">Popular</span>
              )}
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</p>
              <h3 className="mt-2 font-display text-2xl font-bold">{p.name}</h3>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-sm text-muted-foreground">₹</span>
                <span className="font-display text-5xl font-bold leading-none text-gradient-gold">{p.price}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                data-magnetic
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.03] ${
                  p.featured ? "bg-gold text-ink glow-gold" : "glass text-foreground hover:bg-white/10"
                }`}
              >
                Choose {p.name} →
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
