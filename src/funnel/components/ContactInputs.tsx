import { useState } from "react";
import { cn } from "@/lib/cn";
import type { Question } from "@/funnel/flow/types";
import { Sheet, PrimaryButton } from "@/funnel/components/ui";

const DOMAINS = ["gmail.com", "yahoo.com", "outlook.com", "icloud.com", "hotmail.com"];

export function EmailInput({ onAnswer }: { onAnswer: (v: string) => void }) {
  const [v, setV] = useState("");
  const at = v.indexOf("@");
  const frag = at >= 0 ? v.slice(at + 1) : null;
  const suggestions = frag !== null && frag.length >= 0 && !DOMAINS.includes(frag)
    ? DOMAINS.filter((d) => d.startsWith(frag)).map((d) => v.slice(0, at + 1) + d)
    : [];
  const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
  return (
    <Sheet>
      <div className="border-t border-line-soft p-4">
        <input value={v} type="email" onChange={(e) => setV(e.target.value)} placeholder="you@email.com" className="w-full rounded-[10px] border border-line px-4 py-3.5 font-ui text-[15px] text-ink outline-none placeholder:text-ink-faint" />
        {at >= 0 && suggestions.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {suggestions.slice(0, 3).map((s) => (
              <button key={s} type="button" onClick={() => setV(s)} className="rounded-full border border-line bg-surface px-3 py-1.5 font-ui text-[13px] text-ink-soft active:scale-95">{s}</button>
            ))}
          </div>
        )}
      </div>
      <div className="px-4 pb-4"><PrimaryButton disabled={!valid} onClick={() => onAnswer(v)}>Continue</PrimaryButton></div>
    </Sheet>
  );
}

export function OptIn({ q, onAnswer }: { q: Extract<Question, { kind: "optin" }>; onAnswer: (v: string) => void }) {
  return (
    <Sheet>
      <div className="flex flex-col gap-3 p-4">
        <PrimaryButton onClick={() => onAnswer(q.yes)}>{q.yes}</PrimaryButton>
        <button type="button" onClick={() => onAnswer(q.no)} className="h-[52px] w-full rounded-[16px] border border-line bg-surface font-ui text-[14px] font-bold text-ink-soft active:scale-[0.99]">{q.no}</button>
      </div>
    </Sheet>
  );
}

export function MultiSelect({ q, onAnswer }: { q: Extract<Question, { kind: "multi" }>; onAnswer: (v: string) => void }) {
  const [sel, setSel] = useState<string[]>([]);
  const toggle = (l: string) => setSel((s) => (s.includes(l) ? s.filter((x) => x !== l) : [...s, l]));
  return (
    <Sheet>
      <div className="max-h-[300px] overflow-y-auto">
        {q.options.map((o) => (
          <button key={o.label} type="button" onClick={() => toggle(o.label)} className="flex w-full items-center gap-3 border-t border-line-soft px-4 py-[15px] text-left">
            <span className="flex-1 font-ui text-[15px] font-medium text-ink">{o.label}</span>
            <span className={cn("grid size-[18px] shrink-0 place-items-center rounded-[5px] border", sel.includes(o.label) ? "border-accent bg-accent text-white" : "border-line")}>
              {sel.includes(o.label) && <span className="text-[10px] font-bold">✓</span>}
            </span>
          </button>
        ))}
      </div>
      <div className="p-4"><PrimaryButton disabled={!sel.length} onClick={() => onAnswer(sel.join(", "))}>{q.cta ?? "Next"}</PrimaryButton></div>
    </Sheet>
  );
}
