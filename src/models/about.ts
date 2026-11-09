import type { PageIntro } from "@/models/page";

/** Maps to an icon in the About content component, so data never imports components. */
export type PrincipleIcon = "data" | "failure" | "speed";

export type Principle = {
  icon: PrincipleIcon;
  title: string;
  text: string;
};

/** command: a typed line after the "$" prompt. output: plain result. success: a green ✓ line. */
export type TerminalLine = {
  kind: "command" | "output" | "success";
  text: string;
};

export type AboutPage = PageIntro & {
  bio: string[];
  terminal: {
    label: string;
    title: string;
    lines: TerminalLine[];
  };
  principlesTitle: string;
  principles: Principle[];
  currently: {
    title: string;
    items: string[];
    /** Opens an email to profile.email with its subject filled in. */
    contactLabel: string;
  };
};
