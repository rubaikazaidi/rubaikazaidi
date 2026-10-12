import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, EntryList } from "@/components/portfolio";
import { committees } from "@/data/sections";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/committees")({
  head: () => ({
    meta: [
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
        intro="Roles held on organising committees and student bodies, with appointment letters and contribution certificates."
      />
      <EntryList items={committees} />
    </>
  );
}
