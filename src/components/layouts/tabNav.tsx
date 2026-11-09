"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationTabs } from "@/utilities/constants/navigation";
import { cn } from "@/utilities/helpers/cn";

export function TabNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Sections" className="border-b border-border">
      <ul className="-mb-px flex overflow-x-auto lg:gap-1">
        {navigationTabs.map((tab) => {
          const isActive = pathname === tab.href;

          return (
            <li key={tab.href} className="shrink-0">
              <Link
                href={tab.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative block px-2 py-3 text-sm max-[22.5rem]:px-1.5 font-medium transition-colors duration-200 ease-out lg:px-3.5 lg:text-base",
                  isActive ? "text-accent-text" : "text-text-secondary hover:text-text-primary",
                )}
              >
                {tab.label}
                {/* Every tab has an underline; only the active one is scaled to full width, so it
                    shrinks under the old tab and grows under the new one. */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-2 bottom-0 max-[22.5rem]:inset-x-1.5 h-0.5 rounded-full bg-accent transition-transform duration-300 ease-entrance lg:inset-x-3.5",
                    isActive ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
