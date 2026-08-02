import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, EntryList } from "@/components/portfolio";
import { olympiads } from "@/data/sections";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/olympiads")({
  head: () => ({
    meta: [
      { title: `Olympiads & Competitions — ${profile.name}` },
      {
        name: "description",
        content:
          "Olympiad medals, competition placements and academic awards, with certificates attached.",
      },
      { property: "og:title", content: `Olympiads & Competitions — ${profile.name}` },
      {
        property: "og:description",
        content: "Olympiad medals, competition placements and academic awards.",
      },
    ],
  }),
  component: OlympiadsPage,
});

function OlympiadsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Olympiads & Competitions"
        intro="Every award listed below has a slot for its certificate. Slots marked 'to be added' are waiting on the scanned document."
      />
      <EntryList items={olympiads} />
    </>
  );
}
