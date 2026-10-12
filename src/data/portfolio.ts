export type PortfolioDocument = {
  /** Short label shown on the document slot, e.g. "IMO 2025 Certificate" */
  label: string;
  /** Put the file in public/documents/ and reference it here, e.g. "/documents/imo-2025.pdf" */
  file?: string | undefined;
  /** Optional image preview of the same document, e.g. "/documents/imo-2025.jpg" */
  image?: string | undefined;


  type?: "certificate" | "letter" | "publication" | "photo" | "other";
};

export type PortfolioAnecdote = {
  /** Short title for the note, e.g. "On the final relay" */
  title?: string;
  /** The anecdote itself — a paragraph or two of personal recollection */
  body: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  /** Organisation, venue, competition body, publisher... */
  org?: string;
  /** Optional organisation/venue logo image path */
  logo?: string;
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
  /** Optional 1-based carousel slide to open the Instagram embed on */
  instagramSlide?: number;
  /** Optional lead image used by visual tile layouts */
  tileImage?: string;
  /** Optional CSS object-position for the tile image (default "center") */
  tileImagePosition?: string;
  /** Optional personal anecdote / memo shown as a pull-aside under the entry */
  anecdote?: PortfolioAnecdote;
};

export const profile = {
  name: "Rubaika Zaidi",
  age: 17,
  tagline: "Student | National Level Rifle Shooter | Tech Enthusiast",
  location: "Navi Mumbai, Maharashtra",
  email: "rubaika.zaidi@outlook.com",
  phone: "+91 93725 93707",
  linkedin: "https://www.linkedin.com/in/rubaika-zaidi-b229983b6",
  /** Cover portrait: drop the file in public/documents/ and point here. */
  portrait: "/documents/west-zone-13.jpg",
  portraitPosition: "left center",
  portraitCaption: "XIII West Zone Shooting Championship — Goa, 2026",
  intro:
    "I'm Rubaika Zaidi, 17, a national level rifle shooter and tech enthusiast. This profile brings together my olympiad awards, shooting podiums, leadership roles, internships, published writing, and the certificates behind each one.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rubaika-zaidi-b229983b6" },
    { label: "Email", href: "mailto:rubaika.zaidi@outlook.com" },
  ],
  cv: { label: "Curriculum Vitae (PDF)", file: undefined as string | undefined },
};

export const stats = [
  { value: "11", label: "Olympiad & competition awards" },
  { value: "17", label: "Shooting podiums" },
  { value: "8", label: "Published pieces" },
  { value: "6", label: "Committee roles" },
  { value: "3", label: "Internships" },
];
