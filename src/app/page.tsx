import type { Metadata } from "next";

import { ProjectsContent } from "@/components/content/projects/projectsContent";
import { projectsPage } from "@/data/projects";
import { pageMetadata } from "@/utilities/helpers/pageMetadata";

// No title: the home page uses the full "Muizz Jamiu · Frontend Engineer".
export const metadata: Metadata = pageMetadata({
  description: projectsPage.metaDescription,
  path: "/",
});

export default function Page() {
  return <ProjectsContent />;
}
