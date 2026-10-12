import { Search, LayoutGrid, List, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CollectionToolbar({ query, onQuery, filters = [], active = "All", onFilter, view, onView, count }: {
  query: string;
  onQuery: (value: string) => void;
  filters?: string[];
  active?: string;
  onFilter?: (value: string) => void;
  view?: "grid" | "list";
  onView?: (value: "grid" | "list") => void;
  count: number;
}) {
  return (
    <div className="mb-8 space-y-4 border-b border-primary/20 pb-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-sm">
          <Search aria-hidden className="absolute left-3 top-3 size-4 text-primary" />
          <input aria-label="Search entries" placeholder="Search entries…" value={query} onChange={(event) => onQuery(event.target.value)} className="h-10 w-full rounded-sm border border-border bg-card pl-10 pr-10 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-ring" />
          {query ? <Button variant="ghost" size="icon" className="absolute right-1 top-0.5" aria-label="Clear search" onClick={() => onQuery("")}><X /></Button> : null}
        </div>
        <div className="flex items-center gap-4">
          <span aria-live="polite" className="text-xs text-muted-foreground">{count} {count === 1 ? "entry" : "entries"}</span>
          {onView ? <div className="flex gap-1 border-l border-border pl-4" aria-label="Entry layout">
            <Button variant={view === "grid" ? "default" : "ghost"} size="icon" onClick={() => onView("grid")} aria-label="Tile view" aria-pressed={view === "grid"} title="Tile view"><LayoutGrid /></Button>
            <Button variant={view === "list" ? "default" : "ghost"} size="icon" onClick={() => onView("list")} aria-label="List view" aria-pressed={view === "list"} title="List view"><List /></Button>
          </div> : null}
        </div>
      </div>
      {filters.length && onFilter ? <div className="flex flex-wrap gap-2" aria-label="Filter entries">
        {["All", ...filters].map((filter) => <Button key={filter} variant={active === filter ? "default" : "outline"} size="sm" aria-pressed={active === filter} onClick={() => onFilter(filter)}>{filter}</Button>)}
      </div> : null}
    </div>
  );
}

export function EmptyCollection({ onReset }: { onReset: () => void }) {
  return <div className="border-y border-border py-16 text-center"><Search className="mx-auto mb-4 size-7 text-primary" /><h2 className="font-serif text-2xl">No matching entries</h2><Button variant="link" onClick={onReset} className="mt-3">Show all entries</Button></div>;
}