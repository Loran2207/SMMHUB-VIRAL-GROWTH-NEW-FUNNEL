import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Question } from "@/funnel/flow/types";
import { Sheet, Bottom, CardList, OptionCard, PrimaryButton } from "@/funnel/components/ui";

export function Gender({ q, onAnswer }: { q: Extract<Question, { kind: "gender" }>; onAnswer: (v: string) => void }) {
  return (
    <Bottom>
      <CardList>
        {q.options.map((o) => <OptionCard key={o.label} label={o.label} selected={false} control="none" onClick={() => onAnswer(o.label)} />)}
      </CardList>
      <div className="p-4">
        <button type="button" onClick={() => onAnswer("Skip")} className="h-[52px] w-full rounded-[16px] border-2 border-line bg-surface font-ui text-[15px] font-bold text-ink-soft active:scale-[0.99]">Skip</button>
      </div>
    </Bottom>
  );
}

const FROM = Array.from({ length: 53 }, (_, i) => String(13 + i));
const TO = [...Array.from({ length: 52 }, (_, i) => String(14 + i)), "65+"];

export function AgeSelect({ onAnswer }: { onAnswer: (v: string) => void }) {
  const [from, setFrom] = useState("18");
  const [to, setTo] = useState("65+");
  return (
    <Sheet>
      <div className="flex items-end gap-3 p-4">
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
        <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full appearance-none rounded-[12px] border-2 border-line bg-surface px-3 py-3 font-ui text-[15px] font-semibold text-ink outline-none">
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
    <Bottom>
      <CardList>
        {LANGS.map(([flag, name]) => (
          <OptionCard key={name} label={`${flag}  ${name}`} selected={false} control="none" onClick={() => onAnswer(name)} />
        ))}
      </CardList>
      <div className="h-4" />
    </Bottom>
  );
}

export function LocationYesNo({ q, onAnswer }: { q: Extract<Question, { kind: "locYesNo" }>; onAnswer: (v: string) => void }) {
  const [yes, setYes] = useState(false);
  const [text, setText] = useState("");
  if (yes) {
    return (
      <Sheet>
        <div className="p-4"><input value={text} autoFocus onChange={(e) => setText(e.target.value)} placeholder={q.placeholder} className="w-full rounded-[12px] border-2 border-line bg-surface px-4 py-3.5 font-ui text-[15px] text-ink outline-none placeholder:text-ink-faint" /></div>
        <div className="px-4 pb-4"><PrimaryButton disabled={!text.trim()} onClick={() => onAnswer(text.trim())}>Next</PrimaryButton></div>
      </Sheet>
    );
  }
  return (
    <Sheet>
      <div className="flex gap-3 p-4">
        <button type="button" onClick={() => onAnswer("No")} className="h-[56px] flex-1 rounded-[16px] border-2 border-line bg-surface font-ui text-[16px] font-bold text-ink active:scale-[0.99]">No</button>
        <button type="button" onClick={() => setYes(true)} className="h-[56px] flex-1 rounded-[16px] border-2 border-line bg-surface font-ui text-[16px] font-bold text-ink active:scale-[0.99]">Yes</button>
      </div>
    </Sheet>
  );
}
