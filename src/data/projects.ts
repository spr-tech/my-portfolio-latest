import ekowatchImage from "@/assets/images/projects/ekowatch.webp";
import enterImage from "@/assets/images/projects/enter.webp";
import flowboardImage from "@/assets/images/projects/flowboard.png";
import foodbridgeImage from "@/assets/images/projects/foodbridge.webp";
import type { FeaturedProject, ProjectsPage, TeamProject } from "@/models/project";

export const projectsPage: ProjectsPage = {
  title: "Projects",
  intro: "Things I’ve built, and the decisions behind them.",
  featuredTitle: "Featured",
  teamTitle: "Team projects",
  toolsLabel: "Tools I build with",
  labels: {
    problem: "Problem",
    built: "Built",
    decision: "Decision",
    live: "Live site",
    github: "GitHub",
  },
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "flowboard",
    title: "Flowboard",
    image: flowboardImage,
    imageAlt: "Flowboard landing page",
    badge: "Solo project",
    problem: "Teams need one place to plan projects and see who’s doing what.",
    built: "A project management app with Kanban boards, priorities, due dates and team memberships.",
    decision: "Permission checks run in server actions, so only owners and members can change a project.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    liveUrl: "https://flowboard-app-five.vercel.app/",
    githubUrl: "https://github.com/spr-tech/flowboard-app",
  },
  {
    slug: "enter",
    title: "Enter",
    image: enterImage,
    imageAlt: "Enter landing page",
    badge: "Internship · RWA Inc",
    problem: "Developers using an AI cloud IDE needed one dashboard for their workspaces and tools.",
    built: "Dashboard screens, a real-time AI chat, and pages for connecting GitHub, Notion and Stripe.",
    decision:
      "Built the screens before the backend was ready, with every API call in one place, so connecting the real backend meant changing one file instead of every page.",
    tech: ["Next.js", "TypeScript"],
    liveUrl: "https://enter.software/",
  },
];

export const teamProjects: TeamProject[] = [
  {
    slug: "foodbridge",
    title: "FoodBridge",
    image: foodbridgeImage,
    imageAlt: "FoodBridge landing page",
    badge: "Capstone project",
    teamLine: "Team of three · Interface engineer working with backend engineers",
    summary:
      "Connects surplus food with people who need it. I built the request flow: pending, approved, declined, expired and cancelled.",
    decision: "Users see messages the frontend writes, never backend internals.",
    tech: ["React", "TypeScript", "RTK Query"],
    liveUrl: "https://food-bridge-ruby.vercel.app/",
    githubUrl: "https://github.com/spr-tech/food-bridge",
  },
  {
    slug: "ekowatch",
    title: "EkoWatch",
    image: ekowatchImage,
    imageAlt: "EkoWatch landing page",
    badge: "Capstone project",
    teamLine: "Team project · Interface engineer working with backend engineers",
    summary:
      "Lets Lagos residents report flooded roads and missed waste collection, for operators and authorities to act on.",
    decision: "One sidebar layout shared by residents, waste operators and authorities.",
    tech: ["React", "TypeScript", "RTK Query"],
    liveUrl: "https://eko-watch.qocent.app/",
    githubUrl: "https://github.com/spr-tech/eko-watch-final",
  },
];
