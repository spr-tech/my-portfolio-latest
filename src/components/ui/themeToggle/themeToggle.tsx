"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button/button";
import { MoonIcon, SunIcon } from "@/components/ui/icons/icons";

const subscribe = () => () => {};

/**
 * False on the server and during hydration, true afterwards. The server can't know the visitor's
 * theme, so rendering the icon before this is true would show the wrong one and mismatch.
 */
function useIsMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) {
    // Same size as the real button, so nothing shifts when it swaps in.
    return <Button variant="secondary" size="icon" className={className} aria-label="Switch theme" disabled />;
  }

  const isDark = resolvedTheme === "dark";
  const handleClick = () => {
    // The class turns on 200ms colour transitions for this switch only (see globals.css).
    const root = document.documentElement;
    root.classList.add("theme-transition");
    setTheme(isDark ? "light" : "dark");
    window.setTimeout(() => root.classList.remove("theme-transition"), 250);
  };

  return (
    <Button
      variant="secondary"
      size="icon"
      className={className}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={handleClick}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
