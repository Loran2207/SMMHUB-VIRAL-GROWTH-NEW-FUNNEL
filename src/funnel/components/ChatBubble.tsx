import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const BASE = "w-fit px-4 py-3 font-ui text-[15px] font-medium leading-[1.5] tracking-[-0.225px] text-ink";

export function BotBubble({ children, tail = true, className }: { children: ReactNode; tail?: boolean; className?: string }) {
  return (
    <div className={cn(BASE, "max-w-[320px] bg-surface shadow-bubble", tail ? "rounded-[16px] rounded-bl-[2px]" : "rounded-[16px]", className)}>
      {children}
    </div>
  );
}

export function UserBubble({ children, tail = true }: { children: ReactNode; tail?: boolean }) {
  return (
    <div className={cn(BASE, "max-w-[276px] self-end bg-bubble", tail ? "rounded-[16px] rounded-br-[2px]" : "rounded-[16px]")}>
      {children}
    </div>
  );
}

export function TypingDots() {
  return (
    <div className="flex w-fit items-center gap-[5px] rounded-[16px] rounded-bl-[2px] bg-surface px-4 py-[15px] shadow-bubble">
      {[0, 1, 2].map((i) => (
        <span key={i} className="pz-dot size-[7px] rounded-full bg-[#c7c8d2]" style={{ animationDelay: `${i * 160}ms` }} />
      ))}
    </div>
  );
}
