export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  year: number;
  coverImage?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: boolean;
};

export const projects: Project[] = [
  {
    slug: "music-by-humans",
    title: "Music by Humans",
    description:
      "An app to filter out AI-generated musicians from your Spotify playlists.",
    tags: ["UX Design", "User Testing", "Frontend", "Side project"],
    year: 2026,
    caseStudy: true,
  },
  {
    slug: "api-access",
    title: "API Access Management",
    description:
      "Redesigning a complex access control interface to make granular API permissions faster and less error-prone.",
    tags: ["UX Design", "Frontend", "Internal tooling", "Fintech"],
    year: 2026,
    caseStudy: true,
  },
  {
    slug: "skjera",
    title: "Skjera",
    description:
      "An internal platform for event invitations — designed from initial sketches to a product that's actively in use.",
    tags: ["UX Design", "Design-to-dev", "Design system", "Figma"],
    year: 2025,
    caseStudy: true,
  },
];
