import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/utilities/helpers/cn";

type CardElement = "div" | "article" | "section" | "aside" | "li";
type CardPadding = "none" | "sm" | "md" | "lg";

type CardProps = {
  as?: CardElement;
  padding?: CardPadding;
  /**
   * Lifts 4px and turns the border accent on hover. Also adds `group`, so a child image can
   * zoom with `group-hover:scale-[1.04]`.
   */
  isInteractive?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children">;

const paddingClasses: Record<CardPadding, string> = {
  none: "",
  sm: "p-4",
  md: "p-5",
  lg: "px-6 py-7",
};

export function Card({
  as: Element = "div",
  padding = "md",
  isInteractive = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <Element
      className={cn(
        "rounded-xl border border-border bg-surface",
        paddingClasses[padding],
        isInteractive &&
          "group transition-[translate,border-color] duration-250 ease-out hover:border-accent motion-safe:hover:-translate-y-1",
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
}
