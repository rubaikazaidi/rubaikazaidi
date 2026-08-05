import type { PortfolioItem } from "./portfolio";

export const olympiads: PortfolioItem[] = [
  {
    id: "imo-2023",
    title: "SOF International Mathematics Olympiad — Grade 9",
    org: "Science Olympiad Foundation",
    period: "October — December 2023",
    badge: "Gold Medal of Excellence · School Rank 1",
    description:
      "International Rank 1920 · Regional Rank 1288 · Zonal Rank 669 · School Rank 1. Awarded the Gold Medal of Excellence for performance excellence at school level.",
    documents: [
      { label: "IMO 2023 certificate (Grade 9)", type: "certificate", file: "/documents/grade-9-imo.pdf" },
    ],
  },
  {
    id: "nco-2023",
    title: "SOF National Cyber Olympiad — Grade 9",
    org: "Science Olympiad Foundation",
    period: "November — December 2023",
    badge: "International Rank 271 · School Rank 1",
    description:
      "International Rank 271 · Regional Rank 139 · Zonal Rank 75 · School Rank 1 in the SOF National Cyber Olympiad.",
    documents: [
      { label: "NCO 2023 certificate (Grade 9)", type: "certificate", file: "/documents/grade-9-nco.pdf" },
    ],
  },
  {
    id: "nco-2022",
    title: "SOF National Cyber Olympiad — Grade 8",
    org: "Science Olympiad Foundation",
    period: "November — December 2022",
    badge: "International Rank 197 · School Rank 1",
    description:
      "International Rank 197 · Regional Rank 129 · Zonal Rank 80 · School Rank 1 in the SOF National Cyber Olympiad.",
    documents: [
      { label: "NCO 2022 certificate (Grade 8)", type: "certificate", file: "/documents/grade-8-nco.pdf" },
    ],
  },
  {
    id: "imo-2022",
    title: "SOF International Mathematics Olympiad — Grade 8",
    org: "Science Olympiad Foundation",
    period: "November — December 2022",
    badge: "School Rank 2",
    description:
      "International Rank 4181 · Regional Rank 2544 · Zonal Rank 1240 · School Rank 2 in the SOF International Mathematics Olympiad.",
    documents: [
      { label: "IMO 2022 certificate (Grade 8)", type: "certificate", file: "/documents/grade-8-imo.pdf" },
    ],
  },
  {
    id: "nco-2021",
    title: "SOF National Cyber Olympiad — Grade 7",
    org: "Science Olympiad Foundation",
    period: "2021 — 2022",
    badge: "International Rank 85 · School Rank 1",
    description:
      "International Rank 85 · Regional Rank 58 · Zonal Rank 42 · School Rank 1 — her strongest international placement in the Cyber Olympiad.",
    documents: [
      { label: "NCO 2021–22 certificate (Grade 7)", type: "certificate", file: "/documents/grade-7-nco.pdf" },
    ],
  },
  {
    id: "imo-2021",
    title: "SOF International Mathematics Olympiad — Grade 7",
    org: "Science Olympiad Foundation",
    period: "2021 — 2022",
    badge: "School Rank 2",
    description:
      "International Rank 1451 · Regional Rank 791 · Zonal Rank 489 · School Rank 2 in the SOF International Mathematics Olympiad.",
    documents: [
      { label: "IMO 2021–22 certificate (Grade 7)", type: "certificate", file: "/documents/grade-7-imo.pdf" },
    ],
  },
  {
    id: "imo-2020",
    title: "SOF International Mathematics Olympiad — Grade 6",
    org: "Science Olympiad Foundation",
    period: "2020 — 2021",
    badge: "Gold Medal of Excellence",
    description:
      "Awarded the Gold Medal of Excellence for performance excellence at school level in the SOF International Mathematics Olympiad.",
    documents: [
      { label: "IMO 2020–21 certificate (Grade 6)", type: "certificate", file: "/documents/grade-6-imo.pdf" },
    ],
  },
  {
    id: "imo-2017",
    title: "SOF International Mathematics Olympiad — Grade 3",
    org: "Science Olympiad Foundation",
    period: "December 2017",
    badge: "Certificate of Participation",
    description:
      "Her first olympiad — participation in the SOF International Mathematics Olympiad at Grade 3.",
    documents: [
      { label: "IMO 2017 certificate (Grade 3)", type: "certificate", file: "/documents/grade-3-imo.pdf" },
    ],
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
    id: "saai-ai-research",
    title: "AI Research & Innovation Program",
    org: "School of Applied Artificial Intelligence (Codex Automation Key Pvt. Ltd.)",
    period: "2026",
    badge: "Research Batch — Certificate SAAI-R-2-AIRIP-07",
    description:
      "An intensive applied research program covering artificial intelligence fundamentals, research methodology, data analysis, model exploration, and AI-driven problem solving.",
    bullets: [
      "Completed the sprint challenge: an IPL sentiment analysis pipeline built with classical machine learning methods for text classification.",
      "Compared multiple modelling approaches and evaluated results to understand how traditional NLP techniques solve real-world classification problems.",
      "Competencies developed: NLP classification fundamentals, model evaluation practices, and building complete end-to-end ML workflows.",
    ],
    link: {
      label: "Verify recommendation",
      href: "https://saai.codexautomationkey.com/users/p/rubaika/",
    },
    documents: [
      {
        label: "Certificate of completion",
        type: "certificate",
        file: "/documents/saai-certificate.pdf",
      },
      {
        label: "Recommendation letter",
        type: "letter",
        file: "/documents/saai-recommendation.pdf",
      },
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
