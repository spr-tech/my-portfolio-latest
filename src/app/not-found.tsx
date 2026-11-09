import type { Metadata } from "next";

import { NotFoundContent } from "@/components/content/notFound/notFoundContent";
import { notFoundPage } from "@/data/notFound";

export const metadata: Metadata = {
  title: notFoundPage.title,
  description: notFoundPage.metaDescription,
};

export default function NotFound() {
  return <NotFoundContent />;
}
