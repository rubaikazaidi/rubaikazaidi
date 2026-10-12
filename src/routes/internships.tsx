import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, EntryList } from "@/components/portfolio";
import { internships } from "@/data/sections";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/internships")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: `Internships & Experience — ${profile.name}` },
      {
        name: "description",
        content:
          "Research and professional internships, with completion letters and recommendations.",
      },
      { property: "og:title", content: `Internships & Experience — ${profile.name}` },
      {
        property: "og:description",
        content: "Research and professional internships, with letters and recommendations.",
      },
    ],
  }),
  component: InternshipsPage,
});

function InternshipsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Internships & Experience"
        intro="From applied AI research to banking technology and school-wide systems — learning through real projects."
      />
      <EntryList items={internships} />
    </>
  );
}
