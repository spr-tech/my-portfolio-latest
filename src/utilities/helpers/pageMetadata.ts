import type { Metadata } from "next";

import { profile } from "@/data/profile";

/** "Muizz Jamiu · Frontend Engineer": the home page title and the fallback everywhere else. */
export const siteTitle = `${profile.name} · ${profile.role}`;

type PageMetadataOptions = {
  /** Omit for the home page, which uses the full site title. */
  title?: string;
  description: string;
  /** The page's path, e.g. "/about". Resolved against metadataBase for canonical and og:url. */
  path: string;
};

/**
 * The full metadata for one page. Next merges page metadata into the layout's shallowly, so a
 * page's `openGraph` replaces the layout's whole `openGraph` object, preview image included.
 * Building every page's set here keeps the site name, type, image and card style on all of them.
 */
export function pageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  const fullTitle = title ? `${title} · ${profile.name}` : siteTitle;
  const image = profile.previewImage;

  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: profile.name,
      title: fullTitle,
      description,
      url: path,
      images: [{ url: image.src, width: image.width, height: image.height, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: image.src, alt: image.alt }],
    },
  };
}
