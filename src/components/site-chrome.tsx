import { Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

const nav = [
  { to: "/", label: "Profile" },
  { to: "/olympiads", label: "Olympiads" },
  { to: "/shooting", label: "Shooting" },
  { to: "/writing", label: "Writing" },
  { to: "/committees", label: "Leadership" },
  { to: "/internships", label: "Internships" },
  { to: "/documents", label: "Documents" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="font-serif text-lg tracking-wide text-foreground">
          {profile.name}
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {nav.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-sans text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-accent"
              activeProps={{ className: "text-accent" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {profile.name} · {profile.location}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="font-sans text-xs uppercase tracking-[0.18em] text-accent"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
