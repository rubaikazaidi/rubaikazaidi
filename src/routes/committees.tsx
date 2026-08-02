import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, EntryList } from "@/components/portfolio";
import { committees } from "@/data/sections";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/committees")({
  head: () => ({
    meta: [
      { title: `Leadership & Organising Committees — ${profile.name}` },
      {
        name: "description",
        content: "Organising committee roles, leadership positions and what each one delivered.",
      },
      { property: "og:title", content: `Leadership & Organising Committees — ${profile.name}` },
      {
        property: "og:description",
        content: "Organising committee roles and leadership positions.",
      },
    ],
  }),
  component: CommitteesPage,
});

function CommitteesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title="Organising Committees"
        intro="Roles held on organising committees and student bodies, with appointment letters and contribution certificates."
      />
      <EntryList items={committees} />
    </>
  );
}
