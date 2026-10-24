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
      { title: `Rifle Shooting — ${profile.name}` },
      {
        name: "description",
        content:
          "Competitive rifle shooting record: 10m air rifle and 50m rifle results, scores, rankings and podium finishes.",
      },
      { property: "og:title", content: `Rifle Shooting — ${profile.name}` },
      {
        property: "og:description",
        content:
          "Competitive rifle shooting record: 10m air rifle and 50m rifle results, scores, rankings and podium finishes.",
      },
    ],
  }),
  component: ShootingPage,
});

type ResultRow = {
  competition: string;
  event: string;
  score: string;
  ranks: string[];
};

const tenMetreResults: ResultRow[] = [
  {
    competition: "68th National Shooting Championship, Bhopal, 2025",
    event: "10m air rifle",
    score: "625.3",
    ranks: ["Sub Youth 30th", "Youth 68th", "Junior 77th", "Women 115th"],
  },
  {
    competition: "Selection Trial 2, Rifle Group B, Pune, 2026",
    event: "10m air rifle",
    score: "622.6",
    ranks: ["Youth 57th", "Junior 99th", "Women 146th"],
  },
  {
    competition: "Selection Trial 3, Rifle Group B, New Delhi, 2026",
    event: "10m air rifle",
    score: "621.2",
    ranks: ["Youth 90th", "Junior 144th", "Women 217th"],
  },
  {
    competition: "27th K. S. Singh Inter-School, Chennai, 2025",
    event: ".177 peep sight air rifle",
    score: "617.9",
    ranks: ["Youth 13th"],
  },
  {
    competition: "67th National Shooting Championship, Bhopal, 2024",
    event: "10m air rifle",
    score: "611.7",
    ranks: ["Sub Youth 202nd", "Youth 355th"],
  },
];

const fiftyMetreResults: ResultRow[] = [
  {
    competition: "13th West Zone Championship, Goa, 2026",
    event: "50m rifle 3 positions",
    score: "561",
    ranks: ["Youth 1st", "Junior 1st", "Women 2nd"],
  },
  {
    competition: "13th West Zone Championship, Goa, 2026",
    event: "50m rifle prone",
    score: "571",
    ranks: ["Youth 3rd", "Junior 4th", "Women 4th"],
  },
];

const scoreTrend = [
  { year: "2024", score: 611.7 },
  { year: "2025", score: 625.3 },
  { year: "2026", score: 622.6 },
];

const CHART_MIN = 600;
const CHART_MAX = 654;

function ScoreChart() {
  const width = 640;
  const height = 240;
  const pad = { left: 48, right: 20, top: 24, bottom: 36 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const x = (i: number) => pad.left + (i * plotW) / (scoreTrend.length - 1);
  const y = (score: number) =>
    pad.top + (1 - (score - CHART_MIN) / (CHART_MAX - CHART_MIN)) * plotH;
  const gridValues = [600, 618, 636, 654];
  const points = scoreTrend.map((d, i) => `${x(i)},${y(d.score)}`).join(" ");

  return (
    <figure className="rounded-sm border border-border bg-card p-5 sm:p-6">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Line chart of best 10m air rifle score per year: 611.7 in 2024, 625.3 in 2025, 622.6 in 2026"
        className="w-full"
      >
        {gridValues.map((value) => (
          <g key={value}>
            <line
              x1={pad.left}
              x2={width - pad.right}
              y1={y(value)}
              y2={y(value)}
              className="stroke-border"
              strokeDasharray={value === CHART_MIN ? undefined : "3 4"}
            />
            <text
              x={pad.left - 8}
              y={y(value) + 4}
              textAnchor="end"
              className="fill-muted-foreground text-[11px]"
            >
              {value}
            </text>
          </g>
        ))}
        <polyline
          points={points}
          fill="none"
          className="stroke-primary"
          strokeWidth={2.5}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {scoreTrend.map((d, i) => (
          <g key={d.year}>
            <circle cx={x(i)} cy={y(d.score)} r={4.5} className="fill-primary" />
            <text
              x={x(i)}
              y={y(d.score) - 10}
              textAnchor="middle"
              className="fill-foreground text-[12px] font-semibold"
            >
              {d.score}
            </text>
            <text
              x={x(i)}
              y={height - 10}
              textAnchor="middle"
              className="fill-muted-foreground text-[12px]"
            >
              {d.year}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-3 text-xs text-muted-foreground">
        Best 10m air rifle score per year. Maximum 654. Source: NRAI athlete history.
      </figcaption>
    </figure>
  );
}

function ResultsTable({ rows }: { rows: ResultRow[] }) {
  return (
    <div className="overflow-x-auto rounded-sm border border-border bg-card">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-secondary">
            {["Competition", "Event", "Score", "Rank by category"].map((heading) => (
              <th
                key={heading}
                scope="col"
                className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.competition + row.event}
              className="border-b border-border last:border-b-0"
            >
              <td className="px-4 py-3.5 font-medium">{row.competition}</td>
              <td className="px-4 py-3.5 text-foreground/80">{row.event}</td>
              <td className="px-4 py-3.5 font-serif text-lg text-primary">{row.score}</td>
              <td className="px-4 py-3.5">
                <ul className="space-y-0.5 text-foreground/80">
                  {row.ranks.map((rank) => (
                    <li key={rank}>{rank}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-gold/50 pb-4">
      <h2 className="font-serif text-3xl sm:text-4xl">{title}</h2>
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
}

function ShootingPage() {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("All");
  const [photo, setPhoto] = useState<{ src: string; caption: string } | null>(null);
  const years = [...new Set(shooting.flatMap((item) => item.period?.match(/\b20\d{2}\b/g) ?? []))].sort().reverse();
  const visible = shooting.filter((item) => (year === "All" || item.period === year) && [item.title, item.org, item.description, ...(item.bullets ?? [])].join(" ").toLowerCase().includes(query.toLowerCase()));
  return (
    <div>
      <PageHeader eyebrow="Precision athletics" title="Rifle Shooting" intro="Scores, rankings and podium finishes across 10m air rifle and 50m rifle competition." />
      <div className="mb-10 flex flex-wrap items-center gap-4 border-b border-gold/50 py-5"><Trophy className="size-6 text-primary" /><span className="font-serif text-4xl text-primary">17</span><span className="text-xs uppercase text-muted-foreground">Shooting podiums</span><span className="ml-auto text-sm text-muted-foreground">10m & 50m rifle</span></div>

      <section aria-labelledby="ten-metre" className="mb-14">
        <div id="ten-metre"><SectionHeading title="10m" subtitle=".177 air rifle" /></div>
        <div className="mb-6">
          <ScoreChart />
        </div>
        <ResultsTable rows={tenMetreResults} />
      </section>

      <section aria-labelledby="fifty-metre" className="mb-14">
        <div id="fifty-metre"><SectionHeading title="50m" subtitle="50m rifle" /></div>
        <ResultsTable rows={fiftyMetreResults} />
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          3P means three positions (kneeling, prone, standing). Prone means lying down. Categories are age groups.
        </p>
      </section>

      <section aria-labelledby="training">
        <div id="training"><SectionHeading title="Training" subtitle="Podium finishes by competition" /></div>
        <CollectionToolbar query={query} onQuery={setQuery} filters={years} active={year} onFilter={setYear} count={visible.length} />

        {!visible.length ? <EmptyCollection onReset={() => { setQuery(""); setYear("All"); }} /> : null}
        <div className="gap-6 [column-fill:_balance] md:columns-2">
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
                    <h3 className="min-w-0 font-serif text-3xl leading-tight">{item.title}</h3>
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
        </div>
      </section>
      {photo ? <Lightbox source={photo} onClose={() => setPhoto(null)} /> : null}
    </div>
  );
}
