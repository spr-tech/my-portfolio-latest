import profilePhoto from "@/assets/images/profile/muizz.png";
import type { Profile } from "@/models/profile";

const emailAddress = "opeyemimuizz@gmail.com";

export const profile: Profile = {
  name: "Muizz Jamiu",
  role: "Frontend Engineer",
  photo: profilePhoto,
  photoAlt: "Portrait of Muizz Jamiu",
  siteDescription:
    "Frontend engineer in Lagos building fast, accessible web apps with React, Next.js and TypeScript.",
  // Rendered from HTML with the site's colours and Poppins; regenerate it if the name, role or
  // tagline changes.
  previewImage: {
    src: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "Muizz Jamiu, Frontend Engineer. I build interfaces that are fast, accessible and reliable. Open to frontend roles.",
  },
  tagline: {
    lead: "I build interfaces that are",
    words: ["fast", "accessible", "reliable"],
    accessibleText: "I build interfaces that are fast, accessible and reliable.",
  },
  status: "Open to frontend roles",
  email: {
    address: emailAddress,
    subject: "Hello from your portfolio",
  },
  contacts: [
    {
      kind: "email",
      label: "Email",
      value: emailAddress,
      href: `mailto:${emailAddress}`,
    },
    {
      kind: "location",
      label: "Location",
      value: "Lagos, Nigeria",
    },
  ],
  socialLinks: [
    {
      kind: "github",
      href: "https://github.com/spr-tech",
      ariaLabel: "GitHub profile (opens in a new tab)",
    },
    {
      kind: "linkedin",
      href: "https://linkedin.com/in/muizz-opeyemi",
      ariaLabel: "LinkedIn profile (opens in a new tab)",
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
