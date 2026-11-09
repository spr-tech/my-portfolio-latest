import type { AboutPage, TerminalLine } from "@/models/about";
import { cn } from "@/utilities/helpers/cn";

type TerminalCardProps = {
  terminal: AboutPage["terminal"];
};

const lineToneClasses: Record<TerminalLine["kind"], string> = {
  command: "text-terminal-text",
  output: "text-terminal-muted",
  success: "text-terminal-success",
};

function Prompt() {
  return <span className="text-terminal-prompt">$</span>;
}

/**
 * A small terminal window that stays dark in both themes (its tokens never change in .dark).
 * The typing effect and blinking cursor are added with the other animations.
 */
export function TerminalCard({ terminal }: TerminalCardProps) {
  return (
    <section
      aria-label={terminal.label}
      className="max-w-170 overflow-hidden rounded-xl border border-terminal-border bg-terminal-bg"
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
          <p key={index} className={cn("whitespace-pre-wrap", lineToneClasses[line.kind])}>
            {line.kind === "command" && (
              <>
                <Prompt />{" "}
              </>
            )}
            {line.text}
          </p>
        ))}
        <p className="text-terminal-text">
          <Prompt />{" "}
          <span
            aria-hidden="true"
            className="inline-block h-[1.1em] w-2 translate-y-[0.15em] bg-terminal-prompt"
          />
        </p>
      </div>
    </section>
  );
}
