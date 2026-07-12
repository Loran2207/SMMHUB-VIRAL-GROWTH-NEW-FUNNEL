import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

/** White rounded-top sheet (used for text/email/continue/yesno). */
export function Sheet({ children }: { children: ReactNode }) {
  return <div className="w-full rounded-t-[16px] bg-surface shadow-sheet">{children}</div>;
}

/** Light bottom area on the stage bg (used for card-based selects). */
export function Bottom({ children }: { children: ReactNode }) {
  return <div className="w-full border-t border-line/70 bg-stage">{children}</div>;
}

export function CardList({ children }: { children: ReactNode }) {
  return <div className="flex max-h-[46vh] flex-col gap-2.5 overflow-y-auto px-4 pb-1 pt-4">{children}</div>;
}

export function PrimaryButton({ children, onClick, disabled }: { children: ReactNode; onClick?: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "h-[56px] w-full rounded-[16px] font-ui text-[16px] font-bold text-white transition",
        disabled ? "bg-[#c3c4d0]" : "bg-primary shadow-cta active:scale-[0.99]",
      )}
    >
      {children}
    </button>
  );
}

/** Bordered option card (image #80 style). control: check | none */
export function OptionCard({ label, selected, onClick, control = "check" }: {
  label: string; selected: boolean; onClick: () => void; control?: "check" | "none";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-3 rounded-[14px] border-2 bg-surface px-4 py-[14px] text-left transition-colors",
        selected ? "border-accent" : "border-line hover:border-line",
      )}
    >
      <span className={cn("flex-1 font-ui text-[15px] font-semibold", selected ? "text-accent" : "text-ink")}>{label}</span>
      {control === "check" && (
        <span className={cn("grid size-[22px] shrink-0 place-items-center rounded-[6px] border-2", selected ? "border-accent bg-accent text-white" : "border-line")}>
          {selected && <Check size={13} strokeWidth={3.5} />}
        </span>
      )}
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
