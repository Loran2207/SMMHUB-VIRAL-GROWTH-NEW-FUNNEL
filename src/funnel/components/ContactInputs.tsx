import { useState } from "react";
import type { Question } from "@/funnel/flow/types";
import { Sheet, Bottom, CardList, OptionCard, PrimaryButton } from "@/funnel/components/ui";

const DOMAINS = ["gmail.com", "yahoo.com", "outlook.com", "icloud.com", "hotmail.com"];

export function EmailInput({ onAnswer }: { onAnswer: (v: string) => void }) {
  const [v, setV] = useState("");
  const at = v.indexOf("@");
  const frag = at >= 0 ? v.slice(at + 1) : null;
  const suggestions = frag !== null && !DOMAINS.includes(frag) ? DOMAINS.filter((d) => d.startsWith(frag)).map((d) => v.slice(0, at + 1) + d) : [];
  const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
  return (
    <Sheet>
      <div className="p-4">
        <input value={v} type="email" onChange={(e) => setV(e.target.value)} placeholder="you@email.com" className="w-full rounded-[12px] border-2 border-line bg-surface px-4 py-3.5 font-ui text-[15px] text-ink outline-none placeholder:text-ink-faint" />
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
        <button type="button" onClick={() => onAnswer(q.no)} className="h-[52px] w-full rounded-[16px] border-2 border-line bg-surface font-ui text-[14px] font-bold text-ink-soft active:scale-[0.99]">{q.no}</button>
      </div>
    </Sheet>
  );
}

export function MultiSelect({ q, onAnswer }: { q: Extract<Question, { kind: "multi" }>; onAnswer: (v: string) => void }) {
  const [sel, setSel] = useState<string[]>([]);
  const toggle = (l: string) => setSel((s) => (s.includes(l) ? s.filter((x) => x !== l) : [...s, l]));
  return (
    <Bottom>
      <CardList>
        {q.options.map((o) => <OptionCard key={o.label} label={o.label} selected={sel.includes(o.label)} onClick={() => toggle(o.label)} />)}
      </CardList>
      <div className="p-4"><PrimaryButton disabled={!sel.length} onClick={() => onAnswer(sel.join(", "))}>{q.cta ?? "Continue"}</PrimaryButton></div>
    </Bottom>
  );
}
