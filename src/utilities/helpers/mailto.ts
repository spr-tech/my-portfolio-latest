/** Builds a mailto: link with the subject encoded, so spaces and punctuation survive. */
export function buildMailtoHref(address: string, subject?: string) {
  return subject ? `mailto:${address}?subject=${encodeURIComponent(subject)}` : `mailto:${address}`;
}
