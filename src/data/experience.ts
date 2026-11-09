import type { Education, ExperiencePage, Job } from "@/models/experience";

export const experiencePage: ExperiencePage = {
  title: "Experience",
  intro: "Where I’ve worked, and what I built there.",
  workTitle: "Work",
  skillsTitle: "Skills",
  educationTitle: "Education",
};

export const jobs: Job[] = [
  {
    role: "Software Engineering Fellow",
    company: "TeSA Africa",
    period: "2026 – Present",
    location: "Lagos",
    highlights: [
      "Selected as one of 67 fellows from over 9,000 applicants for Cohort 6.",
      "Built and deployed Chowly, a restaurant ordering platform with separate customer and waiter flows.",
      "Wrote an architecture decision dossier for a national exam results platform, scored 96/100.",
      "Designed payment flows that prevent double charges using idempotency keys and automatic reconciliation.",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "System design"],
  },
  {
    role: "Frontend Developer Intern",
    company: "RWA Inc",
    period: "Apr – Oct 2026",
    location: "Remote",
    highlights: [
      "Built the dashboard for Enter, an AI cloud IDE, including chat, projects and integrations.",
      "Built reusable components with design tokens from a shared design system.",
      "Turned Figma designs into responsive interfaces, working through pull requests and code review with a distributed team.",
    ],
    tech: ["Next.js", "TypeScript", "React"],
    relatedProject: {
      label: "See Enter in Projects",
      href: "/#enter",
    },
  },
  {
    role: "Frontend Developer Intern",
    company: "STX Technology",
    period: "May – Nov 2025",
    location: "Lagos",
    highlights: [
      "Built and maintained websites with React, JavaScript, HTML and CSS.",
      "Created reusable components shared across projects, with layouts that work on mobile, tablet and desktop.",
      "Connected interfaces to live data through REST APIs with the backend team.",
    ],
    tech: ["React", "JavaScript", "CSS"],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Science (Education)",
    school: "University of Ilorin",
    period: "2018 – 2023",
  },
];
