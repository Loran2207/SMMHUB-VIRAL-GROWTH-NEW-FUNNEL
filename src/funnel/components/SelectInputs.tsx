import { useState } from "react";
import { cn } from "@/lib/cn";
import type { Question } from "@/funnel/flow/types";
import { Bottom, CardList, OptionCard } from "@/funnel/components/ui";

function AnswerField({ value, onChange, onSend, placeholder = "Type here..." }: { value: string; onChange: (v: string) => void; onSend: () => void; placeholder?: string }) {
  const active = !!value.trim();
  return (
    <div className="flex items-center rounded-[16px] border border-[#ececf1] bg-white px-[18px] py-[15px] shadow-card transition-colors focus-within:border-accent">
      <input value={value} onChange={(e) => onChange(e.target.value)} onKeyDown={(e) => e.key === "Enter" && onSend()} placeholder={placeholder} className="min-w-0 flex-1 bg-transparent font-ui text-[15px] font-medium text-ink outline-none placeholder:text-ink-faint" />
      <button
        type="button"
        disabled={!active}
        onClick={onSend}
        className={cn(
          "ml-3 flex shrink-0 items-center font-ui text-[14px] transition-all",
          active ? "font-bold text-accent active:scale-95" : "cursor-default font-semibold text-ink-faint",
        )}
      >
        Send
        {active && (
          <svg className="ml-1" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 12h15" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        )}
      </button>
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
        {q.custom && <AnswerField value={custom} onChange={setCustom} onSend={send} placeholder="Type here..." />}
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
        {q.custom && <AnswerField value={custom} onChange={setCustom} onSend={send} placeholder="Type here..." />}
      </CardList>
      <div className="h-4" />
    </Bottom>
  );
}
