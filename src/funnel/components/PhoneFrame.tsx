import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className="flex min-h-dvh w-full justify-center bg-[#e9e9ee]">
      <div className={cn("relative flex h-dvh w-[390px] flex-col overflow-hidden bg-stage", className)}>
        {children}
      </div>
    </div>
  );
}
