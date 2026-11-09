import { ProjectCard } from "@/components/content/projects/projectCard";
import { TeamProjectCard } from "@/components/content/projects/teamProjectCard";
import { ToolsStrip } from "@/components/content/projects/toolsStrip";
import { PageHeader } from "@/components/layouts/pageHeader";
import { Text } from "@/components/ui/typography/text";
import { featuredProjects, projectsPage, teamProjects } from "@/data/projects";
import { tools } from "@/data/skills";
import { riseDelay, staggerDelay } from "@/utilities/helpers/riseDelay";

// Two columns once each card can be at least 300px wide, otherwise one.
const cardGrid = "grid grid-cols-[repeat(auto-fit,minmax(min(100%,18.75rem),1fr))] gap-5";

export function ProjectsContent() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <PageHeader intro={projectsPage} />
        <ToolsStrip
          label={projectsPage.toolsLabel}
          pauseLabel={projectsPage.toolsPauseLabel}
          tools={tools}
          className="rise-on-load"
          style={riseDelay(200)}
        />
      </div>

      <section aria-labelledby="featured-heading" className="flex flex-col gap-4">
        <Text as="h2" size="heading" id="featured-heading" className="rise-on-load" style={riseDelay(260)}>
          {projectsPage.featuredTitle}
        </Text>
        <div className={cardGrid}>
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              labels={projectsPage.labels}
              style={staggerDelay(370, index)}
            />
          ))}
        </div>
      </section>

      <section aria-labelledby="team-heading" className="flex flex-col gap-4">
        <Text as="h2" size="heading" id="team-heading" className="rise-on-load" style={riseDelay(380)}>
          {projectsPage.teamTitle}
        </Text>
        <div className={cardGrid}>
          {teamProjects.map((project, index) => (
            <TeamProjectCard
              key={project.slug}
              project={project}
              labels={projectsPage.labels}
              style={staggerDelay(590, index)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
