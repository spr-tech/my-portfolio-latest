import type { CSSProperties } from "react";

/**
 * Inline animation-delay for the staggered first-load entrance (the rise-on-load class).
 * Inline so it always wins over the animation shorthand, whatever order the CSS ends up in.
 */
export function riseDelay(ms: number): CSSProperties {
  return { animationDelay: `${ms}ms` };
}

/** Delay for the nth card in a list that starts at `startMs`, ~110ms apart as in the design. */
export function staggerDelay(startMs: number, index: number): CSSProperties {
  return riseDelay(startMs + index * 110);
}
