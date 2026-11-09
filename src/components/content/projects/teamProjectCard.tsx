import Image from "next/image";

import { Badge } from "@/components/ui/badge/badge";
import { TagList } from "@/components/ui/badge/tagList";
import { Card } from "@/components/ui/card/card";
import { ExternalLink } from "@/components/ui/link/externalLink";
import { Text } from "@/components/ui/typography/text";
import type { ProjectsPage, TeamProject } from "@/models/project";

type TeamProjectCardProps = {
  project: TeamProject;
  labels: ProjectsPage["labels"];
};

/** A smaller card for team work, stating the team and my role up front. */
export function TeamProjectCard({ project, labels }: TeamProjectCardProps) {
  return (
    <Card
      as="article"
      id={project.slug}
      isInteractive
      className="flex flex-col gap-3 p-4 sm:p-5"
    >
      <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-surface-raised">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 100vw"
          className="object-cover object-top transition-transform duration-250 ease-out motion-safe:group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex items-center justify-between gap-2">
        <Text as="h3" size="heading">
          {project.title}
        </Text>
        <Badge variant="accent">{project.badge}</Badge>
      </div>

      <Text size="caption">{project.teamLine}</Text>
      <Text size="small">{project.summary}</Text>
      <Text size="small">
        <span className="text-text-muted">{labels.decision}:</span> {project.decision}
      </Text>

      <TagList tags={project.tech} />

      <div className="mt-auto flex gap-4">
        <ExternalLink href={project.liveUrl}>{labels.live}</ExternalLink>
        {project.githubUrl && (
          <ExternalLink href={project.githubUrl} tone="muted">
            {labels.github}
          </ExternalLink>
        )}
      </div>
    </Card>
  );
}
