import type { AnchorHTMLAttributes, ReactNode } from "react";

import { ArrowUpRightIcon } from "@/components/ui/icons/icons";
import { cn } from "@/utilities/helpers/cn";

type ExternalLinkTone = "accent" | "muted" | "primary";

type ExternalLinkProps = {
  href: string;
  tone?: ExternalLinkTone;
  /** Shows an up-right arrow that nudges 2px on hover. */
  hasArrow?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel" | "className" | "children">;

const toneClasses: Record<ExternalLinkTone, string> = {
  accent: "text-accent-text",
  muted: "text-text-secondary hover:text-text-primary",
  primary: "font-normal text-text-primary hover:text-accent-text",
};

/** A link that opens in a new tab, for live sites, GitHub and LinkedIn. */
export function ExternalLink({
  href,
  tone = "accent",
  hasArrow = false,
  className,
  children,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group/link inline-flex items-center gap-1 text-sm font-medium underline-offset-4 transition-colors duration-200 ease-out hover:underline",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {children}
      {hasArrow && (
        <ArrowUpRightIcon className="size-3.5 transition-transform duration-200 ease-out motion-safe:group-hover/link:translate-x-0.5 motion-safe:group-hover/link:-translate-y-0.5" />
      )}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
