import type { ComponentType, SVGProps } from "react";

import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons/icons";
import type { SocialKind, SocialLink } from "@/models/profile";
import { cn } from "@/utilities/helpers/cn";

const socialIcons: Record<SocialKind, ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

type SocialLinksProps = {
  links: SocialLink[];
  className?: string;
};

/** A centred row of icon-only links. Each icon is 20px inside a 44px tap target. */
export function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center justify-center gap-3", className)}>
      {links.map((link) => {
        const Icon = socialIcons[link.kind];

        return (
          <li key={link.kind}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="flex size-11 items-center justify-center rounded-lg text-text-secondary transition duration-200 ease-out hover:text-accent-text motion-safe:hover:-translate-y-0.5"
            >
              <Icon className="size-5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
