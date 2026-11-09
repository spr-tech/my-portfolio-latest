import type { SkillGroup } from "@/models/experience";

/** Skills on the Experience tab, grouped. */
export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "State and forms",
    skills: ["Redux Toolkit", "Zustand", "React Hook Form", "Zod"],
  },
  {
    title: "Backend and data",
    skills: ["PostgreSQL", "Prisma", "REST APIs", "Data modelling"],
  },
  {
    title: "Cloud and tools",
    skills: ["AWS EC2", "Render", "Vercel", "Git", "Figma"],
  },
  {
    title: "System design",
    skills: [
      "Idempotency",
      "Caching",
      "Message queues",
      "Failure handling",
      "Architecture Decision Records",
    ],
  },
];

/** The scrolling tools strip on the Projects tab. */
export const tools: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "Zustand",
  "React Hook Form",
  "Zod",
  "PostgreSQL",
  "Prisma",
  "Vercel",
  "Figma",
];
