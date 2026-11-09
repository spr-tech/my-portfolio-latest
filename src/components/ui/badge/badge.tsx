import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/utilities/helpers/cn";

type BadgeVariant = "accent" | "neutral" | "outline";
type BadgeSize = "sm" | "md";

type BadgeProps = {
  /** accent: role and "Capstone project". neutral: "Solo project". outline: tech tags. */
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLSpanElement>, "className" | "children">;

const variantClasses: Record<BadgeVariant, string> = {
  accent: "bg-accent-subtle text-accent-text font-medium",
  neutral: "bg-surface-raised text-text-secondary font-medium",
  outline: "border border-border text-text-secondary",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "rounded-md px-2 py-0.5 text-xs",
  md: "rounded-lg px-2.5 py-1 text-sm",
};

export function Badge({ variant = "neutral", size = "sm", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 leading-normal whitespace-nowrap",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
