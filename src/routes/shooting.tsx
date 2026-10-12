import { createFileRoute } from "@tanstack/react-router";
import { InstagramEmbed } from "@/components/instagram-embed";
import { shooting } from "@/data/sections";
import { profile } from "@/data/portfolio";
import { PageHeader } from "@/components/portfolio";
import { CollectionToolbar, EmptyCollection } from "@/components/collection-toolbar";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/lightbox";
import { Maximize2, Trophy } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/shooting")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
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
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("All");
  const [photo, setPhoto] = useState<{ src: string; caption: string } | null>(null);
  const years = [...new Set(shooting.flatMap((item) => item.period?.match(/\b20\d{2}\b/g) ?? []))].sort().reverse();
  const visible = shooting.filter((item) => (year === "All" || item.period === year) && [item.title, item.org, item.description, ...(item.bullets ?? [])].join(" ").toLowerCase().includes(query.toLowerCase()));
  return (
    <div>
      <PageHeader eyebrow="Precision athletics" title="Shooting Career" intro="A competition-by-competition record of podium finishes across air rifle, peep sight and 50m events." />
      <div className="mb-8 flex flex-wrap items-center gap-4 border-b border-gold/50 py-5"><Trophy className="size-6 text-primary" /><span className="font-serif text-4xl text-primary">17</span><span className="text-xs uppercase text-muted-foreground">Shooting podiums</span><span className="ml-auto text-sm text-muted-foreground">10m & 50m rifle</span></div>
      <CollectionToolbar query={query} onQuery={setQuery} filters={years} active={year} onFilter={setYear} count={visible.length} />

      {!visible.length ? <EmptyCollection onReset={() => { setQuery(""); setYear("All"); }} /> : null}
      <section className="gap-6 [column-fill:_balance] md:columns-2">
        {visible.map((item) => {
          return (
            <article
              key={item.id}
              className="mb-6 break-inside-avoid overflow-hidden rounded-sm border border-gold/50 bg-card text-card-foreground transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-elegant"
            >
              {item.tileImage ? (
                <Button variant="ghost" className="group relative block aspect-[16/9] h-auto w-full overflow-hidden rounded-none bg-secondary p-0" aria-label={`Enlarge ${item.title} photo`} onClick={() => { if (item.tileImage) setPhoto({ src: item.tileImage, caption: item.title }); }}>
                  <img
                    src={item.tileImage}
                    alt={`${item.title} competition`}
                    width={1400}
                    height={900}
                    loading="lazy"
                     className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                    style={item.tileImagePosition ? { objectPosition: item.tileImagePosition } : undefined}
                  />
                  <span className="absolute right-4 top-4 bg-primary px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground">
                    {item.period}
                  </span>
                   <span className="absolute bottom-3 right-3 flex size-8 items-center justify-center bg-primary text-primary-foreground"><Maximize2 /></span>
                </Button>
              ) : null}

              <div className="p-6 sm:p-7">
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-primary">
                  {item.org}
                </p>
                <div className="mt-2 flex flex-wrap items-start gap-4">
                  <h2 className="min-w-0 font-serif text-3xl leading-tight">{item.title}</h2>
                  {item.badge ? (
                    <span className="shrink-0 border border-primary/40 px-3 py-1 font-sans text-xs uppercase tracking-[0.12em] text-primary">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
                {item.description ? (
                  <p className="mt-4 leading-relaxed text-foreground/75">
                    {item.description}
                  </p>
                ) : null}
                {item.bullets?.length ? (
                  <ul className="mt-5 border-t border-current/15 pt-4">
                    {item.bullets.map((achievement) => (
                      <li key={achievement} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 py-1.5 text-sm leading-relaxed">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 rotate-45 bg-primary" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {item.instagram ? (
                  <div className="mt-6 overflow-hidden bg-background">
                    <InstagramEmbed
                      url={item.instagram}
                      {...(item.instagramSlide
                        ? { carouselIndex: item.instagramSlide }
                        : {})}
                    />
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </section>
      {photo ? <Lightbox source={photo} onClose={() => setPhoto(null)} /> : null}
    </div>
  );
}
