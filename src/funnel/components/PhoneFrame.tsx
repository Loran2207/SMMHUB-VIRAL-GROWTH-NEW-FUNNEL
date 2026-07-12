import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className="flex min-h-dvh w-full justify-center bg-[#e9e9ee]">
      <div className={cn("relative h-dvh w-[390px] overflow-hidden", className)}>{children}</div>
    </div>
  );
}
