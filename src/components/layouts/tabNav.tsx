"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationTabs } from "@/utilities/constants/navigation";
import { cn } from "@/utilities/helpers/cn";

export function TabNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Sections" className="sticky top-0 z-10 flex lg:justify-end">
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
                  isActive ? "text-accent-text" : "text-text-secondary hover:text-text-primary",
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