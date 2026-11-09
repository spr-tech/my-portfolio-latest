import type { StaticImageData } from "next/image";

import type { PageIntro } from "@/models/page";

type ProjectBase = {
  /** Used as the card's id, so other tabs can link to it, e.g. "/#enter". */
  slug: string;
  title: string;
  image: StaticImageData;
  imageAlt: string;
  /** e.g. "Solo project", "Internship · RWA Inc", "Capstone project". */
  badge: string;
  tech: string[];
  liveUrl: string;
  /** Omitted when the repository is private. */
  githubUrl?: string;
};

/** A large card with the problem, what was built and one decision, each labelled. */
export type FeaturedProject = ProjectBase & {
  problem: string;
  built: string;
  decision: string;
};

/** A smaller card for team work. Must state the team and my role. */
export type TeamProject = ProjectBase & {
  /** e.g. "Team of three · Interface engineer working with backend engineers". */
  teamLine: string;
  summary: string;
  decision: string;
};

export type ProjectsPage = PageIntro & {
  featuredTitle: string;
  teamTitle: string;
  toolsLabel: string;
  /** Screen-reader label for the pause toggle on the tools strip; aria-pressed says if it's on. */
  toolsPauseLabel: string;
  labels: {
    problem: string;
    built: string;
    decision: string;
    live: string;
    github: string;
  };
};
