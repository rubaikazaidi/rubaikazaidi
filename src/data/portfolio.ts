export type PortfolioDocument = {
  /** Short label shown on the document slot, e.g. "IMO 2025 Certificate" */
  label: string;
  /** Put the file in public/documents/ and reference it here, e.g. "/documents/imo-2025.pdf" */
  file?: string | undefined;
  /** Optional image preview of the same document, e.g. "/documents/imo-2025.jpg" */
  image?: string | undefined;


  type?: "certificate" | "letter" | "publication" | "photo" | "other";
};

export type PortfolioItem = {
  id: string;
  title: string;
  /** Organisation, venue, competition body, publisher... */
  org?: string;
  /** Free-form period label: "2025", "Mar 2024 — Aug 2024" */
  period?: string;
  /** Award, rank, score, role — rendered as a small badge */
  badge?: string;
  description?: string;
  bullets?: string[];
  link?: { label: string; href: string };
  documents?: PortfolioDocument[];
  /** Optional Instagram post URL to embed next to this entry */
  instagram?: string;
};

export const profile = {
  name: "Rubaika Zaidi",
  age: 17,
  tagline: "National Level Rifle Shooter, Tech enthusiast.",
  location: "City, Country",
  email: "you@example.com",
  intro:
    "I'm Rubaika Zaidi, 17, a national level rifle shooter and tech enthusiast. This profile brings together my olympiad awards, shooting podiums, leadership roles, internships, published writing, and the certificates behind each one.",
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "Email", href: "mailto:you@example.com" },
  ],
  cv: { label: "Curriculum Vitae (PDF)", file: undefined as string | undefined },
};

export const stats = [
  { value: "11", label: "Olympiad & competition awards" },
  { value: "13", label: "National shooting podiums" },
  { value: "8", label: "Published pieces" },
  { value: "6", label: "Committee roles" },
  { value: "2", label: "Internships" },
];
