import { useState } from "react";
import { cn } from "@/lib/cn";
import type { Question } from "@/funnel/flow/types";
import { Bottom, CardList, OptionCard } from "@/funnel/components/ui";

function AnswerField({ value, onChange, onSend }: { value: string; onChange: (v: string) => void; onSend: () => void }) {
  return (
    <div className="flex items-center gap-2 rounded-[16px] border border-[#ececf1] bg-white px-[18px] py-[15px] shadow-card transition-colors focus-within:border-accent">
      <input value={value} onChange={(e) => onChange(e.target.value)} onKeyDown={(e) => e.key === "Enter" && onSend()} placeholder="Your answer..." className="flex-1 bg-transparent font-ui text-[15px] font-medium text-ink outline-none placeholder:text-ink-faint" />
      <button type="button" disabled={!value.trim()} onClick={onSend} className={cn("font-ui text-[14px] font-bold", value.trim() ? "text-accent" : "text-ink-faint")}>Send</button>
    </div>
  );
}

export function SingleSelect({ q, onAnswer }: { q: Extract<Question, { kind: "single" }>; onAnswer: (v: string) => void }) {
  const [custom, setCustom] = useState("");
  const send = () => custom.trim() && onAnswer(custom.trim());
  return (
    <Bottom>
      <CardList>
        {q.options.map((o) => <OptionCard key={o.label} label={o.label} emoji={o.emoji} selected={false} control="none" onClick={() => onAnswer(o.label)} />)}
        {q.custom && <AnswerField value={custom} onChange={setCustom} onSend={send} />}
      </CardList>
      <div className="h-4" />
    </Bottom>
  );
}

/** niche-list is single-select: tap an option to advance. The custom row submits inline (Send / Enter). */
export function NicheList({ q, onAnswer }: { q: Extract<Question, { kind: "nicheList" }>; onAnswer: (v: string) => void }) {
  const [custom, setCustom] = useState("");
  const send = () => custom.trim() && onAnswer(custom.trim());
  return (
    <Bottom>
      <CardList>
        {q.options.map((o) => <OptionCard key={o.label} label={o.label} emoji={o.emoji} selected={false} control="none" onClick={() => onAnswer(o.label)} />)}
        {q.custom && <AnswerField value={custom} onChange={setCustom} onSend={send} />}
      </CardList>
      <div className="h-4" />
    </Bottom>
  );
}
