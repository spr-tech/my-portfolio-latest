import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/utilities/helpers/cn";

type TextSize = "page" | "title" | "heading" | "body" | "small" | "caption";
type TextTone = "primary" | "body" | "secondary" | "muted" | "accent";
type TextWeight = "regular" | "medium" | "semibold" | "bold";
type TextElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "span"
  | "div"
  | "dt"
  | "dd"
  | "li"
  | "figcaption";

type TextProps = {
  /** The HTML element. Pick it for meaning (h2, p, dt); pick `size` for looks. */
  as?: TextElement;
  size?: TextSize;
  tone?: TextTone;
  weight?: TextWeight;
  className?: string;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children">;

// The scale from CLAUDE.md: 32/24/18 headings, 16 body, 14 small, 12 captions.
// The page title drops to 24 on phones so long titles don't wrap.
const sizeClasses: Record<TextSize, string> = {
  page: "text-2xl leading-tight tracking-[-0.01em] lg:text-[2rem]",
  title: "text-2xl leading-tight tracking-[-0.01em]",
  heading: "text-lg leading-snug",
  body: "text-base leading-[1.6]",
  small: "text-sm leading-[1.6]",
  caption: "text-xs leading-normal",
};

const toneClasses: Record<TextTone, string> = {
  primary: "text-text-primary",
  body: "text-text-body",
  secondary: "text-text-secondary",
  muted: "text-text-muted",
  accent: "text-accent-text",
};

const weightClasses: Record<TextWeight, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const isHeadingSize = (size: TextSize) => size === "page" || size === "title" || size === "heading";

const defaultTone = (size: TextSize): TextTone => {
  if (isHeadingSize(size)) return "primary";
  if (size === "caption") return "muted";
  return "body";
};

export function Text({
  as: Element = "p",
  size = "body",
  tone,
  weight,
  className,
  children,
  ...props
}: TextProps) {
  const resolvedTone = tone ?? defaultTone(size);
  const resolvedWeight = weight ?? (isHeadingSize(size) ? "semibold" : "regular");

  return (
    <Element
      className={cn(
        "m-0",
        sizeClasses[size],
        toneClasses[resolvedTone],
        weightClasses[resolvedWeight],
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
}
