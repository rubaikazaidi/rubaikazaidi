import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, EntryList } from "@/components/portfolio";
import { shooting } from "@/data/sections";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/shooting")({
  head: () => ({
    meta: [
      { title: `Shooting Career — ${profile.name}` },
      {
        name: "description",
        content:
          "Competitive shooting record: disciplines, championships, rankings and result sheets.",
      },
      { property: "og:title", content: `Shooting Career — ${profile.name}` },
      {
        property: "og:description",
        content: "Competitive shooting record: championships, rankings and result sheets.",
      },
    ],
  }),
  component: ShootingPage,
});

function ShootingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sport"
        title="Shooting Career"
        intro="Competition history in reverse chronological order, with room for result sheets, range photographs and federation certificates."
      />
      <EntryList items={shooting} />
    </>
  );
}
