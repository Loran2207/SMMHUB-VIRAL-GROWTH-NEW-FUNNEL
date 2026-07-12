import { useState } from "react";
import { cn } from "@/lib/cn";
import type { Question } from "@/funnel/flow/types";
import { Bottom, CardList, OptionCard, PrimaryButton } from "@/funnel/components/ui";

export function SingleSelect({ q, onAnswer }: { q: Extract<Question, { kind: "single" }>; onAnswer: (v: string) => void }) {
  const [custom, setCustom] = useState("");
  const send = () => custom.trim() && onAnswer(custom.trim());
  return (
    <Bottom>
      <CardList>
        {q.options.map((o) => <OptionCard key={o.label} label={o.label} selected={false} control="none" onClick={() => onAnswer(o.label)} />)}
        {q.custom && (
          <div className="flex items-center gap-2 rounded-[14px] border-2 border-line bg-surface px-4 py-[13px]">
            <input value={custom} onChange={(e) => setCustom(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="Your answer..." className="flex-1 bg-transparent font-ui text-[15px] font-medium text-ink outline-none placeholder:text-ink-faint" />
            <button type="button" disabled={!custom.trim()} onClick={send} className={cn("font-ui text-[14px] font-bold", custom.trim() ? "text-accent" : "text-ink-faint")}>Send</button>
          </div>
        )}
      </CardList>
      <div className="h-4" />
    </Bottom>
  );
}

export function NicheList({ q, onAnswer }: { q: Extract<Question, { kind: "nicheList" }>; onAnswer: (v: string) => void }) {
  const [sel, setSel] = useState<string | null>(null);
  const [custom, setCustom] = useState("");
  const val = custom.trim() || sel;
  return (
    <Bottom>
      <CardList>
        {q.options.map((o) => <OptionCard key={o.label} label={o.label} selected={sel === o.label && !custom} onClick={() => { setSel(o.label); setCustom(""); }} />)}
        {q.custom && (
          <input value={custom} onChange={(e) => { setCustom(e.target.value); setSel(null); }} placeholder="Your answer..." className="w-full rounded-[14px] border-2 border-line bg-surface px-4 py-3.5 font-ui text-[15px] font-medium text-ink outline-none placeholder:text-ink-faint" />
        )}
      </CardList>
      <div className="p-4"><PrimaryButton disabled={!val} onClick={() => val && onAnswer(val)}>Confirm</PrimaryButton></div>
    </Bottom>
  );
}
