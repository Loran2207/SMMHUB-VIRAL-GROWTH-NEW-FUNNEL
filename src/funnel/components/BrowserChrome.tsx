import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight, Plus, MoreHorizontal, Share } from "lucide-react";
import { cn } from "@/lib/cn";

function StatusBar({ dark }: { dark?: boolean }) {
  const c = dark ? "text-white" : "text-ink";
  return (
    <div className={cn("flex h-[44px] items-center justify-between px-6 pt-1", c)}>
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

function AddressBar({ dark }: { dark?: boolean }) {
  return (
    <div className={cn("flex h-[52px] items-center px-4", dark ? "text-white" : "text-ink")}>
      <div className={cn("flex h-[40px] w-full items-center gap-2 rounded-[12px] px-3", dark ? "bg-white/10" : "bg-[#e7e7ea]")}>
        <span className={cn("grid size-6 place-items-center rounded-[6px] text-[11px] font-bold", dark ? "bg-white/15" : "bg-white")}>文A</span>
        <div className="flex flex-1 items-center justify-center gap-1.5">
          <span className={cn("text-[10px]", dark ? "text-white/60" : "text-ink-soft")}>&#128274;</span>
          <span className="font-ui text-[15px] font-medium tracking-[-0.2px]">smmhub.com</span>
        </div>
        <Share size={17} className={dark ? "text-white/80" : "text-ink-soft"} />
      </div>
    </div>
  );
}

function SafariNav({ dark }: { dark?: boolean }) {
  const c = dark ? "text-white/85" : "text-ink";
  const dim = dark ? "text-white/30" : "text-ink-faint";
  return (
    <div className={cn("shrink-0", dark ? "bg-black/40" : "bg-[#f5f5f7]")}>
      <div className="flex items-center justify-between px-7 py-2.5">
        <ChevronLeft size={26} className={c} />
        <ChevronRight size={26} className={dim} />
        <Plus size={22} className={cn("rounded-full", c)} />
        <span className={cn("grid size-[22px] place-items-center rounded-[6px] border-2 text-[11px] font-bold", dark ? "border-white/80 text-white/85" : "border-ink text-ink")}>4</span>
        <MoreHorizontal size={24} className={c} />
      </div>
      <div className="flex justify-center pb-2"><div className={cn("h-[5px] w-[134px] rounded-full", dark ? "bg-white/70" : "bg-black")} /></div>
    </div>
  );
}

export function BrowserChrome({ dark, children }: { dark?: boolean; children: ReactNode }) {
  return (
    <div className={cn("flex h-dvh flex-col", dark ? "bg-black" : "bg-stage")}>
      <div className="relative shrink-0"><StatusBar dark={dark} /><AddressBar dark={dark} /></div>
      <div className="relative flex min-h-0 flex-1 flex-col">{children}</div>
      <SafariNav dark={dark} />
    </div>
  );
}
