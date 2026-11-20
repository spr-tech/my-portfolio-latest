import type { PageIntro } from "@/models/page";

/** A certificate image in public/files/, opened in a new tab. */
export type Certificate = {
  /** Visible text, e.g. "View certificate". */
  label: string;
  /** e.g. "/files/rwa-internship-certificate.jpg". */
  href: string;
  /** Full name for screen readers, since "View certificate" alone doesn't say which one. */
  ariaLabel: string;
};

/** A plain highlight, or one with a certificate link straight after it (e.g. an award). */
export type JobHighlight = string | { text: string; certificate: Certificate };

export type Job = {
  role: string;
  company: string;
  /** Shown as written, e.g. "Apr – Sep 2026". Ended roles show the end date, never "Present". */
  period: string;
  location: string;
  highlights: JobHighlight[];
  /** A certificate for the role as a whole, shown with the links under the tech tags. */
  certificate?: Certificate;
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

/** One compact line in "Education and training": title · school · detail, then the period. */
export type Education = {
  /** A degree or programme, e.g. "Tech Skills Accelerator (TeSA)". */
  title: string;
  school: string;
  /** e.g. "Cohort 6, React track". */
  detail?: string;
  period: string;
  /** A small badge under the line, e.g. "Best Graduating Student". */
  award?: string;
  certificate?: Certificate;
};

export type ExperiencePage = PageIntro & {
  workTitle: string;
  skillsTitle: string;
  educationTitle: string;
};
