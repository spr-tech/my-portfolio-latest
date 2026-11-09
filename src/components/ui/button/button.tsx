import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/utilities/helpers/cn";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "md" | "icon";

type CommonProps = {
  variant?: ButtonVariant;
  /** md: 44px tall with text. icon: 44px square, needs an aria-label. Both meet the 44px tap target. */
  size?: ButtonSize;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
  children?: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined };

/** Pass `href` to get a link styled as a button, e.g. "Download CV" or "Get in touch". */
type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg text-sm font-medium whitespace-nowrap no-underline transition duration-150 ease-out hover:brightness-110 motion-safe:hover:-translate-y-px motion-safe:active:scale-[0.97]";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-foreground",
  secondary: "border border-border bg-surface-raised text-text-primary",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-11 px-4",
  icon: "size-11 shrink-0",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", startIcon, endIcon, className, children, ...rest } = props;
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);
  const content = (
    <>
      {startIcon}
      {children}
      {endIcon}
    </>
  );

  if (typeof rest.href === "string") {
    const { href, ...anchorProps } = rest as ButtonAsLink;
    // Routes go through next/link for prefetching; files, mailto and external URLs are plain anchors.
    const isRoute = href.startsWith("/") && !anchorProps.download;

    if (isRoute) {
      return (
        <Link href={href} className={classes} {...anchorProps}>
          {content}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...anchorProps}>
        {content}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = rest as ButtonAsButton;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
