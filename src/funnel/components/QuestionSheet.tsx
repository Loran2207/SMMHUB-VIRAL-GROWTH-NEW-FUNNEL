import { useState } from "react";
import { cn } from "@/lib/cn";
import type { Question } from "@/funnel/flow/types";
import { Sheet, PrimaryButton, OptionRow } from "@/funnel/components/ui";
import { NicheGen } from "@/funnel/components/NicheGen";
import { Gender, AgeSelect, LanguageSelect, LocationYesNo } from "@/funnel/components/AudienceInputs";
import { EmailInput, OptIn, MultiSelect } from "@/funnel/components/ContactInputs";

export function QuestionSheet({ q, onAnswer }: { q: Question; onAnswer: (v: string) => void }) {
  switch (q.kind) {
    case "continue":
      return <Sheet><div className="p-4"><PrimaryButton onClick={() => onAnswer(q.label)}>{q.label}</PrimaryButton></div></Sheet>;
    case "yesno":
      return (
        <Sheet>
          <div className="flex gap-3 p-4">
            <YesNoBtn tone="good" glyph="✓" label="Yes" onClick={() => onAnswer("Yes")} />
            <YesNoBtn tone="bad" glyph="✕" label="No" onClick={() => onAnswer("No")} />
          </div>
        </Sheet>
      );
    case "single":
      return <SingleSelect q={q} onAnswer={onAnswer} />;
    case "nicheList":
      return <NicheList q={q} onAnswer={onAnswer} />;
    case "text":
      return <TextInput q={q} onAnswer={onAnswer} />;
    case "nicheGen":
      return <NicheGen onAnswer={onAnswer} />;
    case "gender":
      return <Gender q={q} onAnswer={onAnswer} />;
    case "age":
      return <AgeSelect onAnswer={onAnswer} />;
    case "language":
      return <LanguageSelect onAnswer={onAnswer} />;
    case "locYesNo":
      return <LocationYesNo q={q} onAnswer={onAnswer} />;
    case "email":
      return <EmailInput onAnswer={onAnswer} />;
    case "optin":
      return <OptIn q={q} onAnswer={onAnswer} />;
    case "multi":
      return <MultiSelect q={q} onAnswer={onAnswer} />;
    default:
      return <Sheet><div className="p-4"><PrimaryButton onClick={() => onAnswer("Continue")}>Continue</PrimaryButton></div></Sheet>;
  }
}

function YesNoBtn({ tone, glyph, label, onClick }: { tone: "good" | "bad"; glyph: string; label: string; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="flex h-[56px] flex-1 items-center justify-center gap-2 rounded-[16px] border border-line bg-surface font-ui text-[16px] font-bold text-ink active:scale-[0.99]">
      <span className={tone === "good" ? "text-good" : "text-bad"}>{glyph}</span> {label}
    </button>
  );
}

function SingleSelect({ q, onAnswer }: { q: Extract<Question, { kind: "single" }>; onAnswer: (v: string) => void }) {
  const [custom, setCustom] = useState("");
  const send = () => custom.trim() && onAnswer(custom.trim());
  return (
    <Sheet>
      {q.options.map((o) => <OptionRow key={o.label} label={o.label} on={false} onClick={() => onAnswer(o.label)} />)}
      {q.custom && (
        <div className="flex items-center gap-3 border-t border-line-soft px-4 py-3">
          <input value={custom} onChange={(e) => setCustom(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="Your answer..." className="flex-1 bg-transparent font-ui text-[15px] text-ink outline-none placeholder:text-ink-faint" />
          <button type="button" disabled={!custom.trim()} onClick={send} className={cn("font-ui text-[14px] font-bold", custom.trim() ? "text-accent" : "text-ink-faint")}>Send</button>
        </div>
      )}
    </Sheet>
  );
}

function NicheList({ q, onAnswer }: { q: Extract<Question, { kind: "nicheList" }>; onAnswer: (v: string) => void }) {
  const [sel, setSel] = useState<string | null>(null);
  const [custom, setCustom] = useState("");
  const val = custom.trim() || sel;
  return (
    <Sheet>
      <div className="max-h-[240px] overflow-y-auto">
        {q.options.map((o) => <OptionRow key={o.label} label={o.label} on={sel === o.label && !custom} onClick={() => { setSel(o.label); setCustom(""); }} />)}
      </div>
      {q.custom && (
        <div className="border-t border-line-soft px-4 py-3">
          <input value={custom} onChange={(e) => { setCustom(e.target.value); setSel(null); }} placeholder="Your answer..." className="w-full rounded-[8px] border border-line px-3 py-2.5 font-ui text-[15px] text-ink outline-none placeholder:text-ink-faint" />
        </div>
      )}
      <div className="p-4"><PrimaryButton disabled={!val} onClick={() => val && onAnswer(val)}>Confirm</PrimaryButton></div>
    </Sheet>
  );
}

function TextInput({ q, onAnswer }: { q: Extract<Question, { kind: "text" }>; onAnswer: (v: string) => void }) {
  const [v, setV] = useState("");
  return (
    <Sheet>
      <div className="border-t border-line-soft p-4">
        <textarea value={v} onChange={(e) => setV(e.target.value)} rows={3} placeholder={q.placeholder} className="min-h-[92px] w-full resize-none rounded-[8px] border border-line p-3 font-ui text-[15px] leading-relaxed text-ink outline-none placeholder:text-ink-faint" />
      </div>
      <div className="px-4 pb-4"><PrimaryButton disabled={!v.trim()} onClick={() => onAnswer(v.trim())}>{q.cta ?? "Next"}</PrimaryButton></div>
    </Sheet>
  );
}
