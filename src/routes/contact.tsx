import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, DocumentSlot } from "@/components/portfolio";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${profile.name}` },
      {
        name: "description",
        content: "Get in touch, view profiles and download the full curriculum vitae.",
      },
      { property: "og:title", content: `Contact — ${profile.name}` },
      {
        property: "og:description",
        content: "Get in touch and download the full curriculum vitae.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="For admissions offices, competition organisers and editors."
      />

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-sans text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Direct
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="mt-3 block font-serif text-3xl text-accent"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="mt-2 block font-serif text-2xl text-foreground transition-colors hover:text-accent"
          >
            {profile.phone}
          </a>
          <p className="mt-3 font-sans text-sm text-muted-foreground">{profile.location}</p>
          <ul className="mt-6 space-y-2">
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-accent/40 font-sans text-sm text-foreground transition-colors hover:text-accent"
              >
                LinkedIn · /in/rubaika-zaidi-b229983b6
              </a>
            </li>
            {profile.socials
              .filter((s) => s.label !== "LinkedIn")
              .map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-accent/40 font-sans text-sm text-foreground transition-colors hover:text-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Curriculum Vitae
          </h2>
          <div className="mt-3">
            <DocumentSlot doc={{ label: profile.cv.label, file: profile.cv.file, type: "other" }} />
          </div>
        </div>
      </div>
    </>
  );
}
