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

function Index() {
  return (
    <>
      <section className="border-b border-border pb-14">
        <p className="font-sans text-xs uppercase tracking-[0.28em] text-accent">
          College Application Profile
        </p>
        <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-xl font-serif text-xl italic text-muted-foreground">
          {profile.tagline}
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_16rem]">
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/85">{profile.intro}</p>
          <div>
            <div className="flex aspect-[4/5] items-center justify-center border border-dashed border-border">
              <span className="px-6 text-center font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Portrait — to be added
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-12">
        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-serif text-4xl text-accent">{s.value}</dt>
              <dd className="mt-2 font-sans text-xs uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="py-14">
        <h2 className="font-serif text-3xl text-foreground">Dossier</h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {sections.map((section) => (
            <Link
              key={section.key}
              to={section.href}
              className="group flex items-baseline justify-between gap-6 py-6 transition-colors hover:bg-card"
            >
              <span className="font-serif text-2xl text-foreground group-hover:text-accent">
                {section.label}
              </span>
              <span className="font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {section.items.length} entries
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
