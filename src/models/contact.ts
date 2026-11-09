import type { PageIntro } from "@/models/page";

export type ContactPage = PageIntro & {
  detailsTitle: string;
  cvTitle: string;
  cvText: string;
};
