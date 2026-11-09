import type { Metadata } from "next";

import { AboutContent } from "@/components/content/about/aboutContent";
import { aboutPage } from "@/data/about";
import { pageMetadata } from "@/utilities/helpers/pageMetadata";

export const metadata: Metadata = pageMetadata({
  title: aboutPage.title,
  description: aboutPage.metaDescription,
  path: "/about",
});

export default function Page() {
  return <AboutContent />;
}
