import { PageHeader } from "@/components/layouts/pageHeader";
import { Button } from "@/components/ui/button/button";
import { notFoundPage } from "@/data/notFound";

/** Shown inside the normal shell, so the sidebar and tabs are still there to get back. */
export function NotFoundContent() {
  return (
    <>
      <PageHeader intro={notFoundPage} />
      <Button href={notFoundPage.backHref} variant="secondary" className="self-start">
        {notFoundPage.backLabel}
      </Button>
    </>
  );
}
