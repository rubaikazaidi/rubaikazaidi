import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, EntryList } from "@/components/portfolio";
import { olympiads } from "@/data/sections";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/olympiads")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        intro="Mathematics, computing and a growing record of academic competition."
      />
      <EntryList items={olympiads} gallery />
    </>
  );
}
