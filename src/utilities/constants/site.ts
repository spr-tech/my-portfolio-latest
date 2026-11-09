/**
 * The site's public address, used for metadataBase, the sitemap and robots.txt.
 * Defaults to the live domain so link previews resolve wherever the site is built.
 * Set NEXT_PUBLIC_SITE_URL to override it, e.g. for a preview deployment.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://my-portfolio-latest.qocent.app";
