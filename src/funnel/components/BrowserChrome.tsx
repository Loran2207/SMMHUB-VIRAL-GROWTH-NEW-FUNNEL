import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Real Safari chrome (exact Figma export images) around the page content. */
export function BrowserChrome({ dark, children }: { dark?: boolean; children: ReactNode }) {
  return (
    <div className={cn("flex h-full flex-col", dark ? "bg-black" : "bg-stage")}>
      <img src={dark ? "/img/chrome-top-dark.png" : "/img/chrome-top-light.png"} alt="" draggable={false} className="block w-full shrink-0 select-none" />
      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">{children}</div>
      <img src={dark ? "/img/chrome-nav-dark.png" : "/img/chrome-nav-light.png"} alt="" draggable={false} className="block w-full shrink-0 select-none" />
    </div>
  );
}
