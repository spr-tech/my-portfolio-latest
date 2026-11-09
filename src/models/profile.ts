import type { StaticImageData } from "next/image";

export type ContactKind = "email" | "location";

/** A full row with a label above the value. */
export type ContactItem = {
  kind: ContactKind;
  label: string;
  /** What is shown, e.g. "opeyemimuizz@gmail.com". */
  value: string;
  /** Omitted for items that aren't links, like the location. */
  href?: string;
};

export type SocialKind = "github" | "linkedin";

/** An icon-only link in the row under the contacts. */
export type SocialLink = {
  kind: SocialKind;
  href: string;
  /** Read by screen readers in place of the icon, e.g. "GitHub profile (opens in a new tab)". */
  ariaLabel: string;
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
  /** Used by "Get in touch" to open an email with the subject filled in. */
  email: {
    address: string;
    subject: string;
  };
  contacts: ContactItem[];
  socialLinks: SocialLink[];
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
