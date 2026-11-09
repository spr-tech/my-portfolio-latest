import type { CSSProperties } from "react";

import type { AboutPage, TerminalLine } from "@/models/about";
import { cn } from "@/utilities/helpers/cn";

type TerminalCardProps = {
  terminal: AboutPage["terminal"];
  className?: string;
  style?: CSSProperties;
};

const lineToneClasses: Record<TerminalLine["kind"], string> = {
  command: "text-terminal-text",
  output: "text-terminal-muted",
  success: "text-terminal-success",
};

// When each line starts typing, in seconds: a command takes longest to "type", output appears
// sooner after it. With the lines in about.ts this gives 0.6s, 1.5s, 2.0s … about 5s in all.
const FIRST_LINE_DELAY = 0.6;
const pauseAfter: Record<TerminalLine["kind"], number> = {
  command: 0.9,
  output: 0.5,
  success: 0.3,
};

function typingDelays(lines: TerminalLine[]) {
  const delays: number[] = [];
  let next = FIRST_LINE_DELAY;
  for (const line of lines) {
    delays.push(next);
    next += pauseAfter[line.kind];
  }
  // The final prompt with the cursor comes last.
  return { lineDelays: delays, cursorDelay: next };
}

function Prompt() {
  return <span className="text-terminal-prompt">$</span>;
}

/**
 * A small terminal window that stays dark in both themes (its tokens never change in .dark).
 * Each line types out in turn, then the cursor blinks. Screen readers get all the text at once,
 * and with reduced motion everything is shown immediately with a steady cursor.
 */
export function TerminalCard({ terminal, className, style }: TerminalCardProps) {
  const { lineDelays, cursorDelay } = typingDelays(terminal.lines);

  return (
    <section
      aria-label={terminal.label}
      style={style}
      className={cn(
        "max-w-170 overflow-hidden rounded-xl border border-terminal-border bg-terminal-bg",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-terminal-border bg-terminal-bar px-3.5 py-2.5">
        <span aria-hidden="true" className="size-2.5 rounded-full bg-terminal-dot-red" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-terminal-dot-yellow" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-terminal-dot-green" />
        <span className="ml-2 font-mono text-xs text-terminal-caption">{terminal.title}</span>
      </div>

      {/* 12px on phones so the longest line fits without wrapping; 14px from sm. */}
      <div className="flex flex-col p-4 font-mono text-xs leading-[1.75] sm:text-sm">
        {terminal.lines.map((line, index) => (
          <p
            key={index}
            style={{ animationDelay: `${lineDelays[index]}s` }}
            className={cn("whitespace-pre-wrap motion-safe:animate-type", lineToneClasses[line.kind])}
          >
            {line.kind === "command" && (
              <>
                <Prompt />{" "}
              </>
            )}
            {line.text}
          </p>
        ))}
        <p style={{ animationDelay: `${cursorDelay}s` }} className="text-terminal-text motion-safe:animate-type">
          <Prompt />{" "}
          <span
            aria-hidden="true"
            className="inline-block h-[1.1em] w-2 translate-y-[0.15em] bg-terminal-prompt motion-safe:animate-blink"
          />
        </p>
      </div>
    </section>
  );
}
