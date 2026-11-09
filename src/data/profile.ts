import profilePhoto from "@/assets/images/profile/muizz.png";
import type { Profile } from "@/models/profile";

export const profile: Profile = {
  name: "Muizz Jamiu",
  role: "Frontend Engineer",
  photo: profilePhoto,
  photoAlt: "Portrait of Muizz Jamiu",
  siteDescription:
    "Frontend engineer in Lagos building fast, accessible web apps with React, Next.js and TypeScript.",
  tagline: {
    lead: "I build interfaces that are",
    words: ["fast", "accessible", "reliable"],
    accessibleText: "I build interfaces that are fast, accessible and reliable.",
  },
  status: "Open to frontend roles",
  contacts: [
    {
      kind: "email",
      label: "Email",
      value: "opeyemimuizz@gmail.com",
      href: "mailto:opeyemimuizz@gmail.com",
    },
    {
      kind: "location",
      label: "Location",
      value: "Lagos, Nigeria",
    },
    {
      kind: "github",
      label: "GitHub",
      value: "github.com/spr-tech",
      href: "https://github.com/spr-tech",
    },
    {
      kind: "linkedin",
      label: "LinkedIn",
      value: "in/muizz-opeyemi",
      href: "https://www.linkedin.com/in/muizz-opeyemi",
    },
  ],
  contactsToggle: {
    showLabel: "Show contacts",
    hideLabel: "Hide contacts",
  },
  cv: {
    label: "Download CV",
    href: "/files/muizz-jamiu-cv.pdf",
    fileName: "muizz-jamiu-cv.pdf",
  },
  copyright: "© 2026 Muizz Jamiu",
};
