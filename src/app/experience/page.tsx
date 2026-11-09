import type { Metadata } from "next";

import { ExperienceContent } from "@/components/content/experience/experienceContent";
import { experiencePage } from "@/data/experience";
import { pageMetadata } from "@/utilities/helpers/pageMetadata";

export const metadata: Metadata = pageMetadata({
  title: experiencePage.title,
  description: experiencePage.metaDescription,
  path: "/experience",
});

export default function Page() {
  return <ExperienceContent />;
}
