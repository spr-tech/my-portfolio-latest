/**
 * Wraps each tab's content in its own element, so the tab can fade in when it appears.
 * Next keeps visited tabs mounted but hidden; showing one again restarts its CSS animation.
 */
export default function Template({ children }: LayoutProps<"/">) {
  return <div className="page-enter flex flex-col gap-12">{children}</div>;
}
