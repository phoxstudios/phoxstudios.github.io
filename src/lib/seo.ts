/**
 * Central SEO config for Phox Studio.
 *
 * Every canonical URL, og:url, sitemap entry and JSON-LD @id derives from
 * `SITE_URL` so the whole site stays consistent when the production domain
 * changes. Override per-environment with VITE_SITE_URL if needed.
 */
export const SITE_URL = (
  import.meta.env?.VITE_SITE_URL ?? "https://phoxstudio.vercel.app"
).replace(/\/+$/, "");

export const SITE_NAME = "PHOXSTUDIO";
export const SITE_TAGLINE = "Designing Ideas Into Digital Success";
/** Keyword-rich, ≤60-char title for the home page. */
export const HOME_TITLE =
  "Phox Studio | Digital Agency in Kerala | Branding, Web Design";
/** Keyword-rich, ≤160-char meta description for the home page. */
export const SITE_DESCRIPTION =
  "Premium digital agency in Calicut, Kerala. Expert brand identity, web design, e-commerce, SEO & digital marketing. Affordable packages from \u20B99,999. Start your project today.";
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;
export const OG_IMAGE_WIDTH = 1920;
export const OG_IMAGE_HEIGHT = 1080;

/**
 * Sections rendered on the home page. Each also has a real crawlable route at
 * its path (served by src/routes/$.tsx) so deep links like /services work for
 * search engines and analytics instead of fragile hash URLs.
 */
export const SECTIONS = [
  {
    path: "/about",
    anchor: "about",
    label: "About",
    title: `About the Studio — ${SITE_NAME}`,
    description:
      "Phox Studio fuses strategy, design, and engineering into digital products that feel effortless — a premium branding and design studio in Calicut, Kerala.",
  },
  {
    path: "/work",
    anchor: "work",
    label: "Work",
    title: `Selected Work — Branding & Web Design Cases | ${SITE_NAME}`,
    description:
      "Recent brand identity, web design, product, and e-commerce projects by PHOXSTUDIO — a digital agency in Calicut, Kerala.",
  },
  {
    path: "/services",
    anchor: "services",
    label: "Services",
    title: `Design & Development Services in Kerala — ${SITE_NAME}`,
    description:
      "Brand identity, logo design, web development, UI/UX, e-commerce, SEO & digital marketing services in Calicut, Kerala. Fast, accessible, and conversion-focused.",
  },
  {
    path: "/process",
    anchor: "process",
    label: "Process",
    title: `Our Process — ${SITE_NAME}`,
    description:
      "How PHOXSTUDIO takes a project from discovery and research to design, build, and launch — prototype-driven and delivered on time.",
  },
  {
    path: "/pricing",
    anchor: "pricing",
    label: "Pricing",
    title: `Affordable Website Packages in Kerala — ${SITE_NAME}`,
    description:
      "Transparent fixed-price website and branding packages in Calicut, Kerala — from \u20B99,999. Starter, Business, E-Commerce, Premium, and Enterprise plans.",
  },
  {
    path: "/restaurant",
    anchor: "restaurant",
    label: "Restaurant Solutions",
    title: `Restaurant Digital Menu & QR Ordering in Kerala — ${SITE_NAME}`,
    description:
      "Digital menus, QR ordering, reservations, loyalty, and WhatsApp ordering for restaurants and hospitality brands in Calicut, Kerala and across India.",
  },
  {
    path: "/testimonials",
    anchor: "testimonials",
    label: "Testimonials",
    title: `What Clients Say — ${SITE_NAME}`,
    description:
      "Feedback from founders and brands that built their digital presence with PHOXSTUDIO.",
  },
  {
    path: "/faq",
    anchor: "faq",
    label: "FAQ",
    title: `Frequently Asked Questions — ${SITE_NAME}`,
    description:
      "Answers about timelines, pricing, remote collaboration, and what's included in a PHOXSTUDIO brand identity package.",
  },
  {
    path: "/contact",
    anchor: "contact",
    label: "Contact",
    title: `Contact — ${SITE_NAME}`,
    description:
      "Start a project with PHOXSTUDIO — email, WhatsApp, or the contact form. Based in Calicut, Kerala, working worldwide.",
  },
] as const;

export type SectionPage = (typeof SECTIONS)[number];

export function findSection(pathname: string): SectionPage | undefined {
  const clean = pathname.replace(/\/+$/, "") || "/";
  return SECTIONS.find((s) => s.path === clean);
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  if (path === "/" || path === "") return `${SITE_URL}/`;
  return `${SITE_URL}${path}`;
}

/** Canonical link for a path. */
export function canonicalLink(path: string) {
  return { rel: "canonical" as const, href: absoluteUrl(path) };
}

/** Open Graph / Twitter meta for a page. */
export function socialMeta(opts: { title: string; description: string; path: string }) {
  const url = absoluteUrl(opts.path);
  return [
    { property: "og:type" as const, content: "website" },
    { property: "og:site_name" as const, content: SITE_NAME },
    { property: "og:locale" as const, content: "en_IN" },
    { property: "og:title" as const, content: opts.title },
    { property: "og:description" as const, content: opts.description },
    { property: "og:url" as const, content: url },
    { property: "og:image" as const, content: OG_IMAGE_URL },
    { property: "og:image:width" as const, content: String(OG_IMAGE_WIDTH) },
    { property: "og:image:height" as const, content: String(OG_IMAGE_HEIGHT) },
    { property: "og:image:alt" as const, content: `${SITE_NAME} — ${SITE_TAGLINE}` },
    { name: "twitter:card" as const, content: "summary_large_image" },
    { name: "twitter:title" as const, content: opts.title },
    { name: "twitter:description" as const, content: opts.description },
    { name: "twitter:image" as const, content: OG_IMAGE_URL },
    { name: "twitter:url" as const, content: url },
  ];
}

/* ------------------------------------------------------------------ */
/* Structured data (JSON-LD)                                          */
/* ------------------------------------------------------------------ */

const EMAIL = "phoxstudios@gmail.com";
const PHONE = "+91-7034606037";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "Phox Studio",
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: `${SITE_URL}/favicon.png`,
    },
    image: OG_IMAGE_URL,
    description: SITE_DESCRIPTION,
    email: EMAIL,
    telephone: PHONE,
    foundingLocation: { "@type": "Place", name: "Kerala, India" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kozhikode",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE,
        contactType: "sales",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Malayalam"],
      },
      {
        "@type": "ContactPoint",
        email: EMAIL,
        contactType: "customer support",
        availableLanguage: ["English"],
      },
    ],
    sameAs: ["https://wa.me/917034606037"],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "Phox Studio",
    alternateName: "PHOXSTUDIO",
    image: OG_IMAGE_URL,
    url: `${SITE_URL}/`,
    telephone: PHONE,
    email: EMAIL,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kozhikode",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 11.2588, longitude: 75.7804 },
    areaServed: ["IN", "Worldwide"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function webPageSchema(path: string, name: string, anchor?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl(path),
    url: absoluteUrl(path),
    name,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    ...(anchor ? { hasPart: { "@id": `${SITE_URL}/#${anchor}` } } : {}),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; item: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.item),
    })),
  };
}

const SERVICES_KNOWLEDGE: Array<{ name: string; text: string }> = [
  { name: "Graphic Design", text: "Editorial-grade visuals and marketing collateral." },
  { name: "Brand Identity", text: "Systems that define how the world sees your company." },
  { name: "Logo Design", text: "Symbols crafted with intent, tested at every scale." },
  { name: "Web Development", text: "Fast, accessible, SEO-first sites and apps." },
  { name: "UI / UX", text: "Interfaces people actually enjoy using." },
  { name: "E-Commerce", text: "Storefronts optimized for conversion and craft." },
  { name: "Photography", text: "Product, lifestyle, and brand imagery." },
  { name: "Videography", text: "Cinematic brand films and product motion." },
  { name: "Advertisement", text: "Campaigns that get remembered and clicked." },
  { name: "Social Media", text: "Content systems and community that compounds." },
  { name: "Digital Marketing", text: "SEO, ads, and lifecycle that ships pipeline." },
];

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl("/services")}#service`,
    serviceType: SERVICES_KNOWLEDGE.map((i) => i.name),
    name: "Branding, Web & Digital Marketing Services",
    description:
      "PHOXSTUDIO offers brand identity, logo design, web development, UI/UX, e-commerce, photography, videography, advertising, social media and digital marketing services.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
    url: absoluteUrl("/services"),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Phox Studio Services",
      itemListElement: SERVICES_KNOWLEDGE.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.text },
      })),
    },
  };
}

/** Single source of truth for FAQ — rendered by FAQ.tsx and mirrored in faqSchema(). */
export const FAQS = [
  {
    q: "How much does a website cost in Kerala?",
    a: "Our website packages in Kerala start at \u20B99,999 for a focused single-page site and scale up through Business, E-Commerce, and Premium plans to \u20B945,000 for a full brand-plus-growth build. Every package is fixed-price with clear deliverables, so there are no surprises.",
  },
  {
    q: "Are you the best branding agency in Calicut for startups?",
    a: "Phox Studio is a Calicut-based branding and digital design studio trusted by founders across Kerala and worldwide. We pair strategy with craft — positioning, logo, identity system, and a fast, SEO-ready site — so emerging brands look established from day one.",
  },
  {
    q: "Do you offer affordable web design packages in India?",
    a: "Yes. We keep our pricing transparent and affordable without cutting corners: responsive design, basic SEO, and on-time delivery are included from the Starter plan. Custom scope is quoted after a short discovery call.",
  },
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
    q: "Do you build digital menus and QR ordering for restaurants?",
    a: "Yes. Our restaurant solutions cover digital menus, QR table ordering, WhatsApp ordering, reservations, loyalty, and analytics — built to pay for themselves through higher order volume.",
  },
];

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
