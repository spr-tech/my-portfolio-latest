import Link from "next/link";

import { TagList } from "@/components/ui/badge/tagList";
import { Card } from "@/components/ui/card/card";
import { ArrowUpRightIcon } from "@/components/ui/icons/icons";
import { Text } from "@/components/ui/typography/text";
import type { Job } from "@/models/experience";

type JobCardProps = {
  job: Job;
};

/** One role on the work timeline: title and company, dates, highlights and the tech used. */
export function JobCard({ job }: JobCardProps) {
  return (
    <Card as="li" padding="none" isInteractive className="relative flex flex-col gap-3 py-5 pr-5 pl-11">
      {/* Timeline marker, level with the first line of the title. */}
      <span
        aria-hidden="true"
        className="absolute top-6.75 left-5 size-2.5 rounded-full bg-accent outline-3 outline-accent-subtle"
      />

      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <Text as="h3" size="heading">
          {job.role}{" "}
          {/* nowrap keeps "· Company" together, so a long title never leaves the dot stranded. */}
          <span className="font-medium whitespace-nowrap text-text-secondary">· {job.company}</span>
        </Text>
        <Text size="caption">
          {job.period} · {job.location}
        </Text>
      </div>

      <ul className="flex list-disc flex-col gap-1.5 pl-4.5 text-sm leading-[1.6] text-text-body marker:text-text-muted">
        {job.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <TagList tags={job.tech} />

      {job.relatedProject && (
        <Link
          href={job.relatedProject.href}
          className="group/link inline-flex items-center gap-1 self-start text-sm font-medium text-accent-text underline-offset-4 hover:underline"
        >
          {job.relatedProject.label}
          <ArrowUpRightIcon className="size-3.5 transition-transform duration-200 ease-out motion-safe:group-hover/link:translate-x-0.5 motion-safe:group-hover/link:-translate-y-0.5" />
        </Link>
      )}
    </Card>
  );
}
