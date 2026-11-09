import type { Metadata } from "next";
import { IBM_Plex_Mono, Poppins } from "next/font/google";

import { AppShell } from "@/components/layouts/appShell";
import { ThemeProvider } from "@/components/providers/themeProvider";
import { profile } from "@/data/profile";
import { siteUrl } from "@/utilities/constants/site";

import "./globals.css";

// Poppins isn't a variable font: each weight is its own file, so keep this list to what's used.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Only the About terminal uses mono, so don't preload it on every route.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
  preload: false,
});

const defaultTitle = `${profile.name} · ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s · ${profile.name}`,
  },
  description: profile.siteDescription,
  openGraph: {
    type: "website",
    siteName: profile.name,
    title: defaultTitle,
    description: profile.siteDescription,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: profile.siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
