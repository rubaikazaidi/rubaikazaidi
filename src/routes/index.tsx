import { createFileRoute, Link } from "@tanstack/react-router";
import { EnlargeableImage } from "@/components/lightbox";
import { profile, stats } from "@/data/portfolio";
import { sections } from "@/data/sections";

const SITE_ORIGIN = "https://rubaikazaidi.info";
const COVER_IMAGE = `${SITE_ORIGIN}${profile.portrait}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: `${profile.name} — Portfolio` },
      {
        name: "description",
        content:
          "Olympiad awards, competitive shooting record, leadership roles, internships and supporting certificates.",
      },
      { property: "og:title", content: `${profile.name} — Portfolio` },
      {
        property: "og:description",
        content:
          "Olympiad awards, competitive shooting, leadership and internships.",
      },
      { property: "og:image", content: COVER_IMAGE },
      { name: "twitter:image", content: COVER_IMAGE },
    ],
  }),
  component: Index,
});

const pad = (value: number) => String(value).padStart(2, "0");

const contents = [
  ...sections.map((section) => ({
    key: section.key,
    label: section.label,
    blurb: section.blurb,
    href: section.href,
    count: section.items.length,
  })),
  {
    key: "documents",
    label: "Documents",
    blurb: "Portfolio Assets",
    href: "/documents",
    count: undefined as number | undefined,
  },
  {
    key: "contact",
    label: "Contact",
    blurb: "Connect & Inquire",
    href: "/contact",
    count: undefined as number | undefined,
  },
];

function Index() {
  return (
    <div className="border-y border-primary/25">
      {/* Masthead */}
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 border-b border-primary/25 px-1 py-3 font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <span>Portfolio</span>
        <span className="hidden sm:inline">{profile.location}</span>
        <span className="text-primary">2026 Edition</span>
      </div>

      {/* Cover */}
      <section className="grid grid-cols-1 gap-10 px-1 py-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">
            {profile.tagline}
          </p>
          <h1 className="mt-6 font-serif text-[clamp(3.5rem,11vw,8.5rem)] leading-[0.82] text-primary">
            Rubaika
            <br />
            Zaidi
          </h1>
          <div className="mt-8 flex items-start gap-6">
            <span aria-hidden className="mt-3 h-16 w-px shrink-0 bg-gold" />
            <p className="max-w-xl text-lg leading-relaxed text-foreground/80">{profile.intro}</p>
          </div>

        </div>

        <figure className="md:col-span-5">
          <EnlargeableImage
            src={profile.portrait}
            caption={profile.portraitCaption}
            label="View portrait"
            className="group block aspect-[4/5] w-full cursor-zoom-in overflow-hidden border border-gold bg-secondary"
            imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <figcaption className="mt-3 flex items-baseline justify-between gap-4 border-t border-gold/40 pt-2 font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <span>{profile.portraitCaption}</span>
            <span className="shrink-0 text-primary">Enlarge</span>
          </figcaption>
        </figure>
      </section>

      {/* At a glance */}
      <section className="grid grid-cols-2 border-t border-primary/25 sm:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col justify-between gap-3 border-t border-primary/20 px-4 py-7 sm:border-t-0 ${
              i === 0 ? "" : "sm:border-l sm:border-primary/20"
            }`}
          >
            <span className="block font-serif text-4xl leading-none text-primary sm:text-5xl">
              {s.value}
            </span>
            <span className="block font-sans text-[10px] uppercase leading-snug tracking-[0.14em] text-muted-foreground">
              {s.label}
            </span>
          </div>
        ))}
      </section>

      {/* Contents */}
      <section className="border-t border-primary/25 px-1 py-12">
        <h2 className="font-serif text-3xl text-primary">Contents</h2>
        <ol className="mt-8">
          {contents.map((entry, index) => (
            <li key={entry.key}>
              <Link
                to={entry.href}
                className="group flex items-baseline gap-4 border-b border-border py-4 transition-colors hover:border-primary/50"
              >
                <span className="w-8 shrink-0 font-sans text-[11px] tracking-[0.18em] text-gold">
                  {pad(index + 1)}
                </span>
                <span className="shrink-0 font-serif text-2xl text-foreground transition-colors group-hover:text-primary">
                  {entry.label}
                </span>
                <span
                  aria-hidden
                  className="min-w-6 flex-1 translate-y-[-3px] border-b border-dotted border-border group-hover:border-primary/40"
                />
                <span className="hidden shrink-0 font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
                  {entry.blurb}
                </span>
                <span className="w-16 shrink-0 text-right font-sans text-[10px] uppercase tracking-[0.18em] text-primary">
                  {entry.count !== undefined ? `${entry.count} entries` : "Open"}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* Editor's note */}
      <section className="border-t border-primary/25 px-1 py-12">
        <h2 className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary">
          Editor&apos;s note
        </h2>
        <div className="mt-6">
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/85 first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.72] first-letter:text-primary">
            Seventeen podiums and eleven olympiad awards sit behind this page. What follows is the
            record itself — competition by competition, rank by rank, with the certificate that
            proves each one.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-sans text-xs uppercase tracking-[0.18em]">
            <a
              href={`mailto:${profile.email}`}
              className="border-b border-primary/40 text-primary transition-colors hover:border-gold hover:text-gold"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              LinkedIn
            </a>
            <span className="text-muted-foreground">{profile.location}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
