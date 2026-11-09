import { cn } from "@/utilities/helpers/cn";

type ToolsStripProps = {
  label: string;
  tools: string[];
};

function ToolList({ tools, isDuplicate = false }: { tools: string[]; isDuplicate?: boolean }) {
  return (
    <ul
      aria-hidden={isDuplicate || undefined}
      className={cn(
        "flex shrink-0 gap-8 pr-8 motion-reduce:flex-wrap motion-reduce:gap-x-6 motion-reduce:gap-y-2 motion-reduce:pr-0",
        // With motion off there's no loop, so the copy would just repeat the list.
        isDuplicate && "motion-reduce:hidden",
      )}
    >
      {tools.map((tool) => (
        <li
          key={tool}
          className="inline-flex items-center gap-2.5 text-sm font-medium whitespace-nowrap text-text-secondary"
        >
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
          {tool}
        </li>
      ))}
    </ul>
  );
}

/**
 * Tool names scrolling sideways, paused on hover. With reduced motion it's a static, wrapped list.
 * Screen readers get the first copy only.
 */
export function ToolsStrip({ label, tools }: ToolsStripProps) {
  return (
    <div
      role="region"
      aria-label={label}
      className="group overflow-hidden border-y border-border py-3.5 motion-safe:mask-fade-x"
    >
      <div className="flex w-max motion-safe:animate-marquee motion-safe:group-hover:[animation-play-state:paused] motion-reduce:w-auto">
        <ToolList tools={tools} />
        <ToolList tools={tools} isDuplicate />
      </div>
    </div>
  );
}
