import type { ReactNode } from "react";

import { Sidebar } from "@/components/layouts/sidebar";
import { TabNav } from "@/components/layouts/tabNav";
import { Text } from "@/components/ui/typography/text";
import { profile } from "@/data/profile";

type AppShellProps = {
  children: ReactNode;
};

/** Sidebar, tab bar and footer stay mounted; only `children` changes between tabs. */
export function AppShell({ children }: AppShellProps) {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-300 flex-col gap-4 px-4 py-4 lg:flex-row lg:items-start lg:gap-8 lg:px-8 lg:py-12">
        <Sidebar className="lg:w-80 lg:shrink-0" />

        <div className="flex min-w-0 flex-1 flex-col gap-6 lg:gap-8 sticky">
          <TabNav />
          <main id="main" tabIndex={-1} className="focus:outline-none">
            {children}
          </main>
          <footer className="border-t border-border pt-4">
            <Text size="caption">{profile.copyright}</Text>
          </footer>
        </div>
      </div>
    </>
  );
}
