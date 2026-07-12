import { useState } from "react";
import type { Question } from "@/funnel/flow/types";
import { Bottom, CardList, OptionCard, PrimaryButton } from "@/funnel/components/ui";

const DOMAINS = ["gmail.com", "yahoo.com", "outlook.com", "icloud.com", "hotmail.com"];

export function EmailInput({ onAnswer }: { onAnswer: (v: string) => void }) {
  const [v, setV] = useState("");
  const at = v.indexOf("@");
  const frag = at >= 0 ? v.slice(at + 1) : null;
  const suggestions = frag !== null && !DOMAINS.includes(frag) ? DOMAINS.filter((d) => d.startsWith(frag)).map((d) => v.slice(0, at + 1) + d) : [];
  const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
  return (
    <Bottom>
      <div className="px-4 pt-3">
        <input value={v} type="email" onChange={(e) => setV(e.target.value)} placeholder="you@email.com" className="w-full rounded-[16px] border border-[#ececf1] bg-white px-[18px] py-4 font-ui text-[15px] text-ink shadow-card outline-none transition-colors placeholder:text-ink-faint focus:border-accent" />
        {at >= 0 && suggestions.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-2">
            {suggestions.slice(0, 3).map((s) => <button key={s} type="button" onClick={() => setV(s)} className="rounded-full border border-[#ececf1] bg-white px-3.5 py-1.5 font-ui text-[13px] font-medium text-ink-soft shadow-card active:scale-95">{s}</button>)}
          </div>
        )}
      </div>
      <div className="px-4 pb-4 pt-3"><PrimaryButton disabled={!valid} onClick={() => onAnswer(v)}>Continue</PrimaryButton></div>
    </Bottom>
  );
}

export function OptIn({ q, onAnswer }: { q: Extract<Question, { kind: "optin" }>; onAnswer: (v: string) => void }) {
  return (
    <Bottom>
      <div className="flex flex-col gap-3 px-4 pb-4 pt-3">
        <PrimaryButton onClick={() => onAnswer(q.yes)}>{q.yes}</PrimaryButton>
        <button type="button" onClick={() => onAnswer(q.no)} className="h-[52px] w-full rounded-[16px] border border-[#ececf1] bg-white font-ui text-[14px] font-bold text-ink-soft shadow-card active:scale-[0.99]">{q.no}</button>
      </div>
    </Bottom>
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
      <div className="px-4 pb-4 pt-2"><PrimaryButton disabled={!sel.length} onClick={() => onAnswer(sel.join(", "))}>{q.cta ?? "Continue"}</PrimaryButton></div>
    </Bottom>
  );
}
