import type { PortfolioItem } from "./portfolio";

export const olympiads: PortfolioItem[] = [
  {
    id: "imo",
    title: "International Mathematical Olympiad",
    org: "National Team",
    period: "2025",
    badge: "Silver Medal",
    description:
      "Placeholder entry. Replace with the competition, the level you reached, and your result.",
    documents: [{ label: "Medal certificate", type: "certificate" }],
  },
  {
    id: "national-physics",
    title: "National Physics Olympiad",
    org: "Ministry of Education",
    period: "2024",
    badge: "1st Place, National Round",
    description: "Placeholder entry. Describe the round, the field size, and the outcome.",
    documents: [
      { label: "First place certificate", type: "certificate" },
      { label: "Selection letter", type: "letter" },
    ],
  },
  {
    id: "informatics",
    title: "Regional Informatics Olympiad",
    org: "Regional Committee",
    period: "2023",
    badge: "Gold Medal",
    description: "Placeholder entry.",
    documents: [{ label: "Award certificate", type: "certificate" }],
  },
];

export const shooting: PortfolioItem[] = [
  {
    id: "nationals-2025",
    title: "National Championship — 10m Air Rifle",
    org: "National Shooting Federation",
    period: "2025",
    badge: "Finalist — 4th",
    description: "Placeholder entry. Add discipline, qualification score, and final ranking.",
    documents: [
      { label: "Result sheet", type: "certificate" },
      { label: "Competition photo", type: "photo" },
    ],
  },
  {
    id: "state-2024",
    title: "State Championship — 50m Rifle 3 Positions",
    org: "State Rifle Association",
    period: "2024",
    badge: "Silver",
    description: "Placeholder entry.",
    documents: [{ label: "Silver medal certificate", type: "certificate" }],
  },
  {
    id: "club-2023",
    title: "Club Ranking Series",
    org: "Home Range",
    period: "2022 — 2023",
    badge: "Ranked 2nd overall",
    description: "Placeholder entry. Training volume, coach, and personal bests fit well here.",
    documents: [{ label: "Season summary", type: "other" }],
  },
];

export const writing: PortfolioItem[] = [
  {
    id: "essay-1",
    title: "Title of Your Essay or Article",
    org: "Publication or Journal",
    period: "2025",
    badge: "Feature",
    description:
      "Placeholder entry. One or two sentences on what the piece argues and why it mattered.",
    link: { label: "Read online", href: "#" },
    documents: [{ label: "PDF copy", type: "publication" }],
  },
  {
    id: "essay-2",
    title: "Short Story or Column Title",
    org: "School Literary Review",
    period: "2024",
    badge: "Editor's pick",
    description: "Placeholder entry.",
    documents: [{ label: "PDF copy", type: "publication" }],
  },
];

export const committees: PortfolioItem[] = [
  {
    id: "mun",
    title: "Secretary-General",
    org: "Model United Nations Conference",
    period: "2025",
    badge: "Organising Committee",
    bullets: [
      "Placeholder: size of the conference and number of delegates.",
      "Placeholder: team you led and what you were accountable for.",
      "Placeholder: a concrete outcome — budget, sponsors, growth.",
    ],
    documents: [{ label: "Appointment letter", type: "letter" }],
  },
  {
    id: "science-fair",
    title: "Logistics Head",
    org: "Inter-School Science Fair",
    period: "2024",
    badge: "Core Team",
    bullets: ["Placeholder responsibility.", "Placeholder outcome."],
    documents: [{ label: "Certificate of contribution", type: "certificate" }],
  },
];

export const internships: PortfolioItem[] = [
  {
    id: "research-lab",
    title: "Research Intern",
    org: "University Laboratory",
    period: "Jun 2025 — Aug 2025",
    description:
      "Placeholder entry. What the lab worked on, what you were given to do, and what you produced.",
    bullets: ["Placeholder task or method.", "Placeholder result or deliverable."],
    documents: [
      { label: "Completion letter", type: "letter" },
      { label: "Supervisor recommendation", type: "letter" },
    ],
  },
  {
    id: "startup",
    title: "Product Intern",
    org: "Company Name",
    period: "Dec 2024 — Feb 2025",
    description: "Placeholder entry.",
    documents: [{ label: "Internship certificate", type: "certificate" }],
  },
];

export const sections = [
  { key: "olympiads", label: "Olympiads", href: "/olympiads", items: olympiads },
  { key: "shooting", label: "Shooting", href: "/shooting", items: shooting },
  { key: "writing", label: "Writing", href: "/writing", items: writing },
  { key: "committees", label: "Leadership", href: "/committees", items: committees },
  { key: "internships", label: "Internships", href: "/internships", items: internships },
] as const;
