import type { PageIntro } from "@/models/page";

export type NotFoundPage = PageIntro & {
  backLabel: string;
  backHref: string;
};
