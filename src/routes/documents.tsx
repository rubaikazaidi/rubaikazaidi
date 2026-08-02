import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, DocumentSlot } from "@/components/portfolio";
import { sections } from "@/data/sections";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/documents")({
  head: () => ({
    meta: [
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
  return (
    <>
      <PageHeader
        eyebrow="Archive"
        title="Certificates & Documents"
        intro="Every supporting document in one place, grouped by area. Empty slots are reserved and will be filled as the originals are scanned."
      />

      <div className="mt-12 space-y-14">
        {sections.map((section) => (
          <section key={section.key}>
            <h2 className="font-serif text-2xl text-foreground">{section.label}</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {section.items.flatMap((item) =>
                (item.documents ?? []).map((doc) => (
                  <div key={`${item.id}-${doc.label}`}>
                    <p className="mb-1 font-sans text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {item.title}
                    </p>
                    <DocumentSlot doc={doc} />
                  </div>
                )),
              )}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
