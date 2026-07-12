import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function StatusBar({ dark }: { dark?: boolean }) {
  const c = dark ? "text-white" : "text-ink";
  return (
    <div className={cn("relative flex h-[44px] shrink-0 items-center justify-between px-6 pt-1", c)}>
      <span className="font-ui text-[15px] font-semibold tracking-[-0.3px]">9:41</span>
      <div className="absolute left-1/2 top-[9px] h-[26px] w-[90px] -translate-x-1/2 rounded-full bg-black" />
      <div className="flex items-center gap-[5px]">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><rect x="0" y="6" width="3" height="5" rx="1"/><rect x="4.5" y="4" width="3" height="7" rx="1"/><rect x="9" y="2" width="3" height="9" rx="1"/><rect x="13.5" y="0" width="3" height="11" rx="1"/></svg>
        <svg width="16" height="11" viewBox="0 0 16 12" fill="currentColor"><path d="M8 2.2c2.1 0 4 .8 5.5 2.1l1.1-1.2A10 10 0 0 0 8 .5 10 10 0 0 0 1.4 3.1l1.1 1.2A8 8 0 0 1 8 2.2Zm0 3.2c1.2 0 2.3.45 3.2 1.2l1.1-1.2A7 7 0 0 0 8 4.7a7 7 0 0 0-4.3 1.7l1.1 1.2A5 5 0 0 1 8 5.4Zm0 3.1c.6 0 1.1.2 1.5.6L8 10.9 6.5 9.1c.4-.4.9-.6 1.5-.6Z"/></svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="1" y="1" width="20" height="10" rx="2.5" stroke="currentColor" strokeOpacity="0.4"/><rect x="2.5" y="2.5" width="16" height="7" rx="1.2" fill="currentColor"/><rect x="22.5" y="4" width="1.5" height="4" rx="0.75" fill="currentColor" fillOpacity="0.5"/></svg>
      </div>
    </div>
  );
}

export function HomeIndicator({ dark }: { dark?: boolean }) {
  return (
    <div className="flex shrink-0 justify-center pb-2 pt-1.5">
      <div className={cn("h-[5px] w-[134px] rounded-full", dark ? "bg-white/85" : "bg-black")} />
    </div>
  );
}

/** iOS device frame: status bar + content + home indicator. */
export function DeviceFrame({ dark, children, className }: { dark?: boolean; children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex h-dvh flex-col", dark ? "bg-black" : "bg-stage", className)}>
      <StatusBar dark={dark} />
      <div className="relative flex min-h-0 flex-1 flex-col">{children}</div>
      <HomeIndicator dark={dark} />
    </div>
  );
}
