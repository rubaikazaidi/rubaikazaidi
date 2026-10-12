import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, EntryList } from "@/components/portfolio";
import { international } from "@/data/sections";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/international")({
  head: () => ({
    meta: [
      { title: `International Competitions & Certifications — ${profile.name}` },
      {
        name: "description",
        content:
          "International competitions and professional certifications, including the ICSC 2026, The Earth Prize 2026 and Python certification, with certificates attached.",
      },
      {
        property: "og:title",
        content: `International Competitions & Certifications — ${profile.name}`,
      },
      {
        property: "og:description",
        content: "International competitions and certifications with verified certificates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: InternationalPage,
});

function InternationalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Global"
        title="International Competitions & Certifications"
        intro="Computing, sustainability and technical learning beyond the classroom."
      />
      <EntryList items={international} gallery />
    </>
  );
}
