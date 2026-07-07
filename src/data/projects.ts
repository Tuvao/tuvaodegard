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
];
