import type { PortfolioDocument, PortfolioItem } from "@/data/portfolio";
import { InstagramEmbed } from "@/components/instagram-embed";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="border-b border-border pb-10">
      <p className="font-sans text-xs uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
      <h1 className="mt-4 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
        {title}
      </h1>
      {intro ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{intro}</p>
      ) : null}
    </header>
  );
}

export function DocumentSlot({ doc }: { doc: PortfolioDocument }) {
  if (doc.file || doc.image) {
    return (
      <div className="rounded-sm border border-border bg-card px-4 py-3">
        <p className="font-sans text-sm text-foreground">{doc.label}</p>
        <div className="mt-2 flex flex-wrap gap-4">
          {doc.image ? (
            <a
              href={doc.image}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-accent/50 font-sans text-xs uppercase tracking-[0.18em] text-accent transition-colors hover:border-accent"
            >
              View
            </a>
          ) : null}
          {doc.file ? (
            <a
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="border-b border-accent/40 font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Download PDF
            </a>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between gap-4 rounded-sm border border-dashed border-border px-4 py-3">
      <span className="font-sans text-sm text-muted-foreground">{doc.label}</span>
      <span className="font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground/70">
        To be added
      </span>
    </div>
  );
}


export function EntryCard({ item }: { item: PortfolioItem }) {
  const hasInstagram = Boolean(item.instagram);
  return (
    <article className="border-t border-border py-10 first:border-t-0 first:pt-0">
      <div
        className={`grid gap-8 ${
          hasInstagram
            ? "md:grid-cols-[1fr_22rem]"
            : "md:grid-cols-[1fr_18rem]"
        }`}
      >
        <div>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h2 className="font-serif text-2xl text-foreground">{item.title}</h2>
            {item.badge ? (
              <span className="rounded-full border border-accent/40 px-3 py-0.5 font-sans text-xs uppercase tracking-[0.16em] text-accent">
                {item.badge}
              </span>
            ) : null}
          </div>
          <p className="mt-2 font-sans text-sm text-muted-foreground">
            {[item.org, item.period].filter(Boolean).join(" · ")}
          </p>
          {item.description ? (
            <p className="mt-4 max-w-2xl leading-relaxed text-foreground/85">{item.description}</p>
          ) : null}
          {item.bullets?.length ? (
            <ul className="mt-4 space-y-2">
              {item.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-foreground/85">
                  <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-accent" />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {item.link ? (
            <a
              href={item.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block border-b border-accent/50 font-sans text-sm text-accent transition-colors hover:border-accent"
            >
              {item.link.label}
            </a>
          ) : null}
        </div>

        <div>
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Documents
          </p>
          <div className="mt-3 space-y-2">
            {(item.documents?.length
              ? item.documents
              : [{ label: "Certificate", type: "certificate" as const }]
            ).map((doc) => (
              <DocumentSlot key={doc.label} doc={doc} />
            ))}
          </div>
          {hasInstagram && item.instagram ? (
            <div className="mt-4">
              <InstagramEmbed url={item.instagram} />
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function EntryList({ items }: { items: PortfolioItem[] }) {
  return (
    <div className="mt-12">
      {items.map((item) => (
        <EntryCard key={item.id} item={item} />
      ))}
    </div>
  );
}
