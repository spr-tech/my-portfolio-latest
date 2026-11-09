import type { PageIntro } from "@/models/page";

export type Job = {
  role: string;
  company: string;
  /** Shown as written, e.g. "Apr – Oct 2026". Ended roles show the end date, never "Present". */
  period: string;
  location: string;
  highlights: string[];
  tech: string[];
  /** A link to the matching project card, so the project is described once only. */
  relatedProject?: {
    label: string;
    href: string;
  };
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type Education = {
  degree: string;
  school: string;
  period: string;
};

export type ExperiencePage = PageIntro & {
  workTitle: string;
  skillsTitle: string;
  educationTitle: string;
};
