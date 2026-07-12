import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Question } from "@/funnel/flow/types";
import { Sheet, PrimaryButton, OptionRow } from "@/funnel/components/ui";

export function Gender({ q, onAnswer }: { q: Extract<Question, { kind: "gender" }>; onAnswer: (v: string) => void }) {
  return (
    <Sheet>
      {q.options.map((o) => <OptionRow key={o.label} label={o.label} on={false} onClick={() => onAnswer(o.label)} />)}
      <div className="p-4">
        <button type="button" onClick={() => onAnswer("Skip")} className="h-[52px] w-full rounded-[16px] border border-line bg-surface font-ui text-[15px] font-bold text-ink-soft active:scale-[0.99]">
          Skip
        </button>
      </div>
    </Sheet>
  );
}

const FROM = Array.from({ length: 53 }, (_, i) => String(13 + i));
const TO = [...Array.from({ length: 52 }, (_, i) => String(14 + i)), "65+"];

export function AgeSelect({ onAnswer }: { onAnswer: (v: string) => void }) {
  const [from, setFrom] = useState("18");
  const [to, setTo] = useState("65+");
  return (
    <Sheet>
      <div className="flex items-end gap-3 border-t border-line-soft p-4">
        <Dropdown label="From" value={from} options={FROM} onChange={setFrom} />
        <span className="pb-3 font-ui text-ink-faint">-</span>
        <Dropdown label="To" value={to} options={TO} onChange={setTo} />
      </div>
      <div className="px-4 pb-4"><PrimaryButton onClick={() => onAnswer(`${from}-${to}`)}>Next</PrimaryButton></div>
    </Sheet>
  );
}

function Dropdown({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (v: string) => void }) {
  return (
    <label className="flex-1">
      <span className="mb-1.5 block font-ui text-[12px] font-semibold text-ink-soft">{label}</span>
      <div className="relative">
        <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full appearance-none rounded-[10px] border border-line bg-surface px-3 py-3 font-ui text-[15px] font-medium text-ink outline-none">
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft" />
      </div>
    </label>
  );
}

const LANGS: [string, string][] = [
  ["🇬🇧", "English"], ["🇪🇸", "Spanish"], ["🇩🇪", "German"], ["🇫🇷", "French"],
  ["🇵🇹", "Portuguese"], ["🇮🇹", "Italian"], ["🇵🇱", "Polish"], ["🇸🇦", "Arabic"],
];

export function LanguageSelect({ onAnswer }: { onAnswer: (v: string) => void }) {
  return (
    <Sheet>
      <div className="max-h-[320px] overflow-y-auto">
        {LANGS.map(([flag, name]) => (
          <button key={name} type="button" onClick={() => onAnswer(name)} className="flex w-full items-center gap-3 border-t border-line-soft px-4 py-[15px] text-left">
            <span className="text-[20px] leading-none">{flag}</span>
            <span className="flex-1 font-ui text-[15px] font-medium text-ink">{name}</span>
          </button>
        ))}
      </div>
    </Sheet>
  );
}

export function LocationYesNo({ q, onAnswer }: { q: Extract<Question, { kind: "locYesNo" }>; onAnswer: (v: string) => void }) {
  const [yes, setYes] = useState(false);
  const [text, setText] = useState("");
  if (yes) {
    return (
      <Sheet>
        <div className="border-t border-line-soft p-4">
          <input value={text} autoFocus onChange={(e) => setText(e.target.value)} placeholder={q.placeholder} className="w-full rounded-[8px] border border-line px-3 py-3 font-ui text-[15px] text-ink outline-none placeholder:text-ink-faint" />
        </div>
        <div className="px-4 pb-4"><PrimaryButton disabled={!text.trim()} onClick={() => onAnswer(text.trim())}>Next</PrimaryButton></div>
      </Sheet>
    );
  }
  return (
    <Sheet>
      <div className="flex gap-3 p-4">
        <button type="button" onClick={() => onAnswer("No")} className="h-[56px] flex-1 rounded-[16px] border border-line bg-surface font-ui text-[16px] font-bold text-ink active:scale-[0.99]">No</button>
        <button type="button" onClick={() => setYes(true)} className="h-[56px] flex-1 rounded-[16px] border border-line bg-surface font-ui text-[16px] font-bold text-ink active:scale-[0.99]">Yes</button>
      </div>
    </Sheet>
  );
}
