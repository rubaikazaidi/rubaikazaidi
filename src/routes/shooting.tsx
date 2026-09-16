import { createFileRoute } from "@tanstack/react-router";
import { InstagramEmbed } from "@/components/instagram-embed";
import { shooting } from "@/data/sections";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/shooting")({
  head: () => ({
    meta: [
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
  return (
    <div>
      <header className="grid gap-8 border-b border-gold/50 pb-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div className="min-w-0">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Precision athletics
          </p>
          <h1 className="mt-3 font-serif text-5xl leading-tight text-foreground sm:text-6xl">
            Shooting Career
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A competition-by-competition record of podium finishes across air rifle, peep sight and 50m events.
          </p>
        </div>
        <div className="border-l-4 border-gold pl-5">
          <span className="block font-serif text-5xl text-primary">17</span>
          <span className="font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Shooting podiums
          </span>
        </div>
      </header>

      <section className="mt-10 gap-6 [column-fill:_balance] md:columns-2">
        {shooting.map((item) => {
          return (
            <article
              key={item.id}
              className="mb-6 break-inside-avoid overflow-hidden border border-gold/50 bg-card text-card-foreground"
            >
              {item.tileImage ? (
                <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                  <img
                    src={item.tileImage}
                    alt={`${item.title} competition`}
                    width={1400}
                    height={900}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    style={item.tileImagePosition ? { objectPosition: item.tileImagePosition } : undefined}
                  />
                  <span className="absolute right-4 top-4 bg-primary px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground">
                    {item.period}
                  </span>
                </div>
              ) : null}

              <div className="p-6 sm:p-7">
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-primary">
                  {item.org}
                </p>
                <div className="mt-2 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
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
    </div>
  );
}
