import { Text } from "@/components/ui/typography/text";
import type { PageIntro } from "@/models/page";
import { riseDelay } from "@/utilities/helpers/riseDelay";

type PageHeaderProps = {
  intro: PageIntro;
};

/** The h1 and one-line intro at the top of every tab. Rises in after the sidebar and tab bar. */
export function PageHeader({ intro }: PageHeaderProps) {
  return (
    <header className="rise-on-load flex flex-col gap-2" style={riseDelay(140)}>
      <Text as="h1" size="page">
        {intro.title}
      </Text>
      <Text tone="secondary">{intro.intro}</Text>
    </header>
  );
}
