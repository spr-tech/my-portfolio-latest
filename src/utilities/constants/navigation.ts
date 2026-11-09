export type NavigationTab = {
  label: string;
  href: string;
};

/** The tab bar, in display order. Each tab is its own route, so it has its own URL and title. */
export const navigationTabs: NavigationTab[] = [
  { label: "Projects", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
