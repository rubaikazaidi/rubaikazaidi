import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, EntryList } from "@/components/portfolio";
import { writing } from "@/data/sections";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: `Writing & Publications — ${profile.name}` },
      {
        name: "description",
        content: "Essays, articles and published work, with links and PDF copies.",
      },
      { property: "og:title", content: `Writing & Publications — ${profile.name}` },
      {
        property: "og:description",
        content: "Essays, articles and published work, with links and PDF copies.",
      },
    ],
  }),
  component: WritingPage,
});

function WritingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Writing & Publications"
        intro="Selected pieces. Each entry links out to the published version where one exists, and holds a PDF copy otherwise."
      />
      <EntryList items={writing} />
    </>
  );
}
