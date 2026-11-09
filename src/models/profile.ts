import type { StaticImageData } from "next/image";

export type ContactKind = "email" | "location" | "github" | "linkedin";

export type ContactItem = {
  kind: ContactKind;
  label: string;
  /** What is shown, e.g. "github.com/spr-tech". */
  value: string;
  /** Omitted for items that aren't links, like the location. */
  href?: string;
};

export type Profile = {
  name: string;
  role: string;
  photo: StaticImageData;
  photoAlt: string;
  /** Used as the site's meta description. */
  siteDescription: string;
  tagline: {
    /** "I build interfaces that are" */
    lead: string;
    /** The words that rotate in after the lead. */
    words: string[];
    /** The full sentence for screen readers, since the rotating word is aria-hidden. */
    accessibleText: string;
  };
  status: string;
  contacts: ContactItem[];
  contactsToggle: {
    showLabel: string;
    hideLabel: string;
  };
  cv: {
    label: string;
    href: string;
    /** Sets the download attribute, so the browser saves the file under this name. */
    fileName: string;
  };
  copyright: string;
};
