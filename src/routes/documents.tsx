import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, DocumentSlot } from "@/components/portfolio";
import { sections } from "@/data/sections";
import { useState } from "react";
import { CollectionToolbar, EmptyCollection } from "@/components/collection-toolbar";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/documents")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { title: `Certificates & Documents — ${profile.name}` },
      {
        name: "description",
        content:
          "Complete archive of certificates, award letters, recommendations and supporting documents.",
      },
      { property: "og:title", content: `Certificates & Documents — ${profile.name}` },
      {
        property: "og:description",
        content: "Complete archive of certificates, letters and supporting documents.",
      },
    ],
  }),
  component: DocumentsPage,
});

function DocumentsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const documents = sections.flatMap((section) => section.items.flatMap((item) => (item.documents ?? []).map((doc) => ({ doc, title: item.title, category: section.label, id: `${item.id}-${doc.label}` }))));
  const categories = [...new Set(documents.map((entry) => entry.category))];
  const visible = documents.filter((entry) => (category === "All" || category === entry.category) && `${entry.title} ${entry.doc.label}`.toLowerCase().includes(query.toLowerCase()));
  return <>
    <PageHeader eyebrow="Archive" title="Certificates & Documents" intro="The record behind the achievements — certificates, recommendations and supporting documents." />
    <div className="mt-8">
      <CollectionToolbar query={query} onQuery={setQuery} filters={categories} active={category} onFilter={setCategory} count={visible.length} />
      {visible.length ? <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">{visible.map((entry) => <article key={entry.id} className="min-w-0"><p className="mb-2 text-[10px] uppercase text-primary">{entry.category}</p><h2 className="mb-3 min-h-12 font-serif text-lg leading-snug">{entry.title}</h2><DocumentSlot doc={entry.doc} gallery /></article>)}</div> : <EmptyCollection onReset={() => { setQuery(""); setCategory("All"); }} />}
    </div>
  </>;
}
