import type { AboutPage } from "@/models/about";

export const aboutPage: AboutPage = {
  title: "About",
  intro: "A bit about me and how I work.",
  metaDescription:
    "About Muizz Jamiu, a frontend engineer in Lagos building fast, accessible web apps with React, Next.js and TypeScript: background, way of working, current focus.",
  bio: [
    "I’m a frontend engineer in Lagos. I build fast, accessible web apps with React, Next.js and TypeScript.",
    "I also care about what happens beyond the screen: clear requirements, a sound data model, and how a system behaves when something fails. That’s what draws me to products where reliability matters, like payments, where a double charge isn’t a small bug.",
    "Right now I’m a Software Engineering Fellow at TeSA Africa, training in system design, cloud deployment and backend fundamentals.",
  ],
  terminal: {
    label: "Terminal intro",
    title: "muizz@lagos: ~",
    lines: [
      { kind: "command", text: "whoami" },
      { kind: "output", text: "Muizz Jamiu, frontend engineer in Lagos" },
      { kind: "command", text: "cat stack.txt" },
      { kind: "output", text: "React · Next.js · TypeScript · Tailwind CSS" },
      { kind: "command", text: "npm run build" },
      { kind: "success", text: "✓ Compiled successfully" },
      { kind: "success", text: "✓ Ready for the next project" },
    ],
  },
  principlesTitle: "How I work",
  principles: [
    {
      icon: "data",
      title: "Data first",
      text: "I model the data and requirements before building a screen, so the interface isn’t built on guesses.",
    },
    {
      icon: "failure",
      title: "Plan for failure",
      text: "Retries, idempotency and clear error states are part of the feature, not an afterthought.",
    },
    {
      icon: "speed",
      title: "Fast and accessible",
      text: "Pages should load quickly and work with a keyboard and a screen reader.",
    },
  ],
  currently: {
    title: "Currently",
    items: [
      "Software Engineering Fellow at TeSA Africa, Cohort 6",
      "Building FoodBridge and EkoWatch with my capstone team",
      "Open to frontend engineering roles",
    ],
    contactLabel: "Get in touch",
  },
};
