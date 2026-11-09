import { Text } from "@/components/ui/typography/text";
import type { PageIntro } from "@/models/page";

type PageHeaderProps = {
  intro: PageIntro;
};

/** The h1 and one-line intro at the top of every tab. */
export function PageHeader({ intro }: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-2">
      <Text as="h1" size="page">
        {intro.title}
      </Text>
      <Text tone="secondary">{intro.intro}</Text>
    </header>
  );
}
