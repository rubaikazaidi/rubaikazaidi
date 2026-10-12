import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, EntryList } from "@/components/portfolio";
import { committees } from "@/data/sections";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/committees")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: `Initiatives — ${profile.name}` },
      {
        name: "description",
        content:
          "Organising committee roles, conference projects and what each one delivered.",
      },
      { property: "og:title", content: `Initiatives — ${profile.name}` },
      {
        property: "og:description",
        content: "Organising committee roles, conference projects and what each one delivered.",
      },
    ],
  }),
  component: CommitteesPage,
});

function CommitteesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Committees & Projects"
        title="Initiatives"
        intro="Leading teams, building experiences and bringing ideas to life — across events, technology and film."
      />
      <EntryList items={committees} />
    </>
  );
}
