import { CertificateLink } from "@/components/content/experience/certificateLink";
import { Badge } from "@/components/ui/badge/badge";
import { Card } from "@/components/ui/card/card";
import { Text } from "@/components/ui/typography/text";
import type { Education } from "@/models/experience";

type EducationCardProps = {
  item: Education;
};

/**
 * One qualification as a single line (title · school · detail, period on the right), with an
 * optional award badge and certificate link underneath. No bullets: details belong in Work.
 */
export function EducationCard({ item }: EducationCardProps) {
  const hasExtras = Boolean(item.award || item.certificate);

  return (
    <Card as="li" padding="none" isInteractive className="flex flex-col gap-2.5 px-5 py-4">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <Text as="h3" size="body" weight="semibold" tone="primary">
          {item.title}{" "}
          {/* Each "· part" is kept whole, so a wrapped line never starts or ends on a lone dot. */}
          <span className="font-medium text-text-secondary">
            <span className="whitespace-nowrap">· {item.school}</span>
            {item.detail && (
              <>
                {" "}
                <span className="whitespace-nowrap">· {item.detail}</span>
              </>
            )}
          </span>
        </Text>
        <Text size="caption">{item.period}</Text>
      </div>

      {hasExtras && (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {item.award && <Badge variant="accent">{item.award}</Badge>}
          {item.certificate && <CertificateLink certificate={item.certificate} />}
        </div>
      )}
    </Card>
  );
}
