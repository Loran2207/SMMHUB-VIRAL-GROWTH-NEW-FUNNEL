import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight, Plus, MoreHorizontal, Share } from "lucide-react";
import { cn } from "@/lib/cn";
import { StatusBar } from "@/funnel/components/Chrome";

function AddressBar({ dark }: { dark?: boolean }) {
  return (
    <div className={cn("flex h-[52px] shrink-0 items-center px-4", dark ? "text-white" : "text-ink")}>
      <div className={cn("flex h-[40px] w-full items-center gap-2 rounded-[12px] px-3", dark ? "bg-[#5f6267]" : "bg-[#e7e7ea]")}>
        <span className={cn("grid size-6 place-items-center rounded-[6px] text-[11px] font-bold", dark ? "bg-white/20" : "bg-white")}>文A</span>
        <div className="flex flex-1 items-center justify-center gap-1.5">
          <span className={cn("text-[11px]", dark ? "text-white/70" : "text-ink-soft")}>&#9432;</span>
          <span className={cn("font-ui text-[15px] font-medium tracking-[-0.2px]", dark ? "text-[#e8ebf0]" : "text-ink")}>smmhub.com</span>
        </div>
        <Share size={17} className={dark ? "text-white/85" : "text-ink-soft"} />
      </div>
    </div>
  );
}

function SafariNav({ dark }: { dark?: boolean }) {
  const c = dark ? "text-white/85" : "text-ink";
  return (
    <div className={cn("shrink-0 border-t", dark ? "border-white/15 bg-[#33363b]" : "border-line bg-[#f5f5f7]")}>
      <div className="flex items-center justify-between px-7 py-2.5">
        <ChevronLeft size={26} className={dark ? "text-white/35" : "text-ink-faint"} />
        <ChevronRight size={26} className={c} />
        <span className={cn("grid size-[30px] place-items-center rounded-full", dark ? "bg-white/10" : "bg-black/5")}><Plus size={20} className={c} /></span>
        <span className={cn("grid size-[22px] place-items-center rounded-[6px] border-2 text-[11px] font-bold", dark ? "border-white/80 text-white/85" : "border-ink text-ink")}>4</span>
        <MoreHorizontal size={24} className={c} />
      </div>
      <div className="flex justify-center pb-2"><div className={cn("h-[5px] w-[134px] rounded-full", dark ? "bg-white/80" : "bg-black")} /></div>
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
