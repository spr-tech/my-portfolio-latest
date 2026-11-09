import { JobCard } from "@/components/content/experience/jobCard";
import { PageHeader } from "@/components/layouts/pageHeader";
import { TagList } from "@/components/ui/badge/tagList";
import { Card } from "@/components/ui/card/card";
import { Text } from "@/components/ui/typography/text";
import { education, experiencePage, jobs } from "@/data/experience";
import { skillGroups } from "@/data/skills";

export function ExperienceContent() {
  return (
    <>
      <PageHeader intro={experiencePage} />

      <section aria-labelledby="work-heading" className="flex flex-col gap-4">
        <Text as="h2" size="heading" id="work-heading">
          {experiencePage.workTitle}
        </Text>
        <ol className="flex flex-col gap-4">
          {jobs.map((job) => (
            <JobCard key={`${job.company}-${job.role}`} job={job} />
          ))}
        </ol>
      </section>

      <section aria-labelledby="skills-heading" className="flex flex-col gap-4">
        <Text as="h2" size="heading" id="skills-heading">
          {experiencePage.skillsTitle}
        </Text>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,15rem),1fr))] gap-3">
          {skillGroups.map((group) => (
            <Card key={group.title} padding="sm" isInteractive className="flex flex-col gap-2.5">
              <Text as="h3" size="small" weight="semibold" tone="accent">
                {group.title}
              </Text>
              <TagList tags={group.skills} />
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="education-heading" className="flex flex-col gap-4">
        <Text as="h2" size="heading" id="education-heading">
          {experiencePage.educationTitle}
        </Text>
        {education.map((item) => (
          <Card
            key={item.degree}
            padding="none"
            isInteractive
            className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 px-5 py-4"
          >
            <Text as="h3" size="body" weight="semibold" tone="primary">
              {item.degree}{" "}
              <span className="font-medium whitespace-nowrap text-text-secondary">· {item.school}</span>
            </Text>
            <Text size="caption">{item.period}</Text>
          </Card>
        ))}
      </section>
    </>
  );
}
