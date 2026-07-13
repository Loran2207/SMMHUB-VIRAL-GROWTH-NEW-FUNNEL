import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

export function Sheet({ children }: { children: ReactNode }) {
  return <div className="w-full bg-stage">{children}</div>;
}

export function Bottom({ children }: { children: ReactNode }) {
  return <div className="w-full bg-stage">{children}</div>;
}

export function CardList({ children }: { children: ReactNode }) {
  return <div className="flex max-h-[46vh] flex-col gap-3 overflow-y-auto px-4 pb-1 pt-3">{children}</div>;
}

export function PrimaryButton({ children, onClick, disabled }: { children: ReactNode; onClick?: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "h-[56px] w-full rounded-[16px] font-ui text-[16px] font-bold text-white transition-all",
        disabled ? "bg-[#c7c9d6]" : "bg-primary shadow-cta active:scale-[0.99]",
      )}
    >
      {children}
    </button>
  );
}

/** Premium bordered option card. control: check | none */
export function OptionCard({ label, selected, onClick, control = "check", emoji }: {
  label: string; selected: boolean; onClick: () => void; control?: "check" | "none"; emoji?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-3 rounded-[16px] bg-white px-[18px] py-[16px] text-left transition-all duration-150",
        selected ? "border-2 border-accent shadow-card-sel" : "border border-[#eceef3] shadow-card hover:border-[#d9dcea]",
      )}
    >
      {emoji && <span className="shrink-0 text-[17px] leading-none">{emoji}</span>}
      <span className={cn("flex-1 font-ui text-[15px] font-semibold leading-snug", selected ? "text-accent" : "text-ink")}>{label}</span>
      {control === "check" && (
        <span className={cn("grid size-[22px] shrink-0 place-items-center rounded-[7px] border-[1.5px] transition-colors", selected ? "border-accent bg-accent text-white" : "border-[#d6d9e3] bg-[#f1f1f4]")}>
          {selected && <Check size={13} strokeWidth={3.5} />}
        </span>
      )}
    </button>
  );
}

export function Radio({ on }: { on: boolean }) {
  return (
    <span className={cn("grid size-[20px] shrink-0 place-items-center rounded-full border-[1.5px]", on ? "border-accent bg-accent" : "border-[#d6d9e3]")}>
      {on && <span className="size-[7px] rounded-full bg-white" />}
    </span>
  );
}
