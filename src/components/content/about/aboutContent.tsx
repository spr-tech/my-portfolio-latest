import type { ComponentType, SVGProps } from "react";

import { TerminalCard } from "@/components/content/about/terminalCard";
import { PageHeader } from "@/components/layouts/pageHeader";
import { Button } from "@/components/ui/button/button";
import { Card } from "@/components/ui/card/card";
import { BoltIcon, DatabaseIcon, DownloadIcon, ShieldCheckIcon } from "@/components/ui/icons/icons";
import { Text } from "@/components/ui/typography/text";
import { aboutPage } from "@/data/about";
import { profile } from "@/data/profile";
import type { PrincipleIcon } from "@/models/about";

const principleIcons: Record<PrincipleIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  data: DatabaseIcon,
  failure: ShieldCheckIcon,
  speed: BoltIcon,
};

export function AboutContent() {
  const { currently } = aboutPage;

  return (
    <>
      <div className="flex flex-col gap-6">
        <PageHeader intro={aboutPage} />
        <div className="flex max-w-170 flex-col gap-3.5">
          {aboutPage.bio.map((paragraph) => (
            <Text key={paragraph} className="leading-[1.7]">
              {paragraph}
            </Text>
          ))}
        </div>
      </div>

      <TerminalCard terminal={aboutPage.terminal} />

      <section aria-labelledby="principles-heading" className="flex flex-col gap-4">
        <Text as="h2" size="heading" id="principles-heading">
          {aboutPage.principlesTitle}
        </Text>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,12.5rem),1fr))] gap-4">
          {aboutPage.principles.map((principle) => {
            const Icon = principleIcons[principle.icon];

            return (
              <Card key={principle.title} isInteractive className="flex flex-col gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-accent-subtle text-accent-text">
                  <Icon className="size-5" />
                </span>
                <Text as="h3" size="body" weight="semibold" tone="primary">
                  {principle.title}
                </Text>
                <Text size="small">{principle.text}</Text>
              </Card>
            );
          })}
        </div>
      </section>

      <Card as="section" aria-labelledby="currently-heading" className="flex flex-col gap-3.5">
        <Text as="h2" size="heading" id="currently-heading">
          {currently.title}
        </Text>
        <ul className="flex flex-col gap-2.5">
          {currently.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
              <Text as="span">{item}</Text>
            </li>
          ))}
        </ul>
        <div className="mt-1 flex flex-wrap gap-3">
          <Button
            href={profile.cv.href}
            download={profile.cv.fileName}
            startIcon={<DownloadIcon className="size-4" />}
          >
            {profile.cv.label}
          </Button>
          <Button href={currently.contactHref} variant="secondary">
            {currently.contactLabel}
          </Button>
        </div>
      </Card>
    </>
  );
}
