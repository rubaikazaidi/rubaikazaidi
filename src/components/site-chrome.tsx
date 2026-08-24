import { Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

const nav = [
  { to: "/", label: "Profile" },
  { to: "/olympiads", label: "Olympiads" },
  { to: "/shooting", label: "Shooting" },
  { to: "/international", label: "Certifications" },
  { to: "/writing", label: "Writing" },
  { to: "/committees", label: "Leadership" },
  { to: "/internships", label: "Internships" },
  { to: "/documents", label: "Documents" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="font-serif text-xl tracking-wide text-primary-foreground">
          {profile.name}
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {nav.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-sans text-xs uppercase tracking-[0.16em] text-primary-foreground/70 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="h-px w-full bg-gold" />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="h-px w-full bg-gold" />
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-sans text-xs uppercase tracking-[0.18em] text-ink-foreground/70">
          {profile.name} · {profile.location}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="font-sans text-xs uppercase tracking-[0.18em] text-gold"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
