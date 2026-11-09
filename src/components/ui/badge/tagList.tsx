import { Badge } from "@/components/ui/badge/badge";
import { cn } from "@/utilities/helpers/cn";

type TagListProps = {
  tags: string[];
  className?: string;
};

/** A wrapping list of outlined tags, e.g. the tech used on a project or in a job. */
export function TagList({ tags, className }: TagListProps) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {tags.map((tag) => (
        <li key={tag}>
          <Badge variant="outline">{tag}</Badge>
        </li>
      ))}
    </ul>
  );
}
