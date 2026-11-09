import type { MetadataRoute } from "next";

import { navigationTabs } from "@/utilities/constants/navigation";
import { siteUrl } from "@/utilities/constants/site";

// Built from the tab list, so adding or removing a tab updates the sitemap too.
export default function sitemap(): MetadataRoute.Sitemap {
  return navigationTabs.map((tab) => ({
    url: new URL(tab.href, siteUrl).toString(),
  }));
}
