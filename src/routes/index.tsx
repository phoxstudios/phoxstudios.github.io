import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "../components/site/SitePage";
import {
  HOME_TITLE,
  SITE_DESCRIPTION,
  canonicalLink,
  faqSchema,
  socialMeta,
} from "../lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      ...socialMeta({
        title: HOME_TITLE,
        description: SITE_DESCRIPTION,
        path: "/",
      }),
      { "script:ld+json": faqSchema() },
    ],
    links: [canonicalLink("/")],
  }),
  component: Index,
});

function Index() {
  return <SitePage />;
}
