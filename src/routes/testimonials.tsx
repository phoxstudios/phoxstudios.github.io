import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "../components/site/SitePage";
import { sectionHead } from "../lib/section-route";
import { findSection } from "../lib/seo";

export const Route = createFileRoute("/testimonials")({
  head: sectionHead("/testimonials"),
  component: () => <SitePage section={findSection("/testimonials")} />,
});
