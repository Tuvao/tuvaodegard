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
    tags: ["UX Design", "Prototyping", "Figma"],
    year: 2024,
    caseStudy: true,
  },
];
