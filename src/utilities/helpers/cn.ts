import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Joins class names and lets a later Tailwind class override an earlier one, e.g. a prop's `px-6` over a default `px-4`. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
