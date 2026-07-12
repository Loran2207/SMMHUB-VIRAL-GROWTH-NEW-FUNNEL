import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Sheet({ children }: { children: ReactNode }) {
  return <div className="w-full rounded-t-[16px] bg-surface shadow-sheet">{children}</div>;
}

export function PrimaryButton({ children, onClick, disabled }: { children: ReactNode; onClick?: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "h-[56px] w-full rounded-[16px] font-ui text-[16px] font-bold text-white transition",
        disabled ? "bg-[#9a9db1]" : "bg-primary shadow-cta active:scale-[0.99]",
      )}
    >
      {children}
    </button>
  );
}

export function Radio({ on }: { on: boolean }) {
  return (
    <span className={cn("grid size-[18px] shrink-0 place-items-center rounded-full border", on ? "border-accent bg-accent" : "border-line")}>
      {on && <span className="size-[7px] rounded-full bg-white" />}
    </span>
  );
}

export function OptionRow({ label, on, onClick, control = "radio" }: {
  label: string; on: boolean; onClick: () => void; control?: "radio" | "none";
}) {
  return (
    <button type="button" onClick={onClick} className="flex w-full items-center gap-3 border-t border-line-soft px-4 py-[15px] text-left">
      <span className="flex-1 font-ui text-[15px] font-medium tracking-[-0.225px] text-ink">{label}</span>
      {control === "radio" && <Radio on={on} />}
    </button>
  );
}
