import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "../components/site/SitePage";
import { sectionHead } from "../lib/section-route";
import { findSection } from "../lib/seo";

export const Route = createFileRoute("/restaurant")({
  head: sectionHead("/restaurant"),
  component: () => <SitePage section={findSection("/restaurant")} />,
});
