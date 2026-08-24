import { createFileRoute, Link } from "@tanstack/react-router";
import { profile, stats } from "@/data/portfolio";
import { sections } from "@/data/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — Academic & Competitive Profile` },
      {
        name: "description",
        content:
          "College application profile: olympiad awards, competitive shooting record, published writing, leadership roles, internships and supporting certificates.",
      },
      { property: "og:title", content: `${profile.name} — Academic & Competitive Profile` },
      {
        property: "og:description",
        content:
          "Olympiad awards, competitive shooting, published writing, leadership and internships.",
      },
    ],
  }),
  component: Index,
});

const pad = (value: string) => (/^\d$/.test(value) ? `0${value}` : value);

function Index() {
  return (
    <div className="border-y border-primary py-12">
      <section className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            College Application Profile
          </p>
          <h1 className="mb-6 font-serif text-6xl leading-none text-primary sm:text-7xl md:text-8xl">
            {profile.name}
          </h1>
          <p className="border-l-4 border-gold pl-6 font-sans text-xl font-light italic tracking-wide text-foreground sm:text-2xl">
            {profile.tagline}
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80">
            {profile.intro}
          </p>
        </div>
        <div className="flex flex-col justify-end md:col-span-4">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-gold bg-primary/5">
            <div className="absolute inset-0 flex items-center justify-center font-serif italic text-primary/25">
              Portrait
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 grid grid-cols-2 gap-4 border-y border-gold/40 py-8 md:grid-cols-5">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`text-center ${i === 0 ? "" : "md:border-l md:border-gold/40"}`}
          >
            <span className="block font-serif text-4xl text-primary">{pad(String(s.value))}</span>
            <span className="mt-1 block font-sans text-[10px] uppercase tracking-[0.2em] text-foreground/60">
              {s.label}
            </span>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-px border border-gold/40 bg-gold/40 md:grid-cols-4">
        {sections.map((section) => (
          <Link
            key={section.key}
            to={section.href}
            className="group bg-background p-8 transition-colors duration-300 hover:bg-primary"
          >
            <span className="block font-serif text-2xl text-foreground group-hover:text-primary-foreground">
              {section.label}
            </span>
            <span className="mt-2 block font-sans text-xs uppercase tracking-wide text-gold">
              {section.blurb}
            </span>
            <span className="mt-4 block font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary-foreground/70">
              {section.items.length} entries
            </span>
          </Link>
        ))}
        <Link
          to="/documents"
          className="group bg-background p-8 transition-colors duration-300 hover:bg-primary"
        >
          <span className="block font-serif text-2xl text-foreground group-hover:text-primary-foreground">
            Documents
          </span>
          <span className="mt-2 block font-sans text-xs uppercase tracking-wide text-gold">
            Portfolio Assets
          </span>
        </Link>
        <Link
          to="/contact"
          className="group bg-primary p-8 transition-colors duration-300 hover:bg-ink"
        >
          <span className="block font-serif text-2xl text-primary-foreground">Contact</span>
          <span className="mt-2 block font-sans text-xs uppercase tracking-wide text-gold">
            Connect &amp; Inquire
          </span>
        </Link>
      </section>
    </div>
  );
}
