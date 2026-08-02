export type PortfolioDocument = {
  /** Short label shown on the document slot, e.g. "IMO 2025 Certificate" */
  label: string;
  /** Put the file in public/documents/ and reference it here, e.g. "/documents/imo-2025.pdf" */
  file?: string | undefined;

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
};

export const profile = {
  name: "Your Name",
  tagline: "Olympiad competitor, precision shooter, and writer.",
  location: "City, Country",
  email: "you@example.com",
  intro:
    "Replace this paragraph with your own introduction. Two or three sentences are enough: who you are, what you have spent the last few years working on, and what you intend to study. Admissions readers scan first and read second, so lead with the thing you are best at.",
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "Email", href: "mailto:you@example.com" },
  ],
  cv: { label: "Curriculum Vitae (PDF)", file: undefined as string | undefined },
};

export const stats = [
  { value: "12", label: "Olympiad & competition awards" },
  { value: "5", label: "National shooting podiums" },
  { value: "8", label: "Published pieces" },
  { value: "4", label: "Committee roles" },
  { value: "3", label: "Internships" },
];
