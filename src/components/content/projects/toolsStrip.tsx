"use client";

import { useState } from "react";

import { PauseIcon, PlayIcon } from "@/components/ui/icons/icons";
import { cn } from "@/utilities/helpers/cn";

type ToolsStripProps = {
  label: string;
  pauseLabel: string;
  tools: string[];
  className?: string;
  style?: React.CSSProperties;
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
 * Tool names scrolling sideways. Pauses on hover, and the button pauses it for keyboard and touch
 * users too (WCAG 2.2.2: moving content needs a way to stop it). With reduced motion it's a
 * static, wrapped list and the button is hidden. Screen readers get the first copy only.
 */
export function ToolsStrip({ label, pauseLabel, tools, className, style }: ToolsStripProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      role="region"
      aria-label={label}
      style={style}
      className={cn("flex items-center gap-1 border-y border-border", className)}
    >
      <div className="group min-w-0 flex-1 overflow-hidden py-3.5 motion-safe:mask-fade-x">
        {/* Paused inline: a class would lose to the animation shorthand, which resets play-state. */}
        <div
          style={isPaused ? { animationPlayState: "paused" } : undefined}
          className="flex w-max motion-safe:animate-marquee motion-safe:group-hover:[animation-play-state:paused] motion-reduce:w-auto"
        >
          <ToolList tools={tools} />
          <ToolList tools={tools} isDuplicate />
        </div>
      </div>

      <button
        type="button"
        aria-label={pauseLabel}
        aria-pressed={isPaused}
        onClick={() => setIsPaused((wasPaused) => !wasPaused)}
        className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-lg text-text-muted transition-colors duration-200 ease-out hover:text-text-primary motion-reduce:hidden"
      >
        {isPaused ? <PlayIcon className="size-4" /> : <PauseIcon className="size-4" />}
      </button>
    </div>
  );
}
