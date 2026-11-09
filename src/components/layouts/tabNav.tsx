"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

import { navigationTabs } from "@/utilities/constants/navigation";
import { cn } from "@/utilities/helpers/cn";
import { riseDelay } from "@/utilities/helpers/riseDelay";

/**
 * Marks <html data-navigated> on the first tab change. From then on the staggered first-load
 * entrance (rise-on-load) is off and tab changes only play the quick page-enter fade. A layout
 * effect runs before the new tab is painted, so its first-load animation never flashes.
 */
function useMarkNavigation(pathname: string) {
  const previousPathname = useRef(pathname);

  useLayoutEffect(() => {
    if (previousPathname.current !== pathname) {
      document.documentElement.dataset.navigated = "true";
    }
    previousPathname.current = pathname;
  }, [pathname]);
}

export function TabNav() {
  const pathname = usePathname();
  useMarkNavigation(pathname);

  return (
    <nav
      aria-label="Sections"
      style={riseDelay(80)}
      className="rise-on-load sticky top-0 z-10 flex lg:justify-end"
    >
      <ul className="flex w-full justify-center gap-1 rounded-b-2xl border border-t-0 border-border bg-surface/90 px-2 py-1 backdrop-blur-md lg:w-auto lg:px-3">
        {navigationTabs.map((tab) => {
          const isActive = pathname === tab.href;

          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "block rounded-lg px-3 py-3 text-sm font-medium transition-colors duration-200 ease-out lg:px-4 lg:text-base",
                  // A filled background as well as colour, so the active tab doesn't rely on colour alone.
                  isActive
                    ? "bg-accent-subtle text-accent-text"
                    : "text-text-secondary hover:text-text-primary",
                )}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
