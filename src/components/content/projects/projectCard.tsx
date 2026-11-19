import Image from "next/image";
import type { CSSProperties } from "react";

import { Badge } from "@/components/ui/badge/badge";
import { TagList } from "@/components/ui/badge/tagList";
import { Card } from "@/components/ui/card/card";
import { ExternalLink } from "@/components/ui/link/externalLink";
import { Text } from "@/components/ui/typography/text";
import type { FeaturedProject, ProjectsPage } from "@/models/project";
import { cn } from "@/utilities/helpers/cn";

// The width at which the parent grid fits two 300px columns (2 × 18.75rem + 1.25rem gap). The grid
// is a container, so these classes switch exactly when the grid does, whatever the screen size.
const wide = {
  card: "@min-[38.75rem]:col-span-full @min-[38.75rem]:flex-row",
  image:
    "@min-[38.75rem]:aspect-auto @min-[38.75rem]:w-1/2 @min-[38.75rem]:shrink-0 @min-[38.75rem]:border-r @min-[38.75rem]:border-b-0",
  // Beside the text the frame can be taller than 16:10, so keep the headline corner in view.
  photo: "@min-[38.75rem]:object-left-top",
};

type ProjectCardProps = {
  project: FeaturedProject;
  labels: ProjectsPage["labels"];
  /** Stagger delay for the first-load entrance. */
  style?: CSSProperties;
  /**
   * For the first card only: its screenshot is the largest thing on screen on most phones (the
   * LCP element), so it loads straight away at high priority instead of lazily.
   */
  isPriority?: boolean;
  /**
   * Spans the whole row with the screenshot beside the text, once the grid has two columns. Used
   * for the first card when the count is odd, so no card is left alone with a gap beside it.
   */
  isWide?: boolean;
};

/** A featured project: full-width screenshot, then the problem, what was built and one decision. */
export function ProjectCard({ project, labels, style, isPriority = false, isWide = false }: ProjectCardProps) {
  const details = [
    { term: labels.problem, text: project.problem },
    { term: labels.built, text: project.built },
    { term: labels.decision, text: project.decision },
  ].filter((detail): detail is { term: string; text: string } => Boolean(detail.text));

  return (
    <Card
      as="article"
      id={project.slug}
      padding="none"
      isInteractive
      style={style}
      className={cn("rise-on-load flex flex-col overflow-hidden", isWide && wide.card)}
    >
      <div
        className={cn(
          "relative aspect-16/10 overflow-hidden border-b border-border bg-surface-raised",
          isWide && wide.image,
        )}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
          loading={isPriority ? "eager" : "lazy"}
          fetchPriority={isPriority ? "high" : "auto"}
          className={cn(
            "object-cover object-top transition-transform duration-250 ease-out motion-safe:group-hover:scale-[1.04]",
            isWide && wide.photo,
          )}
        />
      </div>

      <div className="flex flex-1 flex-col gap-3.5 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2">
          <Text as="h3" size="heading">
            {project.title}
          </Text>
          <Badge>{project.badge}</Badge>
        </div>

        <dl className="flex flex-col gap-2.5">
          {details.map((detail) => (
            <div key={detail.term}>
              <Text as="dt" size="caption" weight="medium">
                {detail.term}
              </Text>
              <Text as="dd" size="small" className="mt-0.5">
                {detail.text}
              </Text>
            </div>
          ))}
        </dl>

        <TagList tags={project.tech} />

        <div className="mt-auto flex gap-4 pt-1">
          <ExternalLink href={project.liveUrl} hasArrow>
            {labels.live}
          </ExternalLink>
          {project.githubUrl && (
            <ExternalLink href={project.githubUrl} tone="muted">
              {labels.github}
            </ExternalLink>
          )}
        </div>
      </div>
    </Card>
  );
}
