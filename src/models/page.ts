/** The heading and one-line intro at the top of each tab. */
export type PageIntro = {
  title: string;
  intro: string;
  /**
   * The page's meta description: shown in search results and link previews (WhatsApp, LinkedIn).
   * Aim for about 150 characters that make sense without the page around them.
   */
  metaDescription: string;
};
