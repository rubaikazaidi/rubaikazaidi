# College Application Portfolio Site

A polished, multi-page personal profile site designed for admissions readers: fast to scan, credible, and built so you can drop in certificates and documents later without redesigning anything.

## Visual direction

- Palette: warm cream background, deep wine red as the single accent, near-black ink for text, muted taupe for secondary detail. No gradients, no purple, no generic SaaS look.
- Typography: a refined serif for headings (editorial, admissions-appropriate) paired with a clean sans for body text.
- Layout language: generous margins, thin rules, restrained motion, subtle card elevation. Print-adjacent, like a well-set dossier.

## Pages

1. **Home** — name, one-line positioning statement, portrait space, short intro paragraph, and a compact "at a glance" strip (olympiad medals, competition wins, shooting accolades, publications, internships).
2. **Achievements & Olympiads** — grouped by subject/competition with year, level (school/national/international), award, and an attached-certificate slot.
3. **Shooting Career** — timeline of competitions, disciplines, scores/rankings, plus space for photos and certificates.
4. **Writing** — list of pieces/publications with title, venue, date, short blurb, and a link or PDF slot.
5. **Organizing Committees & Leadership** — roles held, organization, term, and a few bullets on what you actually ran.
6. **Internships & Experience** — organization, role, dates, description, and a slot for the recommendation/completion letter.
7. **Documents** — a single archive page listing every certificate and document in one filterable grid.
8. **Contact** — email, LinkedIn/socials, and a downloadable CV slot.

## Built-in space for certificates and documents

Every entry across the site renders through one shared item component that always includes a document area. When no file is attached yet it shows a tasteful dashed "Certificate — to be added" placeholder rather than a broken or empty box. Attaching a file later means adding one file to the assets folder and one line to that entry's data.

All content lives in typed data files (one per section), so adding an award, a match result, an article, or a document is a small, obvious edit in one place — no component surgery.

## Technical notes

- TanStack Start file routes, one route per section, each with its own SEO title/description/OG tags so individual pages can be shared with admissions officers.
- Section content in `src/data/*.ts` with a shared `PortfolioItem` type carrying optional `documents: { label, file, type }[]`.
- Shared components: `SectionHeader`, `EntryCard`, `Timeline`, `DocumentSlot`, `StatStrip`, plus site header/footer in `__root.tsx`.
- Cream/wine/black palette added as oklch semantic tokens in `src/styles.css`; fonts loaded via `<link>` in the root head.
- Certificate files dropped into `public/documents/`; document slots render a viewer link when a file is present.
- Placeholder text used for your specific accomplishments — you replace the data files with real details, or send them and I'll fill them in.

## Not included yet

- No login, database, or upload UI — documents are static files. If you'd rather upload certificates through an admin panel in the browser, say so and I'll add a backend for it.
