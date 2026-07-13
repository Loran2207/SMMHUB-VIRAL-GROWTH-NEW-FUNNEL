import type { ReactNode } from "react";

/**
 * Real Safari chrome (exact Figma export images) around the page content.
 *
 * One variant only, deliberately: every screen in the funnel - hero, welcome, today, the chat
 * steps and the summaries - shares the identical white top bar and white bottom nav, so nothing
 * jumps between screens. Dark screens keep their dark *content*; the bars stay white.
 * (public/img/chrome-*-dark.png are kept on disk but no longer referenced.)
 */
export function BrowserChrome({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full flex-col bg-stage">
      <img src="/img/chrome-top-light.png" alt="" draggable={false} className="block w-full shrink-0 select-none" />
      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">{children}</div>
      <img src="/img/chrome-nav-light.png" alt="" draggable={false} className="block w-full shrink-0 select-none" />
    </div>
  );
}
