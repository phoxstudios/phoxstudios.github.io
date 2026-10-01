import {
  breadcrumbSchema,
  canonicalLink,
  faqSchema,
  findSection,
  serviceSchema,
  socialMeta,
  webPageSchema,
} from "./seo";
import type { SECTIONS } from "./seo";

export type SectionPath = (typeof SECTIONS)[number]["path"];

/**
 * Builds the `head` option for a section route: unique title/description,
 * canonical URL, Open Graph / Twitter tags, and page-specific JSON-LD
 * (WebPage + Breadcrumb always; Service on /services; FAQPage on /faq).
 */
export function sectionHead(path: SectionPath) {
  return () => {
    const section = findSection(path);
    if (!section) return {};
    return {
      meta: [
        { title: section.title },
        { name: "description", content: section.description },
        ...socialMeta({
          title: section.title,
          description: section.description,
          path: section.path,
        }),
        {
          "script:ld+json": webPageSchema(section.path, section.title, section.anchor),
        },
        {
          "script:ld+json": breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: section.label, item: section.path },
          ]),
        },
        ...(section.path === "/services"
          ? [{ "script:ld+json": serviceSchema() }]
          : []),
        ...(section.path === "/faq" ? [{ "script:ld+json": faqSchema() }] : []),
      ],
      links: [canonicalLink(section.path)],
    };
  };
}
