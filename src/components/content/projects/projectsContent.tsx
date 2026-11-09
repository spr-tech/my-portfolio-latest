import { ProjectCard } from "@/components/content/projects/projectCard";
import { TeamProjectCard } from "@/components/content/projects/teamProjectCard";
import { ToolsStrip } from "@/components/content/projects/toolsStrip";
import { PageHeader } from "@/components/layouts/pageHeader";
import { Text } from "@/components/ui/typography/text";
import { featuredProjects, projectsPage, teamProjects } from "@/data/projects";
import { tools } from "@/data/skills";

// Two columns once each card can be at least 300px wide, otherwise one.
const cardGrid = "grid grid-cols-[repeat(auto-fit,minmax(min(100%,18.75rem),1fr))] gap-5";

export function ProjectsContent() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <PageHeader intro={projectsPage} />
        <ToolsStrip label={projectsPage.toolsLabel} tools={tools} />
      </div>

      <section aria-labelledby="featured-heading" className="flex flex-col gap-4">
        <Text as="h2" size="heading" id="featured-heading">
          {projectsPage.featuredTitle}
        </Text>
        <div className={cardGrid}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} labels={projectsPage.labels} />
          ))}
        </div>
      </section>

      <section aria-labelledby="team-heading" className="flex flex-col gap-4">
        <Text as="h2" size="heading" id="team-heading">
          {projectsPage.teamTitle}
        </Text>
        <div className={cardGrid}>
          {teamProjects.map((project) => (
            <TeamProjectCard key={project.slug} project={project} labels={projectsPage.labels} />
          ))}
        </div>
      </section>
    </>
  );
}
