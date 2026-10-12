import type { PortfolioAnecdote, PortfolioDocument, PortfolioItem } from "@/data/portfolio";
import { InstagramEmbed } from "@/components/instagram-embed";
import { Lightbox } from "@/components/lightbox";
import { CollectionToolbar, EmptyCollection } from "@/components/collection-toolbar";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronDown, Download, Maximize2, CalendarDays, FileCheck2 } from "lucide-react";
import { useId, useState } from "react";

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="relative overflow-hidden border-y border-primary/20 bg-primary px-6 py-10 text-primary-foreground sm:px-10 sm:py-12">
      <div className="flex items-center gap-3 text-xs uppercase text-gold"><span className="h-px w-8 bg-gold" />{eyebrow}</div>
      <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">{title}</h1>
      {intro ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80">{intro}</p> : null}
      <span aria-hidden className="absolute bottom-0 right-0 h-2 w-1/3 bg-gold" />
    </header>
  );
}

export function AnecdoteBlock({ anecdote }: { anecdote: PortfolioAnecdote }) {
  return <aside className="mt-8 border-l-2 border-accent/40 pl-5"><p className="text-xs uppercase text-accent">{anecdote.title ?? "Anecdote"}</p><p className="mt-2 max-w-2xl font-serif text-lg italic leading-relaxed text-foreground/80">{anecdote.body}</p></aside>;
}

export function DocumentSlot({ doc, gallery = false }: { doc: PortfolioDocument; gallery?: boolean }) {
  const [open, setOpen] = useState(false);
  if (doc.image) {
    return <div className="overflow-hidden rounded-sm border border-border bg-card">
      <Button variant="ghost" onClick={() => setOpen(true)} aria-label={`Enlarge ${doc.label}`} className={`group h-auto w-full justify-start whitespace-normal rounded-none p-0 text-left hover:bg-secondary hover:text-foreground ${gallery ? "flex-col items-stretch" : "gap-3 p-3"}`}>
        <div className={gallery ? "relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden border-b border-border bg-secondary p-4" : "relative shrink-0"}>
          <img src={doc.image} alt={doc.label} loading="lazy" className={gallery ? "h-full w-full object-contain transition-transform duration-300 motion-safe:group-hover:scale-105" : "h-20 w-16 border border-border object-cover object-top"} />
          {gallery ? <span className="absolute bottom-3 right-3 flex size-8 items-center justify-center bg-primary text-primary-foreground"><Maximize2 /></span> : null}
        </div>
        <span className={`flex min-w-0 flex-1 items-center gap-3 ${gallery ? "p-4" : ""}`}><FileCheck2 className="shrink-0 text-primary" /><span className="text-sm leading-relaxed">{doc.label}</span>{!gallery ? <Maximize2 className="ml-auto shrink-0 text-primary" /> : null}</span>
      </Button>
      {doc.file ? <Button asChild variant="link" className="h-auto w-full justify-start rounded-none border-t border-border px-4 py-3 text-xs"><a href={doc.file} download><Download />Download PDF</a></Button> : null}
      {open ? <Lightbox source={{ src: doc.image, caption: doc.label }} onClose={() => setOpen(false)} /> : null}
    </div>;
  }
  if (doc.file) return <div className="border border-border bg-secondary/50 p-4"><p className="text-sm">{doc.label}</p><Button asChild variant="link" className="mt-2 h-auto p-0 text-xs"><a href={doc.file} download><Download />Download PDF</a></Button></div>;
  return <div className="flex items-center justify-between gap-4 border border-dashed border-border p-4"><span className="text-sm text-muted-foreground">{doc.label}</span><span className="shrink-0 text-[10px] uppercase text-muted-foreground">To be added</span></div>;
}

export function EntryCard({ item, index = 0, gallery = false }: { item: PortfolioItem; index?: number; gallery?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = useId();
  const hasDetails = Boolean(item.bullets?.length || item.anecdote);
  const videoId = item.link?.href.match(/(?:v=|youtu\.be\/)([\w-]{11})/)?.[1];
  return (
    <article className="group mb-6 break-inside-avoid overflow-hidden rounded-sm border border-border bg-card transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-elegant">
      <div className="flex min-h-20 items-center justify-between gap-4 border-b border-border bg-secondary/60 px-6 py-5">
        {item.logo ? <img src={item.logo} alt={`${item.org ?? item.title} logo`} className="h-14 w-auto max-w-[10rem] object-contain" /> : <span className="font-serif text-3xl text-primary/40">{String(index + 1).padStart(2, "0")}</span>}
        {item.period ? <span className="flex items-start gap-2 text-right text-xs leading-relaxed text-muted-foreground"><CalendarDays className="size-4 shrink-0" />{item.period}</span> : null}
      </div>
      <div className="p-6 sm:p-7">
        {item.org ? <p className="mb-3 text-xs uppercase leading-relaxed text-primary">{item.org}</p> : null}
        <h2 className="font-serif text-2xl leading-tight text-foreground sm:text-3xl">{item.title}</h2>
        {item.badge ? <p className="mt-4 border-l-2 border-gold bg-secondary/60 px-3 py-2 text-xs font-medium leading-relaxed text-primary">{item.badge}</p> : null}
        {item.description ? <p className="mt-4 text-sm leading-relaxed text-foreground/80">{item.description}</p> : null}
        {hasDetails ? <>
          <Button variant="link" onClick={() => setExpanded(!expanded)} aria-expanded={expanded} aria-controls={detailsId} className="mt-4 h-auto px-0 py-2">{expanded ? "Less detail" : "Contributions & details"}<ChevronDown className={`transition-transform ${expanded ? "rotate-180" : ""}`} /></Button>
          <div id={detailsId} hidden={!expanded}>
            {item.bullets?.length ? <ul className="mt-3 space-y-3 border-l border-gold pl-4">{item.bullets.map((bullet) => <li key={bullet} className="text-sm leading-relaxed text-foreground/85">{bullet}</li>)}</ul> : null}
            {item.anecdote ? <AnecdoteBlock anecdote={item.anecdote} /> : null}
          </div>
        </> : null}
        {videoId ? <div className="mt-5 aspect-video overflow-hidden rounded-sm border border-border"><iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${videoId}`} title={item.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div> : null}
        {item.link ? <Button asChild variant="link" className="mt-4 h-auto justify-start whitespace-normal p-0 text-left"><a href={item.link.href} target="_blank" rel="noopener noreferrer">{item.link.label}<ArrowUpRight /></a></Button> : null}
        {item.documents?.length ? <div className="mt-6 space-y-3 border-t border-border pt-5">{item.documents.map((doc) => <DocumentSlot key={doc.label} doc={doc} gallery={gallery} />)}</div> : null}
        {item.instagram ? <div className="mt-5"><InstagramEmbed url={item.instagram} /></div> : null}
      </div>
    </article>
  );
}

export function EntryList({ items, gallery = false }: { items: PortfolioItem[]; gallery?: boolean }) {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("All");
  const [view, setView] = useState<"grid" | "list">("grid");
  const years = [...new Set(items.flatMap((item) => item.period?.match(/\b20\d{2}\b/g) ?? []))].sort().reverse();
  const visible = items.filter((item) => (year === "All" || item.period?.includes(year)) && [item.title, item.org, item.description, item.badge, ...(item.bullets ?? [])].join(" ").toLowerCase().includes(query.toLowerCase()));
  return <div className="mt-8">
    <CollectionToolbar query={query} onQuery={setQuery} filters={years.length > 1 ? years : []} active={year} onFilter={setYear} view={view} onView={setView} count={visible.length} />
    {visible.length ? <div className={view === "grid" ? "gap-6 md:columns-2" : "mx-auto max-w-3xl"}>{visible.map((item) => <EntryCard key={item.id} item={item} index={items.indexOf(item)} gallery={gallery} />)}</div> : <EmptyCollection onReset={() => { setQuery(""); setYear("All"); }} />}
  </div>;
}
